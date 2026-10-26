# Case study: Flexfolio

Draft 4.5, 26 October 2026 (AEDT). Route `/projects/flexfolio` (SEO brief, brand page, no keyword target). Same structure and CS slot IDs as `case-study-compass.md`. Counts checked by `_tools/slots.py case-flexfolio` (every slot passes).

**Own company, working proof of the offer.** No customer results, user numbers or testimonials. The Result and Testimonial rows don't render. Every gap is [TBC] and listed in SIGNOFF.md.

## Facts used (and only these)

- Flexfolio is Dan's own company. It's in beta and runs on Roadmap Labs' own AI systems and automations (Dan, via the brief). Which systems and automations: not on file.
- A portfolio platform for product managers, to show their thinking across projects and career stages (Dan, via the brief).
- flexfolio.co (captured 25 Oct 2026): portfolio, blog and newsletter on a domain you own; structure and layout already designed; experience marked as employment, founder, consulting or freelance, with projects under each; "more than a resume line"; free to start, 14-day Pro trial, no card.
- Audience: product managers only, while we find product-market fit (Dan, 26 Oct 2026, 12:59 PM AEDT). The wider audience on flexfolio.co isn't used here.

## Reading view

> Work / Flexfolio
>
> **Flexfolio: a portfolio platform for product managers**
> Flexfolio is our own company. It helps product managers show their thinking across projects and career stages. It's in beta, and it runs on our own systems.
>
> Client · Our own company | Services · Product, AI automation | Status · In beta | Live site · flexfolio.co ↗
>
> *(Image)* flexfolio.co, captured October 2026.
>
> **The brief**
> Flexfolio is for product managers whose work deserves more than a line on a CV. [TBC: Dan to write why he started it, in two or three lines]
>
> **What we built**
> A portfolio, a blog and a newsletter on a domain you own. The structure and layout are already designed, so you add your work and share the link.
> Each role can be marked as employment, founder, consulting or freelance. Side projects sit on the same timeline as the day job, with projects under the role they came from.
> Behind it, Flexfolio runs on the AI systems and automations we build for clients. [TBC: which systems and automations, named by Dan]
>
> *(Image)* A demo profile on Flexfolio, captured October 2026. [TBC: confirm it's a demo account]
>
> **Where it is now**
> Flexfolio is in beta. It's free to start, with a 14-day Pro trial. [TBC: what's next, from Dan]
>
> Next project → Compass Buyers Agency

## Slot tables

### Case study /projects/flexfolio (own company, no customer results)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS0 SEO title (absolute) | ≤ 60 | NEW | Rec. | Flexfolio, our own portfolio platform · Roadmap Labs | 52 | ✓ |
| CS0 Meta description | ≤ 155 | NEW | Rec. | Flexfolio is our own portfolio platform for product managers. It's in beta, and it runs on the AI systems and automations we build. | 131 | ✓ |
| CS1 Breadcrumb | ≤ 40 | Render | Rec. | Work / Flexfolio | 16 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Rec. | Flexfolio: a portfolio platform for product managers | 52 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Short | Flexfolio | 9 | ✓ |
| CS3 Lead | ≤ 180 | Fact + flexfolio.co | Rec. | Flexfolio is our own company. It helps product managers show their thinking across projects and career stages. It's in beta, and it runs on our own systems. | 156 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 1 | Client | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 2 | Services | 8 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 3 | Status | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 4 | Live site | 9 | ✓ |
| CS5 Client fact value | ≤ 30 | Fact | Rec. | Our own company | 15 | ✓ |
| CS6 Services value | ≤ 30 | Fact | Rec. | Product, AI automation | 22 | ✓ |
| CS7 Status value | ≤ 10 | Fact | Rec. | In beta | 7 | ✓ |
| CS8 Live link label | ≤ 30 | flexfolio.co | Rec. | flexfolio.co ↗ | 14 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 1 | The brief | 9 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 2 | What we built | 13 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 3 | Where it is now | 15 | ✓ |
| CS10 Body: The brief | - | flexfolio.co + Dan writes | Rec. | Flexfolio is for product managers whose work deserves more than a line on a CV. [TBC: Dan to write why he started it, in two or three lines] | - | - |
| CS10 Body: What we built | - | flexfolio.co + fact | Para 1 | A portfolio, a blog and a newsletter on a domain you own. The structure and layout are already designed, so you add your work and share the link. | - | - |
| CS10 Body: What we built | - | flexfolio.co + fact | Para 2 | Each role can be marked as employment, founder, consulting or freelance. Side projects sit on the same timeline as the day job, with projects under the role they came from. | - | - |
| CS10 Body: What we built | - | flexfolio.co + fact | Para 3 | Behind it, Flexfolio runs on the AI systems and automations we build for clients. [TBC: which systems and automations, named by Dan] | - | - |
| CS10 Body: Where it is now | - | Fact | Rec. | Flexfolio is in beta. It's free to start, with a 14-day Pro trial. [TBC: what's next, from Dan] | - | - |
| CS11 Image caption (home page) | ≤ 120 | DESIGN-SYSTEM caption format | Rec. | flexfolio.co, captured October 2026. | 36 | ✓ |
| CS11 Image caption (profile) | ≤ 120 | DESIGN-SYSTEM caption format | Rec. | A demo profile on Flexfolio, captured October 2026. [TBC: confirm it's a demo account] | 51 | ✓ |
| CS12 Next project label | ≤ 20 | COPY-BRIEF | Rec. | Next project → | 14 | ✓ |
