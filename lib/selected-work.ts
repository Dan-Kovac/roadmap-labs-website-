export const selectedWork = [
  {
    slug: "compass-os",
    name: "Compass OS",
    job: "The product the practice runs on.",
    cta: "See how Compass runs",
    href: "/projects/compass-os",
    external: false,
    frame: "compass-os",
    detailNote: "Private app. No public link yet. Email Dan if you need to see it.",
  },
  {
    slug: "review-buddy",
    name: "Review Buddy",
    job: "Reviews, asked for and answered.",
    cta: "Visit Review Buddy",
    href: "https://reviewbuddy.com.au",
    external: true,
    frame: "review-buddy",
  },
  {
    slug: "flexfolio",
    name: "Flexfolio",
    job: "A portfolio you can publish.",
    cta: "Visit Flexfolio",
    href: "https://flexfolio.co",
    external: true,
    frame: "flexfolio",
  },
  {
    slug: "compass-website",
    name: "Compass Website",
    job: "The public site for Compass.",
    cta: "Visit Compass site",
    href: "/projects/compass-website",
    external: false,
    frame: "compass-site",
    detailNote: "The public Compass site link is not on this page yet.",
  },
] as const;

export type WorkFrame = (typeof selectedWork)[number]["frame"];

export function findSelectedWork(slug: string) {
  return selectedWork.find((project) => project.slug === slug);
}
