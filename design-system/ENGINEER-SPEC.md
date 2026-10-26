# ENGINEER-SPEC: Roadmap Labs site, Mono v1.2

**To:** Roadmap Labs Lead Engineer
**From:** Brand design
**Date:** 25 October 2026 (AEDT)
**Repo:** `Dan-Kovac/roadmap-labs-website-`. I reviewed it read-only and made **no edits, branches or PRs**.
**Read with:** `ENGINEER-HANDOFF-NOTES.md` (start here: every file, tokens, page list, open decisions), `DESIGN-SYSTEM.md` (rules and exact state values), `tokens.json` / `tokens.css` and the renders in `../directions/10-*.png`.
**Updated:** 25 October 2026, 9:20 PM (AEDT), for Direction 10 (type locked: Inter Display + JetBrains Mono).

> **Brand.** Dan confirmed the black-and-white system replaces the old brand kit (`Dan-Kovac/RoadmapLabs` `context/brand-kit`: Petrol / Pitch / Cream / Ochre, RL shield, Big Shoulders + Newsreader). **That kit is retired.** Nothing from it should be built, and it isn't an open decision.
> **Copy.** Every word comes from `../copy/*.md`. Renders show `[COPY: …]` slot markers where no copy exists yet; build those as content fields, never ship the marker text.
> **Font.** **Locked by Dan: Inter Display + JetBrains Mono**, self-hosted with `next/font/local` (§2). Build against `--font-sans` / `--font-mono`.

---

## 0. What's in the repo today

Read on 25 Oct 2026.

- **`main`** has only `README.md` ("Placeholder site for Roadmap Labs"). The built site is on **`cursor/launch-ready-site-6ce8`**. Two other branches exist: `cursor/add-placeholder-site-11bd` and `cursor/scaffold-site-shell-4743`. **Confirm with Dan which branch to build on.** This spec assumes launch-ready.
- **Stack:** Next 16.3.8, React 19.2.8, gray-matter (Markdown content) and Playwright e2e. **There's no Tailwind.** Styling is plain CSS in `app/globals.css` (about 1,270 lines) and `app/roadmap-labs-tokens.css`.
- **Fonts:** `app/layout.tsx` loads `DM_Sans` via `next/font/google` (400–700, `--font-dm-sans`). It sets `themeColor: "#f3f7fc"` and `lang="en-AU"`.
- **Logo:** `components/logo.tsx` renders `next/image` of `/brand/roadmap-labs-primary-horizontal-blue-dmsans.svg` (1206 × 364, `unoptimized`), with `logo-header` / `logo-footer` variants.
- **Routes:**

  | Route | Content |
  |---|---|
  | `/` | Home |
  | `/services` | Services |
  | `/projects` | Work index |
  | `/projects/[slug]` | Case study, from `content/work/*.md` |
  | `/insights` | Insights index |
  | `/insights/[slug]` | Insight, from `content/insights` |
  | `/about` | About |
  | `/contact` | Server action. Only sends if `CONTACT_FORM_ENDPOINT` is set |

  There are also `opengraph-image.tsx`, `twitter-image.tsx`, the sitemap, robots and `app/icon.png`.
- **Components:** `site-header`, `site-footer`, `site-shell`, `logo`, `booking-link`, `closing-cta`, `contact-form`, `json-ld`, `offer-strip`, `offers-band`, `project-editorial`, `shot-frame`, `work-grid`.
- **Lib:** `site.ts` (nav, contact email `dan@roadmaplabs.com.au`, locked title/description, JSON-LD logo path), `offers.ts`, `content.ts`, `metadata.ts`, `markdown.tsx`, `delivery.ts`.
- **Env:** `NEXT_PUBLIC_BOOKING_URL` (falls back to `/contact?intent=call#book`) and `CONTACT_FORM_ENDPOINT`.

## 1. Replace / remove

| Current | Replace with |
|---|---|
| `DM_Sans` in `layout.tsx`, `--rl-font-ui` → DM Sans | Inter Display (Inter 4.1 variable with opsz, 400/500/600 used) + JetBrains Mono (400) via `next/font/local` from `assets/fonts/` (section 2) |
| `roadmap-labs-tokens.css` blue tokens: `--rl-blue #2a62f0`, `--rl-blue-deep #1a46c4`, `--rl-logo #067dfb`, `--rl-focus #2a62f0`, `--rl-frame #3d649452`, `--rl-bg #f3f7fc`, `--rl-panel #f7fbfe`, `--rl-navy #152033`, `--rl-ink #172033`, `--rl-muted #526070`, `--rl-labs #66707c` | `design-system/tokens.css` (drop in as `app/tokens.css` and import it first in `globals.css`). Delete the old tokens file once nothing references `--rl-blue*`, `--rl-navy`, `--rl-panel` or `--rl-logo` |
| `.rl-btn-primary` (blue pill, weight 600), `.rl-btn-secondary` (blue 1.5px outline, blue fill on hover) | Ink pill / white pill with a 1px `#D5D8DE` inset ring, weight 500, 44px. States in DESIGN-SYSTEM §7.3 and §8 |
| `.shot-empty` grey-blue `linear-gradient(...)` placeholder | **Remove.** Don't render a frame when there's no `src`. The `[SCREENSHOT TBC]` text must not ship |
| `.offers` navy band `#152033`, kicker `#8eaaef` uppercase 0.08em, `#d5e0ec` body | `.rl-dark` section (`#0B0D12`). Label in JetBrains Mono 12, sentence case, `#9AA0AA`. Body `#9AA0AA`, headings `#F4F5F7` |
| `.service-links a { color: var(--rl-blue) }` and any other blue link | Ink link with underline (section 4.3) |
| Link underline offset `0.18em` | `0.22em`, 1px, 35% → 100% |
| `themeColor: "#f3f7fc"`, `html { background: var(--rl-bg) }` | `themeColor: "#FFFFFF"`, `background: #FFFFFF` |
| `/brand/roadmap-labs-primary-horizontal-blue-dmsans.svg` (logo.tsx and the JSON-LD `logo` in `lib/site.ts`) | `/brand/roadmap-labs-black.svg` (from `assets/logo-svg/`, the v2 rebuild). On dark sections use `/brand/roadmap-labs-white.svg`. JSON-LD `logo` → `https://roadmaplabs.com.au/brand/roadmap-labs-mark-512.png` (from `assets/logo-v2/png/roadmap-labs-mark-black-512.png`) |
| `app/icon.png` | `assets/favicon/`: `app/icon.svg` ← `favicon.svg`, `app/favicon.ico` ← `favicon.ico`, `app/apple-icon.png` ← `apple-touch-icon.png`, `public/` ← `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `site.webmanifest` (section 3) |
| Fact list rows `Result: [RESULT TBC]`, `Testimonial: [TESTIMONIAL TBC]`, About `[PHOTO TBC]` / `[BIO TBC]` | Render a row only when the value is real, i.e. it doesn't match `/^\[.*TBC\]$/`. Add an e2e test asserting no `TBC]` text in production HTML |
| `body` 17px / 1.6, `fold-kicker`, `fold-support` sizes | Type scale in DESIGN-SYSTEM §4 (body 16 / 1.55) |
| Uppercase letter-spaced kickers (`.offers-kicker`, `.offer-num`) | Mono label `01 · Name`, sentence case |
| OG / Twitter image (`opengraph-image.tsx`) colours | `assets/og/`: site default (Ink bg, white logo) and the title-driven template (White bg, Inter Display 600, black logo, 12px Ink bottom bar). See §6.10 |
| Any `[data-theme="dark"]` selector or `@media (prefers-color-scheme: dark)` | **Remove.** No site-wide dark mode. Dark only inside `.rl-dark` sections |
| Any scroll-reveal / intersection-observer fade-in | **Remove.** No scroll reveal |
| Anything from the old brand kit (Petrol, Pitch, Cream, Ochre, RL shield, Big Shoulders, Newsreader) | **Retired.** Don't port it |

Also search for and remove: `gradient`, `#2a62f0`, `#067dfb`, `#1a46c4`, `#8eaaef`, `#f3f7fc`, `#152033`, `box-shadow` with blur, `font-weight: 700` and `text-transform: uppercase`. (600 is now the display weight.)

