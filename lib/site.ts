export const contactEmail = "dan@roadmaplabs.com.au";

export const contactHref = `mailto:${contactEmail}`;

export const howWeWorkId = "how-we-work";

export const howWeWorkHref = `/#${howWeWorkId}`;

export const navItems = [
  { href: "/projects", label: "Work" },
  { href: howWeWorkHref, label: "How we work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;
