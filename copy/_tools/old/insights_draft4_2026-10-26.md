# Insights: page copy and first article topics

Draft 3, 25 October 2026 (AEDT). **Topics only.** Dan writes his articles himself, so there are no article bodies here.
Route `/insights` (index list as WorkList rows, ENGINEER-SPEC §6.7). Articles are Dan Kovac Builds pieces with the Substack as the canonical URL.

## Page copy

COPY-BRIEF has no limits for `/insights` beyond "H2 ≤ 2 lines at 48px, about 26 characters per line". The limits below are my proposals, matched to the Work index header (§6.2).

| Slot | Limit (proposed) | Source | Option | Copy | Chars |
|---|---|---|---|---|---|
| Mono label | ≤ 12 | LIVE | Keep | Insights | 8 |
| H1 | 2 × 22 | LIVE | Keep (one line) | Notes on the work. | 18 |
| H1 | 2 × 22 | NEW | Alt | What we learnt. | 15 |
| Lead | ≤ 160 | NEW (replaces LIVE) | Rec. | Dan writes about building software and automations with AI: what works, what doesn't and what it actually costs to run. | 119 |
| Lead | ≤ 160 | NEW | Alt | Notes from building our own companies, and the systems behind them. Dan writes these himself, and they go out on Dan Kovac Builds first. | 136 |
| Meta description | ≤ 155 | NEW (replaces LIVE) | Rec. | Notes from Roadmap Labs on building software and automations with AI. Written by Dan Kovac and published on Dan Kovac Builds. | 125 |
| Empty state | ≤ 90 | NEW | Rec. | The first articles are on the way. | 34 |

**Recommendation:** keep the LIVE H1 "Notes on the work." It's short and plain, and it already sounds like Dan. Replace the LIVE lead ("Dan Kovac Builds is the weekly Substack. A note can be copied here...") because it describes the publishing process, not the reader's benefit. The LIVE meta description also mentions "weekly", which isn't confirmed.
**Teaser on the homepage** (04 · Insights) is in `homepage.md`.

**Decided (25 Oct 2026):** the two notes in `content/insights/` (`respect-the-time.md` and `the-smaller-brief.md`) won't be published as Dan's. Set them to draft or remove them. Insights grows over time from Dan's own articles. Dan's Substack (handytoknow.substack.com) has no articles yet, so the homepage teaser stays hidden until at least three are live.

## Suggested first articles (3 to 5)

Each topic comes from a belief Dan has already written down (source keys from the voice guide, §5). The working titles use full stops, as his blog titles do (voice guide §3, tentative).

1 - **Building software has never been easier. Building the right software is still just as hard.**
Angle: AI made the build cheap, so the hard part now is deciding what's worth building, and that's where most of our time goes.
*Belief 1, "Building the right thing is harder than building" (LI-About, RL-Site).*

2 - **Every automation gets a month.**
Angle: why we give each automation a one-month test and switch it off if it isn't working, rather than spending three months finding out.
*Belief 10, "Learning by doing" (LI-About), and belief 1. It's also the clearest public explanation of the offer's risk reversal.*

3 - **Automating SEO without writing for the algorithm.**
Angle: an SEO automation is only worth running if a real person would want to read what it publishes. AI-regurgitated blogs for SEO's sake don't count.
*Belief 8, "Write for humans, not algorithms" (Blog-Awesome), and belief 2 (LI-Generous: "AI-regurgitated blogs for SEO's sake.").*

4 - **Why we don't start with the big build.**
Angle: Dan believes foundations come first, yet we start with a couple of automations and build the portal later. The article explains how proving value first earns the right to build the foundation.
*Belief 3, "Foundations first, then tactics" (LI-Pizza: "At least 80% of the work is done in setting strategy and building the system."). It's an honest tension Dan can write through himself.*

5 - **What running our own companies on our own systems taught us.**
Angle: Flexfolio and ReviewBuddy run on the same automations we sell, so here's what broke, what stuck and what it costs.
*Belief 6, "The product is the marketing" (Blog-Axe), and belief 10. **Needs Dan's real numbers and stories.***

Spare, if Dan wants a sixth: **What AI actually costs to run, and why it's in our fee.** Why we fold AI running costs into one price, and how picking the right model for each job keeps them down. *(Belief 2, "AI as a tool, not hype", LI-About. Write after the fair-use limit is set.)*

## Categories (I6, ≤ 18 each)

Each one is a theme Dan already writes and talks about (voice guide §5), not a service line.

