# The offer: Roadmap Labs partner plan

Draft 4, 26 October 2026 (AEDT). Source of truth: Dan's positioning canvas (45052edf) and Dan's pricing call on 26 Oct: **A$3,500 a month, no GST, AI running costs included in the fee.**
This file is the source for `/services`. The slot tables at the end are checked by `_tools/slots.py services` (every slot passes). Draft 3 is archived at `_tools/old/offer_draft3_2026-10-25.md`.
One CTA everywhere: **Book a call.**

## 1. The offer in one line

We make AI work for your business, properly and safely, for A$3,500 a month. The AI running costs are in the fee, and there's no contract.

## 2. Who it's for

Owner-led businesses that know they aren't using AI properly yet. Usually it's one of four things:

1 - There's no time to work it out.
2 - The tools and data aren't set up for it, so AI has nothing real to work from.
3 - They're not sure how to do it safely with client data.
4 - They don't know what to do first.

The partner line from the canvas is the test for every page: *"They'll finally make AI work for us, properly, and we'll know it's being done safely."*

**Who it's not for** (from the brief, for Dan to confirm): solo operators and very small teams, businesses with no repeatable process yet, larger firms needing procurement or IT sign-off, anyone wanting a one-off website or app quoted as a project, anyone wanting ad spend managed or guaranteed results, and businesses handling sensitive data such as health records until the safety paragraph is written.

## 3. What we run for you

- **Automations for admin and sales.** Quotes, follow-ups, onboarding, data entry and the rest of the work that sits there all week.
- **Marketing automations.** SEO, social posting and email marketing, written for people first and sent on schedule.
- **Your company portal.** An internal portal that joins your data and tools in one place, so AI can actually use them. It comes when you're ready, and it's usually about a month of work at the same fee.
- **Security.** We look after the security of your data and the automations we build. [TBC: safety paragraph from Dan: where client data lives, who can see it, whose accounts it runs on]
- **The AI models.** We pick the model for each job and keep an eye on what it costs. The running costs are in your fee. [DECISION: fair-use limit]

**How we stay current:** new models and tools go into our own companies first, and what works there comes to you. [TBC: confirm with Dan]

## 4. How it works

1 - **A free call.** We look at how the business runs, what you've tried with AI and where it would make the most difference. [DECISION: length and format]
2 - **A roadmap with the numbers.** For each automation we estimate what it could save, what growth it could bring, how long it takes to get running and when it should start paying back. They're estimates with the working shown. No pressure. Look over the numbers, then decide.
3 - **One job at a time.** We build one automation, then give it a one-month test. If it isn't working, we switch it off and build the next one.
4 - **The portal, when you're ready.** Most businesses see value sooner from a couple of working automations, so the portal usually comes after. It's about a month of work, at the same fee.

## 5. The terms

- A$3,500 a month. No GST added, and the AI running costs are included. [DECISION: fair-use limit]
- No contract. Cancel any month.
- If you leave, we hand over everything we've built. [DECISION: handover terms]
- We only take a small handful of partner clients at a time, so each one gets done properly.

## 6. What changes for you

In plain terms, and only ever as estimates on your roadmap:

- Leads get an answer and a follow-up without anyone chasing them by hand.
- Marketing keeps going out when the week gets busy.
- Your team spends less time on admin and more on the work clients pay for.
- Your data and tools sit in one place, so AI is working from the real picture.
- You know what AI is doing in the business and could explain it to a client.

## 7. The price, in perspective

About **A$808 a week** (A$3,500 × 12 ÷ 52 = A$807.69).

| What it replaces | Typical cost |
|---|---|
| SEO campaign, well run | A$2,000/mo |
| Agency fees: Meta, Google or social ads | A$1,000/mo |
| Virtual assistant at A$500+ a week | A$2,170+/mo |
| **Together** | **About A$5,170/mo** |
| **Roadmap Labs** | **A$3,500/mo** |
| **Difference** | **About A$1,670/mo** |

*Typical costs from Dan's ten years running an agency. The ad row is the management fee, not ad spend. Our fee has no GST added.*

Maths: VA A$500 × 52 ÷ 12 = A$2,166.67. Total A$5,166.67. Difference A$1,666.67. Because we charge no GST, A$1,670 is the cautious figure: if the benchmarks are ex GST, a client paying GST on them would save about A$2,183.
That's about A$1,670 a month you could put towards ad spend or your people.

**Before you commit** (approved draft line): Before you commit, you see what each automation could save, when it'll be running and when it should pay back. The most you can spend finding out after that is one month, and you keep what we built.

## 8. FAQ (reader's words; 7 live, 1 on hold for Dan's safety paragraph)