## 2. Fonts: Inter Display + JetBrains Mono via next/font/local (locked 25 Oct)

Copy `design-system/assets/fonts/InterVariable.woff2` and `JetBrainsMono-Variable.woff2` to `app/fonts/`, with `OFL-Inter.txt` and `OFL-JetBrainsMono.txt` (SIL OFL 1.1, ship them alongside). Both are Latin subsets of the official releases (Inter 4.1 from rsms/inter, JetBrains Mono 2.304) with every axis and OpenType feature kept: Inter 115 KB with `wght` 100 to 900 and `opsz` 14 to 32, JetBrains Mono 52 KB with `wght` 100 to 800. Details in `assets/fonts/README.md`.

**Why next/font/local and not next/font/google.** `next/font/google` can load Inter's optical size axis (`Inter({ subsets: ["latin"], axes: ["opsz"] })` works; the font data in next 16 lists Inter with `opsz` 14 to 32). But the Google Fonts build of Inter has no → (U+2192) or ↗ (U+2197), which the design uses in links and buttons, so they would fall back to a system font. It also strips the cv/ss feature sets. The rsms release has both, so self-host it. JetBrains Mono on Google Fonts would be fine, but keeping both local means one method and no Google requests.

```tsx
// app/layout.tsx
import localFont from "next/font/local";

const interDisplay = localFont({
  src: "./fonts/InterVariable.woff2", // Inter 4.1 variable: wght 100-900, opsz 14-32
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-sans",
});
const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  weight: "100 800",
  style: "normal",
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

export const viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${interDisplay.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```
`tokens.json` → `font.variable` names these `--font-sans` / `--font-mono`, and `tokens.css` points `--rl-font-sans` / `--rl-font-mono` at them with `"Inter Display", "Inter"` and `"JetBrains Mono"` fallbacks. Body uses `font-family: var(--rl-font-sans); -webkit-font-smoothing: antialiased;`. Weights in use: 400, 500, 600 (Inter Display) and 400 (JetBrains Mono).

**Optical size (the "Display" in Inter Display).** Do nothing beyond the above: `tokens.css` sets `html { font-optical-sizing: auto }` (also the browser default), so every size picks its own cut. Display, H1, H2 and the price are 32px or more at every breakpoint and render the Inter Display cut (opsz 32). Don't add `font-variation-settings: "opsz" …` anywhere: it inherits and would force one cut onto all sizes. Don't enable `cv11` / `ss03` either; the approved comparison rendered without them.

**Mono labels.** Apply `font-feature-settings: var(--rl-font-mono-features)` (`"calt" 0`) wherever mono is used, or use the `.rl-mono` class from `tokens.css`, so JetBrains Mono's code ligatures never form. Mono tracking is +0.02em (`--rl-text-mono-tracking`).

**Tailwind.** `tailwind.config.snippet.js` is generated with the tokens and maps `font-sans` / `font-mono` to these variables and `text-rl-display` etc. to the type tokens (size, line height, tracking, weight).

**Check before merge.** In the browser console, `[...document.fonts].filter(f => f.status === "loaded").map(f => f.family)` lists the two next/font families and no others. A quick opsz check: on the hero H1, setting `style.fontVariationSettings = '"opsz" 32'` must not change its width; `'"opsz" 14'` must make it wider.

For `next/og`, which needs TTF/OTF (not woff2), use `assets/fonts/InterDisplay-SemiBold-600.ttf` (the static Inter Display cut at 600) and `JetBrainsMono-Regular-400.ttf` (§6.10). Both are Latin subsets (132 KB and 107 KB), so the OG route stays small.

## 3. Assets → `public/`

Copy from `design-system/assets/` (full list in `ENGINEER-HANDOFF-NOTES.md`):

