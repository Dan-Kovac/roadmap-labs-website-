# ENGINEER-HANDOFF-NOTES: Roadmap Labs site, Direction 10 (+ Direction 11 home)

> **Update 26 Oct 2026 (AEDT): Direction 11 replaces the home page order.** Dan: the home page went "straight into the pricing before even explaining what we do". New order: Hero (no price) → 01 What we do (new WhatWeDo / ServiceBlock component) → 02 How it works (dark: discovery session → proposal with ROI → build) → 03 Selected work → 04 The offer (price, included, comparison, fine print) → 05 Insights (3+ live articles only) → 06 Start (dark). Spec: `ENGINEER-SPEC.md` §6.1 (new) and the WhatWeDo row in §5; the Direction 10 order is kept as §6.1a for PlanBlock detail. Dan is writing the new home copy; renders carry slot markers only (list in `COPY-BRIEF.md`). Renders: `../directions/11-home.png`, `11-home-mobile.png`, `11-what-we-do.png`. Sources: `../build/11/`. All other pages stay on Direction 10. Tokens unchanged.

> **Update 26 Oct 2026, 9:55 AM (AEDT): pairing A approved; LaptopFrame added.** Every What we do screenshot now sits in a generic SVG laptop (`assets/device/laptop.svg`, spec §5.1, sheet `../directions/11-laptop-frame.png`). Flexfolio shows an interim real capture of the public demo profile; Compass is in the held state; ReviewBuddy shows a capture-needed placeholder. Screens still needed: open decision 15.

**Date:** 25 October 2026, 9:20 PM (AEDT). Direction 10 = Direction 09 with the locked type (Inter Display + JetBrains Mono). **Status:** ready to build, with the open decisions below. **Start here**, then read `ENGINEER-SPEC.md` (what to change in the repo) and `DESIGN-SYSTEM.md` (rules and exact values).

> **Brand.** Black and white only. Dan confirmed this system replaces the old brand kit (Petrol / Pitch / Cream / Ochre, RL shield, Big Shoulders + Newsreader in `Dan-Kovac/RoadmapLabs` `context/brand-kit`). **That kit is RETIRED.** Don't build from it. Roadmap Blue is also gone.
>
> **Copy.** Every word comes from `../copy/*.md`. Renders show `[COPY: …, ≤N chars]` slot markers where no copy exists, plus `[DECISION: …]`, `[CONFIRM …]`, `[OPTION]` and `[RULE: …]` review markers. Build those as content fields. None of them may reach production (§8 of the spec has a test).
>
> **Repo.** Design has not touched `Dan-Kovac/roadmap-labs-website-` or any other repo. Everything here is a file on the design box for you to port.

## 1. Tokens
- Source of truth: `tokens.json` (v1.2.0). Generated: `tokens.css` and `tailwind.config.snippet.js`. **Never hand-edit either.** Change `tokens.json`, then run `node design-system/scripts/build-tokens.mjs` and commit all three.
- Fonts (locked): `font.family.sans` `"Inter Display", "Inter", ui-sans-serif, system-ui, sans-serif`; `font.family.mono` `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`; `font.variable` `--font-sans` / `--font-mono` (the names next/font sets). `font.opticalSizing` "auto" (emitted as `html { font-optical-sizing: auto }`); `font.features.mono` `"calt" 0` (`--rl-font-mono-features`, `.rl-mono`). Loaded with `next/font/local` (spec §2).
- Type: display 80 / 56 / 40, 600, −0.03em (`clamp(40px, 7.3vw, 80px)` if you want it fluid); H1 72 / 52 / 38, 600, −0.03em; H2 48 / 40 / 32, 600, −0.025em; H3 28 / 24 / 22, 500, −0.02em; H4 20 / 18 / 18, 500, −0.015em; lead 20 / 18 / 18, 400, −0.01em; body 16, 400, 0; price 88 / 88 / 64, 600, −0.04em, tabular; mono 12, 400, +0.02em. Display, H1, H2 and price carry `opsz: 32` in the JSON (`--rl-text-*-opsz`) as documentation of what `auto` resolves to; never apply it as `font-variation-settings`.
- Motion: `motion.menu` 200ms open, 150ms close, `cubic-bezier(0.2, 0, 0, 1)`, translateY −8px. No scroll reveal.
- `colorScheme.site` is "light". No site-wide dark mode, no `[data-theme="dark"]`, ignore `prefers-color-scheme`. Dark only inside `.rl-dark` sections.
- Also here: `tailwind.config.snippet.js` (generated Tailwind theme.extend: colours, fonts, `text-rl-*` sizes, spacing, radius, screens, motion, z), `components.html` (v1.0 component sheet; superseded for states by `10-states.png`).

