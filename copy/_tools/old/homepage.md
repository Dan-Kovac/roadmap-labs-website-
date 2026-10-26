# Homepage copy: Roadmap Labs (offer-first)

Draft 1, 25 October 2026 (AEDT). Written to `design-system/COPY-BRIEF.md` slot names, in Dan's voice (`/workspace/voice-guide/dan-kovac-voice-guide.md`).
Status: **draft for Dan's sign-off.** Nothing here replaces LIVE copy until Dan approves it.

**Order (offer-first):** Hero → 01 · The offer → 02 · How we work (dark) → 03 · Selected work → 04 · Insights → 05 · Start (dark CtaBand) → Footer.
The white Selected work and Insights sections sit between the two dark sections, so no dark sections are stacked (ENGINEER-SPEC §6.1 item 6). See `NOTES.md` for the layout changes this needs.

Slot IDs starting `OF`, `IN`, `H7`, `W5`, `W6`, `C5` and `HW7` are **new slots** that aren't in COPY-BRIEF yet. Their limits are my proposals, so the designer should confirm or change them.
Character counts include spaces and were checked by script (`_tools/homepage_slots.py`). Every recommended and alternative line is within its limit. Lines marked "over limit" are there only to show why they shouldn't be used.

---

## Reading view (recommended copy only)

> **Melbourne · Automations studio**
>
> *(grey)* The work that keeps slipping.
> *(ink)* Automated for A$3,000 a month.
>
> We build automations for your SEO, social, email and admin, one at a time, and manage every one. No contract. Cancel any month and keep it all.
>
> [Book a call] [How it works]
> A$3,000/mo incl. GST · About A$690 a week · No contract

> **01 · The offer**
> *(grey)* One monthly fee. *(ink)* Unlimited automations.
>
> We build your automations one at a time, as many as you need, and look after every one. The fee stays the same at every stage.
>
> **A$3,000/mo incl. GST**
> About A$690 a week. No contract. Cancel any month and we hand everything over.
>
> What's included:
> - Automations for SEO, social, email, admin and sales, built one at a time
> - Testing and management of every automation
> - Your data and automations kept secure
> - Each automation kept on the best AI model for the job, at the best cost
> - A company portal for your data and team, when you're ready
> - A full handover if you leave
>
> **What it replaces**
>
> | | |
> |---|---|
> | SEO campaign, well run | A$2,000/mo |
> | Ad management | A$1,000/mo |
> | Virtual assistant at A$500+ a week | A$2,170+/mo |
> | Together | About A$5,170/mo |
> | **Roadmap Labs** | **A$3,000/mo incl. GST** |
>
> Typical costs from Dan's agency years. AI model and tool running costs are extra: they vary by automation and sit on your own accounts.
>
> **Running costs.** Model and tool costs depend on what you run, so they sit on your own accounts. We pick the models and keep costs down.
> **One-month test.** Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one.
> **No contract.** Cancel any month. We hand everything over and it's yours to run.
> **A handful of clients.** We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly.
>
> Book a call →

> **02 · How we work** *(dark)*
> Prove it first. Then build on it.
>
> We don't start by rebuilding your business. We start with a couple of automations that earn their keep, then build the system that ties it all together.
>
> 01 **Prove it.** A couple of automations on the job that costs you most or never gets done. Each gets a month to prove itself.
> 02 **Bring it together.** A company portal that puts your data, systems and team in one secure place. Usually a month of work, same fee.
> 03 **Grow it.** We keep building, one automation at a time. With your data in one place, each new one has more to work with.
>
> [Book a call]

> **03 · Selected work**
> Two of these are our own companies. Flexfolio and ReviewBuddy run on the same systems we build for clients.
>
> Compass Buyers Agency: Website, SEO and CRO, plus Compass OS, an internal platform built in Retool.
> Compass OS (Private): An internal operating system for Compass Buyers Agency, being built in Retool
> ReviewBuddy: Review-growth software for Australian small businesses
> Flexfolio: A portfolio platform for product managers
> *[placeholder: real result from Dan]* (hidden until real)
>
> All work →

