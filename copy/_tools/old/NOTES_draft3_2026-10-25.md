# NOTES: Roadmap Labs copy, draft 3

25 October 2026 (AEDT). Files: `homepage.md`, `offer.md` (with the `/services` tables and FAQ), `contact.md` (new), `insights.md`, this file. All slot copy and limits are in `_tools/slots.py`. Run `python3 slots.py home|services|pages`. `[DECISION: ...]` tags aren't counted towards limits. **All site wording comes from this folder. The designer places slot markers only.** Drafts 1 and 2 are archived in `_tools/old/`.

## 1. Settled by Dan

- **Price:** A$3,500/mo **including GST and AI running (token) costs**. That's about A$808 a week, A$162 per working day and A$3,182 ex GST. It's one retainer for software development, automations and marketing automations. Every A$3,000 and A$690 figure, and every "running costs on your own accounts" line, is gone.
- **Proposal step:** before they commit, we reverse-engineer the cost savings and growth of each initiative and automation, with a clear timeline and roadmap to it running and paying back. No pressure. It's written as estimates with the working shown, never promises. These lines are approved for draft from the audit Page:
  - step 2 "A roadmap with the numbers."
  - FAQ "How do I know it'll be worth it?"
  - HW8 "No pressure. Look over the numbers, then decide."
  - SO2 "Before you commit…"
- **Hero:** no price, cut internal costs, put growth work on a system. There are four new ranked options. Neither draft 2 option was chosen.
- **Still in force from earlier:**
  - "Book a call" is the CTA.
  - The ad benchmark is the management fee.
  - No results or testimonials.
  - The two repo notes never count as Insights articles.
  - Insights stays hidden until 3+ are live, and never says "weekly".

## 2. Assumptions to confirm

1 - **The benchmarks include GST.** The comparison (A$2,000 + A$1,000 + A$2,170 = about A$5,170, minus A$3,500) gives **about A$1,670 a month** only if those figures are inc. GST. If they're ex GST, the fair comparison is A$3,182 ex GST against A$5,170, a gap of about A$1,985, and the table column needs an "ex GST" label. The column header carries [CONFIRM GST basis] until Dan answers.
2 - "You keep what we built" (SO2, approved for draft) assumes the handover covers everything at any point, including after month one. This depends on the handover terms.
3 - "Move the AI accounts into your name" on cancel assumes we run AI on accounts we can transfer.
4 - The A5 author line "Dan ran a digital agency for ten years" is based on Roadmap Digital, 2015 to 2024, per the audit.
5 - The hero buyer is "owner-led teams" with no size in the line. The 5 to 10+ size sits in `offer.md` "Who it's for" and the contact team-size field.

## 3. Decisions Dan still needs to make

**New this round**
1 - **[DECISION: fair-use limit]** What it is: a monthly A$ cap, a token budget, or "we tell you first" with no cap. It's used in OF7 item 5, OF11, SO1 and SQ5.
2 - **Which running costs are included:** only AI model and token costs, or automation platforms (Make, n8n, Zapier), hosting and Retool seats too? The copy currently says "AI running costs" only, and says other software like your CRM stays on the client's accounts.
3 - **[DECISION: handover terms]** Billing in advance or arrears, the notice period, how many days the handover takes, whether AI accounts transfer, and who pays from the handover date. It's used in OF11 and SQ7, and is implied in SO2.
4 - **Existing clients** (Compass) on A$3,000: do they move to A$3,500? Compass's OK is still needed to name Compass OS and show the screenshot.
5 - **Cap on active automations** at A$3,500 incl. AI costs: is there a maximum number running at once?
6 - **Is "Book a call" the discovery session or a short fit chat first?** If it's a fit chat, How it works needs a step 0 and the contact lead changes.
7 - **Is the roadmap free, and theirs to keep?** Suggested: "It's free, and yours to keep either way."
8 - **ROI method** for the roadmap (hours × hourly cost, tools and fees dropped, a conservative growth range). Then the FAQ can show the method.

**Carried over**
9 - Discovery session length, format and who it's for.
10 - Roadmap turnaround.
11 - What counts as one automation (SQ9, on hold), and the typical turnaround per automation (SQ10, on hold).
12 - How a client software build fits "one thing at a time".
13 - Tax line (SF1): publish or leave out.
14 - Fortnightly reports: yes or no (left out).
15 - Lead industry: property and finance, or service businesses that quote.
16 - Number of clients ("a small handful"), plus the Sportsbet role and capacity.
17 - What "security" means. It was removed from OF7 until there's something concrete behind it.
18 - Which jobs actually run on Flexfolio and ReviewBuddy, for the "our own companies" line.
19 - When to update the live holding page.
20 - Contact: keep the optional team-size field, and the reply time if Dan wants one in the success message.
21 - The Substack URL, and embed vs link-out for the newsletter.

## 4. For the designer (slot changes)

1 - **Hero:** four ranked options in `homepage.md`. Render 1 and 2. All fit 32 / 32 / 150 / 60. There's no price.
2 - **HW2** is now a pair at ≤ 26 each: "See the numbers." / "Then we build."
3 - **HW4/HW5 step 2:** "A roadmap with the numbers." (27) / "What each automation could save or earn, how long it takes to get running and when it should start paying off." (110). The step body limit is 110, so this is exactly at it.
4 - **New slot HW8** (proposed ≤ 60): "No pressure. Look over the numbers, then decide." It sits beside or under the How it works "Book a call" button.
5 - **New slot SO2** (proposed ≤ 200, line is 198): the before-you-commit line at the end of the `/services` offer block. There's no existing slot this long. SO1 supporting is ≤ 140.
6 - **FAQ, 7 live slots:** discovery · **How do I know it'll be worth it?** (new, before "Are the savings guaranteed?") · savings guaranteed · custom software · AI running costs · portal first · cancel. "What's in the proposal?" was dropped because the new Q covers it. "Do I need to know anything about AI?" is a spare for an 8th slot.
7 - **OF5** now has a plan label, "One retainer", plus "A$3,500/mo incl. GST". OF9 adds a "Difference · About A$1,670/mo" row. Drop it if the table gets tight, since the SO1 supporting line says it.
8 - **C5** stays the no-price line from the brief.
9 - **Contact:**
   - The new H1 is "The first step is free." / "Tell Dan what's eating the week."
   - New labels: Business name, plus an optional team size.
   - New intent options. Build these as a native radio group, per the render note.
   - New error text, all starting "Error:".
   - **New success and failure bodies**, ≤ 120 proposed. The brief only has the 12-character headings.
10 - **Insights:**
   - I6 categories have been replaced (see `insights.md`).
   - The index newsletter band is in `insights.md`: heading, pitch, button, and a success line for embeds only. The link-out Substack button means Substack shows its own confirmation.
   - A5 author block updated.
   - "Keep reading.", "Older articles →" and "All" are kept.

## 5. Checks run on draft 3

- `slots.py home`, `services` and `pages`: every slot is within its limit. The hero lead was held to the 150 the brief asked for, not the 160 in COPY-BRIEF.
- The dash, banned-word and exclamation scan is clean across all copy files. The hero also has no "systemise", "processes", "operations", "AI-powered", "streamline", "unlock" or "supercharge".
- There's no A$3,000, A$690, "A$2,170 back" or "running costs on your own accounts" line in the copy. A$2,170+ remains only as the VA benchmark row.
- No invented metrics, testimonials or promises. Savings and growth appear only as estimates.
