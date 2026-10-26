import { priceLine } from "@/lib/text";

/** Change this number to switch the home hero. Options live in copy/homepage.md. */
export const heroPick = 1 as 1 | 2 | 3 | 4 | 5 | 6;

export const heroOptions = [
  {
    rank: 1 as const,
    line1: "AI should be working for you.",
    line2: "Finally make it work.",
    lead: "We make AI work for the business, properly and safely, as far as you can take it. It starts with a call.",
    microcopy: "A conversation about making AI work here.",
  },
  {
    rank: 2 as const,
    line1: "It hasn't really worked.",
    line2: "Time to use it properly.",
    lead: "Past a handful of logins. AI working in the business, with care for your clients and your name. It starts with a call.",
    microcopy: "A conversation about using AI properly.",
  },
  {
    rank: 3 as const,
    line1: "Do everything you can with AI.",
    line2: "And know that it's safe.",
    lead: "We take AI as far as it should go in the business, in a way you could explain to a client. It starts with a call.",
    microcopy: "A conversation. We'll see how far to take it.",
  },
  {
    rank: 4 as const,
    line1: "It's time AI worked for you.",
    line2: "Properly, and safely.",
    lead: "AI that works for the business, used properly, and safe enough to stand behind. It starts with a call.",
    microcopy: "A straight conversation about AI in the business.",
  },
  {
    rank: 5 as const,
    line1: "Make AI work for the business.",
    line2: "Know you can stand behind it.",
    lead: "AI working for the business, ethically and safely, so you know you've done your bit. It starts with a call.",
    microcopy: "A conversation about doing this properly.",
  },
  {
    rank: 6 as const,
    line1: "Use AI to the full.",
    line2: "And keep it ethical.",
    lead: "Use AI fully, and keep it ethical. You'll know what's being done, and you can stand behind it. It starts with a call.",
    microcopy: "A conversation about using AI, carefully.",
  },
];

export function selectedHero() {
  const hero = heroOptions.find((option) => option.rank === heroPick);

  if (!hero) {
    throw new Error("heroPick must be 1, 2, 3, 4, 5 or 6");
  }

  return hero;
}

export const chrome = {
  enquire: "Send enquiry",
  emailDan: "Email Dan",
  eyebrow: "For owner-led businesses",
  howItWorks: "How it works →",
  microcopy: "A conversation about making AI work here.",
  menuOpen: "Menu",
  menuClose: "Close",
  skip: "Skip to content",
  footerDescriptor: "AI, software and automations",
  footerLocation: "Melbourne, Australia",
  banner: "Notes from building with AI",
};

export const properly = {
  label: "Properly",
  line1: "Buying the tool is easy.",
  line2: "Use it properly.",
  lead: "We connect the software you already use, such as your CRM and email, and pick the jobs worth handing to AI. Then we build them one at a time.",
  blocks: [
    {
      title: "Your tools, connected.",
      body: "Customer records, quotes and files in one place your team and the automations both use. Over time that becomes your company portal.",
    },
    {
      title: "Tried on us first.",
      body: "New AI models and tools go into Flexfolio and ReviewBuddy, our own companies, before yours. What works there comes to you. [TBC: confirm with Dan]",
    },
    {
      title: "Ethically and safely.",
      body: "[TBC: safety paragraph from Dan: where client data lives, who can see it, whose accounts it runs on]",
    },
  ],
};

export const putToWork = {
  label: "Put to work",
  title: "An AI automation agency, one job at a time.",
  lead: "We start with the job your roadmap says is worth the most, then add the next. The company portal comes once you can see it paying off.",
  models:
    "We pick the AI model for each job and keep an eye on what it costs. The model costs are in your fee.",
  cards: [
    {
      title: "Admin and sales automation",
      body: "Quotes, follow-ups, onboarding and data entry handled by automations, so leads get an answer and nobody types it all by hand.",
      caseLabel: "Our own company",
      caseName: "ReviewBuddy",
      href: "/projects/review-buddy",
      serviceHref: "/services/automations",
      serviceLabel: "Business automation",
      shot: "image" as const,
      src: "/work/reviewbuddy-widget.jpg",
      capture: "",
    },
    {
      title: "Marketing that keeps going out",
      body: "We build your website and run your SEO, Google Ads, social and email, so you don't need a separate agency for each.",
      caseLabel: "",
      caseName: "",
      href: "",
      serviceHref: "/services/marketing",
      serviceLabel: "SEO, websites and Google Ads",
      shot: "held" as const,
      src: "",
      capture: "",
    },
    {
      title: "Internal tools and a portal",
      body: "A company portal that puts customer records, jobs and files in one place for your team. Your automations run off the same data.",
      caseLabel: "",
      caseName: "",
      href: "",
      serviceHref: "/services/software",
      serviceLabel: "Custom software",
      shot: "held" as const,
      src: "",
      capture: "",
    },
  ],
};