> **04 · Insights**
> *(grey)* We test on our own first. *(ink)* Then Dan writes it up.
>
> Notes on building with AI: what works, what doesn't and what it actually costs to run.
>
> [3 latest article rows] · All insights →

> **05 · Start** *(dark)*
> *(grey)* Got a job that keeps slipping? *(ink)* Tell Dan what has to happen.
>
> [Book a call] [Email Dan]
> A$3,000/mo incl. GST. No contract. We take on a small handful of clients at a time.

**Callback note:** "keeps slipping" is in the hero and again in the closing CTA on purpose. Dan closes pieces by calling back to the opening (voice guide §3). If the designer or Dan wants no repeated phrase, use the C2 alternative.

**"What we build" (O1 to O4):** in this order the offer section and Selected work already cover all three things Roadmap Labs does, so I recommend dropping the three-column band from the homepage and keeping it for `/services`. The O copy for `/services` is in `offer.md` §6.

---

## Slot tables (every option, with character counts)

## Global

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| Site title (`lockedTitle`) | ≤ 60 | LIVE → option | LIVE, over limit | Roadmap Labs - apps, websites and automations that fit real use | 63 | OVER |
| Site title (`lockedTitle`) | ≤ 60 | LIVE → option | Rec. | Roadmap Labs - automations and software, one flat fee | 53 | ✓ |
| Site title (`lockedTitle`) | ≤ 60 | LIVE → option | Alt | Roadmap Labs - automations for SEO, social, email and admin | 59 | ✓ |
| Meta description (`lockedDescription`) | ≤ 155 | LIVE → option | Keep LIVE | We work out exactly what your business needs, then build apps, websites and automations around how people actually use them. | 124 | ✓ |
| Meta description (`lockedDescription`) | ≤ 155 | LIVE → option | Rec. | We build and manage automations for your SEO, social, email and admin. One flat fee of A$3,000 a month incl. GST. No contract. | 126 | ✓ |
| Nav labels (4) | ≤ 12 | Dan to decide | Rec. | Work | 4 | ✓ |
| Nav labels (4) | ≤ 12 | Dan to decide | Rec. | How we work | 11 | ✓ |
| Nav labels (4) | ≤ 12 | Dan to decide | Rec. | Insights | 8 | ✓ |
| Nav labels (4) | ≤ 12 | Dan to decide | Rec. | About | 5 | ✓ |
| Header buttons | ≤ 18 | Dan to decide | Rec. secondary | Email Dan | 9 | ✓ |
| Header buttons | ≤ 18 | Dan to decide | Rec. primary | Book a call | 11 | ✓ |
| Header buttons | ≤ 18 | Dan to decide | Option | Book an intro call | 18 | ✓ |
| Header buttons | ≤ 18 | Dan to decide | Over limit, don't use | Book a scoping call | 19 | OVER |
| Footer descriptor | ≤ 40 | LIVE | Keep LIVE | Software & automations studio | 29 | ✓ |
| Footer location | ≤ 30 | LIVE | Keep LIVE | Melbourne, Australia | 20 | ✓ |
| Footer bottom line | ≤ 40 | NEW | Rec. (left) | © 2026 Roadmap Labs | 19 | ✓ |
| Footer bottom line | ≤ 40 | NEW | Rec. (right, link) | dan@roadmaplabs.com.au | 22 | ✓ |