## 2. Files in `design-system/assets/`
| Path | What | Use |
|---|---|---|
| `fonts/InterVariable.woff2` | Inter 4.1 variable (wght 100 to 900, opsz 14 to 32), Latin subset, 115 KB | `next/font/local`, `--font-sans` (spec §2). Not the Google Fonts build, which lacks → and ↗ |
| `fonts/JetBrainsMono-Variable.woff2` | JetBrains Mono 2.304 variable (wght 100 to 800), Latin subset, 52 KB | `next/font/local`, `--font-mono`, `preload: false` |
| `fonts/InterDisplay-SemiBold-600.ttf`, `JetBrainsMono-Regular-400.ttf` | Static TTFs, Latin subsets | `next/og` only (it can't read woff2) |
| `fonts/OFL-Inter.txt`, `OFL-JetBrainsMono.txt` | SIL Open Font License 1.1 | Ship next to the fonts |
| `fonts/README.md` | Files, sources, subset range, settings | |
| `fonts/_archive/geist/` | Retired Geist files | **Don't ship** |
| `logo-svg/roadmap-labs-black.svg`, `roadmap-labs-white.svg` | v2 wordmark, svgo'd | Header, footer, dark sections → `public/brand/` |
| `logo-svg/roadmap-labs-mark-black-square.svg`, `-white-square.svg` | Mark in a true square (0 0 320 320) | Avatars, social, JSON-LD alternative |
| `logo-v2/*.svg` | Editable masters (incl. `roadmap-labs-black-greylabs.svg` variant and `roadmap-labs-blue-reference.svg`, the untouched live file for comparison) | Source only, don't ship |
| `logo-v2/png/` | Wordmark @1x/2x/4x, mark 512 and 1024, black and white | JSON-LD `logo` = `roadmap-labs-mark-black-512.png` |
| `favicon/favicon.svg`, `favicon.ico` (16/32/48), `favicon-16.png`, `favicon-32.png` | White mark on an Ink tile | `app/icon.svg`, `app/favicon.ico` |
| `favicon/apple-touch-icon.png` | 180, Ink full bleed | `app/apple-icon.png` |
| `favicon/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `site.webmanifest` | PWA icons and manifest (`theme_color` #FFFFFF) | `public/` |
| `og/og-site.png` (+@2x) | Site default OG, Ink | `app/opengraph-image.png`, `app/twitter-image.png` |
| `og/og-title.png`, `og-title-short.png` (+@2x) | Title template examples, White | Reference |
| `og/opengraph-image.tsx` | next/og template for articles and case studies | `app/insights/[slug]/opengraph-image.tsx` |
| `og/src/*.html`, `og/README.md` | Sources and notes | |
| `logo/`, `icons/` | v1.0 sets | **Superseded. Don't ship** |

## 3. Renders (`../directions/`)
Desktop 1440 at DSF 2, tablet 1024 and 768 at DSF 2, mobile 390 at DSF 3. Every render was checked for 0 failed font loads, both faces loaded (`document.fonts`: Inter Display 100 900, JetBrains Mono 100 800), 0 horizontal overflow, and the opsz test (the first display, H1 or H2 has the same width as opsz 32 and is narrower than opsz 14, so the Inter Display cut rendered). `jpg/` holds all of them as `10-*@2x.jpg` (q85, progressive; mobile downscaled to 780 wide) for review tools and Figma.

| Page | Route | Renders |
|---|---|---|
| Home (Direction 10, superseded order) | `/` | `10-home.png`, `10-home-1024.png`, `10-home-768.png`, `10-home-mobile.png`, `10-hero.png` |
| **Home (Direction 11, current)** | `/` | `11-home.png` (1440 @2x), `11-home-mobile.png` (390 @3x), `11-what-we-do.png` (section 01, 1440 @2x); JPGs `jpg/11-*@2x.jpg` |
| Offer block, tablet | (home and `/services`) | `10-plan-1024.png`, `10-plan-768.png` |
| Header | all | `10-header-1024.png`, `10-header-768.png`, `10-header-menu-768.png` |
| Services & Pricing | `/services` | `10-services.png`, `-mobile` |
| Contact | `/contact` | `10-contact.png`, `-mobile` |
| Work index | `/projects` | `10-work.png`, `-mobile` |
| Case study | `/projects/[slug]` | `10-case-study.png`, `-mobile` |
| About | `/about` | `10-about.png`, `-mobile` |
| Insights index | `/insights`, `/insights/page/[n]` | `10-insights-index.png`, `-mobile` |
| Insights category | `/insights/category/[slug]` (+ `/page/[n]`) | `10-insights-category.png`, `-mobile` |
| Insights empty state | `/insights` with 0 live | `10-insights-empty.png`, `-mobile` |
| Article | `/insights/[slug]` | `10-insights-article.png`, `-mobile` |
| Not found | `app/not-found.tsx` | `10-404.png`, `-mobile` |
| States sheet | | `10-states.png` (buttons, links, fields, radio tiles, FAQ, filters, form sending/success/failure, skip link) |
| Type options (history) | | `09-type-options.png` (2x, the comparison Dan chose from) |
| Logo check | | `10-logo-check.png` |

Sources: `../build/10/` (`gen10.py`, `gen10b.py`, `gen10c.py`, `og.py`, `render.sh`, `10.css` over `base08.css` and `base07.css`, which are 08/07 without the old Google font faces). Render everything: `cd build/10 && bash render.sh`; one file: `python3 shot.py in.html out.png WIDTH SCALE [HEIGHT]`. The 09 renders and `build/09/` are history. The CSS there is a design prototype, not production code; build from the spec and tokens.

## 4. Decisions made (design)
1. **Type (locked by Dan, 25 Oct):** Inter Display 600 for display, H1, H2 and price; 500 for H3, H4, buttons, nav; 400 for reading; JetBrains Mono 400 for labels and meta only. Optical size automatic. JetBrains Mono kept because it is the mono in the approved comparison, its cap height and x-height match Inter (0.73 / 0.55 vs 0.728 / 0.546) and it has → ↗ ≤.
2. **Logo v2:** wordmark paths unchanged from the live file; the mark was rebuilt on clean geometry (IoU 0.994 against the original; the largest deviation, 6.27 units, is at the acute tips) and given a true-square version. See DESIGN-SYSTEM §2.
3. **Icons:** white mark on an Ink tile at every size; the maskable icon keeps the mark inside the 80% safe circle.
4. **OG:** site default is Ink; title-driven images are White with a 12px Ink bottom bar. Title is 76px under 60 characters, 60px otherwise.
5. **Tablet (768 to 1279):** the plan block, comparison table, fine print (2-up) and home Selected work stack instead of squeezing the desktop grid.
6. **Mobile menu:** one CTA only ("Book a call"), 200 / 150ms, −8px.
7. **Insights on home** renders only with 3+ live articles. **Featured block** on `/insights` only with 4+. Filter bar only when 2+ categories have articles. Filters are routes, not query strings. 12 per page.
8. **Insights categories** are the four in `copy/insights.md` I6: `building-with-ai`, `what-to-build`, `automations`, `writing-for-people`. The category given to each example article in the renders is design's placeholder, not a content decision.
9. **Work routes** follow the repo: `/projects` and `/projects/[slug]` (nav label "Work").
10. **Prices and table figures** use `tabular-nums`.
11. **Hero:** renders show "Hero option 1 (placeholder)". Build the hero from content so Dan's pick is a one-line change.
12. **Home order (Direction 11):** explain first, price later. The price first appears in section 04. Section labels renumbered 01–06 (Start becomes 05 when Insights is hidden). Dark sections 02 and 06 are never adjacent.
13. **What we do:** three ruled columns, no card fills, aligned with CSS subgrid so titles, descriptions, screenshots and case refs line up whatever the copy length; a text-left / shot-right row at 768–1023; one column below 768. Each block carries a real case-study reference; only real screenshots, otherwise the neutral `.imgslot` placeholder.

## 5. Open decisions (Dan)
1. ~~Typeface~~ Settled 25 Oct: Inter Display + JetBrains Mono.
2. Hero: one of the four options in `copy/homepage.md`.
3. Fair-use limit for AI running costs.
4. Which running costs are included (AI only, or platforms, hosting, Retool seats too).
5. Handover terms (billing, notice, handover length, AI account transfer).
6. ~~GST basis of the benchmark figures~~ Closed 26 Oct: no GST is charged; drop the `[CONFIRM GST basis]` tag.
7. Discovery session length and format; whether "Book a call" is the discovery session or a fit chat; roadmap turnaround.
8. SQ9 and SQ10 (held, not in the HTML).
9. The Tax fine-print line: publish or leave out.
10. The Substack URL, and embed or link-out.
11. Compass's written OK to name Compass OS and show any screenshot.
12. Logo: all-Ink (default) or the grey "Labs" variant. Error colour: Ink-only or one red.
13. Missing copy: every slot is listed in `COPY-BRIEF.md` (menu, close and skip labels; Work, case study, About and 404 pages; Insights labels and category descriptions; `/services` section labels; home Selected work H2).
14. ~~What we do pairing~~ **Settled 26 Oct 2026:** Dan approved the Direction 11 order and pairing A (Software → Flexfolio, Automations → Compass Buyers Agency / Compass OS, Marketing automations → ReviewBuddy).
15. **Assets for What we do (LaptopFrame, spec §5.1), each 2880 × 1800 PNG, logged in, demo data only:** (a) Flexfolio portfolio editor and/or dashboard (none on file; the render uses an interim real 1440 × 900 capture of the public demo profile flexfolio.co/alex-morgan, which shows Atlassian and Canva logos as part of the demo persona); (b) ReviewBuddy Reviews dashboard (none clean on file; `rbw/public/images/reviews-breakdown.png` is the real app but carries hand-drawn annotation arrows and real reviewers' names, so it is not used); (c) Compass held until written OK.
16. **New home copy:** Dan is writing it; every slot is in `COPY-BRIEF.md` "Home `/`, Direction 11".
The full copy-side list is `copy/NOTES.md` §3.

**Not open:** the old Petrol / Ochre / Big Shoulders kit (retired), Roadmap Blue (removed), "Book a call", A$3,500/mo partner plan including AI running costs (no GST charged; never write "incl. GST"), no results or testimonials, no price in the hero, 7 FAQ items, no dark mode, no scroll reveal.