| Source | Destination |
|---|---|
| `logo-svg/roadmap-labs-black.svg` | `public/brand/roadmap-labs-black.svg` |
| `logo-svg/roadmap-labs-white.svg` | `public/brand/roadmap-labs-white.svg` |
| `logo-svg/roadmap-labs-mark-{black,white}-square.svg` | `public/brand/` (square 0 0 320 320; avatars, JSON-LD alternatives) |
| `logo-v2/png/roadmap-labs-mark-black-512.png` | `public/brand/roadmap-labs-mark-512.png` (JSON-LD `logo`) |
| `favicon/favicon.svg` | `app/icon.svg` |
| `favicon/favicon.ico` | `app/favicon.ico` |
| `favicon/apple-touch-icon.png` | `app/apple-icon.png` |
| `favicon/icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | `public/` |
| `favicon/site.webmanifest` | `public/site.webmanifest` (or rebuild as `app/manifest.ts` with the same values), linked with `<link rel="manifest">` |
| `fonts/InterVariable.woff2`, `JetBrainsMono-Variable.woff2`, `OFL-Inter.txt`, `OFL-JetBrainsMono.txt` | `app/fonts/` (§2) |
| `fonts/InterDisplay-SemiBold-600.ttf`, `JetBrainsMono-Regular-400.ttf` | `assets/fonts/` beside the OG route (§6.10) |
| `og/og-site.png` | `app/opengraph-image.png` and `app/twitter-image.png` (static site default), or generate from `og/opengraph-image.tsx` |

`assets/logo/` and `assets/icons/` are the v1.0 sets: **superseded**, don't copy them.

Screenshots stay in `public/work/`: `compass-home.jpg`, `compass-mid.jpg`, `flexfolio-home.jpg` and `flexfolio-pm.jpg` already exist. **Compass captures need written client OK before launch.** Recapture without the chat widget, the Google rating badge and client stat claims (see DESIGN-SYSTEM §10). Export at 2x, JPG q85 or AVIF.

`logo.tsx`: keep the API, swap the src, and add `tone: "dark" | "light"`. Heights are 36px (header ≥1024), 30px (header <1024) and 32px (footer). Width is auto (aspect 1206/364). Use `alt="Roadmap Labs"` and `priority` in the header.

## 4. Global CSS foundations
1. Import order: `tokens.css` → `globals.css`.
2. Container: `.rl-container` (max 1408 + margins 96 / 48 / 20).
3. Links: `a { color: inherit }`. Prose links get `.rl-link`: underline 1px, `text-underline-offset: 0.22em`, `text-decoration-color: var(--rl-color-link-underline)`, hover `currentColor`, 120ms `var(--rl-ease-standard)`.
4. Focus: `:focus-visible { outline: 2px solid var(--rl-color-focus); outline-offset: 2px; }`. It's White inside `.rl-dark` (the token handles it).
5. Dark sections: add `className="rl-dark"`. Tokens swap automatically. There is no site-wide dark mode: no `[data-theme="dark"]`, and `prefers-color-scheme` is ignored.
6. Reduced motion: already in `tokens.css`. No scroll reveal anywhere.
7. Tokens: never hand-edit `tokens.css`. Change `tokens.json`, run `node design-system/scripts/build-tokens.mjs`, commit both.
8. If you want Tailwind: `tailwind.config.snippet.js` is a ready `theme.extend` that maps to the CSS variables. It's optional, and **I don't recommend adding Tailwind just for this.** The existing plain-CSS approach plus `tokens.css` is enough.

## 5. Shared components

| Component | Spec |
|---|---|
| **SiteHeader** | 76px / 64px, White, `border-bottom: 1px solid var(--rl-color-rule)`, sticky `top: 0`, `z-index: var(--rl-z-header)`. Logo left. Desktop nav (≥1024) right-aligned, links 15/500 with a 32px gap, `aria-current` underline at 0.35em offset. Actions: `Book a call` primary sm (36px), 32px from the nav. No second header button (settled 25 Oct). Below 1024: text toggle (44 × 44, `aria-expanded`, `aria-controls`); its open/close labels are copy slots with no copy yet (`[COPY: menu label, ≤8]`, `[COPY: close label, ≤8]`). Sheet is fixed full height below the header, White, links H3 with 1px rules, then **one** full-width primary "Book a call" with 20px padding. Focus trapped, Esc and route change close, focus returns to the toggle. Motion: opacity + translateY(−8px → 0), 200ms `cubic-bezier(.2,0,0,1)` open, 150ms close, none under reduced motion (`--rl-motion-menu-*` tokens) Keep the existing `header-mail` link only if Dan wants it; it's hidden in the renders |
| **SkipLink** | First focusable element, targets `#main`, primary button style when focused, `z-index: 1000`. Label slot `[COPY: skip link, ≤24]` |
| **SiteFooter** | Keep the structure. 64px / 48px padding, 1px top rule, logo 32px, descriptor and location in 14px Grey. Nav as text links 15/400 Ink in up to 3 columns. Bottom rule row: `© {year} Roadmap Labs` · email link |
| **Button** (`rl-btn`, `rl-btn-primary`, `rl-btn-secondary`, new `rl-btn-text`, `rl-btn-sm`) | DESIGN-SYSTEM §7.3 table. 44px, padding 0 20px, radius 9999px, 15/500. Transition 120ms |
| **SectionHeader** (new) | Props `index` ("01"), `label`, `title`, `secondVoice?`, `lead?`, `action?`. Mono label → 16px → H2 → 24px → lead (max 38rem). Optional action right-aligned on the H2 baseline |
| **WorkList / WorkRow** (replaces `work-grid`) | Rows: grid `56px 4fr 5fr auto` (desktop), 32px vertical padding, 1px rules top and bottom. Index mono, title H3, description Body Grey, `View →` or mono `Private`. The whole row is the link. On hover, underline the title and shift the arrow 2px |
| **WorkCard** (home "Selected work" variant) | ShotFrame 16:10 → 16px → title H3 24 + `View →` on the same line → 6px → description Body Grey. No fill. A 3-up grid on desktop with a 24px gutter, 2-up on tablet, 1-up on mobile |
| **ShotFrame** | Radius 12, `box-shadow: 0 0 0 1px var(--rl-color-rule)`, overflow hidden, `object-fit: cover; object-position: top center`. Figcaption is 13px Grey, 12px gap, no "Placeholder" label. Return `null` without `src` |
| **WhatWeDo / ServiceBlock** (new, Direction 11 home section 01) | Section `id="what-we-do"`, SectionHeader (index, label ≤16, H2 ≤48, lead ≤160), 64px, then a `<ul>` of 3 ServiceBlocks in order Software, Automations, Marketing automations. Each block: 1px **Ink** top rule, padding-top `--rl-space-6` (24) / 24 / `--rl-space-5` (20) → mono index `01`–`03` (12px, text-secondary) → `--rl-space-8` (32) / 32 / `--rl-space-6` (24) → title H3 (`--rl-type-h3-*` 28 / 24 / 22, Inter 500) → `--rl-space-3` (12) → description Body 16 Grey, max 28rem → `--rl-space-10` (40) / 0 / `--rl-space-8` (32) → **LaptopFrame** (§5.1; a real screenshot, the held state, or a build-time capture-needed placeholder; never mock UI) → `--rl-space-4` (16) → **CaseRef**: 1px rule top, padding-top 16, column with mono case-study label, 8px, then the name (15/500; a link with → if public) and an optional mono tag (`Private · pending permission`) that wraps under the name. **Grid:** ≥1024 a 12-col grid, each block spans 4 cols, gutter `--rl-gutter` (24), and each block is `grid-template-rows: subgrid; grid-row: span 5` so index, titles, descriptions, shots and refs align across the three columns whatever the copy length (fallback without subgrid: fixed min-heights are not acceptable; use a flex column with the shot pushed by `margin-top:auto`). 768–1023: each block is a full-width row on a 12-col grid, text in cols 1–6, shot in cols 7–12 spanning the text rows, blocks 64px apart (`--rl-space-16`). <768: one column, blocks 48px apart (`--rl-space-12`), margins 20. No card fills, no hover lift; on a public ref, underline the name and shift the arrow 2px |
| **CaseHeader + FactList** | See section 6.3 |
| **CtaBand** (replaces `closing-cta`) | `.rl-dark`, padding `--rl-section-y`, mono label `0N · Start`, H2 with second voice, actions 40px below (primary on dark is white; secondary is a dark ring). `Book a call` uses `BookingLink` |
| **ContactForm** | Keep the logic and the honeypot. Restyle fields per DESIGN-SYSTEM §7.10: 48px, `1px solid #8B919C`, radius 8, label 14/500 above, "(required)" in Grey, errors with `aria-invalid` + `aria-describedby` + "Error:" prefix, submit primary lg |

