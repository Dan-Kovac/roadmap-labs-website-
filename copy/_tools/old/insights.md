# Insights: page copy and first article topics

Draft 1, 25 October 2026 (AEDT). **Topics only.** Dan writes his articles himself, so there are no article bodies here.
Route `/insights` (index list as WorkList rows, ENGINEER-SPEC §6.6). Articles are Dan Kovac Builds pieces with the Substack as the canonical URL.

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

**Check before launch:** the repo has two notes in `content/insights/` (`respect-the-time.md` and `the-smaller-brief.md`). I don't know who wrote them. If Dan didn't, they shouldn't publish under his name. Dan's Substack (handytoknow.substack.com) has no articles yet, so the homepage teaser should stay hidden until at least three are live.

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
*Belief 6, "The product is the marketing" (Blog-Axe), and belief 10. **Needs Dan's real numbers and stories.** It's also the article most likely to fill the homepage proof placeholders.*

Spare, if Dan wants a sixth: **What AI actually costs to run.** Why model costs sit on the client's own accounts, and how picking the right model for each job keeps them down. *(Belief 2, "AI as a tool, not hype", LI-About.)*
