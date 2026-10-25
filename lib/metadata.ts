import type { Metadata } from "next";
import { lockedDescription, lockedTitle, siteName } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  canonical?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  canonical,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} · ${siteName}`;
  const canonicalPath = canonical || path;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://roadmaplabs.com.au"),
  title: {
    default: lockedTitle,
    template: `%s · ${siteName}`,
  },
  description: lockedDescription,
  applicationName: siteName,
  authors: [{ name: "Dan Kovac", url: "/about" }],
  creator: siteName,
  category: "software",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName,
    title: lockedTitle,
    description: lockedDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: lockedTitle,
    description: lockedDescription,
  },
};
