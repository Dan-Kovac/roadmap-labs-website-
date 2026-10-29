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
   - Every line saying the price includes GST is gone from the live copy files. The fee note now says "No GST added". (Archived drafts in `_tools/old/` keep the old wording, since they're the record of earlier versions.)
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

## 2. Assumptions I made

- "Book a call" is the free discovery call (canvas: "A call").
- Dan's ten years running an agency is still the source of the benchmark figures.
- The benchmark table stays at about A$1,670 a month difference. Since we charge no GST, that's the cautious figure: if the benchmarks are ex GST, the real gap is about A$2,183. So the old [CONFIRM GST basis] tag is off the page.
- The card-to-case pairing in 02 (ReviewBuddy under admin and sales) is a placeholder until we know which jobs run on ReviewBuddy.

## 3. For the designer (slot and order changes)

1 - **New homepage order:** Hero · 01 Properly (UN) · 02 Put to work (WG) · 03 How it works (HW) · 04 The fee (OF) · 05 Dan Kovac (W) · Insights (hidden) · 06 Start (C). Direction 11 had What we do · How it works · Selected work · The offer · Insights · Start, so "the fee" now comes before the work band.
2 - **Hero:** all six fit 32 / 32 / 150 / 60 and Direction 11's 60 / 140. Render 1.
3 - **UN (new band):** label ≤ 16, H2 pair ≤ 26 each, lead ≤ 160, three blocks (title ≤ 32, body ≤ 140). Block 3 body is a [TBC] until Dan writes the safety paragraph.
4 - **WG** reuses Direction 11's "What we do" slots (label ≤ 16, H2 ≤ 48, lead ≤ 160, three cards at 32 / 140, case labels ≤ 16) with new card titles. WG6 is a new ≤ 140 line under the cards.
5 - **Labels:** HW1 "03 · How it works" is 17 characters. It fits the existing ≤ 24 slot, but Direction 11 says ≤ 16. Flag if the render truncates.
6 - **OF9 figures:** "About A$5,170/mo" and "About A$1,670/mo" are 16 characters. They fit the existing ≤ 40 slot but not Direction 11's ≤ 12. If 12 is hard, use "A$5,170/mo" and "A$1,670/mo" and keep "about" in the footnote.
7 - **W6** new H2 slot for the Dan band (≤ 52). Rows reordered: Flexfolio, ReviewBuddy, Compass Buyers Agency, Compass OS. Compass rows are hidden until Compass's written OK.
8 - **Case study:** slots are in `case-study-compass.md`.

9 - **About beliefs:** COPY-BRIEF says 3, but `10-about.png` has 4 cells. Three are written, plus an optional fourth (AB8). Pick one layout.
10 - **Case study facts:** the template has four cells (Client, Services, Year, Live site). Owner and status go in the lead or the body. The fact labels (CS4) and breadcrumb (CS1) aren't in COPY-BRIEF, so I proposed ≤ 12 and ≤ 40.
11 - **`/services` small label (SL5)** is read as the plan label above the price ("Partner plan"). Correct me if the marker in `09-services.png` means something else.
12 - **Banner strapline (G13):** I proposed ≤ 40, because COPY-BRIEF only says "short".
13 - **Insights page indicator and count** are patterns ("Page 1 of 2", "12 articles" or "1 article"). The code fills in the numbers.

## 4. Checks run on draft 4

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
17 - **Compass:** written OK to name them and show Compass OS, a quote from Nick with his approval, the start year, and what "governance" meant in the move to Retool.
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
