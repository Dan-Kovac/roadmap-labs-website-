# Roadmap Labs Design System, v1.2 "Mono"

Status: approved base (Direction 06 "Mono"), black and white only. v1.1 (Direction 09) added the rebuilt logo, favicons, OG templates, the Insights spec and slot-marker renders. v1.2 (Direction 10) locks the type: Inter Display + JetBrains Mono.
Owner: Roadmap Labs brand. Last updated: 25 October 2026, evening (AEDT).
Source of truth for values: `tokens.json` (v1.2.0). `tokens.css` and `tailwind.config.snippet.js` are generated from it with `node design-system/scripts/build-tokens.mjs`. Never hand-edit either; change the JSON and re-run.
Reference renders: `../directions/10-*.png` (current). The 06 to 09 renders are history.
Engineer entry point: `ENGINEER-HANDOFF-NOTES.md` (every file, token, page and open decision).

> **Retired brand kit.** Dan confirmed on 25 Oct 2026 that this black-and-white system **replaces** the old brand kit in `Dan-Kovac/RoadmapLabs` `context/brand-kit` (v1.0, Aug 2026: Petrol / Pitch / Cream / Ochre, the RL shield, Big Shoulders + Newsreader). That kit is **retired**. Don't use its colours, shield or fonts anywhere, and don't treat it as an open decision.

---

## 1. Principles

1. **One idea per view.** Each section makes one point: a headline, one supporting line and one action.
2. **Type does the work.** Inter Display 600 for display, 500 for UI and item titles, 400 for reading (locked, see section 4). Hierarchy comes from size and a second voice in grey, not from colour.
3. **Black, white and greys. Nothing else.** Ink `#0B0D12` on White. Ink sections are used as an inverse for rhythm, at most two per page.
4. **Hairlines, not boxes.** Structure comes from 1px rules and whitespace. Cards have no fill and no shadow.
5. **Real things only.** We show real screenshots of live, shipped work with the client's OK. Copy is plain-spoken and in Australian English.
6. **Quiet motion.** Only state changes move (hover, menu, accordion). No scroll reveal. Nothing bounces, loops or follows the cursor.

### What we don't do
- No gradients, glows, blurs, glassmorphism, noise or grain.
- No coloured accents of any kind. That includes the former Roadmap Blue `#067DFB` and `#2A62F0`, and the logo.
- No status chips, pills used as labels, badges, "New" tags, progress bars or fake dashboard tiles.
- No fake UI, mock screens, invented logos, client logo walls, testimonials, star ratings or metrics. If something isn't real and approved, the slot stays out of the build. It does not ship as a placeholder.
- No Petrol, Pitch, Cream or Ochre, no RL shield, no Big Shoulders or Newsreader (old kit, retired).
- No stock photography, 3D renders, AI-generated people or illustrations of "tech".
- No emoji in the UI. No all-caps headings. Mono is used for meta only, never for body copy.
- No drop shadows on cards or images. The only "elevation" is a 1px ring.

---

## 2. Logo

**Current files: `assets/logo-v2/` (masters) and `assets/logo-svg/` (svgo-optimised, use these in the site).** `assets/logo/` is the v1.0 set (live-site paths recoloured) and is kept for reference only.

**What changed in v2 (rebuild).** The live-site SVG is an auto-trace: the R mark is about 300 tiny curve segments with wobble on every edge. In v2 the mark is redrawn as clean geometry fitted to that trace: the bowl is two concentric arcs joined by horizontals, and the leg and the second stroke are straight parallel diagonals at the traced angle. The fit was checked by overlay (`../directions/10-logo-check.png`): intersection over union **0.994** with the original, and the largest deviation is **6.27 units** (of 1206), only at the acute tips, where the trace had rounded the points. The wordmark glyph outlines ("Roadmap", "Labs") are the live file's paths, flattened and unchanged. Same 1206 × 364 box, same proportions, so it's a drop-in swap.

| File | Use |
|---|---|
| `logo-svg/roadmap-labs-black.svg` | **Default.** Full lockup in Ink `#0B0D12` on White or Paper. viewBox `128 577 1206 364`, `role="img"`, `<title>`. |
| `logo-svg/roadmap-labs-white.svg` | Full lockup in White, on Ink sections, dark OG and dark social. |
| `logo-svg/roadmap-labs-mark-black-square.svg` / `-white-square.svg` | R mark centred on a true square artboard, viewBox `0 0 320 320`. Avatars, favicons, tight spaces. |
| `logo-v2/*.svg` | Unoptimised masters (black, white, grey "Labs" variant, marks). `roadmap-labs-blue-reference.svg` is the old blue file, kept only to show what was replaced. Never use it. |
| `logo-v2/png/` | Lockup at @1x/@2x/@4x and the mark at 512/1024, black and white, transparent. For decks and documents. |
| `favicon/` | See section 2.1. |

### 2.1 Favicons and app icons (`assets/favicon/`)
The icon is the **white mark on an Ink tile**. It reads better in browser tabs (mostly light UI) than a black mark with no tile.
| File | Spec |
|---|---|
| `favicon.svg` | Ink tile, radius 112 of 512, white mark at 60%. Modern browsers. |
| `favicon.ico` | 16 / 32 / 48. Legacy. |
| `favicon-16.png`, `favicon-32.png` | PNG fallbacks. |
| `apple-touch-icon.png` | 180 × 180, square, full-bleed Ink (iOS rounds it, so no rounding in the file). |
| `icon-192.png`, `icon-512.png` | Rounded Ink tile with transparent corners (manifest `purpose: any`). |
| `icon-maskable-512.png` | Full-bleed Ink, mark at 50%, inside the 80% safe circle (checked). Manifest `purpose: maskable`. |
| `site.webmanifest` | name / short_name "Roadmap Labs", icons 192 + 512 any + 512 maskable, theme and background `#FFFFFF`, `display: browser`, `start_url: /`. |