### 5.1 LaptopFrame (Direction 11, 26 Oct 2026; sheet `directions/11-laptop-frame.png`)
A generic modern laptop drawn in SVG, used for every What we do screenshot so the three columns look the same. No brand marks, no Apple-style logo or notch. The frame is a design element; the screen content must always be a real screenshot (never redrawn UI).

- **Asset:** `design-system/assets/device/laptop.svg` → copy to `public/device/laptop.svg`. viewBox `0 0 1600 960` (5:3). Inline it or load with `<img alt="">`; it is decorative (`aria-hidden`), and the screenshot carries the alt text.
- **Parts (SVG units):** lid 1360 × 874 at x 120, top radius 32, bottom radius 6, gradient #1A1D24 → #0B0D12 with a 1.5 #4A4F59 (55%) inner edge; camera dot r 4 at (800, 13); hinge 1300 × 6 #2A2E36 at y 872; deck 1540 wide (x 30–1570), y 876–904, vertical gradient #E4E6EA → #C9CDD3 → #9DA2AA, 2px #F4F5F7 top highlight, thumb groove 220 × 10 #A7ACB4 centred.
- **Screen opening:** x 146, y 26, 1308 × 817.5 (exactly 16:10), radius 6. **Inset ratios** for the HTML screen layer: `left 9.125%; top 2.7083%; width 81.75%; height 85.1563%`; radius `0.46% / 0.73%` (= 6 units). Bezels: 26 sides, 26 top, 30.5 bottom.
- **Shadow (inside the SVG, scales with the frame):** ambient ellipse cx 800 cy 914 rx 700 ry 26, #0B0D12 at 10%, Gaussian blur 22; contact ellipse cx 800 cy 906 rx 760 ry 8, #0B0D12 at 28%, blur 7. Do not add a CSS box-shadow on top.
- **Markup:** `<figure class="lap" style="position:relative;aspect-ratio:1600/960"><img class="lap-svg" src="/device/laptop.svg" alt="" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%"><div class="lap-scr">…screenshot…</div></figure>`. `.lap-scr`: absolute at the inset ratios, `overflow:hidden; background:#050608`, inner hairline `inset 0 0 0 1px rgba(255,255,255,.06)`. Screenshot: `next/image` with `fill`, `object-fit: cover; object-position: top center`.
- **States:** (1) **image**, the real capture; (2) **held** (Compass): flat #0B0D12 screen, no image, no text in production; (3) **capture needed**: the striped placeholder with mono text in the renders only. In production a missing screenshot renders the held state, never placeholder text.
- **Responsive sizes:** the frame is 100% of its grid area. ≥1024: one 4-col column (≈400px at a 1440 viewport, ≈453px at 1600 with the 1408 container) → screen ≈327–371 CSS px wide. 768–1023: cols 7–12 (≈340–470px), top-aligned with the block's index. <768: full container width (≈335–350px at 375–390), 32px below the description. Large use (case study hero etc.) is fine up to 1760px wide before a 2880 master goes soft at 2x.
- **`sizes`:** `(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw`.
- **Screenshot export:** 2880 × 1800 PNG master (16:10, sRGB, lossless), captured at a 1440 × 900 viewport with deviceScaleFactor 2, no browser chrome, no cursor, top of page, logged in with demo data only (no real customer names, emails or reviews). Ship as WebP q85 (and AVIF if the pipeline supports it) generated by `next/image`; keep the PNG master in the repo under `public/work/<slug>/app-<screen>@2x.png`. Minimum accepted size 2880 × 1800; anything smaller gets recaptured, not upscaled.
- **Alternative B (not chosen):** screen-only floating frame, 6px white bezel, radius 14 outer / 9 inner, `box-shadow: 0 0 0 1px #E6E8EC, 0 24px 48px -16px rgba(11,13,18,.18), 0 4px 12px rgba(11,13,18,.06)`. Shown on the sheet for comparison. Design recommends A: the dark lid separates white app UI from the white page and keeps held and empty columns identical.

