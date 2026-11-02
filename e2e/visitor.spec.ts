import { expect, test } from "@playwright/test";

test("home renders the planning-page hero and the client-paid fee", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en-AU");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Make AI do real work in your business");
  await expect(page.locator(".hero")).not.toContainText("A$3,500");
  await expect(page.locator("#fee")).toContainText("A$3,500");
  await expect(page.locator("#fee")).toContainText("a month, no GST");
  await expect(page.locator("#fee")).toContainText("No contract. That's about A$808 a week.");
  await expect(page.getByText("hand it your repetitive admin one job at a time.")).toBeVisible();
  await expect(page.getByText("AI model costs included")).toHaveCount(0);
  await expect(page.getByText("incl. GST")).toHaveCount(0);
  await expect(page.getByText("Nick Saraev")).toHaveCount(0);
  await expect(page.getByText("price cap", { exact: false })).toHaveCount(0);
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

test("home follows the three-step plan and books the call", async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === "375";
  if (mobile) {
    await page.setViewportSize({ width: 390, height: 844 });
  }
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Three steps, in this order" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Get your data ready" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Set it up in your own account" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Automate one job at a time" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "We start where the money gets stuck" })).toBeVisible();
  await expect(page.getByText("How many people come across your business each week?")).toBeVisible();
  await expect(page.getByText("repetitive work that's slowing the business down most")).toBeVisible();
  await expect(page.getByRole("heading", { name: "We use this on ourselves every day" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Find the first job to take off your team's plate" })).toBeVisible();
  await expect(page.locator(".work .wcard")).toHaveCount(3);
  await expect(page.locator("a[href='/projects/compass-buyers-agency']")).toHaveCount(1);
  await expect(page.locator("a[href='/projects/review-buddy']")).toHaveCount(1);
  await expect(page.locator("a[href='/projects/flexfolio']")).toHaveCount(1);
  const compass = page.locator(".wcard", { has: page.getByRole("heading", { name: "Compass Buyers Agency" }) });
  await expect(compass).toContainText("A website we built for Compass Buyers Agency");
  await expect(compass).not.toContainText("CLIENT");
  await expect(page.locator("#book-placeholder a.btn")).toHaveAttribute("href", "#book-placeholder");
  const header = page.locator(".site-header");
  expect(await header.locator("a[href='/#how-it-works']").count()).toBeGreaterThan(0);
  expect(await header.locator("a[href='/#fee']").count()).toBeGreaterThan(0);
  await expect(header.locator("a", { hasText: /^Insights$/ })).toHaveCount(0);
  await expect(page.getByText("RACE")).toHaveCount(0);
  const columns = await page.locator(".work").evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
  if (testInfo.project.name === "1440") {
    expect(columns).toBe(3);
  }
  if (mobile || Number(testInfo.project.name) <= 700) {
    expect(columns).toBe(1);
    const toggle = page.locator(".menu-toggle");
    const color = await toggle.evaluate((el) => getComputedStyle(el).color);
    expect(color).toBe("rgb(11, 13, 18)");
    expect(color).not.toMatch(/0,\s*122,\s*255|0,\s*0,\s*255/);
    await toggle.click();
    await expect(page.getByRole("dialog", { name: "Menu" })).toBeVisible();
    await expect(page.locator(".menu-cta")).toHaveText("Book a call");
  }
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(scrollWidth).toBeLessThanOrEqual((page.viewportSize()?.width ?? scrollWidth) + 1);
  await page.waitForFunction(() =>
    [...document.querySelectorAll<HTMLImageElement>("img.logo")].every((img) => img.naturalWidth > 0),
  );
  const logos = await page.locator("img.logo").evaluateAll((imgs) =>
    imgs.map((node) => {
      const img = node as HTMLImageElement;
      return {
        alt: img.alt,
        rendered: img.getBoundingClientRect().width,
        natural: img.naturalWidth,
      };
    }),
  );
  expect(logos.length).toBeGreaterThan(0);
  for (const logo of logos) {
    if (logo.rendered < 1) continue;
    expect(logo.natural, logo.alt).toBeGreaterThanOrEqual(logo.rendered * 2);
  }
});

test("about states the problem and ten years in digital marketing", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByText("Dan did ten years in digital marketing.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Why AI isn't working for most businesses yet." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "No time to work it out" })).toBeVisible();
  const portrait = page.getByRole("img", { name: "Dan Kovac, founder of Roadmap Labs" });
  await expect(portrait).toBeVisible();
  const box = await portrait.boundingBox();
  expect(box?.width ?? 0).toBeGreaterThan(160);
  expect((box?.width ?? 0) / (box?.height ?? 1)).toBeCloseTo(0.8, 1);
  await expect(page.getByRole("heading", { name: "Get a clear AI plan, free" })).toBeVisible();
  await expect(page.locator("#book-placeholder a")).toHaveAttribute("href", "#book-placeholder");
  await expect(page.getByText("AI automation, software and marketing")).toBeVisible();
  await expect(page.getByText("[PHOTO TBC]")).toHaveCount(0);
});

