# Copy notes: Roadmap Labs site

Draft 4, 26 October 2026 (AEDT). Draft 3 is archived at `_tools/old/NOTES_draft3_2026-10-25.md`.
Nothing here is live. These are copy files for Dan to approve.

## 1. What changed in draft 4

1 - **New source of truth:** Dan's positioning canvas "Finally make AI work for your business" (canvas 45052edf) now drives `homepage.md` and `offer.md`. The three lines: "Finally make AI work for your business." / "Use it properly." / "Know you're doing everything you can with AI, ethically and safely."
2 - **Hero:** the canvas's six options, word for word, with 1 "Finally" recommended. Eyebrow "For owner-led businesses". No price in the hero. I didn't write any hero options of my own.
3 - **Page order** follows the canvas: hero · under it · where it goes · how it works · the fee · Dan · close. Savings and admin are now supporting proof in 04, not the headline.
4 - **Pricing (Dan, 26 Oct):** A$3,500 a month, **no GST**, **AI model costs included in the fee**. This is the one place the copy departs from the canvas:
   - Dropped "Model costs are a separate bill" and "billed separately, usually A$250 to A$300".
   - Dropped the OpenRouter Business FAQ answer.
   - Every [DECISION: AI running costs] marker is gone. The copy now says plainly that AI running costs are included (OF3, OF6, OF7, OF11, SO1, SQ4, WG6).
   - Every line saying the price includes GST is gone from the live copy files. The fee note now says "No GST" (wording per the SEO steer, 26 Oct: "A$3,500 a month, no GST"). (Archived drafts in `_tools/old/` keep the old wording, since they're the record of earlier versions.)
   - Removed the A$3,182 ex GST and per-working-day ex GST lines.
   - [DECISION: fair-use limit] stays.
5 - **New sections and slots:** 01 Under it (UN1 to UN4), 02 Where it goes (WG1 to WG6), W6 (Dan band H2). 03 Selected work became 05 Dan Kovac.
6 - **New file:** `case-study-compass.md`, facts only, with [TBC: result] and [TBC: quote from Nick, with his approval]. Marked do-not-publish until Compass gives written OK.
7 - **Contact** moved to the AI angle: new ink line, message label and intent options.
8 - **"Tested on our own companies first"** appears as the mechanism for staying current (UN4 block 2, SQ5, IN2), always with [TBC: confirm with Dan]. The brief marks it unconfirmed.
9 - `slots.py` rewritten for draft 4. Old version at `_tools/old/slots_draft3_2026-10-25.py`. It now also ignores [TBC] and [CONFIRM] tags when counting.

### Draft 4.1 (26 Oct, remaining COPY-BRIEF slots)

1 - **New files:** `global.md` (G1 to G13, with the old homepage Global table moved here unchanged and new menu, close, skip link and banner slots), `work.md` (WK1 to WK8), `about.md` (AB1 to AB13) and `404.md` (NF1 to NF6).
2 - **Added to existing files:** `/services` section labels SL1 to SL5 in `offer.md`, and Insights labels IL1 to IL6 in `insights.md`. `case-study-compass.md` now follows COPY-BRIEF's case study template, CS1 to CS12, with the same facts and the same TBCs.
3 - **slots.py:** new modes `global`, `work`, `case`, `about` and `404`. `pages` now covers contact and insights only. Every mode passes.
4 - **About** uses only the confirmed facts, with no Sportsbet, no other clients and no results.

### Draft 4.2 (26 Oct, SEO steer)

Archived first: `_tools/old/slots_draft4-1_pre-seo_2026-10-26.py` and `_tools/old/NOTES_draft4-1_pre-seo_2026-10-26.md`.

1 - **Price wording:** "A$3,500 a month, no GST" everywhere (OF6, OF10, SQ9, ST2, S3, offer.md §1, §5, §7). No "incl. GST", no "No GST added", no A$3,182. The ex GST A$2,183 line is gone from offer.md §7, homepage.md and §2 below. Maths rechecked without it: A$808 a week, A$5,170 together, A$1,670 difference.
2 - **Scope:** the plan now reads as covering software and internal tools, AI automation, website builds, conversion work, SEO, Google Ads, social and email. Changed: WG4 card 2, OF7 items 1 to 3, O1, O2, new O6, SQ11 (now "What does the fee cover?"), offer.md §3. `lib/offers.ts` replacement wording is in `offers-ts-wording.md`.
3 - **Ideal client:** Australian businesses with 5 or more staff that aren't using AI well or don't know where to start, and want to cut costs and get campaigns running. Melbourne added. In offer.md §2, S3, G2 and ST2.
4 - **Compass OS** is no longer named in any public copy slot (WG5, W3, W4, WK4 to WK7, CS2, CS6, CS10, CS11). It reads "an internal platform" or "internal tools". The name stays only in these notes and in the do-not-publish facts list in `case-study-compass.md`. **Flag for Dan:** confirm Compass is OK with the name before it goes back in.
5 - **New title and meta slots:** ST1, ST2 (/services), WK0 (work), CS0 (case study), AB0 (about), NF0 (404). G1 and G2 are now the home title and meta.
6 - **"The smaller brief"** (and "Respect the time") describe the old three-offer model. They're already set to draft. **They should stay unpublished or be removed.** I haven't rewritten either.

### Search phrases (easy to swap)

Updated in draft 4.3 with real Australian volumes (SEO brief, 26 Oct). Each phrase sits in exactly these slots, so a future swap only touches these.

| Page | Phrase | Title / meta / lead | Heading |
|---|---|---|---|
| Home | AI automation agency + Melbourne | G1 title "AI automation agency in Melbourne · Roadmap Labs", G2 meta | WG2 H2 "An AI automation agency, one job at a time." |
| Home (secondary) | ai consultant melbourne | W5 lead, once ("an AI consultant in Melbourne") | none |
| /services | outsourced marketing | ST1 title, ST2 meta | SL2 H2 "Your outsourced marketing." |
| /services (comparison) | fractional CMO | none | SC2 H2 "How it compares with a fractional CMO or an agency", links to article B (SC4, [TBC] link) |
| /services/marketing | seo agency melbourne | MK3 lead | MS2 H2 |
| /services/marketing | google ads agency melbourne | MK3 lead | MS3 H2 (also "Google Ads management") |
| /services/marketing | web design melbourne small business | MKT1 title | MS1 H2 |
| Case study | brand only: Compass Buyers Agency | CS0 title and meta (meta word for word from the brief, 118 characters) | none |

- "AI automation" still appears as the O1 cell title and in S3 on /services. That's the plain name of the work.
- "Partner plan" stays the product name only (OF5, SL5, MK1), never a headline.
- **Where an H1 change would help (for Dan to decide, not changed):** the SEO brief wants the home lead to say "AI automation", "small business", "agency" and "Melbourne". Your hero doesn't, so they're in the title, meta and WG2 instead. If you want them in the lead, the brief's line is: "We're a Melbourne AI automation and marketing agency for small businesses." On /services, the H1 could become "Outsourced marketing and AI, for one monthly fee." (the brief's suggestion).

### Insights article slugs (from site-structure.md; not written here)

These come through Dan's weekly interview process. I haven't written them.
- **A:** `/insights/ai-for-small-business`, "AI for small business: where to actually start". Links to /services/automations.
- **B:** `/insights/fractional-cmo-vs-agency`, "Fractional CMO, agency or in-house: what it costs". Linked from /services SC4 as a [TBC] link until it's live.
- **C:** `/insights/small-business-automation`, "Small business automation: what to automate first". Links to /services/automations.
- (D, post-launch: `/insights/google-ads-seo-website-cost`, linked from /services/marketing once live.)

- **Not in COPY-BRIEF, not written:** `/services/software` and `/services/automations`. (`/services/marketing` is now written, see draft 4.3.) They need slot limits and a render before I write them.

### Draft 4.3 (26 Oct, real search volumes)

Archived first with a `_draft4-2_2026-10-26` suffix in `_tools/old/` (every copy file, NOTES and slots.py).

1 - **Keywords swapped** per the map above: home G1, G2, WG2 and W5; /services ST1, ST2, SL2, plus the new 02b comparison section (SC1 to SC4) with a [TBC] link to article B; case study CS0 meta set word for word. The case study now targets the brand only.
2 - **Price line, exact:** "A$3,500 a month, no GST. AI model costs included. No contract." in OF6, ST2, S3, SQ9, offer.md §1 and §5, MF3, MQ5 and `offers-ts-wording.md`. The weekly figure (about A$808) moved into the OF10 footnote.
3 - **Ad spend:** new FAQ SQ14 "Is Google Ads spend included?" held as [TBC: Dan confirming]. Removed every line that answered it: the old SO1 supporting line ("put towards ad spend"), the offer.md "not for" item, the OF10 "not ad spend" wording and the offers-ts line. The OF10 and MF6 footnotes describe Dan's benchmark row only.
4 - **New page:** `services-marketing.md` (/services/marketing), new `marketing` mode in slots.py, MK/MS/MP/MF/MQ/MC IDs.
5 - **offers-ts-wording.md** rechecked against the full plan: `partnerPlan.includes` lists every part, `priceLine` holds the exact line, ad spend is a [TBC] code comment, and the marketing part links to /services/marketing.

## 2. Assumptions I made

- "Book a call" is the free discovery call (canvas: "A call").
- Dan's ten years running an agency is still the source of the benchmark figures.
- The benchmark table stays at about A$1,670 a month difference, using Dan's figures as given with no GST adjustment (rechecked 26 Oct: 2,000 + 1,000 + 2,166.67 = 5,166.67; less 3,500 = 1,666.67). So the old [CONFIRM GST basis] tag is off the page.
- The card-to-case pairing in 02 (ReviewBuddy under admin and sales) is a placeholder until we know which jobs run on ReviewBuddy.

## 3. For the designer (slot and order changes)

1 - **New homepage order:** Hero · 01 Properly (UN) · 02 Put to work (WG) · 03 How it works (HW) · 04 The fee (OF) · 05 Dan Kovac (W) · Insights (hidden) · 06 Start (C). Direction 11 had What we do · How it works · Selected work · The offer · Insights · Start, so "the fee" now comes before the work band.
2 - **Hero:** all six fit 32 / 32 / 150 / 60 and Direction 11's 60 / 140. Render 1.
3 - **UN (new band):** label ≤ 16, H2 pair ≤ 26 each, lead ≤ 160, three blocks (title ≤ 32, body ≤ 140). Block 3 body is a [TBC] until Dan writes the safety paragraph.
4 - **WG** reuses Direction 11's "What we do" slots (label ≤ 16, H2 ≤ 48, lead ≤ 160, three cards at 32 / 140, case labels ≤ 16) with new card titles. WG6 is a new ≤ 140 line under the cards.
5 - **Labels:** HW1 "03 · How it works" is 17 characters. It fits the existing ≤ 24 slot, but Direction 11 says ≤ 16. Flag if the render truncates.
6 - **OF9 figures:** "About A$5,170/mo" and "About A$1,670/mo" are 16 characters. They fit the existing ≤ 40 slot but not Direction 11's ≤ 12. If 12 is hard, use "A$5,170/mo" and "A$1,670/mo" and keep "about" in the footnote.
7 - **W6** new H2 slot for the Dan band (≤ 52). Rows reordered: Flexfolio, ReviewBuddy, Compass Buyers Agency, an internal platform (Compass's). Compass rows are hidden until Compass's written OK.
8 - **Case study:** slots are in `case-study-compass.md`.

9 - **About beliefs:** COPY-BRIEF says 3, but `10-about.png` has 4 cells. Three are written, plus an optional fourth (AB8). Pick one layout.
10 - **Case study facts:** the template has four cells (Client, Services, Year, Live site). Owner and status go in the lead or the body. The fact labels (CS4) and breadcrumb (CS1) aren't in COPY-BRIEF, so I proposed ≤ 12 and ≤ 40.
11 - **`/services` small label (SL5)** is read as the plan label above the price ("Partner plan"). Correct me if the marker in `09-services.png` means something else.
12 - **Banner strapline (G13):** I proposed ≤ 40, because COPY-BRIEF only says "short".
13 - **Insights page indicator and count** are patterns ("Page 1 of 2", "12 articles" or "1 article"). The code fills in the numbers.

14 - **/services 01 now has four cells** (AI automation, Website and marketing, Internal tools, Safety and security). The render shows three. Either add a cell or merge O6 into O1 (then O1 title "AI automation and marketing", ≤ 24 needs a check).
15 - **New SEO title and meta slots** (ST1, ST2, WK0, CS0, AB0, NF0) for the Lead Engineer's `metadata` exports, not the design.

## 4. Checks run on draft 4

- **Draft 4.3:** all nine modes pass (adds `marketing`). Same greps clean.
- **Draft 4.2 (26 Oct, after the SEO steer):** all eight `slots.py` modes pass (home, services, pages, global, work, case, about, 404). Grep across the live copy files and `offers-ts-wording.md`: no em or en dashes, no banned words, no "incl. GST", "No GST added", A$3,182 or A$2,183, no exclamation marks, no US spellings, no "not X, it's Y". "Compass OS" appears only in notes and flags, never in a copy slot.

- `slots.py home`, `services` and `pages`: every slot is within its limit.
- Grep across the live copy files: no em or en dashes, no GST-inclusive price lines, no banned words, no exclamation marks, no US spellings.
- No invented results, testimonials, stats or quotes. Savings and growth appear only as estimates.

## 5. Open questions for Dan

**From the canvas**
1 - **The safety paragraph.** Where client data lives, who can see it, whose accounts it runs on. It's needed for UN4 block 3, O3, OF7 item 5 and SQ8 (on hold).
2 - **Can we say "careful with client data"?** Only once the paragraph above exists. Until then the copy doesn't claim it.
3 - **Which hero?** Recommended: 1 "Finally".
4 - **AI accounts in the client's name?** With model costs now in the fee, the accounts are presumably ours. Do they transfer to the client on handover? This feeds [DECISION: handover terms].

**Pricing and terms**
5 - **[DECISION: fair-use limit]** A monthly A$ cap, a token budget, or "we tell you first" with no cap.
6 - **Which running costs are included:** only AI models, or automation platforms, hosting and Retool seats too? The copy says AI running costs only, and that software like your CRM stays on the client's accounts.
7 - **[DECISION: handover terms]** Billing in advance or arrears, notice period, handover time, who pays from the handover date.
8 - **Existing clients on A$3,000** (Compass): do they move to A$3,500?
9 - **Cap on active automations** now that AI costs are included.
10 - **Tax line** (SF1): publish or leave out.

**How it works**
11 - **Is "Book a call" the discovery call, or a short fit chat first?** Plus its length and format ([DECISION] in SQ1).
12 - **Is the roadmap free, and theirs to keep?**
13 - **What counts as one automation,** and the typical turnaround (SQ12 and SQ13, on hold).
14 - **ROI method** for the roadmap estimates.

**Proof**
15 - **Are new models and tools actually tested on Flexfolio and ReviewBuddy first?** It's the mechanism for "ahead" (UN4, SQ5, IN2).
16 - **Which jobs run on Flexfolio and ReviewBuddy,** so the proof can name them and the card pairing in 02 is right.
17 - **Compass:** written OK to name them and to name Compass OS publicly (the copy says "an internal platform" until then), a quote from Nick with his approval, the start year, and what "governance" meant in the move to Retool.
18 - **Security:** what it covers, for OF7 item 5.
19 - **Flexfolio's audience:** product managers or knowledge workers.
20 - **"Ten years running an agency":** confirm the wording for OF10 and W5.

**Carried over**
21 - Lead industry: property and finance, or service businesses that quote.
22 - Number of clients ("a small handful"), and the Sportsbet role and capacity.
23 - Client sign-off on marketing output before it goes out.
24 - Contact: keep the optional team-size field.
25 - Substack URL, and when to update the live holding page.
26 - **Sportsbet on the site at all?** It's kept off About, Work and every other page for now. If it goes on, tell me the role and the wording you're happy with.
27 - **About body (AB5):** three paragraphs for you to write. You could cover Roadmap Digital, why Roadmap Labs and why you build your own companies.
28 - **Portrait for About:** a real photo of you, 4:5.
29 - **About beliefs:** three or four, and are these the right ones (the right thing first, a month to prove it, written for people, foundations first)?
30 - **Banner strapline:** "Notes from building with AI" or "Building with AI, in plain English".
31 - **Work cards for ReviewBuddy and Flexfolio:** which systems run on each (WK6 [TBC]), and real screenshots for all cards.
32 - **Insights deks (IL6):** drafts for the suggested topics. Edit or replace them when you write each article.

**From the SEO steer (26 Oct)**
33 - **Google Ads spend:** included, or paid by the client with only management in the fee? Held as [TBC: Dan confirming] in SQ14 and MQ1. No copy answers it now.
34 - **Website builds inside the fee:** is a full new site included, or a rebuild within fair use? Ties to [DECISION: fair-use limit].
35 - **SEO brief error:** the case study meta in `site-structure.md` says Compass is "in Melbourne". LIVE copy puts them Byron Bay to the Gold Coast. I left location out of CS0.
36 - **"Ten years" vs "since 2015"** (About meta): both stay [CONFIRM].
37 - **Code still names Compass OS:** `lib/offers.ts` and the `/projects/compass-os` route. The replacement wording drops it; the route needs a redirect to `/projects/compass-buyers-agency` (Lead Engineer).
38 - **5+ staff vs "Who it's not for":** it now reads "solo operators and very small teams". Confirm 5 is the floor.

**From draft 4.3**
39 - **"AI model costs" vs "AI running costs":** the exact price line says "model", but OF3 ("AI running costs included."), OF11, SQ4 and SO1 say "running". Do you want one term everywhere? I'd pick "AI model costs" to match the price line.
40 - **Fractional CMO price claim (SC3):** "in Melbourne they start around the same monthly price" comes from the SEO research. It stays [TBC: published prices, Oct 2026] until a source is cited.
41 - **Section H2 limits on /services/marketing and SC2:** I proposed ≤ 48 and ≤ 52, because the /services section H2 is ≤ 26. The designer needs to confirm.
42 - **Home WG2:** the SEO H2 replaces the canvas line as Rec. Happy to swap back. The phrase would then need another H2.
43 - **W5 lead** now says "AI consultant in Melbourne" and drops the Flexfolio and ReviewBuddy mention (they're still in the rows below). Check that you're comfortable with "consultant".

- 4.3b (26 Oct): 'AI running costs' changed to 'AI model costs' in homepage.md, offer.md and slots.py to match the price line (Q39 closed).
- 4.3c (26 Oct): SC3 is now filled from /workspace/seo/fractional-cmo-prices.md. I checked the live pages myself on 26 Oct: rambert.co (advisory from $2,450/mo, hands-on $6,500 to $14,500/mo), Z10 Consulting (from A$3,500/mo for 20 hrs) and Shanna Gualtieri (from $4,000 + GST/mo). The Bold Vibes page didn't render in my check. Competitors aren't named in the copy. SC3 sources: https://rambert.co/services/fractional-cmo/ and https://z10consulting.com.au/services/fractional-cmo/melbourne/

### Draft 4.4 (26 Oct 2026, AEDT: Compass case study, About, own-company case studies)
- `case-study-compass.md`: tightened. CS3 lead now places Compass (Byron Bay to the Gold Coast). CS9 H2 2 is "What we built" (COPY-BRIEF v1.1). CS0 meta Rec. is "...the internal platform we're building for their team" (SEO brief wording kept as an option). Retool API line cut until we know its use. Website caption uses the DESIGN-SYSTEM format. Result and quote stay [TBC] and don't render. Header now says hold until SIGNOFF.md is cleared (the v1.1 "Compass is cleared" note came via the designer, so Dan confirms directly). "Compass OS" still only in internal notes.
- `about.md`: AB5 drafted from Dan's LinkedIn About for him to approve or rewrite. "From 2015 to 2024" added as Alt to the "ten years" lines (Q36 still open). Belief 4 now required (four cells). AB8 titles now checked at ≤ 24. AB11 ReviewBuddy row now "Google review software for Australian tradies".
- `work.md`: WK3 lead split into two sentences. ReviewBuddy card matches About. WK6 own-company services now "Own company · In beta · AI automation" (specific systems moved to the case studies as [TBC]). WK7 card links added.
- New: `case-study-flexfolio.md` (`/projects/flexfolio`) and `case-study-reviewbuddy.md` (`/projects/review-buddy`), same CS slot IDs as Compass. Own companies, in beta, no customer results, user numbers or testimonials. Embed My Reviews licence not mentioned.
- New: `SIGNOFF.md`, listing every line that needs Dan's OK (D1 to D21) and Compass's OK (C1 to C10).
- `_tools/slots.py`: CASE, ABOUT and WORK blocks updated; new modes `case-flexfolio` and `case-reviewbuddy`. Checks: `work`, `case`, `case-flexfolio`, `case-reviewbuddy`, `about` all pass (others re-run, still pass). No em or en dashes and no banned words in the touched files.
- Open questions added: Q44 Flexfolio audience (PMs only, or the wider list on flexfolio.co)? Q45 mention the Embed My Reviews licence? Q46 ReviewBuddy live link while reviewbuddy.com.au is 404. Q47 the ReviewBuddy widget shot shows real Compass reviews (recapture or get Compass's OK). Q31 moves to the case studies.

### 4.4 (Designer feedback: comparison, plain English, Dan band)
26 Oct 2026, AEDT. Files: `homepage.md`, `offer.md`, `global.md`, `_tools/slots.py` (HOME, SERV and GLOB blocks only). Pre-edit copies in `_tools/old/*_pre-designer_2026-10-26.*`. Every `slots.py` mode passes. No em or en dashes, no banned words and no "Compass OS" in the touched files. The slot tables in all three files are regenerated from `slots.py`, which also fixed a few stale char counts (OF3, OF4, SO1, SC3).

**1. Comparison table (CMP1 to CMP5).** It sits on the homepage as 04 (after How it works, before The fee) and on /services as 02b. On /services it replaces SC1 to SC4, which are retired; the old text is kept in offer.md §7. The homepage renumbers: 05 The fee, 06 Dan Kovac, 07 Start. Our fee figure stays out of the table, so the price still appears first in 05. The columns are "You, with AI tools" / "A freelancer or agency" / "Roadmap Labs". There are 6 rows: Security and safety, Does it actually work?, Wasted money, Moves the needle, What's covered, If you stop. Every Roadmap Labs cell maps to a real mechanism (one-month test and switch-off, roadmap with estimates, one fee with model costs included, no contract, handover). The agency column only says "varies" or "depends" where that's honestly true. CMP2 Rec. is "Your AI, run by people who do this for a living." The SEO alt "How we compare with an agency or a fractional CMO" keeps the fractional CMO phrase in a /services H2 if the SEO plan needs it. CMP5 link "Fractional CMO costs →" goes to /insights/fractional-cmo-vs-agency [TBC: pending Dan's approval of the article]. The fractional CMO figures from SC3 can move into that article.

**2. Plain-English pass (before → after).** Dan's hero lines are unchanged.
- UN2 grey: "Most AI stops at a login." → "Buying the tool is easy."
- UN3: "Properly means your tools are connected, your data is in a shape AI can use and each job is picked on purpose. Then we go as far as is sensible." → "We connect the software you already use, such as your CRM and email, and pick the jobs worth handing to AI. Then we build them one at a time."
- UN4 b1: "Set up properly. We connect your tools and get your data into one place AI can read..." → "Your tools, connected. Customer records, quotes and files in one place your team and the automations both use. Over time that becomes your company portal."
- UN4 b2: "New models and tools go into our own companies..." → "New AI models and tools go into Flexfolio and ReviewBuddy, our own companies, before yours..." (TBC kept)
- WG3: "We start where AI makes the most difference... once you can see the value." → "We start with the job your roadmap says is worth the most, then add the next. The company portal comes once you can see it paying off."
- WG4 card 1 title: "Admin and sales" → "Admin and sales automation"
- WG4 card 2: "Your website, SEO, Google Ads, social and email, written for people first and kept going out, without an agency for each." → "We build your website and run your SEO, Google Ads, social and email, so you don't need a separate agency for each."
- WG4 card 3: "Your company portal. One place for your data and tools... so AI has something real to work from." → "Internal tools and a portal. A company portal that puts customer records, jobs and files in one place for your team. Your automations run off the same data."
- WG6 and offer §3: "running costs" → "model costs"
- OF4: "...as many as you need, and look after each one. The AI model costs are in the fee..." → "...as many as you need over the months, and keep each one running. AI model costs are in the fee..."
- S2 grey: "AI doing the actual work." → "We build it and run it."
- O1: "...onboarding. Built one at a time and looked after by us." → "...onboarding, built one at a time. We keep each one running."
- O2: "...puts your data and tools in one place, so AI has something real to use." → "A company portal with customer records, jobs and files in one place, for your team and automations."
- offer §3 portal: "joins your data and tools in one place, so AI can actually use them" → "puts customer records, jobs and files in one place, for your team and your automations"
- offer §6: "Your data and tools sit in one place, so AI is working from the real picture." → "Customer records, jobs and files sit in one place, so your team and the automations work from the same information."
- G9 footer: "AI, software and automations" → "AI automation, software and marketing"
- OF10 and offer §7 footnote: "Dan's ten years running an agency" → "Dan's ten years in digital marketing" (Dan, 12:59pm)
- Hero lead alternative, for Dan only (H4 not changed): "We build AI automations, internal tools and marketing for your business, then run them safely. It starts with a call." (117/150)

**3. Dan band (06).** It's third person, to match W6 "Dan builds it." The rows are Roadmap Labs, Flexfolio and ReviewBuddy (each tagged "Own company") and Compass Buyers Agency (tagged "Client project", W9 tags ≤ 16). Following Dan's 12:59pm and 1:01pm answers, Compass is described only as a website project (build, SEO, conversion). Every internal-platform mention for Compass is gone from homepage.md and offer.md: the old "An internal platform" row, the WG5 card 3 label (now a DECISION with no label) and the "Compass OS" note. W7 portrait is a real photo of Dan, the same image as About AB4. W8 bio (216/220): "Dan Kovac is an AI consultant in Melbourne and founder of Roadmap Labs. He spent ten years in digital marketing, running Roadmap Digital. He builds his own apps, Flexfolio and ReviewBuddy, on the systems clients get." The "AI consultant in Melbourne" phrase moved from W5 to W8. W5 now reads "Roadmap Labs, Flexfolio and ReviewBuddy are Dan's own companies. Compass Buyers Agency was a client project."

**Open questions**
- Q48 CMP row 1 says security is "in the fee". It still needs Dan's safety paragraph to say what that covers.
- Q49 CMP2: the Rec. H2, or the SEO alt with "fractional CMO" for /services?
- Q50 WG5 card 2 puts the "Client project: Compass Buyers Agency" label under a card that also mentions Google Ads, social and email. Keep it, or drop it so the card doesn't suggest we ran those for Compass?
- Q51 Other files still describe Compass as ongoing or mention the internal platform (left alone, other worker's files): work.md WK4 to WK7, case-study-compass.md CS0 to CS11, the marketing page MP3 ("We run the website...") and pages line 364. They also still say "ten years running an agency" (about.md, MF6). These need the 12:59pm and 1:01pm answers applied.

### Draft 4.5 (26 Oct 2026, AEDT: Dan's answers, 12:59 PM and 1:01 PM)
- **Compass:** naming is cleared. It was a website project only (build, SEO, conversion), not a retainer, partner or ongoing work. `case-study-compass.md` now covers only the website. Its CS0 meta, H1, lead, services and body changed, and the "hold until SIGNOFF" header is gone. The internal platform, Retool, the custom build, internal tools, Google Ads and the platform screenshot are removed. Work card 2 is removed (three cards now) and the Compass card reads "A website project for a buyers agency from Byron Bay to the Gold Coast." `services-marketing.md` MP3 is now "We built the website for Compass Buyers Agency, with the SEO and conversion work." and the "hidden until OK" notes are gone. On homepage.md I only dropped the WG5 card 2 label "Client project: Compass Buyers Agency" (the card mentions Google Ads, social and email). Closes Q50 and Q51.
- **Ten years:** now "ten years in digital marketing" in about.md (AB0, AB3, AB5), insights.md A5 and services-marketing.md MF6. The [CONFIRM] tags and the "from 2015 to 2024" alts are removed. Q36 closed.
- **About:** goes deeper on the problem. AB5 is now four paragraphs (Dan's story, then the AI problem, then marketing and admin, then how Roadmap Labs fixes it). New block AB14 to AB16 ("What we keep seeing" / "Why AI isn't working for most businesses yet." with four cells) uses the belief grid. slots.py checks AB16 titles at ≤ 24. Sources: Dan's customer description (25 Oct) and offer.md §2. This is interim until Dan shares his article idea.
- **ReviewBuddy:** for Australian tradies (D10 resolved). Dan says getting reviewbuddy.com.au live is key (D17).
- **Flexfolio:** for product managers only while we find product-market fit. The wider audience is removed from the case-study facts (Q44 closed).
- **SIGNOFF.md:** rewritten with resolved items timestamped. Still open: D5, D6, D8, D9, D12 to D23, C3, C8 to C10.
- **Checks:** every slots.py mode passes (home, services, pages, global, work, case, case-flexfolio, case-reviewbuddy, about, 404, marketing). Nothing is left in the copy files (outside NOTES and SIGNOFF) for: "Retool", "running an agency", "Google Ads is next", "We run their", "Being built", "ten years [CONFIRM". "Internal platform" now appears only in internal notes (work.md and homepage.md headers). "Compass OS" appears only in offers-ts-wording.md's engineering note. "Partner clients" remains in offer.md line 48 and offers-ts-wording.md line 75, where it describes plan customers generally, not Compass.
- 4.5b: Removed Nick's name from CS10, since Compass's OK was to share the project and didn't clearly cover naming him (C3 closed by cutting). The 'partner clients' line in offer.md stays: it describes plan clients in general, not Compass.

### 4.5c (comparison rewritten: your team vs Roadmap Labs)
26 Oct 2026, AEDT. Dan, via the Designer: "What we want to compare is having your team do it themselves", with more colour and insight. The CMP section in `homepage.md` (04) and `offer.md` (/services 02b) is now two columns, "Your team does it" and "Roadmap Labs runs it", with 7 rows. Each row has a label (≤ 28), a team cell and an us cell (≤ 90 each) and a "why it matters" line (≤ 120). The new slot IDs are CMP-R1-label/team/us/why through CMP-R7. The rows are Data and security, Tools that don't talk, Knowing what good looks like, Token and running costs, Does it actually work?, Picking the right jobs and Who keeps it running. They cover all four of Dan's required issues plus his three earlier themes. The optional "stalls / leaves" row is folded into row 7. Labels: home "04 · In-house or us", /services "In-house or us". The H2 is "Why not just get your team to do it?". The agency benchmarks are out of the table, since it no longer compares agencies; they stay in 05 The fee. CMP5 changed from the fractional CMO article, which no longer fits, to "See how we work →": on the homepage it goes to /services, on /services to #how-it-works [DECISION: anchor id for section 03]. The 3-column 4.4 table is archived in offer.md, just after the SC1 to SC4 retired note, and in `_tools/old/slots_pre-4-5c_2026-10-26.py`. The other worker's 4.5 edits were kept: no WG5 card 2 label, and Compass described as a website only. Every slots.py mode passes. No dashes or banned words.
- Q52 Row 1, the Roadmap Labs cell: "Security and model choice are part of the fee. We set them up before anything goes live." This needs Dan's safety paragraph [TBC: what security covers].
- Q53 Row 7: "hand it over if you cancel" depends on [DECISION: handover terms].
- Q54 Row 4 says we "cut tools nobody uses". That came from Dan's brief; check he's happy to promise it as standard.
- Q55 The CMP4 footnote frames the team-side problems as "what Dan's seen in ten years of digital marketing". Is Dan comfortable owning that?