`assets/icons/` (black on white, white on black) is the v1.0 set, superseded by `favicon/`.

**Proportions.** The lockup is 1206 × 364 units, about 3.31 : 1.

**Clear space.** Keep a minimum clear space of **0.5 × the logo height (H)** on all sides. At the 36px nav size that's 18px. Nothing goes inside it: text, rules or image edges.

**Minimum sizes**

| Asset | Digital | Print |
|---|---|---|
| Full lockup | 24px tall (≈ 80px wide) | 8mm tall |
| R mark | 16px | 5mm |

Below 24px, use the mark.

**Standard sizes.** Nav 36px tall (desktop), 30px (mobile). Footer 32px. Social 40–56px (see section 12).

**Colour.** Black on light, white on Ink. That's it. Never use a grey logo on grey, and never place the logo on a photo unless there is a solid Ink or White panel behind it.

**Don't**
- Don't recolour (blue, gradient, any brand accent).
- Don't stretch, skew, rotate or outline the logo.
- Don't add a shadow or glow.
- Don't rebuild the wordmark in a live font (Inter Display included).
- Don't separate "Labs" from "Roadmap" or reposition it.
- Don't put the logo inside a pill, a box or a chip.
- Don't use the old `roadmap-labs-primary-horizontal-blue-dmsans.svg` or the retired RL shield.

---

## 3. Colour

The system has no hue. Every value is a neutral.

### Light (default)
| Token | Hex | Use | On white |
|---|---|---|---|
| `bg` / White | `#FFFFFF` | Page | — |
| `bg-subtle` / Paper | `#F7F7F8` | Quiet fills (logo tiles, image backing) | — |
| `text` / Ink | `#0B0D12` | Headlines, body emphasis, primary button, links, focus | 19.4 : 1 |
| `text-secondary` / Grey | `#5B616E` | Body copy, lead, meta | 6.2 : 1 |
| `text-tertiary` / Grey 2 | `#8B919C` | Large display "second voice" (≥ 24px) and non-essential meta only; input borders | 3.2 : 1 |
| `rule-strong` | `#D5D8DE` | Secondary button outline, image ring on Paper | — |
| `rule` | `#E6E8EC` | Hairlines, dividers, disabled fill | — |
| `action-hover` | `#262932` | Primary button hover | white text 14.5 : 1 |
| `action-active` | `#000000` | Primary button pressed | — |

### Dark (inverse sections only, `.rl-dark`)
There is **no site-wide dark mode**. `prefers-color-scheme` is ignored (`tokens.json` → `colorScheme.site: "light"`). Dark appears only inside `.rl-dark` sections. There is no `[data-theme="dark"]` selector.
| Token | Hex | Use | On Ink |
|---|---|---|---|
| `bg` | `#0B0D12` | Section background | — |
| `bg-subtle` | `#15181F` | Quiet fill on dark | — |
| `text` | `#F4F5F7` | Text, links | 17.8 : 1 |
| `text-secondary` | `#9AA0AA` | Body, meta | 7.4 : 1 |
| `text-tertiary` | `#6B717C` | Large display second voice only | 4.0 : 1 |
| `rule` | `rgba(255,255,255,.12)` | Hairlines | — |
| `rule-strong` | `rgba(255,255,255,.20)` | Secondary button outline | — |
| `action` | `#FFFFFF` | Primary button on dark (Ink text) | — |

**Error and success.** There is no red or green. Errors are shown in Ink with three signals: a 2px Ink field border, a message starting "Error:" and `aria-invalid`. Meaning never relies on colour. If Dan wants a functional error red, that's an open decision.

---

## 4. Typography

**Status: locked by Dan, 25 Oct 2026.** **Inter Display** (Inter 4 variable, optical size axis) for everything: 600 for display, H1 and H2, 500 for H3, H4, buttons and nav, 400 for reading. **JetBrains Mono** 400 for section numbers, index labels, meta, fine-print labels and code. Both SIL OFL 1.1, self-hosted from `assets/fonts/` (see `assets/fonts/README.md`). Family names live in `tokens.json` → `font.family` and are exposed as `--font-sans` / `--font-mono` (the names `next/font` sets). Geist is retired; its files sit in `assets/fonts/_archive/geist/`.

### 4.1 Diagnosis: why Inter Tight was replaced
Seen in the 07/08 renders (`../directions/09-type-options.png`, left column):
1. **Collisions at display sizes.** Inter Tight is already tightly spaced. At −0.045em, letter pairs touch ("admin", "rn", "ll"), so headlines looked cramped rather than crisp.
2. **No optical size axis.** The same outlines serve 12px and 80px. Display text looked like enlarged UI text.
3. **500 is too soft for display.** At 56 to 80px the medium weight looked grey and hesitant next to the Ink rules. It needs 600.
4. **Figures.** Prices and benchmark figures used proportional digits, so the comparison column didn't align. Nothing used `tabular-nums`. Directions 09 and 10 set it on the price and the comparison figures.
5. **Earlier renders were 1x.** Unhinted 1x rasters exaggerated the softness. All 09 and 10 renders are 2x (desktop) and 3x (mobile), with fonts verified loaded.

### 4.2 Options considered (rendered in `09-type-options.png`, 2x)
| Option | Licence | Verdict |
|---|---|---|
| **Inter Display + JetBrains Mono** | OFL 1.1 | **Chosen by Dan.** The opsz axis gives display-tuned outlines at 32px and up (tighter spacing, finer joins, lower x-height) and the text cut at 14px, from one file. Crisp at 600 and −0.03em without collisions. Rendered in Direction 10. |
| Geist + Geist Mono | OFL 1.1 | Was the recommendation in Direction 09. Not chosen. Files archived. |
| Instrument Sans | OFL 1.1 | Softer and friendlier than the brief. |
| Switzer | Fontshare Free Font Licence (not OFL) | Rejected on licence: fine to use free, but the redistribution and modification terms are tighter than OFL, which matters for self-hosting in the repo and embedding in OG images. |

