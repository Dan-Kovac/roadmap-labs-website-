export const siteUrl = "https://roadmaplabs.com.au";

export const siteName = "Roadmap Labs";

export const contactEmail = "dan@roadmaplabs.com.au";

export const contactHref = `mailto:${contactEmail}`;

export const howWeWorkId = "how-we-work";

export const howWeWorkHref = `/#${howWeWorkId}`;

export const contactPath = "/contact";

/**
 * Set NEXT_PUBLIC_BOOKING_URL when Dan has a booking page.
 * Until then, Book a call opens the contact form.
 */
export function bookingUrl() {
  const value = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? "";

  if (!value) {
    return "";
  }

  try {
    const url = new URL(value);

    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.toString();
    }
  } catch {
    return "";
  }

  return "";
}

export function bookingHref() {
  const url = bookingUrl();

  return url || "/contact?intent=call#book";
}

export const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const lockedTitle = "Roadmap Labs - apps, websites and automations that fit real use";

export const lockedDescription =
  "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them.";

export const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  email: contactEmail,
  description: lockedDescription,
  logo: `${siteUrl}/brand/roadmap-labs-primary-horizontal-blue-dmsans.svg`,
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
    "@type": "Person",
    name: "Dan Kovac",
    url: `${siteUrl}/about`,
  },
};
