# NOTES: Roadmap Labs copy, draft 2

25 October 2026 (AEDT). Files: `homepage.md`, `offer.md` (includes the `/services` slot tables and the FAQ), `insights.md`, this file. Slot copy and limits live in `_tools/slots.py` (run `python3 slots.py home` or `python3 slots.py services`). Draft 1 is archived in `_tools/old/`.

## 1. Settled by Dan (25 Oct 2026)

- **Main CTA:** "Book a call". It's a chat about the service. Other CTA options are retired. "Email Dan" stays as the secondary button only in C4 (the CTA band), which is the slot the brief has for it. The header shows the primary button only, as rendered.
- **Hero:** offer-led, but **with no price**. It's about cutting internal costs and putting growth work on a system. There are four ranked options in `homepage.md`.
- **One retainer:** A$3,000/mo incl. GST, covering software development, automations and marketing automations. Client software builds sit inside it. The separate website line and "pricing on request" are removed, and O4 now carries the own-products line.
- **Ad benchmark:** agency management fees for Meta, Google or social campaigns, not ad spend. The row and footnote say so.
- **No results or testimonials** for any brand. All proof and result placeholders are removed from the live copy. Selected work is factual only.
- **Insights:** the two existing repo notes are not to be published as Dan's. Insights grows over time.
- **How it works:** free discovery session → proposal with ROI → retainer build. The proposal is written as estimates, and there are no savings or revenue promises anywhere on the site.

## 2. Decisions Dan still needs to make

**Discovery session**
1 - Length and format: for example 60 minutes, video call or in person.
2 - Who it's for: open to anyone, or is there a bar (size, budget, owner present)?
3 - Is it obligation-free? Suggested line: "It's free, and there's nothing to sign."
4 - Is "Book a call" the discovery session itself, or a shorter chat before it? The copy currently treats them as the same first step. If they're separate, How it works needs a step 0 or the button label changes.

**Proposal**
5 - Turnaround: for example within a week of the session.
6 - Is it theirs to keep if they don't sign? Suggested line: "It's yours to keep either way."
7 - How is ROI estimated? For example hours saved × the team's hourly cost, tools and agency fees dropped, and a conservative revenue range. Once this is set, the FAQ can explain the method. The site will never show a figure.
8 - Is it free too, or only the session?

**Offer and pricing**
9 - Benchmarks: were the A$2,000 / A$1,000 / A$500 a week figures inc. or ex. GST? Ours is inc.
10 - What counts as one automation? This is needed for the "unlimited" alt line and the FAQ. Suggested: "one workflow that does one job, like publishing a weekly blog post or chasing unpaid invoices".
11 - How does a software build fit "one thing at a time"? For example, does a client build pause the automation queue while it's underway, the way the portal takes about a month?
12 - Typical turnaround per automation.
13 - Tax line: publish "Generally a deductible business expense - check with your accountant", or leave it out?
14 - Fortnightly reports: yes or no. They're left out until Dan confirms.
15 - The buyer: industry, size and who signs off. "Who it's for" stays off the site until then.
16 - CRM comparison line: use it (with no figure) or drop it.

**Site**
17 - Nav: Work / Services / Insights / About (as rendered, and now recommended, since the services page holds pricing) or "How we work".
18 - Hero choice from the ranked options.
19 - The underfold P1/P2 ("Software that respects the time."): move to About or cut.
20 - Compass's written OK for the screenshot and for naming Compass OS.
21 - The Substack URL for the canonical links, and when the first articles go up.

## 3. For the designer

1 - **Hero:** there are four ranked options. Render 1 and 2. All lines fit ≤ 32 / ≤ 32 / ≤ 150. The eyebrow is now "Melbourne · Software and automations" (36, ≤ 40), and the microcopy is "First step: a free session to map what's worth automating" (57, ≤ 60). There's no price anywhere in the hero.
2 - **Section 02 label is now "02 · How it works"**, matching Dan's wording and the hero link. The anchor can stay `#how-we-work`. If the nav label stays "Services", nothing else changes.
3 - **HW2** is now "See the numbers." (grey) / "Then we build." (ink), 31 characters in total.
4 - **Offer H2:** "One monthly retainer." / "Software and automations." "Unlimited automations" is the alt, kept until Dan defines one automation.
5 - **Comparison row 2** is now "Agency fees: Meta, Google or social ads" (39, ≤ 40). The footnote now says the ad row is the agency's fee.
6 - **Services O1 to O3** are now Software development · Automations · Marketing automations (meta "In the retainer"). O4 is the own-products line, and the website line is removed. The S2 pair is "Three kinds of work." / "One monthly retainer."
7 - **FAQ:** 8 are ready to go live and 2 are on hold. If the layout only fits 7, drop "Why only a handful of clients?".
8 - **Selected work feels thin** now that it has no outcomes, a screenshot that isn't cleared, and one-line rows. Alternatives, in order of preference:
   - a. **Merge it into the offer as a proof strip** called "We run our own companies on it": a single rule row under the fine print, with Flexfolio and ReviewBuddy as text links plus "Compass OS · Private". This drops a section and shortens the page.
   - b. **Keep the section but pair the rows with the Compass frame** only once Compass signs off. Until then, show the list full width with a larger W5 lead.
   - c. **Fold Selected work and Insights into one white section**, "03 · Built on ourselves first", with the work list on the left and the latest notes on the right (once 3+ exist). It keeps the two dark sections apart either way.
   Whichever you choose, no result line or metric gets rendered.
9 - **Insights** is still hidden until 3 or more articles are live. The two existing repo notes (`respect-the-time`, `the-smaller-brief`) should be set to draft or removed so they never count towards the 3, and never publish under Dan's name.
10 - **Contact intent options** (LIVE) still include "Website, SEO or conversion". Suggested replacement, to match the one retainer: Book a call · Software development · Automations · Marketing automations · An own-product question · Something else. Dan to OK it.

## 4. Assumptions

- The free discovery session is the first thing someone gets after "Book a call" (see decision 4).
- "One thing at a time" covers both software builds and automations.
- The handover on cancel applies at every stage.
- Flexfolio and ReviewBuddy are Dan's own companies and run on Roadmap Labs systems (Dan, 25 Oct). It's stated as fact, with no outcomes.
- About A$690 a week is a supporting line only, and it's used in the offer, not the hero.

## 5. Checks run on draft 2

- All home and `/services` slots were checked against the updated COPY-BRIEF limits by script, and all pass.
- A scan for em and en dashes, banned words and exclamation marks found none.
- Australian English, sentence case and contractions throughout. "We" for the studio and "Dan" when it's personal, never both in one sentence.
- No invented metrics, testimonials or promises, and savings and revenue appear only as estimates.
