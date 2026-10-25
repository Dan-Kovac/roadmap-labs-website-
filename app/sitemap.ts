import type { MetadataRoute } from "next";
import { getInsights, getWork } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/projects",
    "/insights",
    "/about",
    "/contact",
    ...getWork().map((project) => `/projects/${project.slug}`),
    ...getInsights().map((article) => `/insights/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