export const howItWorks = {
  label: "How it works",
  line1: "See the numbers.",
  line2: "Then we build.",
  lead: "It starts with a free call. Then a roadmap with our best estimates. If the numbers stack up, we build one job at a time.",
  servicesLead:
    "You don't have to start with the portal. Most businesses see value sooner from a couple of working automations, so that's where the build starts.",
  reassurance: "No pressure. Look over the numbers, then decide.",
  steps: [
    {
      title: "A free call.",
      body: "We look at how the business runs, what you've tried with AI and where it would make the most difference.",
    },
    {
      title: "A roadmap with the numbers.",
      body: "What each automation could save or earn, how long it takes to get running and when it should start paying off.",
    },
    {
      title: "One job at a time.",
      body: "Each automation gets a one-month test. If it isn't working, we switch it off. Your portal when you're ready.",
    },
  ],
};

export const dan = {
  label: "Dan Kovac",
  title: "Dan builds it. His own companies run on it.",
  lead: "Roadmap Labs, Flexfolio and ReviewBuddy are Dan's own companies. Compass Buyers Agency was a client project.",
  bio: "Dan Kovac is an AI consultant in Melbourne and founder of Roadmap Labs. He spent ten years in digital marketing, running Roadmap Digital. He builds his own apps, Flexfolio and ReviewBuddy, on the systems clients get.",
  portrait: "[PHOTO TBC]",
  action: "All work →",
  rows: [
    {
      name: "Roadmap Labs",
      tag: "Own company",
      body: "The Melbourne studio behind this site. Flexfolio and ReviewBuddy run on its AI systems.",
      meta: "About →",
      href: "/about",
    },
    {
      name: "Flexfolio",
      tag: "Own company",
      body: "A portfolio platform that shows a product manager's thinking across projects. In beta.",
      meta: "View →",
      href: "/projects/flexfolio",
    },
    {
      name: "ReviewBuddy",
      tag: "Own company",
      body: "Google review software for Australian tradies. In beta, on our own systems.",
      meta: "View →",
      href: "/projects/review-buddy",
    },
    {
      name: "Compass Buyers Agency",
      tag: "Client project",
      body: "A website project: we built the site and did the SEO and conversion work.",
      meta: "View →",
      href: "/projects/compass-buyers-agency",
    },
  ],
};

export const offer = {
  label: "The fee",
  line1: "One monthly fee.",
  line2: "AI model costs included.",
  lead: "We build one job at a time, as many as you need over the months, and keep each one running. AI model costs are in the fee, so there's no second bill.",
  planLabel: "Partner plan",
  priceLine,
  included: [
    "AI automation for admin and sales, each with a one-month test",
    "Website builds, conversion work, SEO, Google Ads, social and email",
    "Internal tools and a company portal, when you're ready",
    "AI models picked for each job, with running costs in the fee [DECISION: fair-use limit]",
    "Security for your data and automations [TBC: what this covers, from Dan]",
    "A full handover if you leave [DECISION: handover terms]",
  ],
  comparisonLabel: "What it replaces",
  rows: [
    { label: "SEO campaign, well run", figure: "A$2,000/mo", tone: "bench" as const },
    { label: "Agency fees: Meta, Google or social ads", figure: "A$1,000/mo", tone: "bench" as const },
    { label: "Virtual assistant at A$500+ a week", figure: "A$2,170+/mo", tone: "bench" as const },
    { label: "Together", figure: "About A$5,170/mo", tone: "total" as const },
    { label: "Roadmap Labs", figure: "A$3,500/mo", tone: "us" as const },
    { label: "Difference", figure: "About A$1,670/mo", tone: "diff" as const },
  ],
  footnote:
    "Typical costs from Dan's ten years in digital marketing. The ad row is the agency's management fee on its own. Our fee works out at about A$808 a week.",
  fine: [
    {
      title: "AI model costs",
      body: "They're in the fee. We pick the model for each job and keep an eye on the spend. [DECISION: fair-use limit]",
    },
    {
      title: "One-month test",
      body: "Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one.",
    },
    {
      title: "No contract",
      body: "Cancel any month and we hand over everything we've built. [DECISION: handover terms]",
    },
    {
      title: "A handful of clients",
      body: "We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly.",
    },
  ],
  tax: {
    marker: "[OPTION]",
    title: "Tax",
    body: "Generally a deductible business expense - check with your accountant.",
  },
  notIncluded:
    "AI model costs are in the fee. Software you already pay for, like your CRM, stays on your own accounts. [DECISION: fair-use limit]",
  supporting: "That's about A$1,670 a month you could put back into the business or your people.",
  beforeYouCommit:
    "Before you commit, you see what each automation could save, when it'll be running and when it should pay back. The most you can spend finding out after that is one month, and you keep what we built.",
  textLink: "Send enquiry →",
  planLink: "See what's in the plan",
};