**What happens on the call?** We talk about how the business runs, what you've tried with AI and where it could make the most difference. It's free. [DECISION: length and format]
**How do I know it'll be worth it?** Before you decide, we work out what each automation could save your team and the growth it could bring, and map out how long each takes to get running and start paying back. They're estimates with the working shown, not promises.
**Are the savings guaranteed?** No. They're estimates, and we'll walk you through how we got to each one. What we do promise is the one-month test: if an automation isn't working, we switch it off.
**Are the AI running costs extra?** No. They're in the A$3,500. We pick the model for each job and keep an eye on the spend, so there's no second bill. [DECISION: fair-use limit]
**Will this be out of date in six months?** We try new models and tools on our own companies first. When something works better, we bring it into yours. [TBC: confirm with Dan]
**Do we have to build the portal first?** No. We usually start with a couple of automations and build the portal once you can see the value. It's usually about a month of work, at the same fee.
**What happens if we cancel?** Cancel any month. We hand over everything we've built and show you what it would cost to run on your own accounts. [DECISION: handover terms]
**Is our client data safe with you?** *(hold)* [TBC: Dan's safety paragraph]

Spares and holds (what counts as one automation, turnaround, GST, AI knowledge, custom software) are in the slot table below.

## Slot tables: `/services`

### Page head

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| S1 Label | ≤ 24 | Keep | Keep | Services & Pricing | 18 | ✓ |
| S2 H1 line 1 (grey) | ≤ 26 | NEW | Rec. | AI doing the actual work. | 25 | ✓ |
| S2 H1 line 2 (ink) | ≤ 26 | NEW | Rec. | One monthly fee. | 16 | ✓ |
| S3 Lead | ≤ 170 | NEW | Rec. | We set the business up to use AI properly, then build automations one at a time. A$3,500 a month, AI running costs included, no contract. | 137 | ✓ |

### 01 · What we build

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| O1 title | ≤ 24 | NEW | Rec. | Automations | 11 | ✓ |
| O1 body | ≤ 100 | NEW | Rec. | Admin, sales follow-ups, SEO, social posting and email. Built one at a time and looked after by us. | 99 | ✓ |
| O2 title | ≤ 24 | NEW | Rec. | A company portal | 16 | ✓ |
| O2 body | ≤ 100 | NEW | Rec. | One place for your data and tools, so AI has something real to work from. Usually about a month. | 96 | ✓ |
| O3 title | ≤ 24 | NEW | Rec. | Safety and security | 19 | ✓ |
| O3 body | ≤ 100 | NEW | Hold until Dan answers | [TBC: safety paragraph from Dan, short version] | 0 | ✓ |
| O1 to O3 meta | ≤ 20 | NEW | All three | In the fee | 10 | ✓ |
| O4 own-products line | ≤ 90 | Fact | Rec. | Our own companies, ReviewBuddy and Flexfolio, run on the same systems. | 70 | ✓ |

### 02 · The offer

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| SO1 Offer block | - | Same as home | Note | Use OF2 to OF10 from homepage.md | - | - |
| SO1 Included / not included line | ≤ 170 | NEW | Rec. | AI running costs are in the fee. Software you already pay for, like your CRM, stays on your own accounts. [DECISION: fair-use limit] | 105 | ✓ |
| SO2 Before-you-commit line (end of offer) | ≤ 200 | Approved draft | Keep | Before you commit, you see what each automation could save, when it'll be running and when it should pay back. The most you can spend finding out after that is one month, and you keep what we built. | 198 | ✓ |
| SO1 Supporting line | ≤ 140 | NEW | Rec. | That's about A$1,670 a month you could put towards ad spend or your people. | 75 | ✓ |

### 03 · How it works (dark)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| SH1 Lead | ≤ 170 | Keep | Keep | You don't have to start with the portal. Most businesses see value sooner from a couple of working automations, so that's where the build starts. | 145 | ✓ |
| SH2 Steps | - | Same as home | Note | Use HW4 and HW5 from homepage.md | - | - |

### 04 · Fine print

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| S4 H2 | ≤ 24 | Keep | Keep | In plain English. | 17 | ✓ |
| SF1 Fine print 1 to 4 | - | Same as home | Note | Use OF11 from homepage.md | - | - |
| SF1 Fine print 5 title | ≤ 24 | OPTION | Option | Tax | 3 | ✓ |
| SF1 Fine print 5 body | ≤ 120 | OPTION | Option | Generally a deductible business expense - check with your accountant. | 69 | ✓ |

### 05 · Questions

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| S4 H2 | ≤ 24 | Keep | Keep | Before you book. | 16 | ✓ |
| SQ1 Question (Live) | ≤ 60 | NEW | Live | What happens on the call? | 25 | ✓ |
| SQ1 Answer (Live) | ≤ 240 | NEW | Live | We talk about how the business runs, what you've tried with AI and where it could make the most difference. It's free. [DECISION: length and format, e.g. 60 minutes on a video call] | 118 | ✓ |
| SQ2 Question (Live) | ≤ 60 | NEW | Live | How do I know it'll be worth it? | 32 | ✓ |
| SQ2 Answer (Live) | ≤ 240 | NEW | Live | Before you decide, we work out what each automation could save your team and the growth it could bring, and map out how long each takes to get running and start paying back. They're estimates with the working shown, not promises. | 229 | ✓ |
| SQ3 Question (Live) | ≤ 60 | NEW | Live | Are the savings guaranteed? | 27 | ✓ |
| SQ3 Answer (Live) | ≤ 240 | NEW | Live | No. They're estimates, and we'll walk you through how we got to each one. What we do promise is the one-month test: if an automation isn't working, we switch it off. | 165 | ✓ |
| SQ4 Question (Live) | ≤ 60 | NEW | Live | Are the AI running costs extra? | 31 | ✓ |
| SQ4 Answer (Live) | ≤ 240 | NEW | Live | No. They're in the A$3,500. We pick the model for each job and keep an eye on the spend, so there's no second bill. [DECISION: fair-use limit] | 115 | ✓ |
| SQ5 Question (Live) | ≤ 60 | NEW | Live | Will this be out of date in six months? | 39 | ✓ |
| SQ5 Answer (Live) | ≤ 240 | NEW | Live | We try new models and tools on our own companies first. When something works better, we bring it into yours. [TBC: confirm with Dan] | 108 | ✓ |
| SQ6 Question (Live) | ≤ 60 | NEW | Live | Do we have to build the portal first? | 37 | ✓ |
| SQ6 Answer (Live) | ≤ 240 | NEW | Live | No. We usually start with a couple of automations and build the portal once you can see the value. It's usually about a month of work, at the same fee. | 151 | ✓ |
| SQ7 Question (Live) | ≤ 60 | NEW | Live | What happens if we cancel? | 26 | ✓ |
| SQ7 Answer (Live) | ≤ 240 | NEW | Live | Cancel any month. We hand over everything we've built and show you what it would cost to run on your own accounts. [DECISION: handover terms] | 114 | ✓ |
| SQ8 Question (Hold until Dan answers) | ≤ 60 | NEW | Hold until Dan answers | Is our client data safe with you? | 33 | ✓ |
| SQ8 Answer (Hold until Dan answers) | ≤ 240 | NEW | Hold until Dan answers | [TBC: Dan's safety paragraph: where client data lives, who can see it and whose accounts it runs on] | 0 | ✓ |
| SQ9 Question (Spare) | ≤ 60 | NEW | Spare | Is there GST on top? | 20 | ✓ |
| SQ9 Answer (Spare) | ≤ 240 | NEW | Spare | No. It's A$3,500 a month, and that's the whole fee. | 51 | ✓ |
| SQ10 Question (Spare) | ≤ 60 | NEW | Spare | Do I need to know anything about AI? | 36 | ✓ |
| SQ10 Answer (Spare) | ≤ 240 | NEW | Spare | No. You know your business, and that's the part we need. We look after the models, the setup and the running costs, and explain it in plain English. | 148 | ✓ |
| SQ11 Question (Spare) | ≤ 60 | NEW | Spare | Does the fee cover custom software? | 35 | ✓ |
| SQ11 Answer (Spare) | ≤ 240 | NEW | Spare | Yes. Software, automations and marketing automations all sit inside the one fee. Nothing is quoted separately. | 110 | ✓ |
| SQ12 Question (Hold until Dan answers) | ≤ 60 | NEW | Hold until Dan answers | What counts as one automation? | 30 | ✓ |
| SQ12 Answer (Hold until Dan answers) | ≤ 240 | NEW | Hold until Dan answers | [DECISION] Suggested: one workflow that does one job, like publishing a weekly blog post or chasing unpaid invoices. | 106 | ✓ |
| SQ13 Question (Hold until Dan answers) | ≤ 60 | NEW | Hold until Dan answers | How fast do you build each automation? | 38 | ✓ |
| SQ13 Answer (Hold until Dan answers) | ≤ 240 | NEW | Hold until Dan answers | [DECISION: typical turnaround] | 0 | ✓ |

### 06 · Start (dark)

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| Start band | - | Same as home | Note | Use C1 to C5 from homepage.md | - | - |
