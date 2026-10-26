# Roadmap Labs website

Public marketing site for [Roadmap Labs](https://roadmaplabs.com.au). Next.js App Router, ready for a Vercel preview.

This repository is the public site only. Case studies are markdown. Insights are MDX.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run test:unit
npm run build
npm run test:e2e
```

End-to-end tests expect a production server. `npm run test:e2e` starts one after `npm run build`. Install browsers once with `npx playwright install chromium`.

Do not set `VERCEL_ENV=production` for a preview or CI build. Placeholder markers are allowed on preview and fail a production build on purpose until the remaining `[TBC]`, `[CONFIRM]` and `[DECISION]` lines are resolved.

## Routes

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/services` | Monthly plan, comparison, seven live questions |
| `/services/automations` | Business automation |
| `/services/marketing` | SEO, websites and Google Ads |
| `/services/software` | Custom software |
| `/projects` | Work index |
| `/projects/[slug]` | Case study, from `content/work` |
| `/insights` | Article list. Hidden from the homepage and sitemap until three articles are live |
| `/insights/[slug]` | Article, from `content/insights`. Canonical is always `https://roadmaplabs.com.au/insights/<slug>` |
| `/about` | Dan Kovac |
| `/contact` | Form |
| `/privacy` | Privacy note |
| `/brand/roadmap-labs-email-signature-black.png` | Stable email-signature image. Do not redirect or rename it |

## Edit a case study

Add or change a file in `content/work`. Set `publish: false` to keep a study off the production site while it still shows on preview. Compass Buyers Agency stays unpublished until Dan signs it off.

Keep result and testimonial slots as visible markers until there is a real figure or a real quote. Do not invent either.

## Write an insight

Add `content/insights/<slug>.mdx`. Do not set `canonical`, `canonicalUrl`, or `substack` in frontmatter. Every article is self-canonical on roadmaplabs.com.au. The Insights blog is separate from Dan's personal Substack.

Set `draft: true` and `date: "[DATE TBC]"` until the piece is ready to publish. Drafts are omitted from the production site.

## Optional environment variables

The site builds without these. Nothing below is invented in the repo.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_URL` | HTTPS booking page. Book a call uses the contact form until this is set. |
| `CONTACT_FORM_ENDPOINT` | HTTPS endpoint that accepts a JSON POST. Until this is set, the form stores nothing and does not send email. |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID. Analytics stays off until this is set. |

Contact on the site remains `dan@roadmaplabs.com.au`.