| Category | Chars | What goes in it | Belief (voice guide §5) |
|---|---|---|---|
| Building with AI | 16 | Using AI as a tool to sharpen judgement, what it actually costs to run, and where it's hype | 2 |
| What to build | 13 | Building the right thing is the hard part, so how we decide what's worth building | 1 |
| Automations | 11 | Individual automations, the one-month test, and what broke and what stuck | 10 |
| Writing for people | 18 | Marketing and SEO written for humans, not algorithms, plus clear messaging over volume | 4, 5, 8 |
| Foundations first | 17 | Systems before tactics, portals, and the setup most businesses skip | 3, 11 |
| Our own companies | 17 | Flexfolio and ReviewBuddy as test beds. The product is the marketing | 6 |

**Recommendation:** launch with four (Building with AI, What to build, Automations, Writing for people) and add the other two once there are articles for them. Filters only show when 2 or more categories have articles. This replaces the designer's draft set (Automations / Company portals / Building with AI / Studio notes). "Company portals" is a service line, not a theme, and "Studio notes" doesn't say anything.

## Newsletter signup

The renders link out to Substack ("Subscribe on Substack ↗"), so Substack shows its own confirmation. The success line below is only needed if the form is embedded on our site.

- **Heading (index band):** Get the next one by email. (26). Alt: New articles, by email. (23)
- **Pitch:** What works, what doesn't and what it costs, from Dan. Sent when there's something worth saying. (95). It never says "weekly".
- **Button:** Subscribe on Substack ↗ (23). Alt, for an embedded form: Subscribe (9)
- **Success (embedded only):** You're on the list. Check your inbox to confirm. (48)
- **Article band (A6):** Liked this one? / Get the next one by email. (kept)
- **Author block (A5):** Dan ran a digital agency for ten years. Now he builds software and automations at Roadmap Labs, in Melbourne. (109). *Dan to confirm the "ten years" (Roadmap Digital, 2015 to 2024, per the audit).*

## Slot tables
### Insights /insights and articles

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| I6 Category labels | ≤ 18 | NEW | 1 | Building with AI | 16 | ✓ |
| I6 Category labels | ≤ 18 | NEW | 2 | What to build | 13 | ✓ |
| I6 Category labels | ≤ 18 | NEW | 3 | Automations | 11 | ✓ |
| I6 Category labels | ≤ 18 | NEW | 4 | Writing for people | 18 | ✓ |
| I6 Category labels | ≤ 18 | NEW | 5 | Foundations first | 17 | ✓ |
| I6 Category labels | ≤ 18 | NEW | 6 | Our own companies | 17 | ✓ |
| I6 Filter: all | ≤ 12 | 08 | Keep | All | 3 | ✓ |
| Index newsletter label | ≤ 12 | 08 | Keep | Newsletter | 10 | ✓ |
| Index newsletter heading (proposed ≤ 30) | ≤ 30 | NEW | Rec. | Get the next one by email. | 26 | ✓ |
| Index newsletter heading (proposed ≤ 30) | ≤ 30 | NEW | Alt | New articles, by email. | 23 | ✓ |
| Newsletter pitch (proposed ≤ 100) | ≤ 100 | NEW | Rec. | What works, what doesn't and what it costs, from Dan. Sent when there's something worth saying. | 95 | ✓ |
| Newsletter button | ≤ 24 | 08 | Rec. | Subscribe on Substack ↗ | 23 | ✓ |
| Newsletter button | ≤ 24 | 08 | Alt (embedded form) | Subscribe | 9 | ✓ |
| Newsletter success (embedded form only) | ≤ 90 | NEW | Rec. | You're on the list. Check your inbox to confirm. | 48 | ✓ |
| Newsletter source line | ≤ 90 | 08 | Keep | Published first on Dan Kovac Builds, on Substack. | 49 | ✓ |
| A6 Article newsletter pair | ≤ 30 | Brief | Line 1 (grey) | Liked this one? | 15 | ✓ |
| A6 Article newsletter pair | ≤ 30 | Brief | Line 2 (ink) | Get the next one by email. | 26 | ✓ |
| A5 Author block | ≤ 120 | NEW | Rec. | Dan ran a digital agency for ten years. Now he builds software and automations at Roadmap Labs, in Melbourne. | 109 | ✓ |
| A5 Author block | ≤ 120 | NEW | Alt (draft) | Dan runs Roadmap Labs, a software and automations studio in Melbourne. | 70 | ✓ |
| Related heading | ≤ 24 | 08 | Keep | Keep reading. | 13 | ✓ |
| Pagination | ≤ 24 | 08 | Keep | Older articles → | 16 | ✓ |