export const comparison = {
  label: "In-house or us",
  title: "Why not just get your team to do it?",
  lead: "Your team could set up AI tools themselves, and plenty try. Here's where it usually goes wrong when they do, and what we do instead.",
  issueHeader: "Issue",
  teamHeader: "Your team does it",
  usHeader: "Roadmap Labs runs it",
  whyHeader: "Why it matters",
  rows: [
    {
      label: "Data and security",
      team: "Someone pastes client details into a free AI tool, and nobody knows where they end up.",
      us: "Security and model choice are part of the fee. We set them up before anything goes live. [TBC: what security covers]",
      why: "Your clients trust you with their details. That's much harder to win back than a tool is to set up.",
    },
    {
      label: "Tools that don't talk",
      team: "Each tool is set up on its own, so people still copy data from the CRM into spreadsheets.",
      us: "We connect the software you already use so data moves by itself. Your portal comes later.",
      why: "AI can only work with what it can see. If the data is stuck in separate tools, someone is still typing it in.",
    },
    {
      label: "Knowing what good looks like",
      team: "They know the business, but maybe not what a well-run ad account or sales follow-up is.",
      us: "We set it up the way good sales and marketing runs, from Dan's ten years in the field.",
      why: "AI speeds up whatever process you give it. A weak follow-up just goes out faster, to more people.",
    },
    {
      label: "Token and running costs",
      team: "The priciest model runs everything, usage creeps up and per-seat tools keep piling on.",
      us: "We pick the model for each job and cut tools nobody uses. AI model costs are in the fee.",
      why: "AI bills grow a little each month. Nobody owns them until someone checks the card statement.",
    },
    {
      label: "Does it actually work?",
      team: "Something gets set up, nobody measures it, and months later no one knows if it helped.",
      us: "Each automation gets a one-month test. If it isn't working, we switch it off.",
      why: "You find out within a month, and you only keep paying for the jobs that earn their place.",
    },
    {
      label: "Picking the right jobs",
      team: "AI goes wherever someone had a spare afternoon, which isn't always where the money is.",
      us: "Before we build, you get a roadmap with savings and growth estimates for each job.",
      why: "Starting with the job worth the most is the quickest way to find out whether this pays off.",
    },
    {
      label: "Who keeps it running",
      team: "It falls to whoever is keenest, then stalls when they get busy or leave the business.",
      us: "We build it and run it for one monthly fee, no contract, and hand it over if you cancel. [DECISION: handover terms]",
      why: "A system that lives in one person's head walks out the door with them.",
    },
  ],
  footnote:
    "Drawn from what Dan's seen in ten years of digital marketing. Savings and growth on your roadmap are estimates, with the working shown.",
  linkLabel: "See how we work →",
};

export const homeInsights = {
  label: "Insights",
  line1: "We test on our own first. [TBC: confirm with Dan]",
  line2: "Then Dan writes it up.",
  lead: "Notes on building with AI: what works, what doesn't and what it actually costs to run.",
  action: "All insights →",
};

export const start = {
  label: "Start",
  line1: "Not sure where AI fits yet?",
  line2: "Send a note and Dan will reply.",
  reassurance: "No pressure and no contract. We take on a small handful of clients at a time.",
};