## 6. Pages, section by section (desktop at a 1600px viewport, container 1408)
Section vertical padding is `--rl-section-y` (128 / 96 / 64) unless noted. Measurements are desktop / tablet / mobile.

### 6.1 Home `/` (Direction 11, 26 Oct 2026; renders `directions/11-home.png` at 1440, `11-home-mobile.png` at 390, section 01 alone `11-what-we-do.png`)
**Explain first, price later.** Dan: the home page went "straight into the pricing before even explaining what we do". Direction 11 changes the home page order only; every other page stays on Direction 10, and all type, colour, spacing and component values are unchanged unless listed here. Copy: Dan is rewriting the home copy; every slot is in `COPY-BRIEF.md` "Home `/`, Direction 11". Sections are separated by a 1px `--rl-color-rule` top border; dark sections have none. **No price in the hero. No results or testimonials anywhere.**

1. **Header.** Unchanged (Work / Services / Insights / About, one primary sm `Book a call`).
2. **Hero.** Padding and type as Direction 10 (144 / 112 / 72 top, 96 / 80 / 64 bottom; display 80 / 56 / 40, max-width 13em, `text-wrap: balance`). Mono eyebrow ≤40 → 24px → headline ≤60 (one string; no Grey/Ink pair required) → 32px → Lead 20 sub ≤140 (max 36rem) → 40px → `Book a call` primary (`BookingLink`) + text link ≤24 to `#what-we-do` (`rl-btn-text`) → 20px → optional mono microcopy ≤60. **No price, no image.**
3. **01 · What we do** (`id="what-we-do"`). **WhatWeDo** (§5): Software → Flexfolio (LaptopFrame with a real app screenshot, link to its case study; the render uses an interim real capture of the public demo profile until the logged-in capture exists); Automations → Compass Buyers Agency / Compass OS (tag `Private · pending permission`, LaptopFrame in the held state, no link, no image until Compass's written OK); Marketing automations → ReviewBuddy (link; LaptopFrame, capture needed). **Pairing A approved by Dan, 26 Oct 2026.** Still drive it from content, not hard-coded.
4. **02 · How it works** (`id="how-it-works"`, `.rl-dark`). As Direction 10's Steps (3-up, 1-up below 768), with the three steps in this order: discovery session → proposal with ROI → build. 56px, primary inverse `Book a call` + Small reassurance ≤60.
5. **03 · Selected work** (`id="work"`). As Direction 10 (left header cols 1–4, ruled WorkList cols 6–12, stacks below 1280). Rows: Compass Buyers Agency (tag `pending permission`, no link until OK), Compass OS (`Private`, no link), ReviewBuddy →, Flexfolio →.
6. **04 · The offer** (`id="offer"`). The Direction 10 PlanBlock moved down unchanged: SectionHeader, plan label, price (88 / 88 / 64), unit, note, IncludedList (6), ComparisonTable + footnote, FinePrint (4 / 2 / 1 up), text link `Book a call →`. Tablet behaviour as before (`10-plan-1024.png`, `10-plan-768.png`).
7. **05 · Insights** (`id="insights"`). Only when `getInsights().filter(a => !a.draft).length >= 3`. SectionHeader with "All insights" action right; 3-up (≥1024) of cover ShotFrame 16:9 → 20px → mono category · date → 20px title H4 → 8px dek Small. 768–1023: 2-up, third hidden. <768: 1-up, all three. No top rules on the items (the cover frames them). When hidden, omit the section and renumber Start to 05. **Shown in the 11 render for layout only.**
8. **06 · Start** (CtaBand, `.rl-dark`). Label ≤16, H2 ≤60, 40px, `Book a call` + secondary button ≤16, 20px, Small ≤100 with **no price**. The two dark sections (02, 06) are never adjacent, including when Insights is hidden (04 offer is light).
9. **Footer.** Unchanged.

### 6.1a Home `/`, Direction 10 order (superseded by 6.1 for the home page; kept for the PlanBlock detail it still defines)
Direction 10 renders: `directions/10-home.png` at 1440, `10-home-1024.png`, `10-home-768.png`, `10-home-mobile.png` at 390; hero crop `10-hero.png`)
Copy: `copy/homepage.md` (slots H, OF, HW, W, IN, C). Sections are separated by a 1px `--rl-color-rule` top border; dark sections have none. **No price in the hero. No results or testimonials anywhere.**

1. **Header.** Nav Work / Services / Insights / About. One primary sm button `Book a call`.
2. **Hero.** Padding 144 / 112 / 72 top, 96 / 80 / 64 bottom. Cols 1 to 9.
   - Mono eyebrow (H1 in `homepage.md`), 24px.
   - Display **40 / 56 / 80** (`--rl-type-display-*`; fluid alternative `clamp(40px, 7.3vw, 80px)`), Inter Display 600 (opsz 32 via auto), −0.03em, `text-wrap: balance`. Line 1 Grey 2 span, `<br>`, line 2 Ink.
   - **Hero copy is not picked.** `homepage.md` has four ranked options; renders show option 1 labelled "Hero option 1 (placeholder)". Build the pair and lead (≤ 32 / ≤ 32 / ≤ 150) from content so Dan's pick is a one-line change.
   - 32px, Lead 20 (max 36rem). 40px, actions: `Book a call` primary (`BookingLink`) + **text link** `How it works →` (`rl-btn-text`, 44px hit area, href `#how-we-work`), 12px gap.
   - 20px, mono 12 microcopy (H7) in text-secondary. No price, no image.
