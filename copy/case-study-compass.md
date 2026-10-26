# Case study: Compass Buyers Agency

Draft 4.7, 26 October 2026 (AEDT). Route `/projects/compass-buyers-agency`. Rewritten as a plain case study after Dan's preview review (26 Oct: the project pages read as overdone and like articles). Counts checked by `_tools/slots.py case` (every slot passes). Pre-4.7 copy: `_tools/old/case-study-compass_pre-4-7_2026-10-26.md`.

**Naming Compass is cleared** (Dan, 26 Oct 2026, 12:59 PM AEDT: "We can name the Compass site... Compass is happy for us to share that").
**Website project only** (Dan, 1:01 PM AEDT: "website only (build, SEO, conversion)"). It was a project we did for them. No retainer, partnership, ongoing work or any other work for Compass. No people are named.
**Placeholders never render.** Any paragraph or fact that is only a [TBC] or [DECISION] is hidden, along with its heading where the whole section is a placeholder (The result).

## Facts used (and only these)

- Compass Buyers Agency (compassagency.com.au). The live site places them from Byron Bay to the Gold Coast.
- Roadmap Labs built their website as a project, with SEO and conversion work (Dan, 26 Oct).
- The website is live. What the copy describes on the site (the pages, the area pages, the header button, the contact page) is what's visible in the screenshots captured 26 Oct 2026 (`/workspace/compass-shots/`).

## Reading view

> Work / Compass Buyers Agency
>
> **H1 Compass Buyers Agency: website, SEO and conversion**
> We built the website for Compass Buyers Agency, with the SEO and the work on turning visits into enquiries.
>
> Client · Compass Buyers Agency | Services · Website, SEO, conversion | Year · *(hidden until known)* | Live site · compassagency.com.au ↗
>
> *(Image: home, desktop)* Home page on desktop, with the free consultation and call buttons. compassagency.com.au, captured October 2026.
> *(Image: home, mobile)* Home page on a phone, with both buttons under the headline. compassagency.com.au, captured October 2026.
>
> **H2 The client**
> Compass Buyers Agency helps people buy property from Byron Bay to the Gold Coast.
> [TBC: Dan, what Compass needed from the website, in one or two lines. Hidden until written]
>
> **H2 What we did**
> **H3 Website**
> We built the whole site: the home page, service pages, team page, area pages, blog and contact page. It works on desktop and on a phone.
>
> **H3 SEO**
> We set up the SEO. The site has local area pages, so it can show up when someone searches for a buyers agent in that area. The Byron Bay page also covers Bangalow and Suffolk Park.
>
> *(Image: Byron Bay page)* The Byron Bay area page, which also covers Bangalow and Suffolk Park. compassagency.com.au, captured October 2026.
>
> **H3 Conversion**
> We worked on turning visits into enquiries. There's a button to book a free consultation in the header. The contact page has a call button, a short form and a list of what happens next.
>
> *(Image: contact page)* Contact page, with a call button, a booking form and the next steps. compassagency.com.au, captured October 2026.
>
> **H2 What's live now**
> The site is live at compassagency.com.au. Everything in the screenshots on this page is on the live site.
>
> *(Image: team photo)* About page on a phone, with a photo of the Compass team. compassagency.com.au, captured October 2026.
>
> *(H2 The result: hidden, with its result and quote rows, until they're real and Compass has OK'd them)*
>
> Next project → ReviewBuddy
>
> Closing band: C1 to C5 from homepage.md. The page's one CTA is **Book a call**.

**Notes for wiring**
- CS11 is retired. CS11a takes its place (same image, the desktop hero). CS11b to CS11e are new.
- Drop the "Visit the site" button under the hero images. The live link already sits in the fact row, and the page keeps one CTA.
- "The client" Para 2 suggestion is for Dan only. Don't render it unless he picks it.

## Proof slots this feeds

- `homepage.md` 06 · Dan Kovac: the Compass row. `work.md` card 1. `services-marketing.md` 06 · Client work.

## Slot tables

