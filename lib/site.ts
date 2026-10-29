export const siteUrl = "https://roadmaplabs.com.au";

export const siteName = "Roadmap Labs";

export const contactEmail = "dan@roadmaplabs.com.au";

export const contactHref = `mailto:${contactEmail}`;

export const personId = `${siteUrl}/about#person`;

export const organizationId = `${siteUrl}/#organization`;

export const logoPath = "/brand/roadmap-labs-mark-512.png";

export const logoUrl = `${siteUrl}${logoPath}`;

export const contactPath = "/contact";

/** Home keeps the enquiry on the page. Every other page goes to /contact. */
export function enquiryHref(pathname: string) {
  if (pathname === "/") {
    return "#start";
  }

  if (pathname === "/contact") {
    return "#enquiry";
  }

  return "/contact";
}

/** Set NEXT_PUBLIC_GA_ID to a GA4 measurement ID. Unset means analytics does not load. */
export function gaId() {
  const value = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";

  return value || "";
}

export const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const footerServiceLinks = [
  { href: "/services/automations", label: "Business automation" },
  { href: "/services/marketing", label: "SEO, websites and Google Ads" },
  { href: "/services/software", label: "Custom software" },
] as const;

export function currentNav(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