export const servicesPage = {
  label: "Services & Pricing",
  line1: "AI doing the actual work.",
  line2: "One monthly fee.",
  lead: "Marketing, software and AI automation for Australian businesses with 5 or more staff, run from Melbourne. A$3,500 a month, no GST. AI model costs included. No contract.",
  buildLabel: "What we build",
  buildTitle: "Outsourced marketing team.",
  offerLabel: "The offer",
  howLabel: "How it works",
  fineLabel: "Fine print",
  fineTitle: "In plain English.",
  questionsLabel: "Questions",
  questionsTitle: "Before you get in touch.",
  meta: "In the fee",
  kinds: [
    {
      title: "AI automation",
      body: "Admin, quotes, sales follow-ups and onboarding. Built one at a time and looked after by us.",
      href: "/services/automations",
    },
    {
      title: "Website and marketing",
      body: "Website builds, conversion work, SEO, Google Ads, social and email, written for people first.",
      href: "/services/marketing",
    },
    {
      title: "Internal tools",
      body: "A company portal that puts your data and tools in one place, so AI has something real to use.",
      href: "/services/software",
    },
    {
      title: "Safety and security",
      body: "[TBC: safety paragraph from Dan, short version]",
      href: "",
    },
  ],
  ownProducts: "Our own companies, ReviewBuddy and Flexfolio, run on the same systems.",
};

export const faq = [
  {
    q: "What happens on the call?",
    a: "We talk about how the business runs, what you've tried with AI and where it could make the most difference. It's free. [DECISION: length and format, e.g. 60 minutes on a video call]",
  },
  {
    q: "How do I know it'll be worth it?",
    a: "Before you decide, we work out what each automation could save your team and the growth it could bring, and map out how long each takes to get running and start paying back. They're estimates with the working shown, not promises.",
  },
  {
    q: "Are the savings guaranteed?",
    a: "No. They're estimates, and we'll walk you through how we got to each one. What we do promise is the one-month test: if an automation isn't working, we switch it off.",
  },
  {
    q: "Are the AI model costs extra?",
    a: "No. They're in the A$3,500. We pick the model for each job and keep an eye on the spend, so there's no second bill. [DECISION: fair-use limit]",
  },
  {
    q: "Will this be out of date in six months?",
    a: "We try new models and tools on our own companies first. When something works better, we bring it into yours. [TBC: confirm with Dan]",
  },
  {
    q: "Do we have to build the portal first?",
    a: "No. We usually start with a couple of automations and build the portal once you can see the value. It's usually about a month of work, at the same fee.",
  },
  {
    q: "What happens if we cancel?",
    a: "Cancel any month. We hand over everything we've built and show you what it would cost to run on your own accounts. [DECISION: handover terms]",
  },
];

export const contactCopy = {
  label: "Contact",
  line1: "The first step is free.",
  line2: "Tell Dan where AI should help.",
  lead: "Send a note below. Dan reads these and replies by email.",
  fallbackBefore: "The form isn't connected yet. Email Dan at",
  name: "Name",
  email: "Email",
  company: "Company, optional",
  website: "Website, optional",
  message: "What do you want help with?",
  errors: {
    name: "Enter your name.",
    email: "Enter a full email address.",
    website: "Enter a website like example.com.au, or leave it blank.",
    message: "Say what you want help with.",
  },
  send: "Send enquiry",
  sending: "Sending",
  invalid: "Check the fields and try again.",
  success: "Thanks. I'll get back to you within one business day.",
  errorBefore: "That didn't send. Email",
  errorAfter: "and it'll get there.",
  asideEmail: "Email",
  asideBased: "Based in",
  based: "Melbourne",
};

export const insightsCopy = {
  label: "Insights",
  title: "Notes on the work.",
  lead: "Dan writes about building software and automations with AI: what works, what doesn't and what it actually costs to run.",
  empty: "The first articles are on the way.",
  all: "All",
  older: "Older articles →",
  newsletterLabel: "Newsletter",
  newsletterTitle: "Get the next one by email.",
  newsletterPitch:
    "What works, what doesn't and what it costs, from Dan. Sent when there's something worth saying.",
  newsletterButton: "Subscribe on Substack ↗",
  substackDecision: "[DECISION: Substack URL]",
  articleLine1: "Liked this one?",
  articleLine2: "Get the next one by email.",
  authorName: "Dan Kovac",
  authorBio:
    "Dan spent ten years in digital marketing. Now he builds software and automations at Roadmap Labs, in Melbourne.",
  aboutLink: "About Dan →",
  related: "Keep reading.",
};

