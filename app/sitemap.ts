import type { MetadataRoute } from "next";
import { categoriesInUse, getLiveInsights, isoDate } from "@/lib/content";
import { getListedWork } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/services", "/services/automations", "/services/marketing", "/services/software", "/projects", "/about", "/contact", "/privacy"];
  const work = getListedWork("production").filter((project) => project.indexable);
  const insights = getLiveInsights();
  const categories = categoriesInUse(insights);

  return [
    ...staticPaths.map((path) => ({
      url: path === "" ? siteUrl : `${siteUrl}${path}`,
      lastModified: now,
    })),
    ...work.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: isoDate(project.date) ? new Date(project.date as string) : now,
    })),
    ...(insights.length
      ? [
          { url: `${siteUrl}/insights`, lastModified: now },
          ...insights.map((article) => ({
            url: `${siteUrl}/insights/${article.slug}`,
            lastModified: isoDate(article.date) ? new Date(article.date) : now,
          })),
          ...categories.map((category) => ({
            url: `${siteUrl}/insights/category/${category.slug}`,
            lastModified: now,
          })),
        ]
      : []),
  ];
}
