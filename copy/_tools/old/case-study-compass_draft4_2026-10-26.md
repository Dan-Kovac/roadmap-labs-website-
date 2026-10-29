# Case study: Compass Buyers Agency and Compass OS

Draft 1, 26 October 2026 (AEDT). Route proposal `/projects/compass`. Slot limits from COPY-BRIEF (case study template). Counts checked by `_tools/slots.py pages` (every slot passes).

**Do not publish.** COPY-BRIEF: nothing about Compass is published until Compass gives written OK. That covers this page, the Compass rows on the homepage (05 · Dan Kovac) and the card labels in 02, and any screenshot of Compass OS.
**No results, numbers or quotes.** The work is in progress. Every gap is marked [TBC] and stays that way until there's something real to put there.

## Facts used (and only these)

- Compass Buyers Agency (compassagency.com.au), owner Nick Goldsbrough-Reardon, is a Roadmap Labs client.
- We manage their website, SEO and CRO. Google Ads is coming soon.
- We're building Compass OS, their internal platform, in Retool. It started as a custom build (Claude Code, Supabase and Vercel) and moved to Retool for governance reasons. Retool has an API.
- The work is in progress.

## Reading view

> **Compass Buyers Agency and Compass OS**
> We run the website, SEO and conversion work for Compass Buyers Agency, and we're building Compass OS, their internal platform, in Retool. It's in progress.
>
> Client · Compass Buyers Agency | Owner · Nick Goldsbrough-Reardon | Services · Website, SEO and CRO · Google Ads (coming soon) · Compass OS, in Retool | Year · [TBC: start year] | Status · In progress
> compassagency.com.au ↗
>
> **The brief**
> [TBC: Dan to write. What Compass needed and why. COPY-BRIEF says Dan writes the body paragraphs.]
>
> **What we built**
> *Starter, facts only:* We look after the Compass website, its SEO and the work that turns visits into enquiries. Google Ads comes next.
> We're also building Compass OS, the agency's own internal platform. We started it as a custom build, then moved it to Retool for governance reasons [TBC: Dan to say what governance meant here, e.g. access control or who can maintain it]. Retool also has an API, which [TBC: what the API is used for].
>
> *(Image)* Compass OS in Retool, in progress. Shown with Compass's permission. [TBC: screenshot and written OK]
>
> **Where it is now**
> In progress. [TBC: result]
> [TBC: quote from Nick, with his approval]
>
> Next project →

## Working case studies (our own companies)

Flexfolio and ReviewBuddy are Dan's own companies and run on Roadmap Labs systems. Both are in beta, and there are no results yet, so they're shown as working examples only ("Our own company, in beta, on our systems"). Which jobs run on each is still open (NOTES.md §3), so no page names specific automations yet.

## Proof slots this feeds

- `homepage.md` 05 · Dan Kovac: W4 rows for Compass Buyers Agency and Compass OS, and the WG5 labels "Client" and "Being built" in 02.
- `offer.md` / `/services`: O4 own-products line (Flexfolio and ReviewBuddy only, so it can go live without Compass's OK).

## Slot tables
### Case study /projects/compass (needs Compass's written OK before it's published)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| CS1 H1 | ≤ 60 | Fact | Rec. | Compass Buyers Agency and Compass OS | 36 | ✓ |
| CS2 Lead (≤ 180) | ≤ 180 | Fact | Rec. | We run the website, SEO and conversion work for Compass Buyers Agency, and we're building Compass OS, their internal platform, in Retool. It's in progress. | 155 | ✓ |
| CS3 Fact: client | ≤ 30 | Fact | Value | Compass Buyers Agency | 21 | ✓ |
| CS3 Fact: owner | ≤ 30 | Fact | Value | Nick Goldsbrough-Reardon | 24 | ✓ |
| CS3 Fact: services | ≤ 30 | Fact | Value 1 | Website, SEO and CRO | 20 | ✓ |
| CS3 Fact: services | ≤ 30 | Fact | Value 2 | Google Ads (coming soon) | 24 | ✓ |
| CS3 Fact: services | ≤ 30 | Fact | Value 3 | Compass OS, in Retool | 21 | ✓ |
| CS3 Fact: year | ≤ 10 | TBC | Value | [TBC: start year] | 0 | ✓ |
| CS3 Fact: status | ≤ 30 | Fact | Value | In progress | 11 | ✓ |
| CS4 Live link label | ≤ 30 | Fact | Rec. | compassagency.com.au ↗ | 22 | ✓ |
| CS5 Section H2s | ≤ 48 | Brief | 1 | The brief | 9 | ✓ |
| CS5 Section H2s | ≤ 48 | Brief | 2 | What we built | 13 | ✓ |
| CS5 Section H2s | ≤ 48 | Brief | 3 | Where it is now | 15 | ✓ |
| CS6 Image caption (Compass OS) | ≤ 120 | NEW | Rec. | Compass OS in Retool, in progress. Shown with Compass's permission. [TBC: screenshot and written OK] | 67 | ✓ |
| CS7 Next project label | ≤ 20 | Keep | Rec. | Next project → | 14 | ✓ |