3. **01 · The offer** (`id="offer"`). SectionHeader (H2 pair + lead), 64px, then **PlanBlock**:
   - ≥1280: 12-col grid, 1px Ink top rule, 32px padding top. Left cols 1 to 5, right cols 7 to 12.
   - Left: mono "One retainer"; price "A$3,500" 88 / 88 / 64 Inter Display 600, −0.04em, `tabular-nums`; unit "/mo" Body 20 Grey on its own line 12px below; price note Body 16, 16px; then 40px and the **IncludedList** (6 rows, mono `01` to `06` + Body 15 Ink, 1px rules, 14px padding).
   - Right: mono "What it replaces"; **ComparisonTable** (`<table>` with `<caption class="sr-only">`, `<th scope="col">`): label left, figure right-aligned, `white-space: nowrap`, `tabular-nums`. Rows from OF9 (incl. "Difference"). Benchmark rows Grey; "Together" Ink 400; "Roadmap Labs" Ink 500 with a 1px Ink bottom rule.
   - **Footnote sits directly under the table** (14px gap, Caption 13 Grey), linked with `aria-describedby`.
   - **768 to 1279:** the table stacks under the price block at 56px, and the price block becomes 2 columns (price + note left, included list right). **<768:** one column. Renders `10-plan-1024.png`, `10-plan-768.png`.
   - 80 / 64 / 48px, then **FinePrint** (OF11): 4 columns ≥1280, 2 from 768 to 1279, 1 below; each 1px top rule, H4 17 title, Small 14 body.
   - 48px, text link "Book a call →".
4. **02 · How it works** (`id="how-we-work"`, `.rl-dark`). SectionHeader dark (HW2 pair), 64px, **Steps** 3-up (1-up below 768): rule `rgba(255,255,255,.12)`, mono `01` to `03`, 28px, H4 20, Body `#9AA0AA` max 24rem. Steps HW3 to HW5. 56px, primary button (inverse) `Book a call`, then HW8 (≤ 60) under it in Small `#9AA0AA`.
5. **03 · Selected work** (`id="work"`), compact. ≥1280: left cols 1 to 4 (mono label, H2 has no copy yet so the W5 lead leads, "All work →"); right cols 6 to 12 a ruled **WorkList** (Compass OS meta `Private`, no link). Below 1280 the list stacks under the header at 40px. **No screenshot frame, no result lines** until Compass's written OK.
6. **04 · Insights** (`id="insights"`). Render only when `getInsights().filter(a => !a.draft).length >= 3`. The two existing repo notes are set `draft: true` (or removed) and never count. Below 3, omit the section and renumber Start to 04. The 09 home render shows it hidden.
7. **05 · Start** (CtaBand, `.rl-dark`). C1 to C5: H2 pair, 40px, `Book a call` + `Email Dan` (mailto), 20px, Small C5 with **no price**. The two dark sections are never adjacent.
8. **Footer.**

### 6.2 Work index `/projects` (renders `10-work.png`, `10-work-mobile.png`; no copy file yet)
1. Page header: padding top 128 / 96 / 64. Mono `Work`, then H1 72 / 52 / 38 (slot ≤ 52), then Lead (slot ≤ 160).
2. WorkList of every `content/work/*.md` in `order`, with mono index `01…`. Rows show title, `job` and `View →` / `Private`.
3. As rendered: one WorkCard per project (16:10 frame cols 1 to 7, name H3 + description + services mono + `View →` / `Private` cols 8 to 12; stacked below 1024). Only cleared screenshots render; others omit the frame in production (the render shows an image slot).
4. CtaBand. Footer.

### 6.3 Case study `/projects/[slug]` (renders `10-case-study.png`, `10-case-study-mobile.png`; no copy file yet)
1. Breadcrumb: mono `Work / {title}`, padding top 96 / 72 / 48.
2. H1 72 / 52 / 38 (`thesis` lines; each `thesis-line` is a block), max width 14 characters per line. Then 24px and the Lead (`job`, max 38rem).
3. **FactList** (`<dl>`), 48px below.
   - Grid of 4 + 8 columns (label/value), each row with a 1px top rule and 16px vertical padding. dt is mono 12 Grey, dd is Body 16 Ink.
   - Rows: Client · Scope (`role`) · Built with · Year · Live (`liveUrl`, `↗`) **or** Status (`privateNote`).
   - Skip TBC rows (Result/Testimonial) until real.
4. Hero ShotFrame: full container width at 16:10, 64px below. Caption with the capture date.
5. **Body.** Markdown in columns 4–10, max 38rem. Use Body 16 / 1.55 Grey with `h2` at H3 28 Ink and 64px section gaps. Lists use 8px item gaps.
6. Additional shots: a 2-up grid (24px gutter), 4:5 mobile captures 3-up.
7. Next project: a WorkRow for the next item. Then CtaBand and the footer.

### 6.4 About `/about` (renders `10-about.png`, `10-about-mobile.png`; no copy file yet)
1. Header: mono `About`, H1 (slot ≤ 52), Lead (slot ≤ 160). The live About wording isn't in `copy/`, so it isn't carried over until the copywriter supplies it.
2. A 2-column block on desktop: prose in columns 1–7; portrait in columns 9–12 at 4:5 in a ShotFrame (only when a real photo exists; `[PHOTO TBC]` must not render).
3. "How we work" row (3 items, slots) and the own-companies list (ReviewBuddy, Flexfolio), as rendered.
4. CtaBand. Footer.

### 6.5 Contact `/contact` (renders `10-contact.png`, `10-contact-mobile.png`; states in `10-states.png`)
1. Header: mono `Contact`, H1 pair and Lead from `copy/contact.md`.
2. Desktop grid: form in columns 1–7 (1px top rule, fields at full width, 24px gaps; Name and Email side by side ≥768). Aside in columns 9–12 with a 1px top rule: "Email" `dan@roadmaplabs.com.au`, "Book a call" ("Free discovery session →", `BookingLink`) and "Based in" Melbourne, each as a dt/dd pair.
3. **"What do you need?"** is a native radio group (`<fieldset>` + `<legend>`), 2 columns ≥768, 1 below. Each option is a 48px tile, 1px `#D5D8DE` ring, radius 8, 16px radio; selected = 1px Ink ring + inset 1px Ink, filled radio. Legend and options from `copy/contact.md`. Remove "Website, SEO or conversion", "An internal operating system" and "Automations and AI" from `lib/` and from any email template mapping. Labels (incl. Business name, optional team size) and the "Error:" messages also come from `contact.md`.
4. `form-note` copy stays honest about delivery: when `CONTACT_FORM_ENDPOINT` is unset, keep the existing "not connected" explanation and the mailto fallback.
5. Sending state: button keeps its label, adds a spinner, `aria-busy="true"`, disabled. Result panel after submit: 1px rule box (radius 12, padding 24), H4 heading ("Sent" / "Not sent", ≤ 12) and body (≤ 120) from `contact.md`, `role="status"` (success) or `role="alert"` (failure).
6. `#book` anchor target on the booking aside.

