# Site-wide labels: Roadmap Labs

Draft 1, 26 October 2026 (AEDT). Slot IDs and limits from COPY-BRIEF. Counts checked by `_tools/slots.py global` (every slot passes).

Everything that shows on every page: head and meta, skip link, nav, header button, mobile menu, footer and the Dan Kovac Builds banner. These used to sit in the Global table of `homepage.md` and were moved here unchanged. The menu, close, skip link and banner slots are new.

## Reading view

> [Skip to content]
> Roadmap Labs · Work · Services · Insights · About · **Book a call**
> Mobile: **Menu** opens it, **Close** shuts it, one **Book a call** button inside.
>
> Footer: AI, software and automations · Melbourne, Australia
> Work · Services · Insights · About
> © 2026 Roadmap Labs · dan@roadmaplabs.com.au
>
> Dan Kovac Builds banner: `Notes from building with AI`

The banner strapline never says "weekly" (DESIGN-SYSTEM §12). The limit of 40 is my proposal, because COPY-BRIEF only says "short, one line".

## Slot tables

### Head and meta

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| G1 Site title, home (`lockedTitle`, absolute) | ≤ 60 | NEW | Rec. | AI automation and marketing for small teams · Roadmap Labs | 58 | ✓ |
| G1 Site title, home (`lockedTitle`, absolute) | ≤ 60 | NEW | Draft 4 | Roadmap Labs - make AI work for your business | 45 | ✓ |
| G2 Meta description, home (`lockedDescription`) | ≤ 155 | NEW | Rec. | AI automation, software, websites, SEO and ads for Australian businesses with 5 or more staff. From Melbourne, one monthly fee. | 127 | ✓ |
| G2 Meta description, home (`lockedDescription`) | ≤ 155 | NEW | Draft 4 | For owner-led businesses that want AI working properly and safely. We set up your tools and data, then put AI to work one job at a time. | 136 | ✓ |

### Header, nav and menu

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| G3 Skip link (first focusable element) | ≤ 24 | COPY-BRIEF | Rec. | Skip to content | 15 | ✓ |
| G4 Nav labels ×4 | ≤ 12 | Keep | 1 | Work | 4 | ✓ |
| G4 Nav labels ×4 | ≤ 12 | Keep | 2 | Services | 8 | ✓ |
| G4 Nav labels ×4 | ≤ 12 | Keep | 3 | Insights | 8 | ✓ |
| G4 Nav labels ×4 | ≤ 12 | Keep | 4 | About | 5 | ✓ |
| G5 Header button (primary only) | ≤ 18 | Approved | Approved | Book a call | 11 | ✓ |
| G6 Mobile menu open label | ≤ 8 | COPY-BRIEF | Rec. | Menu | 4 | ✓ |
| G7 Mobile menu close label | ≤ 8 | COPY-BRIEF | Rec. | Close | 5 | ✓ |
| G8 Mobile menu button (one only) | ≤ 18 | Approved | Approved | Book a call | 11 | ✓ |

### Footer

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| G9 Footer descriptor | ≤ 40 | NEW | Rec. | AI, software and automations | 28 | ✓ |
| G9 Footer descriptor | ≤ 40 | NEW | Keep LIVE | Software & automations studio | 29 | ✓ |
| G10 Footer location | ≤ 30 | LIVE | Keep | Melbourne, Australia | 20 | ✓ |
| G11 Footer nav | ≤ 12 | Same as G4 | 1 | Work | 4 | ✓ |
| G11 Footer nav | ≤ 12 | Same as G4 | 2 | Services | 8 | ✓ |
| G11 Footer nav | ≤ 12 | Same as G4 | 3 | Insights | 8 | ✓ |
| G11 Footer nav | ≤ 12 | Same as G4 | 4 | About | 5 | ✓ |
| G12 Footer bottom line | ≤ 40 | Keep | Left | © 2026 Roadmap Labs | 19 | ✓ |
| G12 Footer bottom line | ≤ 40 | Keep | Right, link | dan@roadmaplabs.com.au | 22 | ✓ |

### Dan Kovac Builds banner (Substack, DESIGN-SYSTEM §12)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| G13 Banner strapline (mono, one line; proposed ≤ 40) | ≤ 40 | COPY-BRIEF | Rec. | Notes from building with AI | 27 | ✓ |
| G13 Banner strapline (mono, one line; proposed ≤ 40) | ≤ 40 | COPY-BRIEF | Alt | Building with AI, in plain English | 34 | ✓ |
