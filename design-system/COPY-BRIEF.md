# COPY-BRIEF: Roadmap Labs site, v1.1 (slot requests only)

**To:** Roadmap Labs copywriter
**From:** Brand design
**Date:** 25 October 2026, evening (AEDT)

**All site wording lives in `../copy/`** (`homepage.md`, `offer.md`, `contact.md`, `insights.md`, `NOTES.md`). Limits are checked with `cd ../copy/_tools && python3 slots.py home|services|pages`. This file no longer holds any copy. Earlier versions mixed in lines written for the renders; those are withdrawn (the v1.0 file is archived at `/tmp/CB.08.md` on the build box only).

Design places labelled slot markers, `[COPY: what it is, ≤N chars]`, wherever no copy exists. The list below is every marker in the Direction 09 renders. Please add each to the copy files with the slot ID you choose, then design will drop it in.

Tone rules still apply: Australian English, sentence case, no em or en dashes, no results, metrics, quotes or testimonials, CTA "Book a call", no price in the hero, never "weekly" for Dan Kovac Builds.

## Site-wide
| Slot | Limit | Where |
|---|---|---|
| Mobile menu open label | ≤ 8 | header toggle, below 1024 |
| Mobile menu close label | ≤ 8 | header toggle, menu open |
| Skip link | ≤ 24 | first focusable element |
| Dan Kovac Builds banner strapline | short, mono, one line | Substack banner (DESIGN-SYSTEM §12) |

## Home and Services
| Slot | Limit | Where |
|---|---|---|
| Hero pick | 32 / 32 / 150 | Dan chooses one of the four options in `homepage.md` (renders show option 1 as a placeholder) |
| Selected work H2 | ≤ 52 | home section 03 (the W5 lead currently leads) |
| `/services` section labels 01, 04, 05 | ≤ 14 / ≤ 20 | mono section labels |
| `/services` section H2 | ≤ 26 | as marked in `09-services.png` |
| `/services` small label | ≤ 14 | as marked in `09-services.png` |

## Home `/`, Direction 11 (26 Oct 2026): slot list in page order
Supersedes the home rows in "Home and Services" above. Renders: `../directions/11-home.png`, `11-home-mobile.png`, `11-what-we-do.png`. Proper nouns already placed: ReviewBuddy, Flexfolio, Compass Buyers Agency, Compass OS, Roadmap Labs, "Book a call". Nav and footer are unchanged from 10.