### 4.3 Optical size
Inter 4 has an `opsz` axis from 14 to 32. Use `font-optical-sizing: auto` (the CSS default, set on `html` in `tokens.css`): the browser sets opsz to the font size in px, clamped to 14 to 32. Display, H1 and H2 are 32px or larger at every breakpoint, so they always get the **Inter Display cut (opsz 32)**, the same setting as the approved comparison. Body (16) and small (14) get the text cut; H3, H4 and lead fall in between.
- Never set `font-variation-settings: "opsz" …` in CSS. It inherits, so pinning body to 14 would force the text cut onto the price and every headline inside that element. (The comparison sheet pinned lead 18 and body 14 on isolated samples; `auto` gives the same result for those sizes without the inheritance trap.)
- Verified in every Direction 10 render: the first display, H1 or H2 measures the same width as opsz 32 and narrower than opsz 14 (`build/10/shot.py` prints the check).
- No stylistic sets (`cv11`, `ss03`). The comparison loaded the Google Fonts build of Inter, which strips them, so what Dan approved had none. Keep it that way.

### 4.4 Mono: JetBrains Mono, kept
- **It's the pairing Dan approved.** The Inter Display row in the comparison was set with JetBrains Mono.
- **Metrics match Inter.** Cap height 0.73 em against Inter's 0.728; x-height 0.55 against Inter's text cut 0.546 (Geist Mono: 0.71 and 0.53). Labels sit on the same lines as the sans next to them.
- **It has the glyphs we use:** → ↗ · ≤ and tabular figures.
- **It earns its place.** It marks the system voice (section numbers, meta, fine-print labels, the comparison table header) and keeps it apart from the reading voice. It isn't used for body copy, headings or buttons. Dropping it would leave those labels as small grey sans, which loses the index feel of the layout.
- Turn off contextual alternates on mono (`font-feature-settings: "calt" 0`, token `--rl-font-mono-features`) so JetBrains Mono code ligatures never form in labels. Tracking +0.02em at 12px, as in the comparison.

**Rules**
- Weight 600 for display, H1 and H2; 500 for H3, H4, buttons and nav; 400 for reading. Don't use 700.
- Use `font-variant-numeric: tabular-nums` for prices, the comparison table and dates.
- Negative tracking scales with size, as listed below. Inter Display needs less than Inter Tight did: −0.03em at the top, not −0.045em.
- Sentence case everywhere.
- The **second voice** is the first line of a display headline in Grey 2 (light) or `#6B717C` (dark), followed by the payoff in Ink. Grey always comes first. The words come from the copy files only.
- Max measure is 38rem (about 66 characters) for body text, 680px for article prose, and 18 to 20 characters per line for display.
- Use Australian spelling and the en-AU locale. Dates are written "25 October 2026".

### Type scale (from `tokens.json` → `type`)
| Style | Desktop ≥1024 | Tablet 768 to 1023 | Mobile <768 | Line height | Weight | Tracking | opsz (auto) |
|---|---|---|---|---|---|---|---|
| Display (home hero) | 80 | 56 | 40 | 1.00 | 600 | −0.03em | 32 |
| H1 (page / case study) | 72 | 52 | 38 | 1.02 | 600 | −0.03em | 32 |
| H2 (section) | 48 | 40 | 32 | 1.04 | 600 | −0.025em | 32 |
| Price (offer block) | 88 | 88 | 64 | 1.00 | 600 | −0.04em | 32 |
| H3 (item title) | 28 | 24 | 22 | 1.15 | 500 | −0.02em | 22 to 28 |
| H4 | 20 | 18 | 18 | 1.30 | 500 | −0.015em | 18 to 20 |
| Lead | 20 | 18 | 18 | 1.50 | 400 | −0.01em | 18 to 20 |
| Body | 16 | 16 | 16 | 1.55 | 400 | 0 | 16 |
| Small | 14 | 14 | 14 | 1.50 | 400 | 0 | 14 |
| Caption | 13 | 13 | 13 | 1.45 | 400 | 0 | 14 |
| Button | 15 | 15 | 15 | 1.00 | 500 | −0.005em | 15 |
| Mono label | 12 | 12 | 12 | 1.50 | 400 (JetBrains Mono) | +0.02em | n/a |

**Hero display: 40 / 56 / 80.** Stepped by the tokens at 768 and 1024. If engineering prefers fluid, use `clamp(40px, 7.3vw, 80px)` (56px at 768, capped at 80 from about 1096). Not `clamp(40px, 5vw, 72px)`, which was in an earlier spec.

The body font size is 16px on every device. Don't go below 16px for input text (it prevents iOS zoom).

---

## 5. Grid and breakpoints

| Breakpoint | Min width | Columns | Gutter | Side margin | Section padding (y) |
|---|---|---|---|---|---|
| mobile | 0 | 4 | 16 | 20 | 64 |
| sm | 640 | 4 | 16 | 20 | 64 |
| md (tablet) | 768 | 8 | 24 | 48 | 96 |
| lg (desktop) | 1024 | 12 | 24 | 96 | 128 |
| xl | 1280 | 12 | 24 | 96 | 128 |
| 2xl | 1536 | 12 | 24 | auto (container max 1408 + 96 margins) | 128 |

- **Container.** `max-width: calc(1408px + 2 × margin)`, centred. At a 1600px viewport the content is 1408px wide.
- **Desktop split.** Text sits in columns 1–6 or 1–7, with media in 7–12. Case study details use a 4/8 split (label/value).
- **Nav height.** 76px on desktop and 64px on mobile, with a 1px `rule` bottom border.
- **Tablet and small desktop (768 to 1279).** Two-up layouts that get squeezed stack instead: the plan block, the fine print (2 columns) and the home Selected work block. See 7.11 and `../directions/10-plan-768.png`, `10-plan-1024.png`, `10-home-768.png`, `10-home-1024.png`.

## 6. Spacing