### 6.6 Services & Pricing `/services` (renders `10-services.png`, `10-services-mobile.png`; copy `copy/offer.md`)
Keep the existing route; retitle "Services & Pricing". Order: page head (label, H1 "Three kinds of work." / "One monthly retainer.", lead) → 01 What we build (section label has no copy yet; OfferList rows `i 1/2, t 2/6, d 6/11, m 11/13`: Software development · Automations · Marketing automations, each meta "In the retainer"; then the own-products line O4. The website line is removed) → 02 The offer (PlanBlock as home, plus the "Not included" line, the supporting line, and **SO2** (≤ 200) closing the section in Lead Ink, cols 1 to 9) → 03 How it works (dark, same Steps, lead SH1, no button) → 04 Fine print (5 rows incl. the Tax `[OPTION]`, 1fr 2fr, left header cols 1–4 `align-items:start`) → 05 Questions (**7 items**, SQ1 to SQ7; SQ9/SQ10 held and not in the HTML. FAQ accordion: a button with `aria-expanded` + region, or `<details>`/`<summary>`; first item open in the render; states closed / open / focus in `10-states.png`) → 06 Start (dark, no-price C5).
Why a page: the retainer still needs terms, the full comparison, the FAQ and the three kinds of work, which would bloat the home page.

### 6.7 Insights index `/insights` (renders `10-insights-index.png`, `10-insights-category.png`, `10-insights-empty.png`, each with `-mobile`)
Copy: `copy/insights.md` (H1 "Notes on the work.", lead, I5 empty line, I6 categories, newsletter band).
- **Routes:** `/insights`, `/insights/page/[n]` (n ≥ 2; `/insights/page/1` redirects to `/insights`), `/insights/category/[slug]`, `/insights/category/[slug]/page/[n]`. All statically generated. Filters are links to these routes, not query strings or client state.
- Page head: label "Insights", H1 72 / 52 / 38, Lead.
- **Featured** (page 1 of `/insights` only, 4+ live articles): newest or `featured: true`; cover 16:9 cols 1 to 7, text cols 8 to 12 (mono featured label + category, H3, dek, meta). Stacks below 1024.
- **Filter bar:** "All" + categories with articles, text links 15/500, `aria-current="page"` underline, 24px gap, article count in mono right (label slot), 1px rule below. Only when 2+ categories have articles.
- **Rows:** grid `category 180px | title + dek 1fr | date · read time auto`, 24px padding, 1px rules. Title H4 20 Ink, dek Small 14 Grey (≤ 140), mono 12 meta. Mobile: category above title, meta below.
- 12 per page; "Older articles →" plus a page indicator (slot).
- **Category page:** H1 = category name, lead = category description (slot ≤ 160, no copy yet), same filter bar with that category current.
- **Empty state** (0 live): H1, lead, the I5 line, no filters, no featured, then the newsletter band.
- **Newsletter band** (`.rl-dark`): heading, pitch, `Subscribe on Substack ↗` primary (external, `rel="noopener"`). Never "weekly". Substack URL is still `[DECISION]`.

### 6.8 Article `/insights/[slug]` (renders `10-insights-article.png`, `10-insights-article-mobile.png`)
- Breadcrumb mono "Insights / {category}". H1 56 / 44 / 34, max 2 lines (~48 chars), `text-wrap: balance`. Dek Lead 20, max 680px. Meta row mono 12: Dan Kovac · date · read time · "Also on Substack ↗" (only when `canonical` is set).
- Hero figure optional: 16:9, max 1088, radius 12, 1px ring, caption below.
- **Measure:** `.prose` max-width 680px, centred on the container.
  - p 18/1.65 Ink, 24px between paragraphs. h2 30/1.2 600, 64px above, 16 below. h3 22/1.3 600, 40 above, 12 below.
  - Pull quote: `blockquote` 30/1.25 600, `cite` mono 12 Grey, 1px Ink top rule, 24px padding top, 48px margin y. No quote marks graphic.
  - Code block: `pre` on Paper `#F7F7F8 with a 1px rule ring`, radius 8, 20px padding, JetBrains Mono 14/1.6 (`calt` off), horizontal scroll, no syntax colours beyond Ink / Grey.
  - Inline code: mono 0.9em, Paper background, 2px 6px.
  - Figure: column 680px or wide breakout 960px (16:9), radius 12, 1px ring, alt required, caption 13 Grey 12px below.
  - Footnotes: `sup` links to `#fn-n`, list at the end under a 1px rule, Small 14 Grey, each with a "↩" back link.
- Author block: 1px rule, name H4, A5 bio from `insights.md`, "About Dan →". No photo until supplied (no grey circle placeholder).
- Related: "Keep reading." + 3 InsightsRows from `related` slugs, else the latest 3 in the same category.
- Newsletter band (`.rl-dark`) at the end, with the source line when `canonical` is set.

### 6.9 Content model (MDX)
The repo today uses gray-matter `.md` (`InsightDoc`: slug, title, dek, date, order, canonical, body). Move to `content/insights/{slug}.mdx` with:
```yaml
title: "string, ≤ 48 chars ideally, 2 lines max"
slug: "kebab-case"          # matches the filename
dek: "≤ 140 chars"
date: 2026-11-02            # ISO, publish date
updated: 2026-11-10         # optional
category: automations       # launch set (copy/insights.md I6): building-with-ai | what-to-build | automations | writing-for-people
featured: false             # optional; else the newest is featured
tags: [seo, retool]         # optional
canonical: "https://handytoknow.substack.com/p/..."  # optional; sets <link rel=canonical>
draft: false                # drafts excluded from lists, sitemap and the home count
heroImage: { src: "/insights/slug/hero.png", alt: "...", caption: "..." }  # optional
author: dan-kovac
related: [slug-a, slug-b]   # optional, max 3
order: 0                    # optional manual sort tiebreak
```
`readingTime` is computed at build (200 wpm, rounded up). MDX components map: `h2`, `h3`, `blockquote`, `pre`, `code`, `Figure`, footnotes via `remark-gfm`. Article JSON-LD `BlogPosting` with author Dan Kovac.

