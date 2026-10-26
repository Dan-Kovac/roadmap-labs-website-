/**
 * Absolute titles and meta descriptions.
 * Titles and descriptions follow the 26 Oct site structure (AU search volumes).
 */

export const titleLimit = 60;
export const descriptionLimit = 155;

export const seo = {
  home: {
    title: "AI automation agency in Melbourne · Roadmap Labs",
    description:
      "A Melbourne AI automation agency for Australian businesses with 5 or more staff. We take the admin off your team and keep your marketing running.",
  },
  services: {
    title: "Outsourced marketing and AI team · Roadmap Labs",
    description:
      "Outsourced marketing, software and AI automation in one plan. A$3,500 a month, no GST. AI model costs included. No contract.",
  },
  automations: {
    title: "AI and business automation for small business · Roadmap Labs",
    description:
      "Quotes, follow-ups, onboarding and data entry, automated one at a time. Each one gets a one-month test, and we switch off anything that isn't working.",
  },
  marketing: {
    title: "SEO, web design and Google Ads, Melbourne · Roadmap Labs",
    description:
      "SEO, web design, conversion and Google Ads for Melbourne small businesses, written for people first and run inside one monthly plan. No GST.",
  },
  software: {
    title: "Custom software and internal tools, Melbourne · Roadmap Labs",
    description:
      "Custom CRMs, client portals and internal tools built around how your team actually works. Built and looked after inside one monthly plan.",
  },
  projects: {
    title: "Our work: websites, software and automations · Roadmap Labs",
    description:
      "Websites and AI automation we've built for clients and for our own companies, ReviewBuddy and Flexfolio.",
  },
  compass: {
    title: "Compass Buyers Agency case study · Roadmap Labs",
    description:
      "How we built the Compass Buyers Agency website, with the SEO and conversion work that went with it.",
  },
  flexfolio: {
    title: "Flexfolio · Roadmap Labs",
    description:
      "Flexfolio is our own portfolio platform for product managers. It's in beta, and it runs on the AI systems and automations we build.",
  },
  reviewBuddy: {
    title: "ReviewBuddy · Roadmap Labs",
    description:
      "ReviewBuddy is our own Google review software for Australian tradies. It's in beta, and it runs on the AI systems and automations we build.",
  },
  about: {
    title: "About Dan Kovac, founder of Roadmap Labs",
    description:
      "Dan Kovac did ten years in digital marketing. Roadmap Labs is his Melbourne studio for software, AI automation and marketing.",
  },
  contact: {
    title: "Book a call with Roadmap Labs",
    description:
      "Book a free discovery session. We'll look at where your team's time and money go and map out the automations and marketing worth starting with.",
  },
  insights: {
    title: "Insights on AI, automation and marketing · Roadmap Labs",
    description:
      "Notes from Roadmap Labs on building software and automations with AI: what works, what doesn't and what it actually costs to run. Written by Dan Kovac.",
  },
  privacy: {
    title: "Privacy policy · Roadmap Labs",
    description:
      "How Roadmap Labs handles messages sent from this site, and when analytics is on. Questions to dan@roadmaplabs.com.au.",
  },
  notFound: {
    title: "Page not found · Roadmap Labs",
    description: "That page is not on this site. Go home, read the services, or book a call.",
  },
} as const;

export const articles = {
  "ai-for-small-business": {
    title: "AI for small business: where to actually start",
    description:
      "Why AI stalls in Australian small businesses, and where to actually start: processes, data, safety, your team and a one-month test.",
  },
  "fractional-cmo-vs-agency": {
    title: "Fractional CMO, agency or in-house: what it costs",
    description:
      "What a fractional CMO is, what one costs in Australia, and how it compares with an agency retainer or an in-house hire for a small business.",
  },
  "small-business-automation": {
    title: "Small business automation: what to automate first",
    description:
      "The admin worth automating first in a small business, what each job could save your team each week, and a cheap way to cut costs without a big build.",
  },
  "google-ads-seo-website-cost": {
    title: "What Google Ads, SEO and a website cost in Australia",
    description:
      "Real price ranges for Google Ads, SEO and a new website for an Australian small business, what drives the cost, and what to expect each month.",
  },
} as const;

export type ArticleSlug = keyof typeof articles;

export type SeoEntry = { title: string; description: string };

export function seoIssues(entries: SeoEntry[]) {
  const issues: string[] = [];

  for (const entry of entries) {
    if (entry.title.length > titleLimit) {
      issues.push(`Title ${entry.title.length}>${titleLimit}: ${entry.title}`);
    }

    if (entry.description.length > descriptionLimit) {
      issues.push(`Description ${entry.description.length}>${descriptionLimit}: ${entry.description}`);
    }
  }

  return issues;
}