The spacing scale uses a 4px base: `0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`.

| Gap | Size |
|---|---|
| Label (mono) → headline | 16 |
| Headline → lead | 24 |
| Lead → actions | 40 |
| Between buttons | 12 |
| Work list rows | 32 padding top/bottom, separated by 1px rules |
| Between sections | `section-y` (128/96/64) |
| Inside a section (header → content) | 64 desktop / 48 tablet / 32 mobile |

**Radius.** `none` 0 for rules and sections, `sm` 6, `field` 8 (inputs), `image` 12 (screenshots), `pill` 9999 (buttons only).

---

## 7. Components
Rendered reference: the 10 page renders and `../directions/10-states.png` (states sheet). `components.html` / `06-components.png` is the v1.0 sheet; its button and field states are unchanged.

### 7.1 Nav (site header)
- Height 76px (desktop) / 64px (mobile). Background White, 1px `rule` bottom border. Sticky `top: 0; z-index: var(--rl-z-header)`. No blur.
- Left: `logo-svg/roadmap-labs-black.svg` at 36px tall (30px below 1024), linking to `/`.
- Centre-right (≥1024): nav links Work / Services / Insights / About (from `copy/homepage.md`), Inter Display 15/500, Ink, 32px gap. The current page gets a 1px Ink underline (offset 0.35em), with `aria-current="page"`.
- Right: primary small button "Book a call" (36px). No second header button.
- **Below 1024:** the logo plus a text toggle, 15/500, 44 × 44 hit area, `aria-expanded`, `aria-controls`. Its open and close labels have **no copy yet** (`[COPY: menu label, ≤8]`, `[COPY: close label, ≤8]`). The sheet sits under the header, full height, White: links at H3 size separated by 1px rules, then **one** full-width primary button "Book a call". No second button in the sheet. Esc and route change close it; focus is trapped while open and returns to the toggle on close. Renders: `10-states.png` (390 and 768), `10-header-menu-768.png`.
- **Menu motion:** open = opacity 0 → 1 and translateY(−8px → 0), 200ms `cubic-bezier(.2,0,0,1)`; close = 150ms, same easing, reversed. Under `prefers-reduced-motion: reduce` there is no transition (instant). Tokens: `motion.menu.*`.

### 7.2 Footer
- White, with a 1px `rule` top border, padding 64px (desktop) / 48px (mobile).
- Row 1: the logo (32px) on the left, with the descriptor "Software & automations studio" (Small, Grey) and "Melbourne, Australia" (Small, Grey) under it. Nav link columns on the right (15/400 Ink).
- Row 2: a 1px rule, then "© 2026 Roadmap Labs" and `dan@roadmaplabs.com.au` (link) in Small, Grey, with 24px padding.
- No social icon row unless the accounts are confirmed. If used, they are text links ("Substack", "LinkedIn").

### 7.3 Buttons
Pill shape, Inter Display 15/500. Height 44px (`lg`) or 36px (`sm`, 14px text). Horizontal padding is 20px (`lg`) or 16px (`sm`). A label with an arrow uses `→` and a 6px gap. The minimum hit area is 44px (pad `sm` in touch contexts).

| Variant | Default | Hover | Active | Focus-visible | Disabled |
|---|---|---|---|---|---|
| **Primary** (light) | bg `#0B0D12`, text `#FFFFFF` | bg `#262932` | bg `#000000` | 2px `#0B0D12` outline, 2px offset | bg `#E6E8EC`, text `#8B919C`, `cursor: not-allowed` |
| **Secondary** (light) | bg `#FFFFFF`, text `#0B0D12`, inset 1px `#D5D8DE` ring | bg `#F7F7F8`, ring `#8B919C` | bg `#E6E8EC` | as above | text `#8B919C`, ring `#E6E8EC` |
| **Text** (light) | text `#0B0D12`, no underline, trailing `→` | underline 1px at 0.22em, arrow `translateX(2px)` | text `#000000` | as above (offset 2px, radius 4px) | text `#8B919C` |
| **Primary** (dark) | bg `#FFFFFF`, text `#0B0D12` | bg `#E6E8EC` | bg `#D5D8DE` | 2px `#FFFFFF` outline, 2px offset | bg `rgba(255,255,255,.12)`, text `#6B717C` |
| **Secondary** (dark) | transparent, text `#F4F5F7`, ring `rgba(255,255,255,.20)` | bg `rgba(255,255,255,.06)`, ring `rgba(255,255,255,.40)` | bg `rgba(255,255,255,.10)` | as above | text `#6B717C` |

- Transition `background-color, box-shadow, color` uses 120ms `standard`. No transforms on pills.
- Use one primary button per view. The pair order is primary, then secondary.

### 7.4 Links
- **Inline link (in prose):** colour `text` (Ink / `#F4F5F7`), `text-decoration: underline`, `text-decoration-thickness: 1px`, `text-underline-offset: 0.22em`, `text-decoration-color: rgba(11,13,18,.35)` (dark: `rgba(244,245,247,.40)`).
  - Hover: `text-decoration-color: currentColor` (100%), 120ms.
  - Visited: no change.
- **Standalone link** (e.g. "All work →"): 15/500 Ink, no underline at rest, underline on hover, arrow shift 2px.
- **External link:** add `↗` after the label, with `rel="noreferrer"`. Only add `target="_blank"` for live client sites, and include "(opens in a new tab)" as visually hidden text.
- Links are never blue, and never use colour alone to signal they're links.

### 7.5 Section header (numbered label)
```
02 · How it works       ← JetBrains Mono 12/400, text-secondary
See the numbers.         ← H2 48/40/32, 600; second voice: line 1 grey
Then we build.           ← line 2 Ink
Lead line, max 38rem     ← Lead 20/18/18, text-secondary (optional)
```
- Number format: two digits, a middle dot, then the name (`01 · Selected work`). Numbers run in page order.
- Spacing: 16px from the label to the H2 and 24px from the H2 to the lead. The header-to-content gap is 64/48/32.
- An optional right-aligned text link sits on the same baseline as the H2 (e.g. "All work →").

