# Case study: ReviewBuddy

Draft 4.5, 26 October 2026 (AEDT). Audience: Australian tradies (Dan, 26 Oct 2026, 12:59 PM AEDT). Route `/projects/review-buddy` (SEO brief, brand page, no keyword target). Same structure and CS slot IDs as `case-study-compass.md`. Counts checked by `_tools/slots.py case-reviewbuddy` (every slot passes).

**Own company, working proof of the offer.** No customer results, user numbers or testimonials. The Result and Testimonial rows don't render. Every gap is [TBC] and listed in SIGNOFF.md.
**The licence isn't mentioned.** ReviewBuddy is licensed from Embed My Reviews. The page doesn't say so until Dan decides (SIGNOFF.md).

## Facts used (and only these)

- ReviewBuddy is Dan's own company. It's in beta and runs on Roadmap Labs' own AI systems and automations (Dan, via the brief). Which systems and automations: not on file.
- ReviewBuddy site copy (`reviewbuddy/current-site/home.txt`, `rb/public/llms.txt`): Google reviews for Australian tradies; review link and QR code; one widget combining the review sites a business uses, updating on a new Google review; Growth plan review-request emails with one reminder and CSV import of past customers; free setup; 7-day free trial.
- reviewbuddy.com.au returned 404 on 25 and 26 Oct 2026. The app sign-in at app.reviewbuddy.com.au is live. Dan, 26 Oct: getting the website live is key.

## Reading view

> Work / ReviewBuddy
>
> **ReviewBuddy: Google reviews for Australian tradies**
> ReviewBuddy is our own company. It helps tradies get more Google reviews and show them on their website. It's in beta, and it runs on our own systems.
>
> Client · Our own company | Services · Product, AI automation | Status · In beta | Live site · [TBC: reviewbuddy.com.au ↗, once the site is serving]
>
> *(Image)* The ReviewBuddy review widget, captured October 2026. [TBC: capture without a client's reviews, or the client's OK]
>
> **The brief**
> Before someone rings a tradie, they check the Google reviews. Then they look at the website. [TBC: Dan to write why he started ReviewBuddy, in two or three lines]
>
> **What we built**
> Each business gets its own Google review link and QR code to share after a job. Reviews show on their website in one widget, alongside the other review sites they use. It updates when a new Google review comes in.
> On the Growth plan, ReviewBuddy emails customers to ask for a review, with one reminder. Past customers can be brought in from a CSV.
> Behind it, ReviewBuddy runs on the AI systems and automations we build for clients. [TBC: which systems and automations, named by Dan]
>
> *(Image)* The ReviewBuddy app, captured October 2026. [TBC: screenshot]
>
> **Where it is now**
> ReviewBuddy is in beta, with a 7-day free trial and free setup. [TBC: what's next, from Dan]
>
> Next project → Flexfolio

If the live link stays down at launch, the fact row switches to Status only (DESIGN-SYSTEM §7.7) and the link is dropped.

## Slot tables

### Case study /projects/review-buddy (own company, no customer results)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS0 SEO title (absolute) | ≤ 60 | NEW | Rec. | ReviewBuddy, our own review software · Roadmap Labs | 51 | ✓ |
| CS0 Meta description | ≤ 155 | NEW | Rec. | ReviewBuddy is our own Google review software for Australian tradies. It's in beta, and it runs on the AI systems and automations we build. | 139 | ✓ |
| CS1 Breadcrumb | ≤ 40 | Render | Rec. | Work / ReviewBuddy | 18 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Rec. | ReviewBuddy: Google reviews for Australian tradies | 50 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Short | ReviewBuddy | 11 | ✓ |
| CS3 Lead | ≤ 180 | Fact + ReviewBuddy site | Rec. | ReviewBuddy is our own company. It helps tradies get more Google reviews and show them on their website. It's in beta, and it runs on our own systems. | 150 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 1 | Client | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 2 | Services | 8 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 3 | Status | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 4 | Live site | 9 | ✓ |
| CS5 Client fact value | ≤ 30 | Fact | Rec. | Our own company | 15 | ✓ |
| CS6 Services value | ≤ 30 | Fact | Rec. | Product, AI automation | 22 | ✓ |
| CS7 Status value | ≤ 10 | Fact | Rec. | In beta | 7 | ✓ |
| CS8 Live link label | ≤ 30 | ReviewBuddy site | TBC | [TBC: reviewbuddy.com.au ↗, once the site is serving] | 0 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 1 | The brief | 9 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 2 | What we built | 13 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 3 | Where it is now | 15 | ✓ |
| CS10 Body: The brief | - | ReviewBuddy site + Dan writes | Rec. | Before someone rings a tradie, they check the Google reviews. Then they look at the website. [TBC: Dan to write why he started ReviewBuddy, in two or three lines] | - | - |
| CS10 Body: What we built | - | ReviewBuddy site + fact | Para 1 | Each business gets its own Google review link and QR code to share after a job. Reviews show on their website in one widget, alongside the other review sites they use. It updates when a new Google review comes in. | - | - |
| CS10 Body: What we built | - | ReviewBuddy site + fact | Para 2 | On the Growth plan, ReviewBuddy emails customers to ask for a review, with one reminder. Past customers can be brought in from a CSV. | - | - |
| CS10 Body: What we built | - | ReviewBuddy site + fact | Para 3 | Behind it, ReviewBuddy runs on the AI systems and automations we build for clients. [TBC: which systems and automations, named by Dan] | - | - |
| CS10 Body: Where it is now | - | Fact | Rec. | ReviewBuddy is in beta, with a 7-day free trial and free setup. [TBC: what's next, from Dan] | - | - |
| CS11 Image caption (widget) | ≤ 120 | DESIGN-SYSTEM caption format | Rec. | The ReviewBuddy review widget, captured October 2026. [TBC: capture without a client's reviews, or the client's OK] | 53 | ✓ |
| CS11 Image caption (app) | ≤ 120 | DESIGN-SYSTEM caption format | Rec. | The ReviewBuddy app, captured October 2026. [TBC: screenshot] | 43 | ✓ |
| CS12 Next project label | ≤ 20 | COPY-BRIEF | Rec. | Next project → | 14 | ✓ |