## Hero

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| H1 Mono label | ≤ 40 | LIVE (part) | Rec. | Melbourne · Automations studio | 30 | ✓ |
| H1 Mono label | ≤ 40 | LIVE (part) | Alt | Melbourne · Automations and software | 36 | ✓ |
| H1 Mono label | ≤ 40 | LIVE (part) | Render, over limit | Melbourne · Software & automations studio | 41 | OVER |
| H2 Display line 1 (grey) | ≤ 42 | NEW (replaces LIVE) | Rec. | The work that keeps slipping. | 29 | ✓ |
| H2 Display line 1 (grey) | ≤ 42 | NEW (replaces LIVE) | Alt A | SEO, social, email and admin. | 29 | ✓ |
| H2 Display line 1 (grey) | ≤ 42 | NEW (replaces LIVE) | Alt B (keep LIVE) | Building software has never been easier. | 40 | ✓ |
| H3 Display line 2 (ink) | ≤ 52 | NEW (replaces LIVE) | Rec. | Automated for A$3,000 a month. | 30 | ✓ |
| H3 Display line 2 (ink) | ≤ 52 | NEW (replaces LIVE) | Alt A | Done every week, for one flat fee. | 34 | ✓ |
| H3 Display line 2 (ink) | ≤ 52 | NEW (replaces LIVE) | Alt B (keep LIVE) | Building the right software is still just as hard. | 50 | ✓ |
| H4 Lead | ≤ 150 | NEW | Rec. | We build automations for your SEO, social, email and admin, one at a time, and manage every one. No contract. Cancel any month and keep it all. | 143 | ✓ |
| H4 Lead | ≤ 150 | NEW | Alt (if hero keeps LIVE pair) | We build and manage automations for the work that keeps slipping. One flat fee of A$3,000 a month incl. GST, and no contract. | 125 | ✓ |
| H5 Primary button | ≤ 18 | Dan to decide | Rec. | Book a call | 11 | ✓ |
| H5 Primary button | ≤ 18 | Dan to decide | Option | Book an intro call | 18 | ✓ |
| H6 Secondary button | ≤ 16 | NEW | Rec. | How it works | 12 | ✓ |
| H6 Secondary button | ≤ 16 | NEW | Alt | See the work | 12 | ✓ |
| H7 Reassurance microcopy (NEW slot, optional, under the buttons) | ≤ 60 | NEW | Rec. | A$3,000/mo incl. GST · About A$690 a week · No contract | 55 | ✓ |