### 7.6 Work list item
Rows sit in a list separated by 1px `rule`, with 32px top and bottom padding. Desktop grid:
`[01 mono index · col 1] [Title H3 · cols 2–5] [One-line description, Body, Grey · cols 6–10] [View → text link · cols 11–12, right-aligned]`.
- The whole row is a single link (`<a>` wraps the row). On hover, the title underline appears and the arrow shifts 2px. There's no background change.
- With an image (home/work index card variant): a screenshot in an image frame (7.8) at 16:10, then the title H3 and a one-line description below it. There is no card fill.
- Mobile: index and title on one line, with the description below.
- A private project (e.g. Compass OS) shows "Private" in mono meta instead of "View →", with no screenshot.

### 7.7 Case study header and details list
- Breadcrumb: `Work / Compass Buyers Agency`, mono 12, Grey. "Work" is a link.
- H1 72/52/38 with a max of 14 characters per line, then a Lead (20) of up to 2 lines.
- **Details list** (a `<dl>`) sits below the lead, full width, on a 4/8 grid. Each row has a 1px `rule` top border and 16px vertical padding.
  - `dt` is mono 12, Grey; `dd` is Body 16, Ink.
  - Standard rows: **Client**, **Scope**, **Built with**, **Year**, **Live** (link with ↗) or **Status** ("Private").
  - **Never render "Result" or "Testimonial" rows with `[TBC]` content.** Omit the row until real, approved text exists. (The repo currently renders `[RESULT TBC]` and `[TESTIMONIAL TBC]`.)
- Then comes the hero screenshot in an image frame, full container width.

### 7.8 Image frame
- `border-radius: 12px`, `overflow: hidden`, with a 1px `rule` ring (`box-shadow: 0 0 0 1px var(--rl-color-rule)`; `rule-strong` on Paper). No shadow.
- Aspect ratios: 16:10 (default desktop capture), 4:5 (mobile capture), 3:2 (wide).
- Image positioned `object-fit: cover; object-position: top center`.
- Caption: Caption 13, Grey, 12px below the frame. Example: "compassagency.com.au, captured October 2026".
- **No placeholder fill.** If there's no approved image, the frame isn't rendered. Don't ship the repo's grey-blue gradient `.shot-empty`.
- On dark: ring `rgba(255,255,255,.12)`.

### 7.9 CTA band
- An Ink (`.rl-dark`) full-bleed section, padding `section-y`.
- Mono label (`05 · Start`), then H2 with second voice ("Got a job that keeps slipping?" in grey, "Tell Dan what has to happen." in white). A max of 2 lines.
- Actions: primary (white) "Book a call" plus secondary (dark ring) "Email Dan", with a 12px gap and 40px below the H2. Then 20px and one Small reassurance line (C5), with no price: "We take on a small handful of clients at a time. No contract, cancel any month."
- At most one per page, at the end. No background image.

### 7.10 Contact form field
- **Label:** Small 14/500 Ink, 8px above the field. Mark required fields with "(required)" in Grey, not an asterisk alone.
- **Input:** 48px high (textarea min 160px), padding 0 14px (textarea 12px 14px), Body 16/400 Ink, bg White, 1px `#8B919C` border (3.2 : 1, which meets the 3:1 non-text minimum), radius 8px. Placeholder in `#8B919C`, used sparingly and never as the label.
- **Hover:** border `#5B616E`.
- **Focus:** border `#0B0D12` plus a 2px `#0B0D12` outline with 2px offset.
- **Error:** 2px `#0B0D12` border and `aria-invalid="true"`. The message sits below in Small 14 Ink, starts with "Error:" and is linked with `aria-describedby`.
- **Disabled:** bg `#F7F7F8`, border `#E6E8EC`, text `#8B919C`.
- **Help text:** Caption 13, Grey, 6px below.
- **Select:** same as input, with a custom chevron `⌄` in Ink at 14px from the right.
- **Radio tiles** (contact intent, label and options from `copy/contact.md`; renders `10-contact.png`, all 5 states in `10-states.png`): `<fieldset>` + `<legend>` styled as a label. Tiles 48px, 1px `#D5D8DE` ring, radius 8, 15/400 Ink, 16px radio circle with a 1px `#8B919C` border. Hover ring `#8B919C`; focus-visible 2px Ink outline, 2px offset; selected 1px Ink ring plus 1px inset Ink, radio filled with a 5px Ink border; disabled Paper fill, text `#8B919C`. 2 columns ≥768 with an 8px gap, 1 column below.
- **Form states** (`10-states.png`): sending (button label kept, spinner, `aria-busy`), success and failure panels (heading ≤ 12 and body ≤ 120 from `copy/contact.md`), field errors and a group error summary, all starting "Error:".
- Field gap 24px. The submit button is primary `lg`, aligned left.

### 7.11 Plan block (offer)
Used on home (01 · The offer) and `/services`. Rendered in `10-home.png`, `10-services.png`, and at tablet in `10-plan-768.png` / `10-plan-1024.png`. Mono label "One retainer".
- ≥1280: 12-col grid with a 1px Ink top rule and 32px padding. Left cols 1 to 5 (price + included list), right cols 7 to 12 (comparison table).
- 768 to 1279: the comparison table stacks under the price block at 56px. The price block itself is two columns: price and note left, included list right.
- <768: one column, in source order.
- **Price:** "A$3,500" Inter Display 600, 88/88/64, −0.04em, `tabular-nums`, Ink. Unit "/mo" Body 20 Grey, on its own line 12px below. Never shrink the unit into the figure line. (A$3,500/mo includes AI running costs. No GST is charged; never write "incl. GST". Settled by Dan 26 Oct.)
- **Price note:** Body 16 Grey, max 26rem, 16px below (OF6 from `copy/homepage.md`).
- **Included list:** 6 ruled rows: mono `01` to `06` + Body 15 Ink. No ticks or icons. Item 5 carries `[DECISION: fair-use limit]` in renders.
- **`/services` only:** after the fine print, the SO2 before-you-commit line (≤ 200, Lead, Ink, cols 1 to 9) closes the offer section.

