# Case study: ReviewBuddy

Draft 4.7, 26 October 2026 (AEDT). Audience: Australian tradies (Dan, 26 Oct 2026, 12:59 PM AEDT). Route `/projects/review-buddy`. Same structure as `case-study-compass.md`. Rewritten as a plain case study after Dan's preview review. Counts checked by `_tools/slots.py case-reviewbuddy` (every slot passes). Pre-4.7 copy: `_tools/old/case-study-reviewbuddy_pre-4-7_2026-10-26.md`.

**Own company.** No customer results, user numbers or testimonials. The result section doesn't render. Every gap is [TBC] and listed in SIGNOFF.md.
**Status only, no live link.** reviewbuddy.com.au isn't serving yet, so the Live site fact and link are hidden (CS8). Add them back once the site is live.
**The licence isn't mentioned** (D16, open).

## Facts used (and only these)

- ReviewBuddy is Dan's own company, in beta (Dan, via the brief). It runs on Roadmap Labs' AI automations; which ones isn't on file.
- ReviewBuddy site copy (`reviewbuddy/current-site/home.txt`): before someone calls, they check your Google reviews, then your website; reviews copied in by hand go stale; review link and QR code; one widget showing the review sites a business connects (Google, hipages, Service Seeking and more), updating on a new Google review; Growth plan review-request emails with one reminder, and past customers loaded from a spreadsheet; free done-for-you setup; 7-day free trial.
- reviewbuddy.com.au returned 404 on 25 and 26 Oct 2026. Dan, 26 Oct: getting the website live is key.
- Widget screenshot cleared by Dan via the Designer, 26 Oct ("those ReviewBuddy screenshots are pretty good. It's okay to share the Compass").

## Reading view

