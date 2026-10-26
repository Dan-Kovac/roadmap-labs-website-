// One plan, three parts. Copy: Roadmap Labs, draft 4.3, 26 Oct 2026.
export const offers = [
  {
    id: "automation",
    number: "01",
    title: "AI automation",
    home: "AI on the admin and sales jobs that eat the week.",
    paragraphs: [
      "Quotes, follow-ups, onboarding and data entry, handled by automations so leads get an answer and nobody types it all by hand.",
      "We build one job at a time. Each one gets a one-month test, and if it isn't working, we switch it off and build the next one.",
    ],
    links: [{ href: "/contact?intent=automation#book", label: "Book a call" }],
  },
  {
    id: "marketing",
    number: "02",
    title: "Website and marketing",
    home: "Your website, SEO, Google Ads, social and email, kept going out.",
    paragraphs: [
      "We build and look after your website, work on conversion, and run SEO, Google Ads management, social posting and email.",
      "It's written for people first and keeps going out when the week gets busy.",
      // [TBC: Google Ads spend: Dan confirming whether it's included or paid by the client. Don't add copy that answers it.]
    ],
    links: [{ href: "/services/marketing", label: "SEO, websites and Google Ads" }],
  },
  {
    id: "internal-tools",
    number: "03",
    title: "Internal tools",
    home: "A company portal that puts your data and tools in one place.",
    paragraphs: [
      "When you're ready, we build an internal portal around how your team works, so your data and tools sit in one place and AI has something real to use.",
      "It's usually about a month of work, at the same fee.",
    ],
    links: [{ href: "/services", label: "How the plan works" }],
  },
] as const;

export const partnerPlan = {
  id: "partner-plan",
  name: "Partner plan",
  price: "A$3,500/mo",
  priceLine: "A$3,500 a month, no GST. AI model costs included. No contract.",
  includes: [
    "Website builds",
    "Conversion work",
    "SEO",
    "Google Ads management", // [TBC: ad spend, Dan confirming]
    "Social and email",
    "AI automation",
    "Software and internal tools",
  ],
  terms: [
    "A$3,500 a month, no GST. AI model costs included. No contract.",
    "AI model costs are in the fee. We pick the model for each job and keep an eye on the spend.",
    "No contract. Cancel any month.",
    "If you leave, we hand over everything we've built.",
    "We only take a small handful of clients at a time.",
  ],
  cta: { href: "/contact", label: "Book a call" },
} as const;

// Kept so existing imports don't break. Points at the website part of the plan.
export const websiteOffer = {
  id: "websites",
  title: "Website and marketing",
  paragraphs: [
    "Website builds, conversion work, SEO, Google Ads management, social and email are part of the partner plan, alongside AI automation, software and internal tools.",
    "It's all in the one monthly fee: A$3,500 a month, no GST. AI model costs included. No contract.",
  ],
  links: [{ href: "/services/marketing", label: "SEO, websites and Google Ads" }],
} as const;
