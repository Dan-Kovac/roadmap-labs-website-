import { expect, test, type Page } from "@playwright/test";

const widths = [375, 390, 414, 768, 1280];

async function overflow(page: Page) {
  return page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - root.clientWidth;
  });
}

async function quietConsole(page: Page) {
  const errors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });

  return errors;
}

test.describe("visitor journey", () => {
  test("home, services, work, articles and contact", async ({ page }, testInfo) => {
    const errors = await quietConsole(page);
    const isMobile = testInfo.project.name === "mobile";

    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Building the right software is still just as hard.",
    );
    await expect(page.getByText("Three offers")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Own products" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Operating systems" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Automations and AI" })).toBeVisible();
    expect(await overflow(page)).toBeLessThanOrEqual(1);

    if (isMobile) {
      await page.getByRole("button", { name: "Menu" }).click();
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Services" }).click();
    } else {
      await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Services" }).click();
    }

    await expect(page).toHaveURL(/\/services$/);
    await expect(page.getByRole("heading", { name: "Own products" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Websites, SEO and conversion" })).toBeVisible();
    await expect(page.getByText("Anchor · Iterate · live board · you own the IP.")).toBeVisible();

    await page.goto("/projects");
    await expect(page.getByRole("heading", { name: "ReviewBuddy" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Flexfolio" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Compass OS" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Compass Website" })).toBeVisible();

    await page.getByRole("link", { name: "ReviewBuddy" }).first().click();
    await expect(page).toHaveURL(/\/projects\/review-buddy$/);
    await expect(page.getByText("A$49 a month")).toBeVisible();
    await expect(page.getByText("A$75 a month")).toBeVisible();
    await expect(page.getByText("[RESULT TBC]")).toBeVisible();
    await expect(page.getByText("[TESTIMONIAL TBC]")).toBeVisible();
    await expect(page.getByText("[SCREENSHOT TBC]").first()).toBeVisible();

    await page.goto("/projects/flexfolio");
    await expect(page.getByRole("img", { name: /Flexfolio homepage/ })).toBeVisible();
    await expect(page.getByText("[RESULT TBC]")).toBeVisible();

    await page.goto("/projects/compass-website");
    await expect(page.getByRole("img", { name: /Compass Buyers Agency homepage/ })).toBeVisible();
    await expect(page.getByText("conversion rate optimisation")).toBeVisible();
    await expect(page.getByText("[RESULT TBC]")).toBeVisible();
    await expect(page.getByText("76%")).toHaveCount(0);

    await page.goto("/projects/compass-os");
    await expect(page.getByText("built in Retool")).toBeVisible();
    await expect(page.getByText("Private app")).toBeVisible();

    await page.goto("/insights");
    await page.getByRole("link", { name: /Software that respects the time/ }).click();
    await expect(page.getByText("[SUBSTACK URL TBC]")).toBeVisible();
    await page.getByRole("link", { name: "Back to Insights" }).click();
    await page.getByRole("link", { name: /The right software is the smaller brief/ }).click();
    await expect(page.getByText("Dan Kovac Builds")).toBeVisible();

    await page.goto("/about");
    await expect(page.getByRole("heading", { name: /Dan Kovac/ })).toBeVisible();
    await expect(page.getByText("[PHOTO TBC]")).toBeVisible();
    await expect(page.getByText("[BIO TBC]")).toBeVisible();

    await page.goto("/");
    await page.getByRole("link", { name: "Book a call" }).first().click();
    await expect(page).toHaveURL(/\/contact\?intent=call/);
    await expect(page.locator("#intent")).toHaveValue("Book a call");
    await expect(page.getByText("[BOOKING LINK TBC]")).toBeVisible();

    await page.locator("#name").fill("Avery Chen");
    await page.locator("#email").fill("avery@example.com");
    await page.locator("#organisation").fill("Northwind");
    await page.locator("#message").fill("We need a quieter way to run the weekly board.");
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByRole("heading", { name: "Not sent" })).toBeVisible();
    await expect(page.getByText("Nothing was stored")).toBeVisible();
    const mailto = page.getByRole("link", { name: "Email this note to Dan" });
    await expect(mailto).toHaveAttribute("href", /mailto:dan@roadmaplabs\.com\.au/);

    expect(errors, errors.join("\n")).toEqual([]);
  });

  test("internal links resolve and the page does not scroll sideways", async ({ page }) => {
    const errors = await quietConsole(page);
    await page.goto("/");

    const hrefs = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("a[href]"));
      return links
        .map((link) => link.getAttribute("href") || "")
        .filter((href) => href.startsWith("/") && !href.startsWith("//"));
    });

    const paths = Array.from(new Set(hrefs.map((href) => href.split("#")[0] || "/")));

    for (const path of paths) {
      const response = await page.request.get(path);
      expect(response.status(), path).toBeLessThan(400);
    }

    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      for (const path of ["/", "/services", "/projects", "/projects/flexfolio", "/insights", "/contact"]) {
        await page.goto(path);
        expect(await overflow(page), `${path} at ${width}px`).toBeLessThanOrEqual(1);
      }
    }

    const response = await page.request.get("/not-a-real-page");
    expect(response.status()).toBe(404);

    expect(errors, errors.join("\n")).toEqual([]);
  });
});
