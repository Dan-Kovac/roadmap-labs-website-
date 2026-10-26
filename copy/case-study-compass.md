# Case study: Compass Buyers Agency

Draft 4.5, 26 October 2026 (AEDT). Route `/projects/compass-buyers-agency` (SEO brief). Slot limits from COPY-BRIEF v1.1 (case study template). Counts checked by `_tools/slots.py case` (every slot passes).

**Naming Compass is cleared** (Dan, 26 Oct 2026, 12:59 PM AEDT: "We can name the Compass site... Compass is happy for us to share that").
**Website project only** (Dan, 1:01 PM AEDT: "website only (build, SEO, conversion)"). It was a project we did for them. The page doesn't describe a retainer, a partnership or ongoing management, and it doesn't mention any other work for Compass.
**No results, numbers or quotes.** The Result and Testimonial rows don't render until they're real and Compass has OK'd them (DESIGN-SYSTEM §7.7).

## Facts used (and only these)

- Compass Buyers Agency (compassagency.com.au), owner Nick Goldsbrough-Reardon. The live site places them from Byron Bay to the Gold Coast.
- Roadmap Labs built their website as a project, with SEO and conversion (CRO) work (Dan, 26 Oct).
- The website is live.

## Reading view

> Work / Compass Buyers Agency
>
> **Compass Buyers Agency: website, SEO and conversion**
> Compass Buyers Agency works from Byron Bay to the Gold Coast. We built their website as a project, with the SEO and conversion work.
>
> Client · Compass Buyers Agency | Services · Website, SEO, CRO | Year · [TBC: project year] | Live site · compassagency.com.au ↗
>
> *(Image)* compassagency.com.au, captured October 2026.
>
> **The brief**
> [TBC: Dan to write what Compass needed from the website]
>
> **What we built**
> We built the Compass website, set up its SEO and worked on turning visits into enquiries.
>
> **Where it is now**
> The website is live at compassagency.com.au.
> *(Result and quote rows stay out until they're real and Compass has OK'd them.)*
>
> Next project → ReviewBuddy

## Proof slots this feeds

- `homepage.md` 05 · Dan Kovac: W4 row for Compass Buyers Agency, and the WG5 label "Client" in 02 (homepage.md is with another worker; see NOTES draft 4.5 for the changes it needs).
- `work.md` card 1. `services-marketing.md` 06 · Client work.

## Slot tables

### Case study /projects/compass-buyers-agency (website project only, Dan 26 Oct)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS0 SEO title (absolute) | ≤ 60 | SEO brief | Rec. | Compass Buyers Agency case study · Roadmap Labs | 47 | ✓ |
| CS0 Meta description | ≤ 155 | SEO brief, edited (website only) | Rec. | How we built the Compass Buyers Agency website, with the SEO and conversion work that went with it. | 99 | ✓ |
| CS1 Breadcrumb | ≤ 40 | Render | Rec. | Work / Compass Buyers Agency | 28 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Rec. | Compass Buyers Agency: website, SEO and conversion | 50 | ✓ |
| CS2 Case study H1 | ≤ 60 | COPY-BRIEF | Short | Compass Buyers Agency | 21 | ✓ |
| CS3 Lead | ≤ 180 | LIVE + Dan, 26 Oct | Rec. | Compass Buyers Agency works from Byron Bay to the Gold Coast. We built their website as a project, with the SEO and conversion work. | 132 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 1 | Client | 6 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 2 | Services | 8 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 3 | Year | 4 | ✓ |
| CS4 Fact labels (mono) | ≤ 12 | Render | 4 | Live site | 9 | ✓ |
| CS5 Client fact value | ≤ 30 | COPY-BRIEF | Rec. | Compass Buyers Agency | 21 | ✓ |
| CS6 Services value | ≤ 30 | Dan, 26 Oct | Rec. | Website, SEO, CRO | 17 | ✓ |
| CS7 Year value | ≤ 10 | COPY-BRIEF | TBC | [TBC: project year] | 0 | ✓ |
| CS8 Live link label | ≤ 30 | COPY-BRIEF | Rec. | compassagency.com.au ↗ | 22 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 1 | The brief | 9 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 2 | What we built | 13 | ✓ |
| CS9 Section H2s | ≤ 48 | COPY-BRIEF | 3 | Where it is now | 15 | ✓ |
| CS10 Body: The brief | - | Fact + Dan writes | Rec. | [TBC: Dan to write what Compass needed from the website] | - | - |
| CS10 Body: What we built | - | Fact | Rec. | We built the Compass website, set up its SEO and worked on turning visits into enquiries. | - | - |
| CS10 Body: Where it is now | - | Fact | Rec. | The website is live at compassagency.com.au. [TBC: result, with Compass's OK. Leave out until real] | - | - |
| CS10 Body: Where it is now | - | Fact | Quote | [TBC: quote from Nick, with his written OK. Leave out until real] | - | - |
| CS11 Image caption (website) | ≤ 120 | DESIGN-SYSTEM caption format | Rec. | compassagency.com.au, captured October 2026. | 44 | ✓ |
| CS12 Next project label | ≤ 20 | COPY-BRIEF | Rec. | Next project → | 14 | ✓ |
