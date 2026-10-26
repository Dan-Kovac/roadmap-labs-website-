import { expect, test } from "@playwright/test";

test("home renders the draft 4.3 hero and price line", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en-AU");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Finally make it work.");
  await expect(page.locator(".hero")).not.toContainText("A$3,500");
  await expect(page.getByText("A$3,500 a month, no GST. AI model costs included. No contract.")).toBeVisible();
  await expect(page.getByText("incl. GST")).toHaveCount(0);
  await expect(page.getByText("Compass OS")).toHaveCount(0);
  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", "https://roadmaplabs.com.au");
});

test("services keeps seven questions and the in-house comparison", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("One monthly fee.");
  await expect(page.locator(".faq details")).toHaveCount(7);
  await expect(page.getByText("Is Google Ads spend included?")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Why not just get your team to do it?" })).toBeVisible();
  await expect(page.locator('a[href="#how-it-works"]')).toBeVisible();
  await expect(page.locator("#how-it-works")).toBeVisible();
  await expect(page.locator('a[href="/insights/fractional-cmo-vs-agency"]')).toHaveCount(0);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://roadmaplabs.com.au/services");
});

test("marketing page uses the marketing copy", async ({ page }) => {
  await page.goto("/services/marketing");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Kept running for you.");
  await expect(page.getByRole("heading", { name: "Web design for Melbourne small businesses." })).toBeVisible();
  await expect(page.getByText("Is Google Ads spend included?")).toBeVisible();
});

test("an insight is self-canonical", async ({ page }) => {
  await page.goto("/insights/ai-for-small-business");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://roadmaplabs.com.au/insights/ai-for-small-business",
  );
  const href = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(href ?? "").not.toContain("substack");
});

test("home comparison sits after how it works and links to services", async ({ page }) => {
  await page.goto("/");
  const labels = (await page.locator(".section-label").allTextContents()).map((label) => label.replace(/\s+/g, " ").trim());
  expect(labels).toEqual([
    "01 · Properly",
    "02 · Put to work",
    "03 · How it works",
    "04 · In-house or us",
    "05 · The fee",
    "06 · Dan Kovac",
    "07 · Start",
  ]);
  await expect(page.getByText("Then Dan writes it up.")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "See how we work →" })).toHaveAttribute("href", "/services");
  await expect(page.getByText("Client project", { exact: true })).toBeVisible();
  await expect(page.getByText("Compass OS")).toHaveCount(0);
  await expect(page.getByText("Retool")).toHaveCount(0);
  await expect(page.getByText("internal platform")).toHaveCount(0);
  await expect(page.locator('img[alt="Admin and sales automation"]')).toBeVisible();
  await expect(page.locator("#dan img[alt=\"Compass Buyers Agency home\"]")).toBeVisible();
});

test("about states the problem and ten years in digital marketing", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByText("Dan did ten years in digital marketing.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Why AI isn't working for most businesses yet." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "No time to work it out" })).toBeVisible();
});

test("work lists the three projects and the compass study stays a website", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Compass Buyers Agency" })).toBeVisible();
  await expect(page.getByText("A website project for a buyers agency from Byron Bay to the Gold Coast.")).toBeVisible();
  await expect(page.getByText("Australian tradies")).toBeVisible();
  await expect(page.getByText("product managers")).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency home"]')).toBeVisible();
  await page.goto("/projects/compass-buyers-agency");
  await expect(page.getByRole("link", { name: "Visit the site" })).toHaveAttribute("href", "https://compassagency.com.au");
  await expect(page.getByRole("link", { name: "Visit the site" })).toHaveAttribute("rel", /noopener/);
  await expect(page.locator('img[alt="Compass Buyers Agency home, desktop"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency home, mobile"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency Byron Bay page"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency contact page"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency about page"]')).toBeVisible();
  const aboutPhone = page.locator("figure.phone-figure", { hasText: "About page, the team" });
  await expect(aboutPhone.locator("figcaption")).toBeVisible();
  const aboutBox = await aboutPhone.boundingBox();
  expect(aboutBox?.width ?? 0).toBeLessThan(280);
  await expect(page.getByText("[[result, with Compass's OK. Leave out until real]]")).toBeVisible();
  await expect(page.getByText("[[quote, with written OK. Leave out until real]]")).toBeVisible();
  await expect(page.getByText("Nick")).toHaveCount(0);
  await expect(page.locator("main").getByText("Google Ads")).toHaveCount(0);
  await expect(page.getByText("Retool")).toHaveCount(0);
  await expect(page.getByText("internal platform")).toHaveCount(0);
});

test("reviewbuddy shows the widget and does not link the dead site", async ({ page }) => {
  await page.goto("/projects/review-buddy");
  await expect(page.getByText("Australian tradies").first()).toBeVisible();
  await expect(page.locator('img[alt="ReviewBuddy review widget"]')).toBeVisible();
  await expect(page.locator('a[href*="reviewbuddy.com.au"]')).toHaveCount(0);
});

test("insights lists both launch articles", async ({ page }) => {
  await page.goto("/insights");
  await expect(page.getByRole("link", { name: "AI for small business: where to actually start" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Fractional CMO, agency or in-house: what it costs" })).toBeVisible();
  await page.goto("/insights/category/writing-for-people");
  await expect(page.getByRole("link", { name: "Fractional CMO, agency or in-house: what it costs" })).toBeVisible();
});

test("work screenshots are not caught by the /work redirect", async ({ request }) => {
  const compass = await request.get("/work/compass/home-desktop.webp", { maxRedirects: 0 });
  expect(compass.status()).toBe(200);
  expect(compass.headers()["content-type"] ?? "").toContain("image/webp");
  const image = await request.get("/work/reviewbuddy-widget.jpg", { maxRedirects: 0 });
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"] ?? "").toContain("image/jpeg");
  const index = await request.get("/work", { maxRedirects: 0 });
  expect(index.status()).toBe(308);
  expect(index.headers().location ?? "").toContain("/projects");
});

test("old compass slugs redirect", async ({ request }) => {
  for (const path of ["/projects/compass-os", "/projects/compass-website"]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location ?? "").toContain("/projects/compass-buyers-agency");
  }
});
