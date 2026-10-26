import { faq, insightsCopy, offer } from "@/lib/copy";
import { seo } from "@/lib/seo";
import {
  contactEmail,
  logoUrl,
  organizationId,
  personId,
  siteName,
  siteUrl,
} from "@/lib/site";
import { stripGst } from "@/lib/text";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: siteName,
  url: siteUrl,
  email: contactEmail,
  description: seo.home.description,
  logo: logoUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  founder: {
    "@id": personId,
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Dan Kovac",
  jobTitle: "Founder",
  url: `${siteUrl}/about`,
  worksFor: { "@id": organizationId },
  knowsAbout: ["Software", "Automations", "Marketing"],
};

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    image: logoUrl,
    email: contactEmail,
    description: seo.home.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: { "@type": "Country", name: "Australia" },
    founder: { "@id": personId },
    priceRange: "A$3,500/month",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: "en-AU",
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function serviceOfferJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outsourced marketing and AI automation",
    serviceType: "Outsourced marketing and AI automation",
    url: `${siteUrl}/services`,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "Australia" },
    offers: {
      "@type": "Offer",
      price: 3500,
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: 3500,
        priceCurrency: "AUD",
        unitText: "MONTH",
      },
    },
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "Australia" },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripGst(item.a),
      },
    })),
  };
}

export function collectionJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  about?: { name: string; url?: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    author: { "@id": personId },
    publisher: { "@id": organizationId },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    image: input.image ?? logoUrl,
    ...(input.about
      ? {
          about: {
            "@type": "Organization",
            name: input.about.name,
            ...(input.about.url ? { url: input.about.url } : {}),
          },
        }
      : {}),
  };
}

export function profileJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteUrl}/about`,
    mainEntity: { "@id": personId },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteUrl}/contact`,
    name: seo.contact.title,
    description: seo.contact.description,
  };
}

export const offerPrice = offer.rows.find((row) => row.tone === "us");

export const authorName = insightsCopy.authorName;
