# /services/marketing: SEO, websites and Google Ads

Draft 1, 26 October 2026 (AEDT). New page from the SEO brief (`/workspace/seo/brief-copywriter.md` §4 and `site-structure.md`). Title and meta are word for word from `site-structure.md`. `brief-engineer.md` lists the route but no slot names, and the route doesn't exist in the repo yet, so the IDs here are new.
COPY-BRIEF has no slots for this page. The structure and limits copy `/services` (page head as S1 to S3, section label as SL1, section lead as S3, FAQ as SQ, close as home C). Section H2s use a proposed ≤ 48 (the home WG2 limit), because the /services section H2 (≤ 26) can't hold the search phrases. Counts checked by `_tools/slots.py marketing` (every slot passes). Nothing here is live.

**Facts only.** This is part of the one partner plan at the same fee: SEO, Google Ads management, website builds, conversion work, social and email. Benchmarks are Dan's (SEO about A$2,000 a month, agency ad management about A$1,000 a month). Ad spend and website scope stay [TBC]. No results, quotes or stats.
**One CTA:** Book a call.

**Search phrases** (each once in the title, H1 or lead, and once in a heading):

| Phrase | Title / lead | Heading |
|---|---|---|
| seo agency melbourne | MK3 lead: "a Melbourne SEO agency" | MS2 H2: "An SEO agency that writes for people." |
| google ads agency melbourne | MK3 lead: "Melbourne ... Google Ads agency" | MS3 H2: "Google Ads management from a Melbourne agency." (also carries "Google Ads management", per the brief) |
| web design melbourne small business | MKT1 title: "SEO, web design and Google Ads, Melbourne" | MS1 H2: "Web design for Melbourne small businesses." |

## Reading view

> *Part of the partner plan*
> *(grey)* SEO, websites, Google Ads. *(ink)* Kept running for you.
> We're a Melbourne SEO agency and Google Ads agency for small businesses, and we build the website too. It's all in the one partner plan, at the same fee.
>
> [Book a call]  What's in the plan → *(/services)*

> **01 · Websites**
> Web design for Melbourne small businesses.
> Sites that say what you do, who it's for and why it matters, in plain words. We build it, then keep it up to date inside the plan. [TBC: website scope, Dan confirming]

> **02 · SEO**
> An SEO agency that writes for people.
> Pages and articles written for the person searching first, then for Google. We pick the searches worth winning and keep at it every month.

> **03 · Google Ads**
> Google Ads management from a Melbourne agency.
> We set up the campaigns, write the ads and keep an eye on what each click costs. Management is in the plan. [TBC: Dan confirming whether ad spend is included]

> **04 · Conversion**
> A site that turns visits into calls.
> We look at where people leave, fix the pages that lose them and test the changes, so more of the visits you already get turn into enquiries.

> **05 · Social and email**
> Social and email that keep going out.
> Posts and emails written for people first and sent on schedule, so the marketing doesn't stop when the week gets busy. [TBC: client sign-off before it goes out]

