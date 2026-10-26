import { expect, test, type Locator, type Page } from "@playwright/test";

const success = "Thanks. I'll get back to you within one business day.";

test("enquiry form posts to Formspree at 390 and 1440", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "1440", "covers 390 and 1440 in one pass");

  let mode: "error" | "ok" = "error";
  await page.route("https://formspree.io/**", async (route) => {
    const request = route.request();
    expect(request.method()).toBe("POST");
    expect(request.headers().accept ?? "").toContain("application/json");
    const body = request.postDataJSON() as Record<string, string>;
    expect(body._subject).toBe("New Roadmap Labs enquiry");
    expect(body._gotcha ?? "").toBe("");
    expect(body.email).toContain("@");

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
    mode = "error";
    await page.goto("/contact");
    const cookie = page.getByRole("button", { name: "OK" });
    if (await cookie.isVisible()) {
      await cookie.click();
    }
    await expect(page.getByRole("button", { name: "Send enquiry" })).toBeVisible();
    await fill(page);
    await page.getByRole("button", { name: "Send enquiry" }).click();
    await expect(page.getByRole("status")).toContainText("That didn't send.");
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByLabel("Name")).toHaveValue("Alex Nguyen");

    mode = "ok";
    await page.getByRole("button", { name: "Send enquiry" }).click();
    await expect(page.getByRole("status")).toHaveText(success);
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("button", { name: "Send enquiry" })).toHaveCount(0);

    await page.goto("/");
    await expect(page.locator(".desk-cta")).toHaveAttribute("href", "#start");
    await expect(page.locator("#start form")).toBeVisible();
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
