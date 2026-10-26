# Case study: Flexfolio

Draft 4.7, 26 October 2026 (AEDT). Route `/projects/flexfolio`. Same structure as `case-study-compass.md`. Rewritten as a plain case study after Dan's preview review. Counts checked by `_tools/slots.py case-flexfolio` (every slot passes). Pre-4.7 copy: `_tools/old/case-study-flexfolio_pre-4-7_2026-10-26.md`.

**Own company.** No customer results, user numbers or testimonials. The result section doesn't render. Every gap is [TBC] and listed in SIGNOFF.md.
**Product managers only** (Dan, 26 Oct 2026, 12:59 PM AEDT: "for product managers only, while we find product-market fit"). The page says who it's for and leaves the product-market fit reason out.

## Facts used (and only these)

- Flexfolio is Dan's own company, in beta (Dan, via the brief). It runs on Roadmap Labs' AI automations; which ones isn't on file.
- A portfolio platform for product managers, to show their thinking across projects and career stages (Dan, via the brief).
- flexfolio.co (captured 25 Oct 2026): portfolio, blog and newsletter on a domain you own; structure and layout already designed; experience marked as employment, founder, consulting or freelance, with projects under each; "more than a resume line"; free to start, 14-day Pro trial.

## Reading view

> Work / Flexfolio
>
> **H1 Flexfolio: a portfolio platform for product managers**
> Flexfolio is our own company. It gives product managers a portfolio that shows their thinking across projects and career stages. It's in beta.
>
> Client · Our own company | Services · Product, AI automation | Status · In beta | Live site · flexfolio.co ↗
>
> *(Image)* The Flexfolio home page, captured October 2026.
>
> **H2 Who it's for**
> Flexfolio is for product managers. A line on a CV gives the job title and the dates. It has no room for the calls you made or why.
> [TBC: Dan, why you started Flexfolio, in one or two lines. Hidden until written]
>
> **H2 What we built**
> A portfolio, a blog and a newsletter on a domain you own. The layout is already designed, so you add your work and share the link.
> Each role is marked as employment, founder, consulting or freelance, with its projects under it. Side projects sit on the same timeline as the day job.
> It runs on the same AI automations we set up for clients. [TBC: which ones, named by Dan. Hidden until named]
>
> *(Image)* A demo profile on Flexfolio, captured October 2026. [TBC: confirm it's a demo account]
>
> **H2 How it works**
> 1 - Sign up. It's free to start.
> 2 - Add your roles, and the projects under each one.
> 3 - Share the link to your portfolio.
> Flexfolio is in beta. It's free to start, with a 14-day Pro trial. [TBC: confirm the trial terms are current]
>
> *(H2 The result: hidden until there's a real one)*
>
> Next project → Compass Buyers Agency
>
> Closing band: C1 to C5 from homepage.md. The page's one CTA is **Book a call**.

## Slot tables

### Case study /projects/flexfolio (own company, no customer results)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS0 SEO title (absolute) | ≤ 60 | NEW | Rec. | Flexfolio, our own portfolio platform · Roadmap Labs | 52 | ✓ |
| CS0 Meta description | ≤ 155 | 4.7 | Rec. | Flexfolio is our own portfolio platform for product managers, now in beta. What we built and how it works. | 106 | ✓ |
| CS1 Breadcrumb | ≤ 40 | Render | Rec. | Work / Flexfolio | 16 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Rec. | Flexfolio: a portfolio platform for product managers | 52 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Short | Flexfolio | 9 | ✓ |
| CS3 Lead | ≤ 180 | Fact + flexfolio.co | Rec. | Flexfolio is our own company. It gives product managers a portfolio that shows their thinking across projects and career stages. It's in beta. | 142 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 1 | Client | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 2 | Services | 8 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 3 | Status | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 4 | Live site | 9 | ✓ |
| CS5 Client fact value | ≤ 30 | Fact | Rec. | Our own company | 15 | ✓ |
| CS6 Services value | ≤ 30 | Fact | Rec. | Product, AI automation | 22 | ✓ |
| CS7 Status value | ≤ 10 | Fact | Rec. | In beta | 7 | ✓ |
| CS8 Live link label | ≤ 30 | flexfolio.co | Rec. | flexfolio.co ↗ | 14 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 1 | Who it's for | 12 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 2 | What we built | 13 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 3 | How it works | 12 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 4 (hidden until real) | The result | 10 | ✓ |
| CS10 Body: Who it's for | ≤ 260 | Dan, 26 Oct + flexfolio.co | Para 1 | Flexfolio is for product managers. A line on a CV gives the job title and the dates. It has no room for the calls you made or why. | 130 | ✓ |
| CS10 Body: Who it's for | ≤ 260 | Dan, 26 Oct + flexfolio.co | Para 2 | [TBC: Dan, why you started Flexfolio, in one or two lines. Hide this paragraph until written] | 0 | ✓ |
| CS10 Body: What we built | ≤ 260 | flexfolio.co + fact | Para 1 | A portfolio, a blog and a newsletter on a domain you own. The layout is already designed, so you add your work and share the link. | 130 | ✓ |
| CS10 Body: What we built | ≤ 260 | flexfolio.co + fact | Para 2 | Each role is marked as employment, founder, consulting or freelance, with its projects under it. Side projects sit on the same timeline as the day job. | 151 | ✓ |
| CS10 Body: What we built | ≤ 260 | flexfolio.co + fact | Para 3 | It runs on the same AI automations we set up for clients. [TBC: which ones, named by Dan. Hide this paragraph until named] | 57 | ✓ |
| CS14 How it works steps | ≤ 90 | flexfolio.co | 1 | Sign up. It's free to start. | 28 | ✓ |
| CS14 How it works steps | ≤ 90 | flexfolio.co | 2 | Add your roles, and the projects under each one. | 48 | ✓ |
| CS14 How it works steps | ≤ 90 | flexfolio.co | 3 | Share the link to your portfolio. | 33 | ✓ |
| CS10 Body: How it works / status | ≤ 260 | Fact | Rec. | Flexfolio is in beta. It's free to start, with a 14-day Pro trial. [TBC: confirm the trial terms are current] | 66 | ✓ |
| CS10 Body: The result (hidden) | ≤ 260 | Placeholder | Result | [TBC: result, once there's a real one. Leave out until real] | 0 | ✓ |
| CS11 Image caption (home page) | ≤ 120 | Screenshot | Rec. | The Flexfolio home page, captured October 2026. | 47 | ✓ |
| CS11 Image caption (profile) | ≤ 120 | Screenshot | Rec. | A demo profile on Flexfolio, captured October 2026. [TBC: confirm it's a demo account] | 51 | ✓ |
| CS12 Next project label | ≤ 20 | COPY-BRIEF | Rec. | Next project → | 14 | ✓ |