### 7.12 Comparison table
- Mono label "What it replaces", then a 2-column `<table>`: label left, figure right-aligned. 1px rules, no fills, no colour.
- Benchmark rows Grey; "Together" Ink 400; "Roadmap Labs" Ink 500 with a 1px Ink bottom rule. That weight change is the only emphasis.
- **Footnote directly under the table** (14px, Caption 13 Grey), stating the source. Never move it away from the table.
- Figures come only from the copywriter's sheet (Dan's agency years), confirmed by Dan 25 Oct. The ad row reads "Agency fees: Meta, Google or social ads" and the footnote says it is the management fee, not ad spend.

### 7.13 Fine print row
- 4 columns ≥1280, 2 columns from 768 to 1279, 1 below 768, each with a 1px rule on top, H4 17 title and Small 14 Grey body (≤ 120 chars). 80/64/48 above.
- On `/services` the same items sit as a 1fr / 2fr ruled list beside a left header.

### 7.14 Steps (How it works)
- Home and `/services`: 01 Free discovery session · 02 A roadmap with the numbers · 03 The retainer build (HW3 to HW5). Never show a saving, revenue figure or ROI in the steps.
- HW8 (≤ 60, "No pressure. Look over the numbers, then decide.") sits under the home "Book a call" button, Small, `#9AA0AA`.
- 3 columns on dark, each with a `rgba(255,255,255,.12)` rule, mono `01–03`, 28px, H4 20 title, Body `#9AA0AA` (≤ 110 chars). 1 column below 768.

### 7.15 Insights index, category page and filters
Renders: `10-insights-index.png`, `10-insights-category.png`, `10-insights-empty.png` (each with `-mobile`).
- **Featured:** the newest article (or one flagged `featured: true`) as a 2-column block: cover image 16:9 left (cols 1 to 7), mono "[featured label] · category", H3 title, dek and meta right. Only when 4+ articles are live; otherwise the list starts straight away.
- **Row:** category (mono) · title H4 20 Ink + dek Small Grey · date and read time (mono), 1px rules, 24px padding. Home uses the short version (date · title · read time).
- **Filters:** text links 15/500 ("All" plus the launch categories from `copy/insights.md` I6: Building with AI · What to build · Automations · Writing for people). The current one has a 1px Ink underline and `aria-current="page"`. Shown only with 2+ live categories. Filters are links to `/insights/category/[slug]`, not client state.
- **Category page** `/insights/category/[slug]`: same head as the index with the category name as H1 and a `[COPY: category description, ≤160]` lead, the filter bar with that category current, then rows.
- **Pagination:** 12 per page at `/insights/page/[n]` (and `/insights/category/[slug]/page/[n]`). "Older articles →" (copy) with a `[COPY: page indicator]` slot.
- **Empty state:** the I5 line from `copy/insights.md`, no filters, no featured block, then the newsletter band.
- **Newsletter band:** heading, pitch and "Subscribe on Substack ↗" from `copy/insights.md`. Never say "weekly".
- **Home teaser rule:** the home Insights section is hidden until 3 or more articles are live.

### 7.16 Article `/insights/[slug]`
Render: `10-insights-article.png` (+ `-mobile`). All article text is slot markers or skeleton bars; Dan writes the articles.
- **Head:** mono breadcrumb "Insights / {category}", H1 56/44/34 (max about 48 characters, `text-wrap: balance`), dek Lead 20 max 40rem, meta row mono 12: author · date · read time.
- **Measure:** `.prose` 680px, centred. Body 18/1.65 Ink, 24px between paragraphs.
- **Rhythm:** H2 30/1.2 600, 64px above, 16 below. H3 22/1.3 600, 40 above, 12 below. Lists 8px item gaps.
- **Images:** column figure 680px (3:2 typical) or wide breakout 960px (16:9). Radius 12, 1px ring, `object-fit: cover`. Alt text required. Caption Caption 13 Grey, 12px below.
- **Code:** `pre` on Paper with a 1px ring, radius 8, 20px padding, JetBrains Mono 14/1.6, scrolls horizontally (never widens the page at 375). Inline code mono 0.9em on Paper.
- **Pull quote:** `blockquote` 30/1.25 600 with a 1px Ink top rule, 24px padding top, 48px margin y, `cite` mono 12 Grey. Quotes from the article only, never invented client quotes.
- **Footnotes:** `sup` links to `#fn-n`, list at the end under a 1px rule, Small 14 Grey, each with a "↩" back link.
- **Author block:** 1px rule, name H4, A5 bio line from `copy/insights.md`, "About Dan →". No photo and no empty avatar circle until one is supplied.
- **Related:** "Keep reading." + 3 rows from `related`, else the latest 3 in the same category.
- **Substack CTA:** the newsletter band (`.rl-dark`) at the end, source line "Published first on Dan Kovac Builds, on Substack." when `canonical` is set.

### 7.17 Selected work, compact (home)
- ≥1280: left cols 1 to 4: label, H2 (no copy, the W lead is used), lead, "All work →". Right cols 6 to 12: ruled work rows (index · name H4 · one-line description Small Grey · `View →` or mono `Private`), 20px row padding. Below 1280 the rows stack under the header at 40px.
- Factual only: no results, no screenshot until Compass's written OK.
- **Own-companies strip** (variant, `08-work-alt.png`): under the offer fine print, 64px above, 1px Ink top rule, mono label cols 1 to 3, then items in cols 4 to 12. Used only if section 03 is dropped.

