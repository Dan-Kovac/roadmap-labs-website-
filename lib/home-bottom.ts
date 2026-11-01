/** Home page from Work down. Copy: home-bottom-simple.md. Layout: SPEC.md option B. */

export const feeTerms = "No GST. AI model costs included. No contract.";

export const homeWork = [
  {
    href: "/projects/compass-buyers-agency",
    eyebrow: "Built for Compass Buyers Agency",
    title: "Compass Buyers Agency",
    line: "A website project: we built the site and set up the SEO and enquiry flow.",
    desktop: {
      src: "/home-bottom/compass-home-2880x1800.jpg",
      alt: "Compass Buyers Agency home page, compassagency.com.au, on desktop",
      width: 2880,
      height: 1800,
    },
    phone: {
      src: "/home-bottom/compass-m-1170x2532.jpg",
      alt: "Compass Buyers Agency home page on a phone",
      width: 1170,
      height: 2532,
    },
  },
  {
    href: "/projects/review-buddy",
    eyebrow: "Our product, for Australian tradies",
    title: "ReviewBuddy",
    line: "Gets tradies more Google reviews and shows them on their site.",
    desktop: {
      src: "/home-bottom/reviewbuddy-home-2880x1800.jpg",
      alt: "ReviewBuddy home page, reviewbuddy.com.au, on desktop",
      width: 2880,
      height: 1800,
    },
    phone: {
      src: "/home-bottom/reviewbuddy-m-1170x2532.jpg",
      alt: "ReviewBuddy home page on a phone",
      width: 1170,
      height: 2532,
    },
  },
  {
    href: "/projects/flexfolio",
    eyebrow: "Our product, for product managers",
    title: "Flexfolio",
    line: "A portfolio that shows the thinking behind your work.",
    desktop: {
      src: "/home-bottom/flexfolio-home-2880x1800.jpg",
      alt: "Flexfolio home page, flexfolio.co, on desktop",
      width: 2880,
      height: 1800,
    },
    phone: {
      src: "/home-bottom/flexfolio-m-1170x2532.jpg",
      alt: "Flexfolio home page on a phone",
      width: 1170,
      height: 2532,
    },
  },
] as const;

export const runLoop = [
  { label: "Idea" },
  { label: "Ticket", tool: "Linear" },
  { label: "Agent", tool: "Cursor" },
  { label: "Preview", tool: "Vercel" },
  { label: "QA", tool: "Playwright" },
  { label: "Dan's approval" },
  { label: "Live", on: true },
] as const;

export const runRows = [
  {
    name: "Ticket to preview",
    line: "Every change starts as a ticket. An AI coding agent builds it.",
  },
  {
    name: "Tested, then signed off",
    line: "Desktop and mobile checks run, then Dan looks over the preview.",
  },
  {
    name: "A team per product",
    line: "Each product has its own AI designer, engineer and writer.",
  },
  {
    name: "AI help with clients",
    line: "Harry keeps clients posted. A sales assistant looks after new enquiries.",
  },
  {
    name: "Interview to article",
    line: "Dan talks through the week's work. It becomes our next article.",
  },
] as const;

export const feeRows = [
  {
    label: "Your data",
    yourself: "Client details pasted into free tools",
    us: "Set up safely before anything goes live",
  },
  {
    label: "Picking the jobs",
    yourself: "Whoever had a spare afternoon",
    us: "A roadmap shows which job's worth most",
  },
  {
    label: "Your tools",
    yourself: "Tools that don't talk to each other",
    us: "Connected properly, so your data flows",
  },
  {
    label: "Marketing and sales",
    yourself: "Guesswork on what actually brings work in",
    us: "Proven marketing and sales habits, built in",
  },
  {
    label: "Does it work",
    yourself: "Nobody checks, so nobody knows",
    us: "A one-month test, then keep or cut",
  },
  {
    label: "Who looks after it",
    yourself: "Stalls when the keen one gets busy",
    us: "We do, for as long as you stay",
  },
] as const;

export const homeBrands = [
  {
    name: "Roadmap Labs",
    line: "AI automation studio in Melbourne",
    logo: "/brand/roadmap-labs-black.svg",
  },
  {
    name: "ReviewBuddy",
    line: "More Google reviews for Australian tradies",
    logo: "/home-bottom/reviewbuddy-logo.svg",
  },
  {
    name: "Flexfolio",
    line: "Portfolios for product managers",
    logo: "/home-bottom/flexfolio-mark.png",
    wordmark: true,
  },
  {
    name: "Dan Kovac Builds",
    line: "Notes from building with AI",
  },
] as const;

export function words(value: string) {
  return value.trim().split(/\s+/).filter(Boolean);
}
