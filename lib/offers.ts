export const offers = [
  {
    id: "products",
    number: "01",
    title: "Own products",
    home: "ReviewBuddy and Flexfolio. Software we ship and keep.",
    paragraphs: [
      "Roadmap Labs designs, ships and looks after its own software. The products on the site today are ReviewBuddy, for review growth, and Flexfolio, for portfolios.",
      "They are not client projects with our name taken off. We run them.",
    ],
    links: [
      { href: "/projects/review-buddy", label: "ReviewBuddy" },
      { href: "/projects/flexfolio", label: "Flexfolio" },
    ],
  },
  {
    id: "systems",
    number: "02",
    title: "Operating systems",
    home: "The private system a business actually runs on. Compass OS is built in Retool.",
    paragraphs: [
      "Some businesses need an internal platform more than another public app. We build the system the team uses to run the day: the board, the notes, and the work in one place.",
      "Compass OS is that platform for Compass Buyers Agency. It is built in Retool, and it is private.",
    ],
    links: [{ href: "/projects/compass-os", label: "Compass OS" }],
  },
  {
    id: "automations",
    number: "03",
    title: "Automations and AI",
    home: "Workflows that take the repeated work off the desk.",
    paragraphs: [
      "When the same handoff happens every day, we put it in a workflow. That might be an AI step, a connection between the tools you already use, or a quieter version of a job someone was doing by hand.",
      "The point is the same as the rest of the work. It does the job, then it stops asking for the hour.",
    ],
    links: [{ href: "/contact?intent=automation#book", label: "Talk through a workflow" }],
  },
] as const;

export const websiteOffer = {
  id: "websites",
  title: "Websites, SEO and conversion",
  paragraphs: [
    "Alongside those three, Dan takes on website, SEO and conversion work for clients. The public example is the Compass Buyers Agency site.",
    "Pricing for client work is on request.",
  ],
  links: [{ href: "/projects/compass-website", label: "Compass website" }],
} as const;
