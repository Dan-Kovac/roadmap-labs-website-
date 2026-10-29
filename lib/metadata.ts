import type { Metadata } from "next";
import { seo, seoIssues, type SeoEntry } from "@/lib/seo";
import { siteName, siteUrl } from "@/lib/site";

/**
 * Insights is the Roadmap Labs blog. Every article is self-canonical on this
 * site. Substack is a separate publication and is never the canonical URL.
 */
export function articleCanonical(slug: string) {
  return absoluteCanonical(`/insights/${slug}`);
}

export function absoluteCanonical(path: string) {
  if (!path.startsWith("/")) {
    throw new Error(`Canonical path must stay on ${siteUrl}`);
  }

  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  if (!url.startsWith(`${siteUrl}/`) && url !== siteUrl) {
    throw new Error(`Canonical must be on ${siteUrl}`);
  }

  if (url.includes("substack")) {
    throw new Error("Article canonicals never point at Substack");
  }

  return url;
}

export function isPreviewDeployment() {
  return process.env.VERCEL_ENV === "preview";
}

export function robotsFor(indexable = true): Metadata["robots"] {
  if (isPreviewDeployment() || !indexable) {
    return { index: false, follow: false };
  }

  return { index: true, follow: true };
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  indexable?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  indexable = true,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const issues = seoIssues([{ title, description }]);

  if (issues.length) {
    throw new Error(issues.join("\n"));
  }

  return {
    title: { absolute: title },
    description,
    robots: robotsFor(indexable),
    alternates: { canonical: absoluteCanonical(path) },
    openGraph: {
      title,
      description,
      url: absoluteCanonical(path),
      siteName,
      locale: "en_AU",
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { absolute: seo.home.title },
  description: seo.home.description,
  applicationName: siteName,
  authors: [{ name: "Dan Kovac", url: "/about" }],
  creator: siteName,
  category: "software",
  robots: robotsFor(true),
  manifest: "/site.webmanifest",
  alternates: { canonical: absoluteCanonical("/") },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName,
    title: seo.home.title,
    description: seo.home.description,
    url: absoluteCanonical("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
  },
};

export function assertSeo(entries: SeoEntry[]) {
  const issues = seoIssues(entries);

  if (issues.length) {
    throw new Error(issues.join("\n"));
  }
}
