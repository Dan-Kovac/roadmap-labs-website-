# Replacement wording for `lib/offers.ts`

Draft 1, 26 October 2026 (AEDT). For the Lead Engineer to paste in. Nothing here is live.
Repo `Dan-Kovac/roadmap-labs-website-`, branch `cursor/launch-ready-site-6ce8`, file `lib/offers.ts` (read 26 Oct).

**What changes:** the old file described three separate offers (own products, operating systems, automations) plus a website offer "on request". The site now sells one thing: the partner plan, A$3,500 a month, no GST. So `offers` becomes the three parts of that one plan, and a new `partnerPlan` object holds the price and terms.

**Kept the same:** the `offers` array shape (`id`, `number`, `title`, `home`, `paragraphs`, `links`) and `as const`, so existing components keep working. `websiteOffer` is kept as an export with the same shape so nothing breaks on import, but it now points at the website part of the plan. Remove it once nothing imports it.

**Removed on purpose:**
- Every mention of Compass OS and the `/projects/compass-os` and `/projects/compass-website` links. Compass OS isn't named publicly until Dan confirms Compass is OK with it. The SEO plan merges both routes into `/projects/compass-buyers-agency`; please add redirects from the old two.
- "Pricing for client work is on request." The price is public now.
- Own products as an offer. ReviewBuddy and Flexfolio are proof (Work and About), not something we sell.

**Open before launch:** two terms are still Dan's call. They're marked in comments, not in the strings, so nothing renders a bracket tag: `[DECISION: fair-use limit]` and `[DECISION: handover terms]`. The security line waits on Dan's safety paragraph `[TBC]`.

```ts
// One plan, three parts. Copy: Roadmap Labs, draft 4.2, 26 Oct 2026.
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
      "We build and look after your website, work on conversion, and run SEO, Google Ads, social posting and email.",
      "It's written for people first and keeps going out when the week gets busy. Ad spend stays on your own Google account.", // Dan to confirm ad spend billing (NOTES Q33)
    ],
    links: [{ href: "/projects", label: "See our work" }],
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
  priceNote: "About A$808 a week. No GST, AI running costs included, no contract.",
  terms: [
    "A$3,500 a month, no GST.",
    "AI running costs are in the fee. We pick the model for each job and keep an eye on the spend.", // [DECISION: fair-use limit]
    "No contract. Cancel any month.",
    "If you leave, we hand over everything we've built.", // [DECISION: handover terms]
    "We only take a small handful of partner clients at a time.",
  ],
  cta: { href: "/contact", label: "Book a call" },
} as const;

// Kept so existing imports don't break. Points at the website part of the plan.
// Remove once nothing imports it.
export const websiteOffer = {
  id: "websites",
  title: "Website and marketing",
  paragraphs: [
    "Website builds, conversion work, SEO and Google Ads are part of the partner plan, alongside AI automation and internal tools.",
    "It's all in the one monthly fee: A$3,500 a month, no GST.",
  ],
  links: [{ href: "/services", label: "See the partner plan" }],
} as const;
```

**Notes for the Lead Engineer**
- `/contact?intent=automation#book` keeps the old query string. If the contact form's intent options changed in draft 4 (see `contact` in `slots.py pages`), map it to the matching one.
- If a component renders `offers[n].home` as the homepage card text, the homepage now uses WG4 in `homepage.md` instead. These `home` lines are short versions for anywhere else.
- Character lengths aren't fixed by COPY-BRIEF for this file. Every string is one or two short sentences, in line with the O1 to O6 cells in `offer.md`.