## 01 · The offer

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| OF1 Section label | ≤ 24 | NEW | Rec. | 01 · The offer | 14 | ✓ |
| OF2 H2 line 1 (grey) | ≤ 26 | NEW | Rec. | One monthly fee. | 16 | ✓ |
| OF2 H2 line 1 (grey) | ≤ 26 | NEW | Alt | One fee. No contract. | 21 | ✓ |
| OF3 H2 line 2 (ink) | ≤ 26 | NEW | Rec. | Unlimited automations. | 22 | ✓ |
| OF3 H2 line 2 (ink) | ≤ 26 | NEW | Alt | As many jobs as you need. | 25 | ✓ |
| OF4 Lead | ≤ 170 | NEW | Rec. | We build your automations one at a time, as many as you need, and look after every one. The fee stays the same at every stage. | 126 | ✓ |
| OF5 Price | ≤ 24 | NEW | Rec. | A$3,000/mo incl. GST | 20 | ✓ |
| OF6 Price note | ≤ 90 | NEW | Rec. | About A$690 a week. No contract. Cancel any month and we hand everything over. | 78 | ✓ |
| OF7 Included list item ×6 | ≤ 80 | NEW | 1 | Automations for SEO, social, email, admin and sales, built one at a time | 72 | ✓ |
| OF7 Included list item ×6 | ≤ 80 | NEW | 2 | Testing and management of every automation | 42 | ✓ |
| OF7 Included list item ×6 | ≤ 80 | NEW | 3 | Your data and automations kept secure | 37 | ✓ |
| OF7 Included list item ×6 | ≤ 80 | NEW | 4 | Each automation kept on the best AI model for the job, at the best cost | 71 | ✓ |
| OF7 Included list item ×6 | ≤ 80 | NEW | 5 | A company portal for your data and team, when you're ready | 58 | ✓ |
| OF7 Included list item ×6 | ≤ 80 | NEW | 6 | A full handover if you leave | 28 | ✓ |
| OF8 Comparison label | ≤ 40 | NEW | Rec. | What it replaces | 16 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Row 1 | SEO campaign, well run | 22 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Row 1 fig | A$2,000/mo | 10 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Row 2 | Ad management | 13 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Row 2 fig | A$1,000/mo | 10 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Row 3 | Virtual assistant at A$500+ a week | 34 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Row 3 fig | A$2,170+/mo | 11 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Total | Together | 8 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Total fig | About A$5,170/mo | 16 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Us | Roadmap Labs | 12 | ✓ |
| OF9 Comparison rows (label / figure) | ≤ 40 | NEW | Us fig | A$3,000/mo incl. GST | 20 | ✓ |
| OF10 Comparison footnote | ≤ 180 | NEW | Rec. | Typical costs from Dan's agency years. AI model and tool running costs are extra: they vary by automation and sit on your own accounts. | 135 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Title 1 | Running costs | 13 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Body 1 | Model and tool costs depend on what you run, so they sit on your own accounts. We pick the models and keep costs down. | 118 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Title 2 | One-month test | 14 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Body 2 | Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one. | 110 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Title 3 | No contract | 11 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Body 3 | Cancel any month. We hand everything over and it's yours to run. | 64 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Title 4 | A handful of clients | 20 | ✓ |
| OF11 Fine print item ×4 (title / body) | ≤ 120 | NEW | Body 4 | We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly. | 104 | ✓ |
| OF12 Action (text link) | ≤ 18 | NEW | Rec. | Book a call → | 13 | ✓ |

## 02 · How we work (dark)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| HW1 Label | ≤ 24 | RENDER → new | Rec. | 02 · How we work | 16 | ✓ |
| HW2 H2 | ≤ 36 | RENDER → new | Rec. | Prove it first. Then build on it. | 33 | ✓ |
| HW2 H2 | ≤ 36 | RENDER → new | Alt | Start small. Grow what works. | 29 | ✓ |
| HW3 Lead | ≤ 170 | RENDER → new | Rec. | We don't start by rebuilding your business. We start with a couple of automations that earn their keep, then build the system that ties it all together. | 152 | ✓ |
| HW4 Step title 1 | ≤ 30 | RENDER → new | Rec. | Prove it. | 9 | ✓ |
| HW5 Step body 1 | ≤ 110 | RENDER → new | Rec. | A couple of automations on the job that costs you most or never gets done. Each gets a month to prove itself. | 109 | ✓ |
| HW4 Step title 2 | ≤ 30 | RENDER → new | Rec. | Bring it together. | 18 | ✓ |
| HW5 Step body 2 | ≤ 110 | RENDER → new | Rec. | A company portal that puts your data, systems and team in one secure place. Usually a month of work, same fee. | 110 | ✓ |
| HW4 Step title 3 | ≤ 30 | RENDER → new | Rec. | Grow it. | 8 | ✓ |
| HW5 Step body 3 | ≤ 110 | RENDER → new | Rec. | We keep building, one automation at a time. With your data in one place, each new one has more to work with. | 108 | ✓ |
| HW6 Buttons | ≤ 18 | RENDER → new | Primary (dark) | Book a call | 11 | ✓ |
| HW6 Buttons | ≤ 18 | RENDER → new | Drop | See a live build | 16 | ✓ |
| HW7 Optional line, only if Dan confirms reports | ≤ 110 | OPTION | Option | You get a plain-English report every fortnight on what's running and what it's doing. | 85 | ✓ |