### 7.18 Work index, case study, About and 404
Renders: `10-work`, `10-case-study`, `10-about`, `10-404` (each with `-mobile`). **None of these pages has a copy file yet**, so every line is a slot marker.
- **Work index `/projects`:** page head, then a work card per project (16:10 frame left, name H3, description, services mono, `View →` or `Private`). Only the Compass card has an image (real screenshot, needs Compass's OK); the others show the image slot until real captures exist.
- **Case study `/projects/[slug]`:** breadcrumb, H1 (≤ 60), lead, fact row (client, services, year, live link), hero frame, then 680px prose with H2 section slots and a wide figure. No metrics, quotes or testimonials.
- **About `/about`:** page head, portrait slot (4:5, real photo only), a 3-item "how we work" row and the own-companies list (ReviewBuddy, Flexfolio).
- **404 (`not-found.tsx`):** mono "404", H1 line 1 grey + line 2 ink (slots ≤ 32 each), lead slot, "Book a call" + home link slot, nav links.

### 7.19 Review markers (renders only)
Renders carry a mono annotation strip and markers. None of them may ship.
- `[COPY: name, ≤N chars]`: a slot with no approved copy. Rendered in the element's own type style, in Grey 2, with a dashed underline, so size and line length read true. **The designer never fills these.**
- Skeleton bars: grey lines that show paragraph measure and rhythm without fake words.
- `[IMAGE: spec]`: an image slot with its ratio and minimum size.
- `[DECISION: …]` (needs Dan), `[CONFIRM …]` (an assumption in `copy/NOTES.md` §2), `[OPTION]` (copy exists, not chosen). "Hero option 1 (placeholder)" marks the hero: there are four options and none is picked.
- Every visible word that isn't a marker comes from `../copy/*.md`, checked with `copy/_tools/slots.py`.

---

## 8. States summary (exact values)

| | Hover | Active | Focus-visible | Disabled |
|---|---|---|---|---|
| Primary btn | bg #262932 | bg #000000 | outline 2px #0B0D12, offset 2px | bg #E6E8EC / text #8B919C |
| Secondary btn | bg #F7F7F8, ring #8B919C | bg #E6E8EC | same | ring #E6E8EC / text #8B919C |
| Text link | underline 1px @0.22em, arrow +2px | #000000 | same, radius 4px | #8B919C |
| Inline link | underline 35% → 100% | — | same | n/a |
| Nav link | underline 35% → 100% | — | same | n/a |
| Work row | title underline, arrow +2px | — | outline on the row, offset 4px | n/a |
| Field | border #5B616E | — | border #0B0D12 + outline 2px | bg #F7F7F8 / border #E6E8EC |
| Dark: any | see 7.3 | | outline 2px #FFFFFF, offset 2px | |

- Use `:focus-visible` (not `:focus`) for outlines.
- Never remove an outline without a replacement.
- The skip link is visible on focus: top-left, primary button style, `z-index: 1000`, targets `#main`. Its label has no copy yet (`[COPY: skip link, ≤24]`). Render: `10-states.png`.

## 9. Motion
| Token | Value | Use |
|---|---|---|
| `duration.fast` | 120ms | Hover/active colour, underline, arrow shift |
| `duration.base` | 200ms | Accordion |
| `motion.menu.open-duration` | 200ms | Mobile menu open |
| `motion.menu.close-duration` | 150ms | Mobile menu close |
| `motion.menu.easing` | `cubic-bezier(0.2, 0, 0, 1)` | Mobile menu, both directions |
| `motion.menu.offset-y` | −8px | Menu sheet start position |
| `easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default |
| `easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Leaving elements |

- **No scroll reveal.** Content is visible on load. (`duration.slow` 320ms remains in the tokens but is unused.)
- **Menu:** opacity 0 → 1 and translateY(−8px → 0), 200ms; close 150ms.
- **Never:** parallax, scroll-jacking, looping animation, cursor followers or animated gradients.
- **`prefers-reduced-motion: reduce`:** no transitions or transforms, including the menu (it appears instantly). Already in `tokens.css`.

## 10. Imagery
- Use only real screenshots of shipped work, captured from the live site or app at 2× and saved as JPG q85 / AVIF. Each capture needs the **client's written OK** before it's published.
- Before capture, remove third-party chat widgets, review badges, cookie banners, personal data and client statistics or claims that we can't verify.
  - The Compass capture in the renders already hides the chat widget and Google rating badge, and is cropped above the "76%" stat. **It still needs Compass's OK.**
- Private work (Compass OS in Retool) is not shown until it's approved and scrubbed of data. Describe it in words.
- Portrait of Dan: a natural-light photo in colour or black and white, taken by a real photographer. Don't use AI-generated images. The repo has a `[PHOTO TBC]` slot.
- Don't use stock images, mockup device frames, isometric mockups or decorative illustrations.

## 11. Accessibility

Target WCAG 2.2 AA.

### Contrast
| Pair | Ratio | Passes |
|---|---|---|
| Ink #0B0D12 on White | 19.43 | AAA all text |
| Ink on Paper #F7F7F8 | 18.15 | AAA |
| Grey #5B616E on White | 6.21 | AA all text, AAA large |
| Grey #5B616E on Paper | 5.80 | AA all text |
| Grey 2 #8B919C on White | 3.17 | AA large (≥24px, or ≥18.66px bold) and non-text only |
| White on #262932 (primary hover) | 14.53 | AAA |
| Ink on #D5D8DE | 13.61 | AAA |
| Field border #8B919C on White | 3.17 | Non-text 3:1 ✔ |
| Rule #D5D8DE on White | 1.43 | Decorative only. Never the sole boundary of an input |
| #F4F5F7 on Ink | 17.82 | AAA |
| #9AA0AA on Ink | 7.39 | AAA |
| #9AA0AA on #15181F | 6.75 | AA |
| #6B717C on Ink | 3.96 | AA large only |
| #8B919C on Ink | 6.13 | AA |

### Other requirements
- 44 × 44px minimum touch targets.
- Visible focus on everything interactive.
- Landmarks: `header`, `nav`, `main`, `footer`.
- One `h1` per page.
- `lang="en-AU"`.
- Alt text describes what's in the screenshot (e.g. "Compass Buyers Agency home page, hero with property search headline").
- Forms use real labels, and errors are announced via `role="alert"`.

## 12. Dan Kovac Builds: social templates

The Dan Kovac Builds templates use the same system: White or Ink, Inter Display 600, and a JetBrains Mono label. The logo shown is the Roadmap Labs logo. The R mark is used as a small sign-off only. Use black and white only, with no colour accents (including the logo). See `../directions/06-social.png`.

| Template | Size (px) | Safe zone | Type sizes | Layout |
|---|---|---|---|---|
| **Substack email banner** | **1100 × 220** (Substack's current recommendation, PNG, verified 25 Oct 2026 on support.substack.com) | 40px all sides. Keep critical content in the centre 1000 × 160, because email clients scale it down to ~600px wide, so text must be ≥ 28px at source | Title 44/600 (−0.03em), sub 18 mono | "Dan Kovac Builds" left. `[COPY: banner strapline, mono]` right (never "weekly"). Roadmap Labs R mark 40px far right. White bg, Ink text, or inverse |
| Substack wordmark (optional) | 1344 × 256 (max 21:4) | 24px | 120/600 | "Dan Kovac Builds" only |
| Substack post preview | 1456 × 1048 (14:10) | 96px | Title 88/600, label 22 mono | Post title (max 3 lines), mono "Dan Kovac Builds · Issue 00" |
| **Carousel slide** (LinkedIn/Instagram) | **1080 × 1350** (4:5) | 96px sides, 120px top and bottom (Instagram grid crop shows the centre 1080 × 1080, so keep the title within it) | Cover title 96/600 (−0.03em, max 4 lines). Body slide title 64/600. Body 36/400 (1.35). Mono label 22. Slide counter 22 mono | Mono label top-left (`01 / 08`). Title. One idea per slide. R mark 48px bottom-right on the last slide, plus "roadmaplabs.com.au" in mono |
| **Video cover** (Reels/Shorts/TikTok) | **1080 × 1920** (9:16) | Top 250px and bottom 420px clear of UI. Sides 90px. The title must sit inside the centre 1080 × 1350 band for the 4:5 grid crop | Title 104/600 (max 4 lines), label 26 mono | Ink or White full bleed, title centred vertically in the safe band, mono "Dan Kovac Builds" above it |

**Rules**
- Use one of two backgrounds, White or Ink.
- Real screenshots only, inside a 12px-radius frame with a 1px ring (scale the radius ×2 on 1080-wide canvases: 24px).
- No faces or stickers.
- Export PNG for still templates; use sRGB.
- Use Australian spelling.

## 13. Files
The full list, with every asset, is in `ENGINEER-HANDOFF-NOTES.md`. Summary:
```
design-system/
  DESIGN-SYSTEM.md            this file
  ENGINEER-SPEC.md            Next.js implementation spec, section by section
  ENGINEER-HANDOFF-NOTES.md   every file, tokens, page list, decisions, open decisions
  COPY-BRIEF.md               slot list (points to ../copy/, which owns all wording)
  tokens.json                 source of truth (v1.2.0)
  scripts/build-tokens.mjs    generator: node design-system/scripts/build-tokens.mjs (writes tokens.css + tailwind snippet)
  tokens.css                  generated. Light :root, dark .rl-dark only. Never hand-edit
  tailwind.config.snippet.js  generated. Optional Tailwind theme.extend, values point at tokens.css
  components.html             v1.0 component sheet
  assets/logo-svg/            svgo'd lockups (black, white) and square marks  ← use these
  assets/logo-v2/             logo masters (svg) and png exports
  assets/favicon/             favicon.svg/.ico/16/32, apple-touch-icon, 192, 512, maskable 512, site.webmanifest
  assets/fonts/               Inter Display + JetBrains Mono woff2, TTFs for next/og, OFL, README; _archive/geist/ retired
  assets/og/                  og-site, og-title, og-title-short (1x + @2x), opengraph-image.tsx, src HTML
  assets/logo/, assets/icons/ v1.0, superseded
build/10/                     Direction 10 sources (gen10*.py, og.py, 10.css, shot.py renderer with font and opsz check); build/09/ is history
directions/                   10-*.png renders (2x desktop, 3x mobile), jpg/ q85 2x masters
copy/                         offer.md, homepage.md, contact.md, insights.md, NOTES.md, _tools/slots.py
```

## 14. Open decisions
**Settled (25 Oct):** the black-and-white system is the brand (the Petrol/Ochre/Big Shoulders kit is retired); "Book a call" CTA; A$3,500/mo including AI running costs, no GST charged; the benchmark figures; ad row = agency management fee; one retainer; no results or testimonials; no price in the hero; no site-wide dark mode; no scroll reveal; one CTA in the mobile menu; 7 FAQ items.
1. **Typeface: settled 25 Oct.** Inter Display + JetBrains Mono (section 4). Kept as item 1 so the numbering other docs cite stays stable.
2. **Hero:** four ranked options in `copy/homepage.md`, none picked. Renders show option 1 as a placeholder.
3. Logo: all-Ink (default) or the grey "Labs" variant.
4. Functional error colour: Ink-only (current) or add one red.
5. Selected work: compact section 03 (rendered) or the own-companies strip.
6. The copy decisions in `copy/NOTES.md` §3: fair-use limit, which running costs are included, handover terms, discovery session length and format, roadmap turnaround, SQ9 / SQ10 (held), the Tax fine-print option, the Substack URL.
7. Missing copy (slot markers in renders): Work, case study, About and 404 pages; menu, close and skip-link labels; `/services` section labels 01, 04, 05; the home Selected work H2; Insights featured label, page indicator, article count and category descriptions; social banner strapline.
8. Compass's written OK (naming Compass OS, any screenshot).