> Work / ReviewBuddy
>
> **H1 ReviewBuddy: Google reviews for Australian tradies**
> ReviewBuddy is our own company. It helps Australian tradies get more Google reviews and show them on their website. It's in beta.
>
> Client · Our own company | Services · Product, AI automation | Status · In beta
>
> *(Image)* The ReviewBuddy review widget, captured October 2026.
>
> **H2 Who it's for**
> ReviewBuddy is for Australian tradies. Before someone rings a tradie, they check the Google reviews. Then they look at the website.
> Reviews copied onto a website by hand go out of date as soon as nobody updates them.
> [TBC: Dan, why you started ReviewBuddy, in one or two lines. Hidden until written]
>
> **H2 What we built**
> Each business gets its own Google review link and QR code to share after a job. A widget on their website shows their reviews, alongside other review sites they use, like hipages.
> On the Growth plan, ReviewBuddy emails customers to ask for a review, with one reminder. Past customers can be loaded in from a spreadsheet.
> It runs on the same AI automations we set up for clients. [TBC: which ones, named by Dan. Hidden until named]
>
> *(Image)* The ReviewBuddy app, captured October 2026. [TBC: screenshot]
>
> **H2 How it works**
> 1 - After the job, the tradie shares their review link or QR code.
> 2 - The customer leaves a Google review.
> 3 - The widget on the tradie's website updates with the new review.
> ReviewBuddy is in beta. Setup is free, and there's a 7-day free trial. [TBC: confirm the trial and setup terms are current]
>
> *(H2 The result: hidden until there's a real one)*
>
> Next project → Flexfolio
>
> Closing band: C1 to C5 from homepage.md. The page's one CTA is **Book a call**.

## Slot tables

### Case study /projects/review-buddy (own company, no customer results)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS0 SEO title (absolute) | ≤ 60 | NEW | Rec. | ReviewBuddy, our own review software · Roadmap Labs | 51 | ✓ |
| CS0 Meta description | ≤ 155 | 4.7 | Rec. | ReviewBuddy is our own Google review software for Australian tradies, now in beta. What we built and how it works. | 114 | ✓ |
| CS1 Breadcrumb | ≤ 40 | Render | Rec. | Work / ReviewBuddy | 18 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Rec. | ReviewBuddy: Google reviews for Australian tradies | 50 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Short | ReviewBuddy | 11 | ✓ |
| CS3 Lead | ≤ 180 | Fact + ReviewBuddy site | Rec. | ReviewBuddy is our own company. It helps Australian tradies get more Google reviews and show them on their website. It's in beta. | 129 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 1 | Client | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 2 | Services | 8 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 3 | Status | 6 | ✓ |
| CS5 Client fact value | ≤ 30 | Fact | Rec. | Our own company | 15 | ✓ |
| CS6 Services value | ≤ 30 | Fact | Rec. | Product, AI automation | 22 | ✓ |
| CS7 Status value | ≤ 10 | Fact | Rec. | In beta | 7 | ✓ |
| CS8 Live link label | ≤ 30 | Dan, 26 Oct | Hidden | [DECISION: no live link or Live site fact until reviewbuddy.com.au is serving] | 0 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 1 | Who it's for | 12 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 2 | What we built | 13 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 3 | How it works | 12 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 4 (hidden until real) | The result | 10 | ✓ |
| CS10 Body: Who it's for | ≤ 260 | Dan, 26 Oct + ReviewBuddy site | Para 1 | ReviewBuddy is for Australian tradies. Before someone rings a tradie, they check the Google reviews. Then they look at the website. | 131 | ✓ |
| CS10 Body: Who it's for | ≤ 260 | Dan, 26 Oct + ReviewBuddy site | Para 2 | Reviews copied onto a website by hand go out of date as soon as nobody updates them. | 84 | ✓ |
| CS10 Body: Who it's for | ≤ 260 | Dan, 26 Oct + ReviewBuddy site | Para 3 | [TBC: Dan, why you started ReviewBuddy, in one or two lines. Hide this paragraph until written] | 0 | ✓ |
| CS10 Body: What we built | ≤ 260 | ReviewBuddy site + fact | Para 1 | Each business gets its own Google review link and QR code to share after a job. A widget on their website shows their reviews, alongside other review sites they use, like hipages. | 179 | ✓ |
| CS10 Body: What we built | ≤ 260 | ReviewBuddy site + fact | Para 2 | On the Growth plan, ReviewBuddy emails customers to ask for a review, with one reminder. Past customers can be loaded in from a spreadsheet. | 140 | ✓ |
| CS10 Body: What we built | ≤ 260 | ReviewBuddy site + fact | Para 3 | It runs on the same AI automations we set up for clients. [TBC: which ones, named by Dan. Hide this paragraph until named] | 57 | ✓ |
| CS14 How it works steps | ≤ 90 | ReviewBuddy site | 1 | After the job, the tradie shares their review link or QR code. | 62 | ✓ |
| CS14 How it works steps | ≤ 90 | ReviewBuddy site | 2 | The customer leaves a Google review. | 36 | ✓ |
| CS14 How it works steps | ≤ 90 | ReviewBuddy site | 3 | The widget on the tradie's website updates with the new review. | 63 | ✓ |
| CS10 Body: How it works / status | ≤ 260 | Fact | Rec. | ReviewBuddy is in beta. Setup is free, and there's a 7-day free trial. [TBC: confirm the trial and setup terms are current] | 70 | ✓ |
| CS10 Body: The result (hidden) | ≤ 260 | Placeholder | Result | [TBC: result, once there's a real one. Leave out until real] | 0 | ✓ |
| CS11 Image caption (widget) | ≤ 120 | Screenshot, cleared by Dan via Designer | Rec. | The ReviewBuddy review widget, captured October 2026. | 53 | ✓ |
| CS11 Image caption (app) | ≤ 120 | Screenshot | Rec. | The ReviewBuddy app, captured October 2026. [TBC: screenshot] | 43 | ✓ |
| CS12 Next project label | ≤ 20 | COPY-BRIEF | Rec. | Next project → | 14 | ✓ |