## 03 · Selected work

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| W1 Section label | ≤ 24 | LIVE (renumbered) | Rec. | 03 · Selected work | 18 | ✓ |
| W5 Section lead (NEW slot) | ≤ 120 | NEW | Rec. | Two of these are our own companies. Flexfolio and ReviewBuddy run on the same systems we build for clients. | 107 | ✓ |
| W2 Section action | ≤ 14 | RENDER | Keep | All work → | 10 | ✓ |
| W3 Work card titles | ≤ 28 | LIVE | 1 | Compass Buyers Agency | 21 | ✓ |
| W3 Work card titles | ≤ 28 | LIVE | 2 | Compass OS | 10 | ✓ |
| W3 Work card titles | ≤ 28 | LIVE | 3 | ReviewBuddy | 11 | ✓ |
| W3 Work card titles | ≤ 28 | LIVE | 4 | Flexfolio | 9 | ✓ |
| W4 One-liner: Compass Buyers Agency | ≤ 90 | LIVE + render | Keep render | Website, SEO and CRO, plus Compass OS, an internal platform built in Retool. | 76 | ✓ |
| W4 One-liner: Compass OS (list row, Private) | ≤ 90 | NEW | Rec. | An internal operating system for Compass Buyers Agency, being built in Retool | 77 | ✓ |
| W4 One-liner: ReviewBuddy | ≤ 90 | LIVE | Keep LIVE | Review-growth software for Australian small businesses | 54 | ✓ |
| W4 One-liner: ReviewBuddy | ≤ 90 | LIVE | Alt | Review-growth software for small businesses. Our own company, run on our systems. | 81 | ✓ |
| W4 One-liner: Flexfolio | ≤ 90 | LIVE | Keep LIVE | A portfolio platform for product managers | 41 | ✓ |
| W4 One-liner: Flexfolio | ≤ 90 | LIVE | Alt | A portfolio platform for product managers. Our own company, run on our systems. | 79 | ✓ |
| W6 Result line per card (hidden until real) | ≤ 90 | TBC | Placeholder | [placeholder: real result from Dan] | 35 | ✓ |

## 04 · Insights teaser

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| IN1 Section label | ≤ 24 | NEW | Rec. | 04 · Insights | 13 | ✓ |
| IN2 H2 line 1 (grey) | ≤ 26 | NEW | Rec. | We test on our own first. | 25 | ✓ |
| IN2 H2 line 1 (grey) | ≤ 26 | NEW | Alt | Notes on the work. | 18 | ✓ |
| IN3 H2 line 2 (ink) | ≤ 26 | NEW | Rec. | Then Dan writes it up. | 22 | ✓ |
| IN3 H2 line 2 (ink) | ≤ 26 | NEW | Alt | What works, what doesn't. | 25 | ✓ |
| IN4 Lead | ≤ 150 | NEW | Rec. | Notes on building with AI: what works, what doesn't and what it actually costs to run. | 86 | ✓ |
| IN5 Action | ≤ 14 | NEW | Rec. | All insights → | 14 | ✓ |

## 05 · Start (CtaBand, dark)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| C1 CTA label | ≤ 16 | NEW | Rec. | 05 · Start | 10 | ✓ |
| C2 H2 line 1 (grey) | ≤ 36 | NEW | Rec. | Got a job that keeps slipping? | 30 | ✓ |
| C2 H2 line 1 (grey) | ≤ 36 | NEW | Alt | Know which job costs you most? | 30 | ✓ |
| C3 H2 line 2 (ink) | ≤ 36 | LIVE | Keep LIVE | Tell Dan what has to happen. | 28 | ✓ |
| C4 Buttons | ≤ 18 | LIVE | Primary | Book a call | 11 | ✓ |
| C4 Buttons | ≤ 18 | LIVE | Secondary | Email Dan | 9 | ✓ |
| C5 Reassurance line (NEW slot, optional) | ≤ 90 | NEW | Rec. | A$3,000/mo incl. GST. No contract. We take on a small handful of clients at a time. | 83 | ✓ |