### 6.10 Other
- **OG images** (`assets/og/`, 1200 × 630, monochrome, real logo):
  - Site default `og-site.png`: Ink background, white logo 64px, "Software & automations studio" (Inter Display 600, 88px) and "Melbourne, Australia · roadmaplabs.com.au" mono, all footer copy. Use for every page without its own image.
  - Title-driven (Insights articles, case studies): White, mono label "Insights · {category}", title Inter Display 600 (−0.03em) at 76px (under 60 characters) or 60px, max 3 lines, black logo 48px bottom-left, URL mono bottom-right, 12px Ink bottom bar. Reference template `og/opengraph-image.tsx` (next/og with `Geist-SemiBold-600.ttf` and `GeistMono-Regular-400.ttf`). Examples `og-title.png`, `og-title-short.png`.
- **404** (`app/not-found.tsx`, renders `10-404.png`, `-mobile`): mono "404", H1 pair (slots ≤ 32 each), lead slot, `Book a call` + home link slot, then the nav links. No copy file yet.
- **Skip link and states:** `10-states.png`.

## 7. Responsive notes
- Breakpoints are 640 / 768 / 1024 / 1280 / 1536, and the type tokens step at 768 and 1024 (`tokens.css` handles this).
- The nav collapses below 1024 (`10-header-menu-768.png`; desktop header at 1024 in `10-header-1024.png`).
- From 768 to 1279 the plan block, the fine print (2-up) and the home Selected work stack (`10-plan-768.png`, `10-plan-1024.png`, `10-home-768.png`, `10-home-1024.png`).
- Work rows stack below 768: index and title on one line, then the description, with the arrow hidden and the full row tappable.
- Fact lists switch to a single column below 768, with dt above dd.

## 8. Acceptance checklist
- [ ] No occurrences of `#2a62f0`, `#067dfb`, `#1a46c4`, `#8eaaef`, `#f3f7fc`, `#152033`, `linear-gradient` or `radial-gradient` in `app/` and `components/`. This is enforced by a grep in CI.
- [ ] Inter Display (400/500/600, `InterVariable.woff2`) and JetBrains Mono (400) load via `next/font/local`. No DM Sans, Geist or Google Fonts requests. Arrows → ↗ render in the site font. The hero H1 width is unchanged by `"opsz" 32` (display cut active, §2). Mono labels have `calt` off.
- [ ] Logo is the v2 `roadmap-labs-black.svg` (header and footer) or `-white.svg` on dark, from `assets/logo-svg/`. JSON-LD logo is updated. The old blue SVG has been removed from `public/brand/`. Nothing from the retired Petrol/Ochre kit ships.
- [ ] Favicon set from `assets/favicon/` (svg, ico, apple 180, 192, 512, maskable 512) and `site.webmanifest` are linked and monochrome.
- [ ] `themeColor` is `#FFFFFF`.
- [ ] Buttons match DESIGN-SYSTEM §7.3 for all 5 states (check against `../directions/10-states.png`).
- [ ] Every link is Ink with an underline (1px, 0.22em) in prose. Nothing is blue.
- [ ] `:focus-visible` shows a 2px Ink outline with 2px offset everywhere, and White on `.rl-dark`. Tab through every page.
- [ ] No `[... TBC]` strings, placeholder frames, testimonials, metrics or client logos in production HTML (Playwright test).
- [ ] Compass screenshots are published only after written client OK, with no chat widget, rating badge or stat claims visible.
- [ ] Lighthouse a11y ≥ 95. axe reports no contrast failures. All inputs have labels, and errors are announced.
- [ ] `prefers-reduced-motion` removes all transforms and transitions (menu included). No scroll reveal exists. No `[data-theme="dark"]` or `prefers-color-scheme` rules exist.
- [ ] The mobile menu sheet has exactly one CTA ("Book a call").
- [ ] Layout is checked at 375, 768, 1024, 1440 and 1600 with no horizontal scroll.
- [ ] Copy matches `copy/*.md` (limits checked by `copy/_tools/slots.py`; Australian spelling).
- [ ] `lang="en-AU"`, with one `h1` per page.
- [ ] No `[COPY:`, `[DECISION`, `[CONFIRM`, `[DRAFT]`, `[PLACEHOLDER]`, `[OPTION]`, `[IMAGE:`, `[DATE]`, `[READ TIME]` or "Hero option" strings in production HTML (Playwright test).
- [ ] No "sprint" or "See a live build" anywhere.
- [ ] No price in the home hero (H1–H7). The price appears only in the offer PlanBlock, the comparison table and `/services`.
- [ ] No results, outcome figures, savings, ROI numbers or testimonials anywhere, including Selected work rows and FAQ answers.
- [ ] Home "How it works" has exactly 3 steps (discovery, roadmap, retainer build) and `#how-we-work` is the target of the hero text link.
- [ ] `/services` FAQ renders exactly 7 items (SQ1 to SQ7); held items SQ9 "What counts as one automation?" and SQ10 "How fast do you build each automation?" are not in the HTML.
- [ ] Contact intent options match `copy/contact.md`; "Website, SEO or conversion" is gone.
- [ ] The comparison footnote renders immediately after the table, inside the same element.
- [ ] Home Insights section is absent with fewer than 3 non-draft articles, present with 3 or more (unit test).
- [ ] Article prose measure is 680px; code blocks scroll rather than widening the page at 375.
- [ ] Price reads A$3,500/mo everywhere, never "incl. GST" (no GST charged); no A$3,000 or A$690 remains.
- [ ] Insights routes `/insights/page/[n]` and `/insights/category/[slug]` resolve; filters are links.
