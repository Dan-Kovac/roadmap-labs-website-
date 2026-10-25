# Roadmap Labs website

Public marketing site for [Roadmap Labs](https://roadmaplabs.com.au). Next.js App Router, ready for a Vercel preview.

This repository is the public site only. Case studies and articles are markdown files, so they can be edited without touching the layout.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run test:e2e
```

End-to-end tests expect a production server. `npm run test:e2e` starts one. Install browsers once with `npx playwright install chromium`.

## Routes

| Path | What it is |
| --- | --- |
| `/` | Fold, three offers, how we work, selected work |
| `/services` | The three offers, plus website, SEO and conversion |
| `/projects` | Work grid |
| `/projects/[slug]` | Case study, from `content/work` |
| `/insights` | Article list |
| `/insights/[slug]` | Article, from `content/insights` |
| `/about` | Short note on Dan |
| `/contact` | Form. Sends only when a destination is configured |

## Edit a case study

Add or change a file in `content/work`. Keep `result` and `testimonial` as `[RESULT TBC]` and `[TESTIMONIAL TBC]` until there is a real figure or a real quote. Do not invent either.

`shots` can point at a file in `public/work`. Leave `src` off and set `placeholder: "[SCREENSHOT TBC]"` when there is no picture.

## Duplicate a Substack article

Copy `content/insights/respect-the-time.md`. Set `canonical` to the Substack URL when the piece is published there. Leave it empty until then. The page shows `[SUBSTACK URL TBC]` and does not point search engines at a made-up address.

```yaml
---
slug: your-slug
title: The headline
date: 2026-10-25
dek: One sentence.
canonical: https://example.substack.com/p/the-note
order: 3
---
```

Write the article in markdown under the frontmatter.

## Optional environment variables

Neither is required. The site builds and the form still works without them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_URL` | HTTPS booking page. Book a call uses the contact form until this is set. |
| `CONTACT_FORM_ENDPOINT` | HTTPS endpoint that accepts a JSON POST. Until this is set, the form stores nothing and does not send email. |

Contact on the site remains `dan@roadmaplabs.com.au`.