export const categories = [
  { slug: "building-with-ai", name: "Building with AI" },
  { slug: "what-to-build", name: "What to build" },
  { slug: "automations", name: "Automations" },
  { slug: "writing-for-people", name: "Writing for people" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const pageSize = 12;

export const aboutCopy = {
  label: "About",
  title: "Roadmap Labs is Dan Kovac, in Melbourne.",
  lead: "Dan did ten years in digital marketing. Now he runs Roadmap Labs and his own companies, Flexfolio and ReviewBuddy.",
  body: [
    "I've been in business one way or another since I was 15, mowing lawns with Dad's mower. Then I did ten years in digital marketing. Social media led to copywriting, copy to design, design to websites and apps. Each step was a client asking for the next thing.",
    "The businesses I talk to aren't short on tools. Most pay a few thousand dollars a month for software and use a fraction of it. They know AI could help. They haven't had the time to work it out, their tools and data aren't set up for it, and they're not sure how to use it safely with client data. Most don't know where to start.",
    "Marketing goes the same way. They know they should do more of it, but there's no budget for an agency, no time to do it themselves and nobody they trust to hand it to. Meanwhile quotes, follow-ups and data entry eat the team's week.",
    "Roadmap Labs is how I fix that. We set up the tools and data first, then put AI to work one job at a time, and keep the marketing going out. I run my own companies, Flexfolio and ReviewBuddy, on the same systems. [TBC: refine after Dan's article idea]",
  ],
  problemLabel: "What we keep seeing",
  problemTitle: "Why AI isn't working for most businesses yet.",
  problems: [
    {
      title: "No time to work it out",
      body: "The team's flat out running the business. Nobody has a spare week to learn the tools and test what works.",
    },
    {
      title: "Tools that don't connect",
      body: "A few thousand a month on software, most of it underused, with the data spread across all of it.",
    },
    {
      title: "Unsure it's safe",
      body: "If you can't say where client data goes and who sees it, it's easier not to start.",
    },
    {
      title: "Marketing keeps slipping",
      body: "No budget for an agency and nobody you trust with it. Admin takes the hours that marketing needed.",
    },
  ],
  howLabel: "How we work",
  howTitle: "The right job first, then the build.",
  beliefs: [
    {
      title: "The right thing first",
      body: "Building is the easy part now. Working out what's worth building is where most of our time goes.",
    },
    {
      title: "A month to prove it",
      body: "Every automation gets a one-month test. If it isn't working, we switch it off and try the next one.",
    },
    {
      title: "Written for people",
      body: "Anything we publish for you has to be worth a real person's time. Writing for the algorithm doesn't count.",
    },
    {
      title: "Foundations first",
      body: "Your tools and data get set up before the clever bits, so AI has something real to work from.",
    },
  ],
  companiesLabel: "Our own companies",
  companiesTitle: "We run our own companies on the same systems.",
  companies: [
    {
      name: "ReviewBuddy",
      body: "Google review software for Australian tradies. Our own company, in beta, on our systems.",
      href: "/projects/review-buddy",
    },
    {
      name: "Flexfolio",
      body: "A portfolio platform for product managers. Our own company, in beta, on our systems.",
      href: "/projects/flexfolio",
    },
  ],
  photo: "[PHOTO TBC]",
  sameAs: "[DECISION: LinkedIn, Substack and X URLs for sameAs]",
};

export const workIndex = {
  label: "Work",
  title: "Client work, and the companies we run ourselves.",
  lead: "Flexfolio and ReviewBuddy are our own companies. Both are in beta, and both run on the systems we build. Client work is shown with the client's OK.",
  cards: [
    {
      name: "Compass Buyers Agency",
      body: "A website project for a buyers agency from Byron Bay to the Gold Coast.",
      services: "Website · SEO · CRO",
      meta: "View →",
      href: "/projects/compass-buyers-agency",
    },
    {
      name: "ReviewBuddy",
      body: "Google review software for Australian tradies. Our own company, in beta, on our systems.",
      services: "Own company · In beta · AI automation",
      meta: "View →",
      href: "/projects/review-buddy",
    },
    {
      name: "Flexfolio",
      body: "A portfolio platform for product managers. Our own company, in beta, on our systems.",
      services: "Own company · In beta · AI automation",
      meta: "View →",
      href: "/projects/flexfolio",
    },
  ],
};

export const marketingPage = {
  label: "Part of the partner plan",
  line1: "SEO, websites, Google Ads.",
  line2: "Kept running for you.",
  lead: "We're a Melbourne SEO agency and Google Ads agency for small businesses, and we build the website too. It's all in the one partner plan, at the same fee.",
  planLink: "What's in the plan →",
  sections: [
    {
      id: "MS1",
      label: "01 · Websites",
      title: "Web design for Melbourne small businesses.",
      body: "Sites that say what you do, who it's for and why it matters, in plain words. We build it, then keep it up to date inside the plan. [TBC: website scope, Dan confirming]",
    },
    {
      id: "MS2",
      label: "02 · SEO",
      title: "An SEO agency that writes for people.",
      body: "Pages and articles written for the person searching first, then for Google. We pick the searches worth winning and keep at it every month.",
    },
    {
      id: "MS3",
      label: "03 · Google Ads",
      title: "Google Ads management from a Melbourne agency.",
      body: "We set up the campaigns, write the ads and keep an eye on what each click costs. Management is in the plan. [TBC: Dan confirming whether ad spend is included]",
    },
    {
      id: "MS4",
      label: "04 · Conversion",
      title: "A site that turns visits into calls.",
      body: "We look at where people leave, fix the pages that lose them and test the changes, so more of the visits you already get turn into enquiries.",
    },
    {
      id: "MS5",
      label: "05 · Social and email",
      title: "Social and email that keep going out.",
      body: "Posts and emails written for people first and sent on schedule, so the marketing doesn't stop when the week gets busy. [TBC: client sign-off before it goes out]",
    },
  ],
  proof: {
    label: "06 · Client work",
    title: "Website, SEO and conversion for Compass.",
    body: "We built the website for Compass Buyers Agency, with the SEO and conversion work. [TBC: result, with Compass's OK]",
    link: "Read the Compass case study →",
    href: "/projects/compass-buyers-agency",
  },
  fee: {
    label: "07 · The fee",
    title: "One fee for all of it.",
    priceLine,
    lead: "Marketing is one part of the partner plan. The same fee covers AI automation, software and internal tools.",
    rows: [
      { label: "SEO campaign, well run", figure: "About A$2,000/mo" },
      { label: "Agency fee for Google Ads management", figure: "About A$1,000/mo" },
      { label: "Together", figure: "About A$3,000/mo" },
      { label: "Roadmap Labs, everything in the plan", figure: "A$3,500/mo" },
    ],
    footnote:
      "Typical costs from Dan's ten years in digital marketing. The ad row is the agency's management fee on its own.",
    link: "See everything in the plan →",
  },
  questionsTitle: "Before you get in touch.",
  heldQuestions: [
    { q: "Is Google Ads spend included?", a: "[TBC: Dan confirming]" },
    {
      q: "Is a new website included?",
      a: "[TBC: website scope, Dan confirming] [DECISION: fair-use limit]",
    },
  ],
  questions: [
    {
      q: "Do you write the content?",
      a: "Yes. We write the pages, posts and emails for the people reading them first, then for search. [TBC: client sign-off before anything goes out]",
    },
    {
      q: "Do you only work with Melbourne businesses?",
      a: "No. We're based in Melbourne and work with Australian businesses wherever they are.",
    },
    {
      q: "Is it a separate fee?",
      a: "No. It's the same partner plan: A$3,500 a month, no GST. AI model costs included. No contract.",
    },
    {
      q: "What happens if we cancel?",
      a: "Cancel any month. We hand over everything we've built. [DECISION: handover terms]",
    },
  ],
  close: {
    label: "Start",
    line1: "Marketing keeps getting dropped?",
    line2: "Send a note and Dan will reply.",
    reassurance: "No pressure and no contract. We take on a small handful of clients at a time.",
  },
};

export const notFoundCopy = {
  label: "404",
  line1: "This page isn't here.",
  line2: "The rest of the site is.",
  lead: "The link may be old, or the page has moved. Head home, or send an enquiry if you were looking for Dan.",
  home: "Back to home →",
};

export const privacyCopy = {
  label: "Privacy",
  title: "Privacy policy",
  consent: "[TBC: Dan's preference on cookie consent]",
  missing: "This page states what the site does today. It is not a lawyer-reviewed policy. [COPY: privacy policy, legal review]",
};

export const caseStudy = {
  next: "Next project →",
};