test("work lists the three projects and the compass study stays a website", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Compass Buyers Agency" })).toBeVisible();
  await expect(page.getByText("A buyers agency from Byron Bay to the Gold Coast. We built their website.")).toBeVisible();
  await expect(page.getByText("Website · SEO · Conversion")).toBeVisible();
  await expect(page.getByText("Own company · In beta")).toHaveCount(2);
  await expect(page.locator(".work-row").getByText("AI automation")).toHaveCount(0);
  await expect(page.getByText("Australian tradies")).toBeVisible();
  await expect(page.getByText("product managers")).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency home"]')).toBeVisible();
  await page.goto("/projects/compass-buyers-agency");
  await expect(page.getByRole("link", { name: "Visit the site" })).toHaveCount(0);
  const live = page.getByRole("link", { name: /compassagency\.com\.au/ });
  await expect(live).toHaveAttribute("href", "https://compassagency.com.au");
  await expect(live).not.toHaveClass(/rl-btn/);
  await expect(page.locator("#book-placeholder").getByRole("link", { name: "Book a free 30-minute call" })).toHaveAttribute("href", "#book-placeholder");
  await expect(page.getByRole("heading", { name: "The result" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "What's next" })).toHaveCount(0);
  await expect(page.getByText("Home page on desktop, with the free consultation and call buttons.")).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency home, desktop"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency home, mobile"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency Byron Bay page"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency contact page"]')).toBeVisible();
  await expect(page.locator('img[alt="Compass Buyers Agency about page"]')).toBeVisible();
  const aboutPhone = page.locator("figure.phone-figure", { hasText: "About page on a phone" });
  await expect(aboutPhone.locator("figcaption")).toBeVisible();
  const aboutBox = await aboutPhone.boundingBox();
  expect(aboutBox?.width ?? 0).toBeLessThan(280);
  await expect(page.getByText("[[")).toHaveCount(0);
  await expect(page.getByText("[TBC]")).toHaveCount(0);
  await expect(page.getByText("Nick")).toHaveCount(0);
  await expect(page.locator("main").getByText("Google Ads")).toHaveCount(0);
  await expect(page.getByText("Retool")).toHaveCount(0);
  await expect(page.getByText("internal platform")).toHaveCount(0);
});

test("reviewbuddy links to the live site as a fact, not a button", async ({ page }, testInfo) => {
  if (testInfo.project.name === "375") {
    await page.setViewportSize({ width: 390, height: 844 });
  }

  await page.goto("/projects/review-buddy");
  await expect(page.getByText("Australian tradies").first()).toBeVisible();
  await expect(page.locator('img[alt="ReviewBuddy review widget"]')).toBeVisible();
  const live = page.getByRole("link", { name: /reviewbuddy\.com\.au/ });
  await expect(live).toBeVisible();
  await expect(live).toHaveAttribute("href", "https://reviewbuddy.com.au");
  await expect(live).toHaveAttribute("rel", "noopener");
  await expect(live).not.toHaveAttribute("target", /_blank/);
  await expect(live).not.toHaveClass(/rl-btn/);
  await expect(page.locator("#book-placeholder").getByRole("link", { name: "Book a free 30-minute call" })).toHaveAttribute("href", "#book-placeholder");
  await expect(page.getByText("After the job, the tradie shares their review link or QR code.")).toBeVisible();
  await expect(page.getByText("runs on the same AI automations")).toHaveCount(0);
  await expect(page.getByText("In beta", { exact: true })).toBeVisible();

  await page.goto("/projects");
  const card = page.locator("article", { has: page.getByRole("heading", { name: "ReviewBuddy", exact: true }) });
  const cardLive = card.getByRole("link", { name: /reviewbuddy\.com\.au/ });
  await expect(cardLive).toBeVisible();
  await expect(cardLive).toHaveAttribute("href", "https://reviewbuddy.com.au");
  await expect(cardLive).toHaveAttribute("rel", "noopener");
  await expect(cardLive).not.toHaveAttribute("target", /_blank/);
  await expect(cardLive).not.toHaveClass(/rl-btn/);
});

test("public pages hide placeholder brackets", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "1440", "one pass is enough");
  const paths = [
    "/",
    "/services",
    "/services/marketing",
    "/services/automations",
    "/services/software",
    "/about",
    "/contact",
    "/projects",
    "/projects/compass-buyers-agency",
    "/projects/review-buddy",
    "/projects/flexfolio",
    "/privacy",
  ];

  for (const path of paths) {
    await page.goto(path);
    const text = await page.locator("body").innerText();
    expect(text, path).not.toContain("[TBC]");
    expect(text, path).not.toContain("[DECISION]");
    expect(text, path).not.toContain("[[");
  }
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