### Case study /projects/compass-buyers-agency (website project only, Dan 26 Oct)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS0 SEO title (absolute) | ≤ 60 | SEO brief | Rec. | Compass Buyers Agency case study · Roadmap Labs | 47 | ✓ |
| CS0 Meta description | ≤ 155 | 4.7 (website only) | Rec. | We built the website for Compass Buyers Agency, a buyers agency from Byron Bay to the Gold Coast, with the SEO and conversion work. | 131 | ✓ |
| CS1 Breadcrumb | ≤ 40 | Render | Rec. | Work / Compass Buyers Agency | 28 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Rec. | Compass Buyers Agency: website, SEO and conversion | 50 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Short | Compass Buyers Agency | 21 | ✓ |
| CS3 Lead | ≤ 180 | Dan, 26 Oct | Rec. | We built the website for Compass Buyers Agency, with the SEO and the work on turning visits into enquiries. | 107 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 1 | Client | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 2 | Services | 8 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 3 | Year | 4 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 4 | Live site | 9 | ✓ |
| CS5 Client fact value | ≤ 30 | COPY-BRIEF | Rec. | Compass Buyers Agency | 21 | ✓ |
| CS6 Services value | ≤ 30 | Dan, 26 Oct | Rec. | Website, SEO, conversion | 24 | ✓ |
| CS7 Year value | ≤ 10 | COPY-BRIEF | TBC | [TBC: project year. Hide the Year fact until known] | 0 | ✓ |
| CS8 Live link label | ≤ 30 | COPY-BRIEF | Rec. | compassagency.com.au ↗ | 22 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 1 | The client | 10 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 2 | What we did | 11 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 3 | What's live now | 15 | ✓ |
| CS9 Section H2s | ≤ 48 | 4.7 | 4 (hidden until real) | The result | 10 | ✓ |
| CS10 Body: The client | ≤ 260 | LIVE + Dan writes | Para 1 | Compass Buyers Agency helps people buy property from Byron Bay to the Gold Coast. | 81 | ✓ |
| CS10 Body: The client | ≤ 260 | LIVE + Dan writes | Para 2 | [TBC: Dan, what Compass needed from the website, in one or two lines. Hide this paragraph until written] | 0 | ✓ |
| CS10 Body: The client | ≤ 260 | LIVE + Dan writes | Para 2 suggestion (Dan to confirm or rewrite) | People find a buyers agent by searching for one in their area. Compass needed a site that shows up in those searches and makes it easy to book a chat. | 150 | ✓ |
| CS13 Sub-heads under What we did (H3) | ≤ 32 | Dan, 26 Oct | 1 | Website | 7 | ✓ |
| CS13 Sub-heads under What we did (H3) | ≤ 32 | Dan, 26 Oct | 2 | SEO | 3 | ✓ |
| CS13 Sub-heads under What we did (H3) | ≤ 32 | Dan, 26 Oct | 3 | Conversion | 10 | ✓ |
| CS10 Body: What we did / Website | ≤ 260 | Dan, 26 Oct + live site | Rec. | We built the whole site: the home page, service pages, team page, area pages, blog and contact page. It works on desktop and on a phone. | 136 | ✓ |
| CS10 Body: What we did / SEO | ≤ 260 | Dan, 26 Oct + live site | Rec. | We set up the SEO. The site has local area pages, so it can show up when someone searches for a buyers agent in that area. The Byron Bay page also covers Bangalow and Suffolk Park. | 180 | ✓ |
| CS10 Body: What we did / Conversion | ≤ 260 | Dan, 26 Oct + live site | Rec. | We worked on turning visits into enquiries. There's a button to book a free consultation in the header. The contact page has a call button, a short form and a list of what happens next. | 185 | ✓ |
| CS10 Body: What's live now | ≤ 260 | Fact | Rec. | The site is live at compassagency.com.au. Everything in the screenshots on this page is on the live site. | 105 | ✓ |
| CS10 Body: The result (hidden) | ≤ 260 | Placeholder | Result | [TBC: result, with Compass's OK. Leave out until real] | 0 | ✓ |
| CS10 Body: The result (hidden) | ≤ 260 | Placeholder | Quote | [TBC: client quote, with written OK. Leave out until real] | 0 | ✓ |
| CS11a Caption: home, desktop (replaces CS11) | ≤ 120 | Screenshot | Rec. | Home page on desktop, with the free consultation and call buttons. compassagency.com.au, captured October 2026. | 111 | ✓ |
| CS11b Caption: home, mobile | ≤ 120 | Screenshot | Rec. | Home page on a phone, with both buttons under the headline. compassagency.com.au, captured October 2026. | 104 | ✓ |
| CS11c Caption: Byron Bay page | ≤ 120 | Screenshot | Rec. | The Byron Bay area page, which also covers Bangalow and Suffolk Park. compassagency.com.au, captured October 2026. | 114 | ✓ |
| CS11d Caption: contact page | ≤ 120 | Screenshot | Rec. | Contact page, with a call button, a booking form and the next steps. compassagency.com.au, captured October 2026. | 113 | ✓ |
| CS11e Caption: team photo | ≤ 120 | Screenshot | Rec. | About page on a phone, with a photo of the Compass team. compassagency.com.au, captured October 2026. | 101 | ✓ |
| CS12 Next project label | ≤ 20 | COPY-BRIEF | Rec. | Next project → | 14 | ✓ |
