import { expect, test, type Locator, type Page } from "@playwright/test";

const success = "Thanks. I'll get back to you within one business day.";

test("enquiry form posts to Formspree at 390 and 1440", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "1440", "covers 390 and 1440 in one pass");

  let mode: "fields" | "error" | "ok" = "fields";
  await page.route("https://formspree.io/**", async (route) => {
    const request = route.request();
    const url = request.url();

    try {
      expect(request.method()).toBe("POST");
      expect(url).toMatch(/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/);
      expect(url, "tests must not post to the live form").not.toContain("xdeeekqw");
      expect(request.headers().accept ?? "").toContain("application/json");
      const body = request.postDataJSON() as Record<string, string>;
      expect(body._subject).toBe("New Roadmap Labs enquiry");
      expect(body._gotcha ?? "").toBe("");
      expect(body.email).toContain("@");
      expect(body).toMatchObject({
        name: "Alex Nguyen",
        company: "Northwind",
        website: "northwind.com.au",
        message: "Follow-ups are falling through.",
      });
    } catch (error) {
      await route.abort();
      throw error;
    }

    if (mode === "fields") {
      await route.fulfill({
        status: 422,
        contentType: "application/json",
        body: JSON.stringify({
          error: "Validation errors",
          errors: [{ field: "email", message: "must be a valid email" }],
        }),
      });
      return;
    }

    if (mode === "error") {
      await route.fulfill({
        status: 422,
        contentType: "application/json",
        body: JSON.stringify({ error: "Could not send" }),
      });
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });

  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    mode = "fields";
    await page.goto("/contact");
    const cookie = page.getByRole("button", { name: "OK" });
    if (await cookie.isVisible()) {
      await cookie.click();
    }
    await expect(page.getByRole("button", { name: "Send enquiry" })).toBeVisible();
    await expect(page.locator(".form-email")).toContainText("or email");
    await expect(page.locator(".form-email a")).toHaveAttribute("href", "mailto:dan@roadmaplabs.com.au");
    await expect(page.getByText("The form isn't connected yet")).toHaveCount(0);
    await fill(page);
    await page.getByRole("button", { name: "Send enquiry" }).click();
    await expect(page.getByRole("status")).toContainText("Validation errors");
    await expect(page.locator("#contact-form-email-error")).toHaveText("must be a valid email");
    await expect(page.getByLabel("Email")).toHaveAttribute("aria-invalid", "true");
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByLabel("Name")).toHaveValue("Alex Nguyen");

    mode = "error";
    await page.getByRole("button", { name: "Send enquiry" }).click();
    await expect(page.getByRole("status")).toContainText("That didn't send.");
    await expect(page.locator("#contact-form-email-error")).toHaveCount(0);

    mode = "ok";
    await page.getByRole("button", { name: "Send enquiry" }).click();
    await expect(page.getByRole("status")).toHaveText(success);
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("button", { name: "Send enquiry" })).toHaveCount(0);

    await page.goto("/");
    await expect(page.locator(".desk-cta")).toHaveAttribute("href", "#start");
    await expect(page.locator("#start form")).toBeVisible();
    await expect(page.locator("#start .form-email a")).toHaveAttribute("href", "mailto:dan@roadmaplabs.com.au");
    mode = "ok";
    await fill(page.locator("#start"));
    await page.locator("#start").getByRole("button", { name: "Send enquiry" }).click();
    await expect(page.locator("#start").getByRole("status")).toHaveText(success);
    await expect(page).toHaveURL(/\/$/);
  }
});

async function fill(scope: Page | Locator) {
  await scope.getByLabel("Name").fill("Alex Nguyen");
  await scope.getByLabel("Email").fill("alex@example.com.au");
  await scope.getByLabel("Company, optional").fill("Northwind");
  await scope.getByLabel("Website, optional").fill("northwind.com.au");
  await scope.getByLabel("What do you want help with?").fill("Follow-ups are falling through.");
}