| # | Section | Slot | Limit |
|---|---|---|---|
| 1 | Header | Mobile menu label | ≤ 8 |
| 2 | Hero | Eyebrow (mono) | ≤ 40 |
| 3 | Hero | Headline: what Roadmap Labs does | ≤ 60 |
| 4 | Hero | Sub: who it's for and what they get | ≤ 140 |
| 5 | Hero | Secondary link to What we do (beside "Book a call") | ≤ 24 |
| 6 | Hero | Optional microcopy under the buttons (no price) | ≤ 60 |
| 7 | 01 What we do | Section label | ≤ 16 |
| 8 | 01 What we do | H2 | ≤ 48 |
| 9 | 01 What we do | Lead | ≤ 160 |
| 10 | 01 What we do | Software: title / description | ≤ 32 / ≤ 140 |
| 11 | 01 What we do | Software: case study label (above "Flexfolio →") | ≤ 16 |
| 12 | 01 What we do | Automations: title / description | ≤ 32 / ≤ 140 |
| 13 | 01 What we do | Automations: case study label (above "Compass Buyers Agency", Private, pending permission) | ≤ 16 |
| 14 | 01 What we do | Marketing automations: title / description | ≤ 32 / ≤ 140 |
| 15 | 01 What we do | Marketing automations: case study label (above "ReviewBuddy →") | ≤ 16 |
| 16 | 02 How it works | Section label / H2 / lead | ≤ 16 / ≤ 48 / ≤ 160 |
| 17 | 02 How it works | Step 1 (discovery session): title / body | ≤ 32 / ≤ 140 |
| 18 | 02 How it works | Step 2 (proposal with ROI): title / body | ≤ 32 / ≤ 140 |
| 19 | 02 How it works | Step 3 (the build): title / body | ≤ 32 / ≤ 140 |
| 20 | 02 How it works | Reassurance line beside "Book a call" | ≤ 60 |
| 21 | 03 Selected work | Section label / H2 / lead | ≤ 16 / ≤ 52 / ≤ 120 |
| 22 | 03 Selected work | "All work" link | ≤ 16 |
| 23 | 03 Selected work | One-line description × 4 (Compass Buyers Agency, Compass OS, ReviewBuddy, Flexfolio) | ≤ 90 each |
| 24 | 04 The offer | Section label / H2 / lead | ≤ 16 / ≤ 48 / ≤ 160 |
| 25 | 04 The offer | Plan label / price / price note (unit is fixed as `/mo`; no GST charged, never "incl. GST") | ≤ 20 / figure / ≤ 100 |
| 26 | 04 The offer | Included items × 6 | ≤ 80 each |
| 27 | 04 The offer | Comparison header | ≤ 28 |
| 28 | 04 The offer | Benchmark labels × 3, each with a figure | ≤ 48 / ≤ 12 |
| 29 | 04 The offer | Total label + figure; Roadmap Labs figure; difference label + figure | ≤ 16 / ≤ 12; ≤ 16; ≤ 16 / ≤ 12 |
| 30 | 04 The offer | Table footnote: source and basis | ≤ 200 |
| 31 | 04 The offer | Fine print × 4: title / body | ≤ 24 / ≤ 160 |
| 32 | 05 Insights | Section label / H2 / "All insights" link | ≤ 16 / ≤ 40 / ≤ 16 |
| 33 | 05 Insights | Per article (from content): category / date / title / dek | ≤ 24 / ≤ 12 / ≤ 72 / ≤ 120 |
| 34 | 06 Start | Section label / closing H2 | ≤ 16 / ≤ 60 |
| 35 | 06 Start | Secondary button (beside "Book a call") | ≤ 16 |
| 36 | 06 Start | Closing small print (no price) | ≤ 100 |

Rules: no price in the hero; the price first appears in 04. No results, metrics, quotes or testimonials. Nothing about Compass is published until Compass gives written OK.

## Insights
| Slot | Limit |
|---|---|
| Featured label | ≤ 12 |
| Read link | ≤ 16 |
| Page indicator ("Page 1 of 2" style) | ≤ 16 |
| Article count | ≤ 16 |
| Category description, one per I6 category | ≤ 160 |
| Article deks | ≤ 160 (written per article) |

The article body slots in `09-insights-article.png` (H2, H3, pull quote ≤ 140, quote source ≤ 40, caption ≤ 120, footnote ≤ 200, code sample) are per-article and Dan writes them.

## Work `/projects`
Work H1 ≤ 52 · Work lead ≤ 160 · services list per project ≤ 60.

## Case study `/projects/[slug]`
Case study H1 ≤ 60 · client fact values ≤ 30 · services ≤ 30 · year ≤ 10 · live link label ≤ 30 · section H2s "the brief", "what we built", "where it is now" ≤ 48 each · body paragraphs (Dan writes) · image captions ≤ 120 · next project label ≤ 20. Rule: no metrics, quotes or testimonials. Compass needs written OK before it's named.

## About `/about`
About H1 ≤ 52 · About lead ≤ 160 · section label ≤ 20 · "How we work" H2 ≤ 52 with 3 beliefs (title ≤ 24, body ≤ 120) · "Our own companies" H2 ≤ 52 · body paragraphs (Dan writes).

## 404
H1 line 1 (grey) ≤ 32 · H1 line 2 (ink) ≤ 32 · lead ≤ 120 · home link ≤ 16.
