export const selectedWork = [
  {
    slug: "compass-os",
    name: "Compass OS",
    job: "The product the practice runs on.",
    cta: "See how Compass runs",
    frame: "app",
  },
  {
    slug: "review-buddy",
    name: "Review Buddy",
    job: "Reviews, asked for and answered.",
    cta: "Visit Review Buddy",
    frame: "reviews",
  },
  {
    slug: "flexfolio",
    name: "Flexfolio",
    job: "A portfolio you can publish.",
    cta: "Visit Flexfolio",
    frame: "portfolio",
  },
  {
    slug: "compass-website",
    name: "Compass Website",
    job: "The public site for Compass.",
    cta: "Visit Compass site",
    frame: "site",
  },
] as const;

export type WorkFrame = (typeof selectedWork)[number]["frame"];
