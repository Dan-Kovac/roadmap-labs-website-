import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getInsights, getLiveInsights, homeInsightsVisible } from "@/lib/content";
import { comparison, faq, offer } from "@/lib/copy";
import { articleCanonical, absoluteCanonical } from "@/lib/metadata";
import { partnerPlan, websiteOffer, offers } from "@/lib/offers";
import { permanentRedirects } from "@/lib/redirects";
import { articles, seo, seoIssues } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { priceLine } from "@/lib/text";
import { assertProductionClean } from "@/lib/surface";

describe("article canonicals", () => {
  it("points every insight at its own roadmaplabs.com.au URL", () => {
    const insights = getInsights();

    expect(insights.length).toBeGreaterThan(0);

    for (const article of insights) {
      expect(articleCanonical(article.slug)).toBe(`${siteUrl}/insights/${article.slug}`);
      expect(articleCanonical(article.slug)).not.toContain("substack");
    }
  });

  it("does not read a Substack canonical from frontmatter", () => {
    const folder = path.join(process.cwd(), "content/insights");
    const files = fs.readdirSync(folder).filter((file) => file.endsWith(".mdx"));

    for (const file of files) {
      const raw = fs.readFileSync(path.join(folder, file), "utf8");
      expect(raw).not.toMatch(/^canonical:/m);
      expect(raw).not.toMatch(/^canonicalUrl:/m);
      expect(raw).not.toMatch(/^substack:/m);
    }
  });

  it("rejects off-site canonical paths", () => {
    expect(() => absoluteCanonical("https://example.substack.com/p/note")).toThrow();
  });

  it("keeps the home canonical on the apex with no trailing slash", () => {
    expect(absoluteCanonical("/")).toBe(siteUrl);
  });
});

describe("copy 4.3", () => {
  it("keeps titles and descriptions inside the limits", () => {
    const entries = [
      ...Object.values(seo),
      ...Object.values(articles),
    ];
    expect(seoIssues(entries)).toEqual([]);
  });

  it("uses the exact price line and seven plan parts", () => {
    expect(priceLine).toBe("A$3,500 a month, no GST. AI model costs included. No contract.");
    expect(partnerPlan.priceLine).toBe(priceLine);
    expect(offer.priceLine).toBe(priceLine);
    expect(partnerPlan.includes).toEqual([
      "Website builds",
      "Conversion work",
      "SEO",
      "Google Ads management",
      "Social and email",
      "AI automation",
      "Software and internal tools",
    ]);
    expect("priceNote" in partnerPlan).toBe(false);
    expect(offers[1].links[0].href).toBe("/services/marketing");
    expect(websiteOffer.links[0].href).toBe("/services/marketing");
  });

  it("keeps seven live service questions and holds the ads-spend question", () => {
    expect(faq).toHaveLength(7);
    expect(faq.map((item) => item.q)).not.toContain("Is Google Ads spend included?");
  });

  it("redirects the old Compass slugs", () => {
    const destinations = permanentRedirects.filter((item) =>
      item.source.startsWith("/projects/compass"),
    );
    expect(destinations.map((item) => item.destination)).toEqual([
      "/projects/compass-buyers-agency",
      "/projects/compass-buyers-agency",
    ]);
  });

  it("blocks a production build while placeholders remain", () => {
    expect(() => assertProductionClean("preview")).not.toThrow();
    expect(() => assertProductionClean("production")).toThrow(/Production build blocked/);
  });

  it("lists the two launch articles and keeps the home teaser hidden", () => {
    expect(getLiveInsights().map((article) => article.slug).sort()).toEqual([
      "ai-for-small-business",
      "fractional-cmo-vs-agency",
    ]);
    expect(homeInsightsVisible()).toBe(false);
  });

  it("keeps the in-house comparison and the GST wording in the CMO article", () => {
    expect(comparison.rows).toHaveLength(7);
    expect(comparison.linkLabel).toBe("See how we work →");
    expect(fs.readFileSync(path.join(process.cwd(), "lib/gates.ts"), "utf8")).not.toContain("SHOW_COMPASS");
    const article = fs.readFileSync(
      path.join(process.cwd(), "content/insights/fractional-cmo-vs-agency.mdx"),
      "utf8",
    );
    expect(article).toContain("+ GST");
    expect(article).toContain("no GST");
    const live = getInsights().find((item) => item.slug === "fractional-cmo-vs-agency");
    expect(live?.body).toContain("+ GST");
    expect(live?.body).toContain("no GST");
  });

  it("keeps Compass OS, Retool and the internal platform off the rendered site", () => {
    const roots = ["app", "components", "lib", "content/work"];
    const banned = [/Compass OS/, /Retool/, /internal platform/];

    function filesIn(dir: string): string[] {
      return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          return filesIn(full);
        }

        return /\.(ts|tsx|md|mdx)$/.test(entry.name) && !entry.name.endsWith(".test.ts") ? [full] : [];
      });
    }

    const hits = roots.flatMap((root) =>
      filesIn(path.join(process.cwd(), root)).flatMap((file) => {
        const text = fs.readFileSync(file, "utf8");

        return banned.filter((pattern) => pattern.test(text)).map((pattern) => `${file} ${pattern}`);
      }),
    );

    expect(hits).toEqual([]);
  });
});
