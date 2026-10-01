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
    thesis: ["Compass OS.", "The practice, in one place."],
    story: [
      "Compass OS is the system the practice runs on. The day, the board, and the notes sit with the work.",
      "It is a private app. The screens below are empty fields until the product shots are ready.",
    ],
    shots: [
      { label: "Today", crop: "wide" },
      { label: "Board", crop: "tall" },
    ],
  },
  {
    slug: "review-buddy",
    name: "Review Buddy",
    job: "Reviews, asked for and answered.",
    cta: "Visit Review Buddy",
    href: "https://reviewbuddy.com.au",
    external: true,
    frame: "review-buddy",
    thesis: ["Review Buddy.", "Ask once. Answer once."],
    story: [
      "Review Buddy asks for the review and keeps the reply with it. What is new stays apart from what is already answered.",
      "The live product is on the web. These frames are cropped placeholders for the real screens.",
    ],
    shots: [
      { label: "Inbox", crop: "wide" },
      { label: "Reply", crop: "tall" },
    ],
  },
  {
    slug: "flexfolio",
    name: "Flexfolio",
    job: "A portfolio you can publish.",
    cta: "Visit Flexfolio",
    href: "https://flexfolio.co",
    external: true,
    frame: "flexfolio",
    thesis: ["Flexfolio.", "Publish the work."],
    story: [
      "Flexfolio is a portfolio you can publish. Projects and writing go up when they are ready.",
      "Drafts stay off the live page. The fields below wait for screenshots.",
    ],
    shots: [
      { label: "Portfolio", crop: "wide" },
      { label: "Project", crop: "tall" },
    ],
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
    thesis: ["Compass Website.", "For people outside the app."],
    story: [
      "Compass Website is the public site in front of Compass. It speaks to people who are not inside the product.",
      "It stays short. The day-to-day work lives in Compass OS.",
    ],
    shots: [
      { label: "Home", crop: "wide" },
      { label: "Page", crop: "tall" },
    ],
  },
] as const;

export type WorkFrame = (typeof selectedWork)[number]["frame"];

export const homeWork = selectedWork.filter((project) => project.slug !== "compass-website");

export function findSelectedWork(slug: string) {
  return selectedWork.find((project) => project.slug === slug);
}