> **06 · Client work**
> Website, SEO and conversion for Compass.
> We built the website for Compass Buyers Agency, with the SEO and conversion work. [TBC: result, with Compass's OK]
> Read the Compass case study → *(/projects/compass-buyers-agency)*

> **07 · The fee**
> One fee for all of it.
> A$3,500 a month, no GST. AI model costs included. No contract.
> Marketing is one part of the partner plan. The same fee covers AI automation, software and internal tools.
>
> SEO campaign, well run · About A$2,000/mo
> Agency fee for Google Ads management · About A$1,000/mo
> Together · About A$3,000/mo
> Roadmap Labs, everything in the plan · A$3,500/mo
> *Typical costs from Dan's ten years in digital marketing. The ad row is the agency's management fee on its own.*
> See everything in the plan → *(/services)*

> **08 · Questions**
> Before you book.
> **Is Google Ads spend included?** *(hold)* [TBC: Dan confirming]
> **Is a new website included?** *(hold)* [TBC: website scope, Dan confirming] [DECISION: fair-use limit]
> **Do you write the content?** Yes. We write the pages, posts and emails for the people reading them first, then for search. [TBC: client sign-off before anything goes out]
> **Do you only work with Melbourne businesses?** No. We're based in Melbourne and work with Australian businesses wherever they are.
> **Is it a separate fee?** No. It's the same partner plan: A$3,500 a month, no GST. AI model costs included. No contract.
> **What happens if we cancel?** Cancel any month. We hand over everything we've built. [DECISION: handover terms]

> **09 · Start**
> *(grey)* Marketing keeps getting dropped? *(ink)* That's what the first call is for.
> [Book a call]
> No pressure and no contract. We take on a small handful of clients at a time.

**Maths:** A$2,000 + A$1,000 = A$3,000, from Dan's benchmarks. I left out a "difference" row on purpose: the plan costs A$500 more than those two lines, and the extra it covers (website, social, email, AI automation, internal tools) has no agreed benchmark yet.
**Internal links (site-structure.md):** /services (lead link and fee), Compass case study (06; naming cleared by Dan, 26 Oct), /contact (Book a call). Article D (`/insights/google-ads-seo-website-cost`) gets a link once it's live.
**Schema:** `Service` + `BreadcrumbList`. `FAQPage` only once the two held answers are written, since a visible FAQ with [TBC] answers shouldn't ship.

## Slot tables


### Page head

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MKT1 SEO title (absolute) | ≤ 60 | site-structure.md | Rec. | SEO, web design and Google Ads, Melbourne · Roadmap Labs | 56 | ✓ |
| MKT2 Meta description | ≤ 155 | site-structure.md | Rec. | SEO, web design, conversion and Google Ads for Melbourne small businesses, written for people first and run inside one monthly plan. No GST. | 140 | ✓ |
| MK1 Label (as S1) | ≤ 24 | NEW | Rec. | Part of the partner plan | 24 | ✓ |
| MK2 H1 line 1 (grey, as S2) | ≤ 26 | SEO brief | Rec. | SEO, websites, Google Ads. | 26 | ✓ |
| MK2 H1 line 2 (ink, as S2) | ≤ 26 | SEO brief | Rec. | Kept running for you. | 21 | ✓ |
| MK3 Lead (as S3) | ≤ 170 | NEW | Rec. | We're a Melbourne SEO agency and Google Ads agency for small businesses, and we build the website too. It's all in the one partner plan, at the same fee. | 153 | ✓ |
| MK4 Button | ≤ 18 | Approved | Keep | Book a call | 11 | ✓ |
| MK5 Secondary text link (→ /services) | ≤ 24 | NEW | Rec. | What's in the plan → | 20 | ✓ |

### 01 · Websites

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MS1 Label (as SL1) | ≤ 24 | NEW | Rec. | 01 · Websites | 13 | ✓ |
| MS1 H2 (proposed ≤ 48, home WG2 limit) | ≤ 48 | NEW | Rec. | Web design for Melbourne small businesses. | 42 | ✓ |
| MS1 Lead (as S3) | ≤ 170 | NEW | Rec. | Sites that say what you do, who it's for and why it matters, in plain words. We build it, then keep it up to date inside the plan. [TBC: website scope, Dan confirming] | 130 | ✓ |

### 02 · SEO

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MS2 Label (as SL1) | ≤ 24 | NEW | Rec. | 02 · SEO | 8 | ✓ |
| MS2 H2 (proposed ≤ 48, home WG2 limit) | ≤ 48 | NEW | Rec. | An SEO agency that writes for people. | 37 | ✓ |
| MS2 Lead (as S3) | ≤ 170 | NEW | Rec. | Pages and articles written for the person searching first, then for Google. We pick the searches worth winning and keep at it every month. | 138 | ✓ |

### 03 · Google Ads

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MS3 Label (as SL1) | ≤ 24 | NEW | Rec. | 03 · Google Ads | 15 | ✓ |
| MS3 H2 (proposed ≤ 48, home WG2 limit) | ≤ 48 | NEW | Rec. | Google Ads management from a Melbourne agency. | 46 | ✓ |
| MS3 Lead (as S3) | ≤ 170 | NEW | Rec. | We set up the campaigns, write the ads and keep an eye on what each click costs. Management is in the plan. [TBC: Dan confirming whether ad spend is included] | 107 | ✓ |

### 04 · Conversion

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MS4 Label (as SL1) | ≤ 24 | NEW | Rec. | 04 · Conversion | 15 | ✓ |
| MS4 H2 (proposed ≤ 48, home WG2 limit) | ≤ 48 | NEW | Rec. | A site that turns visits into calls. | 36 | ✓ |
| MS4 Lead (as S3) | ≤ 170 | NEW | Rec. | We look at where people leave, fix the pages that lose them and test the changes, so more of the visits you already get turn into enquiries. | 140 | ✓ |

### 05 · Social and email

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MS5 Label (as SL1) | ≤ 24 | NEW | Rec. | 05 · Social and email | 21 | ✓ |
| MS5 H2 (proposed ≤ 48, home WG2 limit) | ≤ 48 | NEW | Rec. | Social and email that keep going out. | 37 | ✓ |
| MS5 Lead (as S3) | ≤ 170 | NEW | Rec. | Posts and emails written for people first and sent on schedule, so the marketing doesn't stop when the week gets busy. [TBC: client sign-off before it goes out] | 118 | ✓ |

### 06 · Proof (Compass naming cleared by Dan, 26 Oct; website project only)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MP1 Label | ≤ 24 | NEW | Rec. | 06 · Client work | 16 | ✓ |
| MP2 H2 | ≤ 48 | Fact | Rec. | Website, SEO and conversion for Compass. | 40 | ✓ |
| MP3 Lead | ≤ 170 | Fact | Rec. | We built the website for Compass Buyers Agency, with the SEO and conversion work. [TBC: result, with Compass's OK] | 81 | ✓ |
| MP4 Link (→ case study) | ≤ 40 | NEW | Rec. | Read the Compass case study → | 29 | ✓ |

### 07 · The fee

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MF1 Label | ≤ 24 | NEW | Rec. | 07 · The fee | 12 | ✓ |
| MF2 H2 (as S4) | ≤ 26 | NEW | Rec. | One fee for all of it. | 22 | ✓ |
| MF3 Price line (exact) | ≤ 90 | Dan, 26 Oct | Rec. | A$3,500 a month, no GST. AI model costs included. No contract. | 62 | ✓ |
| MF4 Lead | ≤ 170 | Fact | Rec. | Marketing is one part of the partner plan. The same fee covers AI automation, software and internal tools. | 106 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Row 1 | SEO campaign, well run | 22 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Row 1 fig | About A$2,000/mo | 16 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Row 2 | Agency fee for Google Ads management | 36 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Row 2 fig | About A$1,000/mo | 16 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Total | Together | 8 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Total fig | About A$3,000/mo | 16 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Us | Roadmap Labs, everything in the plan | 36 | ✓ |
| MF5 Comparison rows (as OF9) | ≤ 40 | Dan's figures | Us fig | A$3,500/mo | 10 | ✓ |
| MF6 Footnote (as OF10) | ≤ 180 | NEW | Rec. | Typical costs from Dan's ten years in digital marketing. The ad row is the agency's management fee on its own. | 110 | ✓ |
| MF7 Link (→ /services) | ≤ 40 | NEW | Rec. | See everything in the plan → | 28 | ✓ |

### 08 · Questions

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MQ0 H2 (as S4) | ≤ 24 | Keep | Keep | Before you book. | 16 | ✓ |
| MQ1 Question (Hold until Dan answers) | ≤ 60 | NEW | Hold until Dan answers | Is Google Ads spend included? | 29 | ✓ |
| MQ1 Answer (Hold until Dan answers) | ≤ 240 | NEW | Hold until Dan answers | [TBC: Dan confirming] | 0 | ✓ |
| MQ2 Question (Hold until Dan answers) | ≤ 60 | NEW | Hold until Dan answers | Is a new website included? | 26 | ✓ |
| MQ2 Answer (Hold until Dan answers) | ≤ 240 | NEW | Hold until Dan answers | [TBC: website scope, Dan confirming] [DECISION: fair-use limit] | 0 | ✓ |
| MQ3 Question (Live) | ≤ 60 | NEW | Live | Do you write the content? | 25 | ✓ |
| MQ3 Answer (Live) | ≤ 240 | NEW | Live | Yes. We write the pages, posts and emails for the people reading them first, then for search. [TBC: client sign-off before anything goes out] | 93 | ✓ |
| MQ4 Question (Live) | ≤ 60 | NEW | Live | Do you only work with Melbourne businesses? | 43 | ✓ |
| MQ4 Answer (Live) | ≤ 240 | NEW | Live | No. We're based in Melbourne and work with Australian businesses wherever they are. | 83 | ✓ |
| MQ5 Question (Live) | ≤ 60 | NEW | Live | Is it a separate fee? | 21 | ✓ |
| MQ5 Answer (Live) | ≤ 240 | NEW | Live | No. It's the same partner plan: A$3,500 a month, no GST. AI model costs included. No contract. | 94 | ✓ |
| MQ6 Question (Live) | ≤ 60 | NEW | Live | What happens if we cancel? | 26 | ✓ |
| MQ6 Answer (Live) | ≤ 240 | NEW | Live | Cancel any month. We hand over everything we've built. [DECISION: handover terms] | 54 | ✓ |

### 09 · Start (dark, as home C)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| MC1 Label | ≤ 24 | NEW | Rec. | 09 · Start | 10 | ✓ |
| MC2 H2 line 1 (grey) | ≤ 36 | NEW | Rec. | Marketing keeps getting dropped? | 32 | ✓ |
| MC3 H2 line 2 (ink) | ≤ 36 | NEW | Rec. | That's what the first call is for. | 34 | ✓ |
| MC4 Button | ≤ 18 | Approved | Primary | Book a call | 11 | ✓ |
| MC5 Reassurance | ≤ 90 | NEW | Rec. | No pressure and no contract. We take on a small handful of clients at a time. | 77 | ✓ |
