# Slot copy + limit checks. Draft 4, 26 Oct 2026 (AEDT), from Dan's positioning canvas.
# Run: python3 slots.py home      -> homepage slot tables
#      python3 slots.py services  -> /services slot tables
#      python3 slots.py pages     -> contact and insights
#      python3 slots.py global|work|case|about|404 -> global.md, work.md, case-study-compass.md, about.md, 404.md
#      python3 slots.py marketing -> services-marketing.md (/services/marketing)
#      python3 slots.py case-flexfolio|case-reviewbuddy -> case-study-flexfolio.md, case-study-reviewbuddy.md (draft 4.4)
# [DECISION: ...], [TBC: ...] and [CONFIRM: ...] tags are not counted towards limits.
# Exits 1 if any option is over its limit.
import sys, re
HOME, SERV, PAGES, GLOB, WORK, CASE, ABOUT, NF, MKT, CASE_FF, CASE_RB = [], [], [], [], [], [], [], [], [], [], []
def slot(store, section, sid, limit, src, opts):
    store.append((section, sid, limit, src, opts))

# ===================== HOME =====================
h = lambda *a: slot(HOME, *a)
# Site-wide slots (title, meta, nav, header, footer) moved to GLOB: see global.md

H = "Hero (no price). Six options from Dan's canvas, as written"
h(H, "H1 Eyebrow (mono)", 40, "Canvas", [("All options", "For owner-led businesses")])
HERO = [
 ("1 Finally (rec.)", "AI should be working for you.", "Finally make it work.",
  "We make AI work for the business, properly and safely, as far as you can take it. It starts with a call.",
  "A conversation about making AI work here."),
 ("2 Properly", "It hasn't really worked.", "Time to use it properly.",
  "Past a handful of logins. AI working in the business, with care for your clients and your name. It starts with a call.",
  "A conversation about using AI properly."),
 ("3 Everything you can", "Do everything you can with AI.", "And know that it's safe.",
  "We take AI as far as it should go in the business, in a way you could explain to a client. It starts with a call.",
  "A conversation. We'll see how far to take it."),
 ("4 Properly and safely", "It's time AI worked for you.", "Properly, and safely.",
  "AI that works for the business, used properly, and safe enough to stand behind. It starts with a call.",
  "A straight conversation about AI in the business."),
 ("5 Stand behind it", "Make AI work for the business.", "Know you can stand behind it.",
  "AI working for the business, ethically and safely, so you know you've done your bit. It starts with a call.",
  "A conversation about doing this properly."),
 ("6 Ethical", "Use AI to the full.", "And keep it ethical.",
  "Use AI fully, and keep it ethical. You'll know what's being done, and you can stand behind it. It starts with a call.",
  "A conversation about using AI, carefully."),
]
for rank, g, i, lead, micro in HERO:
    h(H, f"Hero {rank}: H2 line 1 (grey)", 32, "Canvas", [(f"Option {rank}", g)])
    h(H, f"Hero {rank}: H3 line 2 (ink)", 32, "Canvas", [(f"Option {rank}", i)])
    h(H, f"Hero {rank}: H4 Lead", 150, "Canvas", [(f"Option {rank}", lead)])
    h(H, f"Hero {rank}: H7 Microcopy", 60, "Canvas", [(f"Option {rank}", micro)])
h(H, "H5 Primary button", 18, "Approved", [("Approved", "Book a call")])
h(H, "H6 Secondary text link", 18, "Keep", [("Rec.", "How it works →")])

U = "01 · Under it: properly, and everything you can, ethically and safely"
h(U, "UN1 Label", 16, "NEW", [("Rec.", "01 · Properly")])
h(U, "UN2 H2 line 1 (grey)", 26, "NEW 4.4", [("Rec.", "Buying the tool is easy.")])
h(U, "UN2 H2 line 2 (ink)", 26, "Canvas line 2", [("Rec.", "Use it properly.")])
h(U, "UN3 Lead", 160, "Canvas", [
    ("Rec.", "We connect the software you already use, such as your CRM and email, and pick the jobs worth handing to AI. Then we build them one at a time."),
])
h(U, "UN4 Block 1 title / body", 140, "NEW", [
    ("Title", "Your tools, connected"),
    ("Body", "Customer records, quotes and files in one place your team and the automations both use. Over time that becomes your company portal."),
])
h(U, "UN4 Block 2 title / body", 140, "NEW", [
    ("Title", "Tried on us first"),
    ("Body", "New AI models and tools go into Flexfolio and ReviewBuddy, our own companies, before yours. What works there comes to you. [TBC: confirm with Dan]"),
])
h(U, "UN4 Block 3 title / body", 140, "Canvas line 3", [
    ("Title", "Ethically and safely"),
    ("Body", "[TBC: safety paragraph from Dan: where client data lives, who can see it, whose accounts it runs on]"),
])

WG = "02 · Where it goes (replaces 'What we do' in Direction 11)"
h(WG, "WG1 Label", 16, "NEW", [("Rec.", "02 · Put to work")])
h(WG, "WG2 H2 (the one home H2 carrying the search phrase)", 48, "Canvas + SEO", [("Rec.", "An AI automation agency, one job at a time."), ("Draft 4.2", "AI automation on the jobs that eat the week."), ("Keep canvas", "AI on the jobs that sit there all week."), ("Alt", "The quote, the follow-up, the marketing.")])
h(WG, "WG3 Lead", 160, "NEW", [
    ("Rec.", "We start with the job your roadmap says is worth the most, then add the next. The company portal comes once you can see it paying off."),
])
h(WG, "WG4 Card 1 title / description", 140, "NEW", [
    ("Title", "Admin and sales automation"),
    ("Description", "Quotes, follow-ups, onboarding and data entry handled by automations, so leads get an answer and nobody types it all by hand."),
])
h(WG, "WG4 Card 2 title / description", 140, "NEW", [
    ("Title", "Marketing that keeps going out"),
    ("Description", "We build your website and run your SEO, Google Ads, social and email, so you don't need a separate agency for each."),
])
h(WG, "WG4 Card 3 title / description", 140, "NEW", [
    ("Title", "Internal tools and a portal"),
    ("Description", "A company portal that puts customer records, jobs and files in one place for your team. Your automations run off the same data."),
])
h(WG, "WG5 Case study labels (≤ 16)", 16, "NEW", [
    ("Card 1 → ReviewBuddy", "Our own company"),
    ("Card 2 (marketing)", "[DECISION: no label. Compass was a website project only, so it can't sit under this card]"),
    ("Card 3 (company portal)", "[DECISION: no label until there's a public portal example]"),
])
h(WG, "WG6 Models line (new slot, under the cards)", 140, "NEW", [
    ("Rec.", "We pick the AI model for each job and keep an eye on what it costs. The model costs are in your fee."),
])

W = "03 · How it works (dark)"
h(W, "HW1 Label", 24, "Keep", [("Rec.", "03 · How it works")])
h(W, "HW2 H2 pair", 26, "Keep", [("Line 1 (grey)", "See the numbers."), ("Line 2 (ink)", "Then we build.")])
h(W, "HW3 Lead", 170, "NEW", [
    ("Rec.", "It starts with a free call. Then a roadmap with our best estimates. If the numbers stack up, we build one job at a time."),
])
h(W, "HW4 Step title 1", 30, "Canvas", [("Rec.", "A free call.")])
h(W, "HW5 Step body 1", 110, "NEW", [
    ("Rec.", "We look at how the business runs, what you've tried with AI and where it would make the most difference."),
])
h(W, "HW4 Step title 2", 30, "Approved draft", [("Keep", "A roadmap with the numbers.")])
h(W, "HW5 Step body 2", 110, "Approved draft", [
    ("Keep", "What each automation could save or earn, how long it takes to get running and when it should start paying off."),
])
h(W, "HW4 Step title 3", 30, "Canvas", [("Rec.", "One job at a time.")])
h(W, "HW5 Step body 3", 110, "NEW", [
    ("Rec.", "Each automation gets a one-month test. If it isn't working, we switch it off. Your portal when you're ready."),
])
h(W, "HW6 Button", 18, "Approved", [("Keep", "Book a call")])
h(W, "HW8 Line beside the button", 60, "Approved draft", [("Keep", "No pressure. Look over the numbers, then decide.")])


# ---- Comparison table (draft 4.4, Designer 26 Oct; on home after How it works, on /services as 02b; replaces SC1 to SC4)
CMP_ROWS = [
 ("Security and safety", "Up to you to check where each tool keeps data", "Varies. Worth asking where your data goes", "Security and model choice, both in the fee [TBC: what security covers, from Dan]"),
 ("Does it actually work?", "Hard to tell without time to measure it", "Depends on what they report, and how often", "One-month test per job. Off if it isn't working"),
 ("Wasted money", "Easy to pay for tools nobody ends up using", "A separate fee for each channel you hire", "One fee. What doesn't work gets switched off"),
 ("Moves the needle", "Wherever you find the time to try it", "Measured on their channel, like rankings", "A roadmap of savings and growth before we build"),
 ("What's covered", "Whatever you have time to learn", "Usually one channel, like SEO or ads", "Automations, a portal, website and marketing"),
 ("If you stop", "You keep whatever you set up", "Depends on the contract and notice period", "Cancel any month. You keep what we built [DECISION: handover terms]"),
]
def comparison(fn, section, label):
    fn(section, "CMP1 Label", 24, "Designer, 26 Oct", [("Rec.", label)])
    fn(section, "CMP2 H2", 52, "Designer, 26 Oct", [("Rec.", "Your AI, run by people who do this for a living."), ("SEO alt (keeps 'fractional CMO' in a /services H2)", "How we compare with an agency or a fractional CMO")])
    fn(section, "CMP3 Lead", 160, "NEW 4.4", [("Rec.", "Anyone can sign up for an AI tool. The work is in setting it up safely and making sure it pays for itself. Here's how the options compare.")])
    fn(section, "CMP column headers ×3", 24, "NEW 4.4", [("Col 1", "You, with AI tools"), ("Col 2", "A freelancer or agency"), ("Col 3", "Roadmap Labs")])
    for i, (lab, a, b, c) in enumerate(CMP_ROWS, 1):
        fn(section, f"CMP row {i} label", 24, "NEW 4.4", [("Label", lab)])
        fn(section, f"CMP row {i} cells", 48, "NEW 4.4", [("Col 1", a), ("Col 2", b), ("Col 3", c)])
    fn(section, "CMP4 Footnote", 140, "Dan's figures", [("Rec.", "Agency fees are typical figures from Dan's ten years in digital marketing: SEO about A$2,000 a month, ad management about A$1,000 a month.")])
    fn(section, "CMP5 Link (→ article B)", 24, "SEO brief", [("Rec.", "Fractional CMO costs →"), ("href", "[TBC: /insights/fractional-cmo-vs-agency, once Dan approves the article and it's live]")])
comparison(h, "04 · Compared (new, Designer 26 Oct; also on /services as 02b)", "04 · Compared")

O = "05 · The fee"
h(O, "OF1 Label", 24, "Canvas", [("Rec.", "05 · The fee")])
h(O, "OF2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "One monthly fee.")])
h(O, "OF3 H2 line 2 (ink)", 26, "Dan, 26 Oct", [("Rec.", "AI model costs included.")])
h(O, "OF4 Lead", 170, "NEW", [
    ("Rec.", "We build one job at a time, as many as you need over the months, and keep each one running. AI model costs are in the fee, so there's no second bill."),
])
h(O, "OF5 Price", 24, "Dan, 26 Oct", [("Plan label", "Partner plan"), ("Price", "A$3,500/mo")])
h(O, "OF6 Price note (exact price line)", 90, "Dan, 26 Oct", [("Rec.", "A$3,500 a month, no GST. AI model costs included. No contract.")])
h(O, "OF7 Included items ×6", 80, "NEW", [
    ("1", "AI automation for admin and sales, each with a one-month test"),
    ("2", "Website builds, conversion work, SEO, Google Ads, social and email"),
    ("3", "Internal tools and a company portal, when you're ready"),
    ("4", "AI models picked for each job, with running costs in the fee [DECISION: fair-use limit]"),
    ("5", "Security for your data and automations [TBC: what this covers, from Dan]"),
    ("6", "A full handover if you leave [DECISION: handover terms]"),
])
h(O, "OF8 Comparison label", 28, "Keep", [("Keep", "What it replaces")])
h(O, "OF9 Comparison rows", 40, "Dan's figures", [
    ("Row 1", "SEO campaign, well run"), ("Row 1 fig", "A$2,000/mo"),
    ("Row 2", "Agency fees: Meta, Google or social ads"), ("Row 2 fig", "A$1,000/mo"),
    ("Row 3", "Virtual assistant at A$500+ a week"), ("Row 3 fig", "A$2,170+/mo"),
    ("Total", "Together"), ("Total fig", "About A$5,170/mo"),
    ("Us", "Roadmap Labs"), ("Us fig", "A$3,500/mo"), ("Diff", "Difference"), ("Diff fig", "About A$1,670/mo"),
])
h(O, "OF10 Footnote (directly under table)", 180, "NEW", [
    ("Rec.", "Typical costs from Dan's ten years in digital marketing. The ad row is the agency's management fee on its own. Our fee works out at about A$808 a week."),
])
h(O, "OF11 Fine print ×4 (title ≤ 24 / body ≤ 120)", 120, "NEW", [
    ("Title 1", "AI model costs"),
    ("Body 1", "They're in the fee. We pick the model for each job and keep an eye on the spend. [DECISION: fair-use limit]"),
    ("Title 2", "One-month test"),
    ("Body 2", "Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one."),
    ("Title 3", "No contract"),
    ("Body 3", "Cancel any month and we hand over everything we've built. [DECISION: handover terms]"),
    ("Title 4", "A handful of clients"),
    ("Body 4", "We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly."),
])
h(O, "OF12 Text link", 18, "Approved", [("Keep", "Book a call →")])

K = "06 · Dan band (own companies and a client project, draft 4.4)"
h(K, "W1 Label", 24, "Canvas", [("Rec.", "06 · Dan Kovac")])
h(K, "W6 H2 (new slot, COPY-BRIEF ≤ 52)", 52, "Canvas", [("Rec.", "Dan builds it. His own companies run on it.")])
h(K, "W5 Lead", 120, "NEW 4.4", [
    ("Rec.", "Roadmap Labs, Flexfolio and ReviewBuddy are Dan's own companies. Compass Buyers Agency was a client project."),
])
h(K, "W7 Portrait", 999, "Designer, 26 Oct", [("Note", "Real photo of Dan only, same image as About AB4. No placeholder art.")])
h(K, "W8 Bio (third person, matches W6)", 220, "Verified facts + Dan, 26 Oct 12:59pm", [
    ("Rec.", "Dan Kovac is an AI consultant in Melbourne and founder of Roadmap Labs. He spent ten years in digital marketing, running Roadmap Digital. He builds his own apps, Flexfolio and ReviewBuddy, on the systems clients get."),
])
h(K, "W2 Action", 16, "Keep", [("Keep", "All work →")])
h(K, "W3 Row names", 28, "LIVE", [("1", "Roadmap Labs"), ("2", "Flexfolio"), ("3", "ReviewBuddy"), ("4", "Compass Buyers Agency")])
h(K, "W9 Row tags", 16, "Designer, 26 Oct", [("Rows 1, 2, 3", "Own company"), ("Row 4", "Client project")])
h(K, "W4 Description: Roadmap Labs", 90, "Fact", [("Rec.", "The Melbourne studio behind this site. Flexfolio and ReviewBuddy run on its AI systems.")])
h(K, "W4 Description: Flexfolio", 90, "Fact", [("Rec.", "A portfolio platform that shows a product manager's thinking across projects. In beta.")])
h(K, "W4 Description: ReviewBuddy", 90, "Fact + LIVE", [("Rec.", "Google review software for Australian tradies. In beta, on our own systems.")])
h(K, "W4 Description: Compass Buyers Agency", 90, "Fact", [("Rec.", "A website project: we built the site and did the SEO and conversion work.")])
h(K, "W4 Meta", 10, "Keep", [("Row 1", "About →"), ("Rows 2, 3, 4", "View →")])

I = "Insights teaser (hidden until 3+ articles are live; sits after 06 when shown)"
h(I, "IN1 Label", 24, "Keep", [("Keep", "Insights")])
h(I, "IN2 H2 line 1 (grey)", 30, "Keep", [("Keep", "We test on our own first. [TBC: confirm with Dan]")])
h(I, "IN2 H2 line 2 (ink)", 30, "Keep", [("Keep", "Then Dan writes it up.")])
h(I, "IN3 Lead", 120, "Keep", [("Keep", "Notes on building with AI: what works, what doesn't and what it actually costs to run.")])
h(I, "IN5 Link", 18, "Keep", [("Keep", "All insights →")])

C = "07 · Close (dark)"
h(C, "C1 Label", 24, "NEW", [("Rec.", "07 · Start")])
h(C, "C2 H2 line 1 (grey)", 36, "NEW", [("Rec.", "Not sure where AI fits yet?")])
h(C, "C3 H2 line 2 (ink)", 36, "NEW", [("Rec.", "That's what the first call is for."), ("Keep LIVE", "Tell Dan what has to happen.")])
h(C, "C4 Buttons", 18, "Approved", [("Primary", "Book a call"), ("Secondary", "Email Dan")])
h(C, "C5 Reassurance (no price)", 90, "NEW", [("Rec.", "No pressure and no contract. We take on a small handful of clients at a time.")])

# ===================== SERVICES =====================
s = lambda *a: slot(SERV, *a)
P = "Page head"
s(P, "ST1 SEO title (absolute)", 60, "SEO brief", [("Rec.", "Outsourced marketing and AI team · Roadmap Labs")])
s(P, "ST2 Meta description", 155, "SEO brief", [("Rec.", "Outsourced marketing, software and AI automation in one plan. A$3,500 a month, no GST. AI model costs included. No contract.")])
s(P, "S1 Label", 24, "Keep", [("Keep", "Services & Pricing")])
s(P, "S2 H1 line 1 (grey)", 26, "NEW 4.4", [("Rec.", "We build it and run it.")])
s(P, "S2 H1 line 2 (ink)", 26, "NEW", [("Rec.", "One monthly fee.")])
s(P, "S3 Lead", 170, "NEW", [
    ("Rec.", "Marketing, software and AI automation for Australian businesses with 5 or more staff, run from Melbourne. A$3,500 a month, no GST. AI model costs included. No contract."),
])
D = "01 · What we build"
s(D, "O1 title", 24, "NEW", [("Rec.", "AI automation")])
s(D, "O1 body", 100, "NEW 4.4", [("Rec.", "Admin, quotes, sales follow-ups and onboarding, built one at a time. We keep each one running.")])
s(D, "O6 title (new 4th cell)", 24, "Scope, 26 Oct", [("Rec.", "Website and marketing")])
s(D, "O6 body", 100, "Scope, 26 Oct", [("Rec.", "Website builds, conversion work, SEO, Google Ads, social and email, written for people first.")])
s(D, "O2 title", 24, "NEW", [("Rec.", "Internal tools")])
s(D, "O2 body", 100, "NEW 4.4", [("Rec.", "A company portal with customer records, jobs and files in one place, for your team and automations.")])
s(D, "O3 title", 24, "NEW", [("Rec.", "Safety and security")])
s(D, "O3 body", 100, "NEW", [("Hold until Dan answers", "[TBC: safety paragraph from Dan, short version]")])
s(D, "O1 to O3 and O6 meta", 20, "NEW", [("All four", "In the fee")])
s(D, "O4 own-products line", 90, "Fact", [("Rec.", "Our own companies, ReviewBuddy and Flexfolio, run on the same systems.")])
F = "02 · The offer"
s(F, "SO1 Offer block", 999, "Same as home", [("Note", "Use OF2 to OF10 from homepage.md")])
s(F, "SO1 Included / not included line", 170, "NEW", [
    ("Rec.", "AI model costs are in the fee. Software you already pay for, like your CRM, stays on your own accounts. [DECISION: fair-use limit]"),
])
s(F, "SO2 Before-you-commit line (end of offer)", 200, "Approved draft", [
    ("Keep", "Before you commit, you see what each automation could save, when it'll be running and when it should pay back. The most you can spend finding out after that is one month, and you keep what we built."),
])
s(F, "SO1 Supporting line", 140, "NEW", [
    ("Rec.", "That's about A$1,670 a month you could put back into the business or your people."),
])
HWs = "03 · How it works (dark)"
# SC1 to SC4 retired in draft 4.4 (replaced by the comparison table; old text in offer.md and _tools/old/)
comparison(s, "02b · Compared (comparison table, replaces SC1 to SC4)", "Compared")
s(HWs, "SH1 Lead", 170, "Keep", [
    ("Keep", "You don't have to start with the portal. Most businesses see value sooner from a couple of working automations, so that's where the build starts."),
])
s(HWs, "SH2 Steps", 999, "Same as home", [("Note", "Use HW4 and HW5 from homepage.md")])
FP = "04 · Fine print"
s(FP, "S4 H2", 24, "Keep", [("Keep", "In plain English.")])
s(FP, "SF1 Fine print 1 to 4", 999, "Same as home", [("Note", "Use OF11 from homepage.md")])
s(FP, "SF1 Fine print 5 title", 24, "OPTION", [("Option", "Tax")])
s(FP, "SF1 Fine print 5 body", 120, "OPTION", [("Option", "Generally a deductible business expense - check with your accountant.")])
Q = "05 · Questions"
s(Q, "S4 H2", 24, "Keep", [("Keep", "Before you book.")])
FAQ = [
 ("Live", "What happens on the call?",
  "We talk about how the business runs, what you've tried with AI and where it could make the most difference. It's free. [DECISION: length and format, e.g. 60 minutes on a video call]"),
 ("Live", "How do I know it'll be worth it?",
  "Before you decide, we work out what each automation could save your team and the growth it could bring, and map out how long each takes to get running and start paying back. They're estimates with the working shown, not promises."),
 ("Live", "Are the savings guaranteed?",
  "No. They're estimates, and we'll walk you through how we got to each one. What we do promise is the one-month test: if an automation isn't working, we switch it off."),
 ("Live", "Are the AI model costs extra?",
  "No. They're in the A$3,500. We pick the model for each job and keep an eye on the spend, so there's no second bill. [DECISION: fair-use limit]"),
 ("Live", "Will this be out of date in six months?",
  "We try new models and tools on our own companies first. When something works better, we bring it into yours. [TBC: confirm with Dan]"),
 ("Live", "Do we have to build the portal first?",
  "No. We usually start with a couple of automations and build the portal once you can see the value. It's usually about a month of work, at the same fee."),
 ("Live", "What happens if we cancel?",
  "Cancel any month. We hand over everything we've built and show you what it would cost to run on your own accounts. [DECISION: handover terms]"),
 ("Hold until Dan answers", "Is our client data safe with you?",
  "[TBC: Dan's safety paragraph: where client data lives, who can see it and whose accounts it runs on]"),
 ("Spare", "Is there GST on top?",
  "No. A$3,500 a month, no GST. AI model costs included. No contract."),
 ("Spare", "Do I need to know anything about AI?",
  "No. You know your business, and that's the part we need. We look after the models, the setup and the running costs, and explain it in plain English."),
 ("Spare", "What does the fee cover?",
  "Software and internal tools, AI automation, website builds, conversion work, SEO, Google Ads, social and email. It all sits inside the one fee, and nothing is quoted separately."),
 ("Hold until Dan answers", "Is Google Ads spend included?",
  "[TBC: Dan confirming]"),
 ("Hold until Dan answers", "What counts as one automation?",
  "[DECISION] Suggested: one workflow that does one job, like publishing a weekly blog post or chasing unpaid invoices."),
 ("Hold until Dan answers", "How fast do you build each automation?",
  "[DECISION: typical turnaround]"),
]
for n, (status, q, a) in enumerate(FAQ, 1):
    s(Q, f"SQ{n} Question ({status})", 60, "NEW", [(status, q)])
    s(Q, f"SQ{n} Answer ({status})", 240, "NEW", [(status, a)])
s("06 · Start (dark)", "Start band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

# ===================== CONTACT + INSIGHTS + CASE STUDY =====================
c = lambda *a: slot(PAGES, *a)
CT = "Contact /contact"
c(CT, "Mono label", 12, "08", [("Keep", "Contact")])
c(CT, "H1 line 1 (grey)", 32, "Keep", [("Rec.", "The first step is free.")])
c(CT, "H1 line 2 (ink)", 32, "NEW", [("Rec.", "Tell Dan where AI should help."), ("Alt", "Tell Dan what has to happen.")])
c(CT, "Lead", 140, "Keep", [
    ("Rec.", "Book a call to talk it through, or send a note below. Dan reads these and replies by email."),
])
c(CT, "Form note (configured)", 260, "LIVE", [("Keep", "Dan reads these and replies by email.")])
c(CT, "Field label: name", 32, "LIVE", [("Keep", "Name")])
c(CT, "Field label: email", 32, "LIVE", [("Keep", "Email")])
c(CT, "Field label: business", 32, "Keep", [("Rec.", "Business name, if you have one")])
c(CT, "Field label: team size (optional)", 32, "Keep", [("Rec.", "How many people work there?")])
c(CT, "Team size options", 32, "Keep", [("1", "Just me"), ("2", "2 to 4"), ("3", "5 to 10"), ("4", "11 to 25"), ("5", "More than 25")])
c(CT, "Field label: intent", 32, "Keep", [("Rec.", "What do you need help with?")])
c(CT, "Intent options", 32, "NEW", [
    ("1", "Getting AI working properly"),
    ("2", "Connecting our tools and data"),
    ("3", "Using AI safely with client data"),
    ("4", "Admin, quotes or follow-ups"),
    ("5", "Marketing: SEO, social or email"),
    ("6", "Not sure yet"),
    ("7", "ReviewBuddy or Flexfolio"),
    ("8", "Something else"),
])
c(CT, "Field label: message", 32, "NEW", [("Rec.", "Where should AI be helping?"), ("Keep LIVE", "Message")])
c(CT, "Required marker", 12, "Brief", [("Keep", "(required)")])
c(CT, "Error messages", 60, "Keep", [
    ("Name", "Error: enter your name."),
    ("Email", "Error: enter a full email address."),
    ("Intent", "Error: pick what you need help with."),
    ("Message", "Error: add a line or two about the business."),
])
c(CT, "Submit / pending", 10, "LIVE", [("Keep", "Send"), ("Keep", "Sending…")])
c(CT, "Result heading: success", 12, "LIVE", [("Keep", "Sent")])
c(CT, "Success message (proposed limit)", 120, "Keep", [
    ("Rec.", "Thanks. It's with Dan, and he'll reply by email. If it's easier, book a call in the meantime."),
])
c(CT, "Result heading: failure", 12, "LIVE", [("Keep", "Not sent")])
c(CT, "Failure message (proposed limit)", 120, "Keep", [
    ("Rec.", "Something went wrong on our end. Email Dan at dan@roadmaplabs.com.au and it'll get to him."),
])
c(CT, "Aside labels", 16, "Brief", [("1", "Email"), ("2", "Book a call"), ("3", "Based in")])
c(CT, "Aside link (proposed limit)", 28, "NEW", [("Rec.", "Free first call →")])

IN = "Insights /insights and articles"
c(IN, "I6 Category labels", 18, "NEW", [
    ("1", "Building with AI"),
    ("2", "What to build"),
    ("3", "Automations"),
    ("4", "Writing for people"),
    ("5", "Foundations first"),
    ("6", "Our own companies"),
])
c(IN, "I6 Filter: all", 12, "08", [("Keep", "All")])
c(IN, "Index newsletter label", 12, "08", [("Keep", "Newsletter")])
c(IN, "Index newsletter heading (proposed ≤ 30)", 30, "NEW", [
    ("Rec.", "Get the next one by email."), ("Alt", "New articles, by email."),
])
c(IN, "Newsletter pitch (proposed ≤ 100)", 100, "NEW", [
    ("Rec.", "What works, what doesn't and what it costs, from Dan. Sent when there's something worth saying."),
])
c(IN, "Newsletter button", 24, "08", [("Rec.", "Subscribe on Substack ↗"), ("Alt (embedded form)", "Subscribe")])
c(IN, "Newsletter success (embedded form only)", 90, "NEW", [
    ("Rec.", "You're on the list. Check your inbox to confirm."),
])
c(IN, "Newsletter source line", 90, "08", [("Keep", "Published first on Dan Kovac Builds, on Substack.")])
c(IN, "A6 Article newsletter pair", 30, "Brief", [("Line 1 (grey)", "Liked this one?"), ("Line 2 (ink)", "Get the next one by email.")])
c(IN, "A5 Author block", 120, "NEW", [
    ("Rec.", "Dan did ten years in digital marketing. Now he builds software and automations at Roadmap Labs, in Melbourne."),
    ("Alt (draft)", "Dan runs Roadmap Labs, a software and automations studio in Melbourne."),
])
c(IN, "Related heading", 24, "08", [("Keep", "Keep reading.")])
c(IN, "Pagination", 24, "08", [("Keep", "Older articles →")])



# ===================== SERVICES: section labels (COPY-BRIEF "Home and Services") =====================
s = lambda *a: slot(SERV, *a)
SL = "Section labels and small label (COPY-BRIEF, render 09-services)"
s(SL, "SL1 01 section label", 14, "COPY-BRIEF", [("Rec.", "What we build")])
s(SL, "SL2 01 section H2 (the one /services heading carrying the search phrase)", 26, "COPY-BRIEF + SEO", [("Rec.", "Your outsourced marketing."), ("Alt (no phrase)", "What we build for you.")])
s(SL, "SL3 04 section label", 14, "COPY-BRIEF", [("Rec.", "Fine print")])
s(SL, "SL4 05 section label", 14, "COPY-BRIEF", [("Rec.", "Questions")])
s(SL, "SL5 Small label (plan label above the price)", 14, "COPY-BRIEF", [("Rec.", "Partner plan")])

# ===================== INSIGHTS labels (COPY-BRIEF "Insights") =====================
c = lambda *a: slot(PAGES, *a)
IL = "Insights labels (COPY-BRIEF)"
c(IL, "IL1 Featured label", 12, "COPY-BRIEF", [("Rec.", "Featured")])
c(IL, "IL2 Read link", 16, "COPY-BRIEF", [("Rec.", "Read →")])
c(IL, "IL3 Page indicator (template)", 16, "COPY-BRIEF", [("Rec.", "Page 1 of 2"), ("Pattern", "Page n of total")])
c(IL, "IL4 Article count (template)", 16, "COPY-BRIEF", [("Plural", "12 articles"), ("Singular", "1 article")])
c(IL, "IL5 Category description: Building with AI", 160, "insights.md", [("Rec.", "Using AI to sharpen judgement, what it actually costs to run and where the hype doesn't hold up.")])
c(IL, "IL5 Category description: What to build", 160, "insights.md", [("Rec.", "Building is the easy part now. How we decide what's worth building, and what we leave alone.")])
c(IL, "IL5 Category description: Automations", 160, "insights.md", [("Rec.", "One automation at a time: the one-month test, what broke and what stuck.")])
c(IL, "IL5 Category description: Writing for people", 160, "insights.md", [("Rec.", "Marketing and SEO written for a real reader. Clear messages over more of them.")])
c(IL, "IL5 Category description: Foundations first", 160, "insights.md", [("Rec.", "Getting the tools and data right before the clever bits, and why most businesses skip it.")])
c(IL, "IL5 Category description: Our own companies", 160, "insights.md", [("Rec.", "Flexfolio and ReviewBuddy run on our own systems. Notes from running them.")])
c(IL, "IL6 Article dek: Building the right software", 160, "Topic 1 (draft, Dan edits)", [("Suggested", "AI made the build cheap. Deciding what's worth building is still the hard part, and it's where most of our time goes.")])
c(IL, "IL6 Article dek: Every automation gets a month", 160, "Topic 2 (draft, Dan edits)", [("Suggested", "Why each automation gets a one-month test, and why we switch it off if it isn't working.")])
c(IL, "IL6 Article dek: Automating SEO", 160, "Topic 3 (draft, Dan edits)", [("Suggested", "An SEO automation is only worth running if a real person would want to read what it publishes.")])
c(IL, "IL6 Article dek: Not starting with the big build", 160, "Topic 4 (draft, Dan edits)", [("Suggested", "Foundations come first, yet we start with a couple of automations. Here's why proving value first comes before the portal.")])
c(IL, "IL6 Article dek: Our own companies", 160, "Topic 5 (draft, Dan edits)", [("Suggested", "Flexfolio and ReviewBuddy run on the systems we sell. What broke, what stuck and what it costs. [TBC: Dan's real stories]")])

# ===================== GLOBAL =====================
g = lambda *a: slot(GLOB, *a)
GG = "Head and meta"
g(GG, "G1 Site title, home (`lockedTitle`, absolute)", 60, "NEW", [("Rec.", "AI automation agency in Melbourne · Roadmap Labs"), ("SEO brief", "AI automation and marketing agency, Melbourne · Roadmap Labs"), ("Draft 4", "Roadmap Labs - make AI work for your business")])
g(GG, "G2 Meta description, home (`lockedDescription`)", 155, "NEW", [
    ("Rec.", "A Melbourne AI automation agency for Australian businesses with 5 or more staff. We take the admin off your team and keep your marketing running."),
    ("Draft 4", "For owner-led businesses that want AI working properly and safely. We set up your tools and data, then put AI to work one job at a time."),
])
GH = "Header, nav and menu"
g(GH, "G3 Skip link (first focusable element)", 24, "COPY-BRIEF", [("Rec.", "Skip to content")])
g(GH, "G4 Nav labels ×4", 12, "Keep", [("1", "Work"), ("2", "Services"), ("3", "Insights"), ("4", "About")])
g(GH, "G5 Header button (primary only)", 18, "Approved", [("Approved", "Book a call")])
g(GH, "G6 Mobile menu open label", 8, "COPY-BRIEF", [("Rec.", "Menu")])
g(GH, "G7 Mobile menu close label", 8, "COPY-BRIEF", [("Rec.", "Close")])
g(GH, "G8 Mobile menu button (one only)", 18, "Approved", [("Approved", "Book a call")])
GF = "Footer"
g(GF, "G9 Footer descriptor", 40, "NEW 4.4", [("Rec.", "AI automation, software and marketing"), ("Keep LIVE", "Software & automations studio")])
g(GF, "G10 Footer location", 30, "LIVE", [("Keep", "Melbourne, Australia")])
g(GF, "G11 Footer nav", 12, "Same as G4", [("1", "Work"), ("2", "Services"), ("3", "Insights"), ("4", "About")])
g(GF, "G12 Footer bottom line", 40, "Keep", [("Left", "© 2026 Roadmap Labs"), ("Right, link", "dan@roadmaplabs.com.au")])
GB = "Dan Kovac Builds banner (Substack, DESIGN-SYSTEM §12)"
g(GB, "G13 Banner strapline (mono, one line; proposed ≤ 40)", 40, "COPY-BRIEF", [
    ("Rec.", "Notes from building with AI"), ("Alt", "Building with AI, in plain English"),
])

# ===================== WORK INDEX =====================
w = lambda *a: slot(WORK, *a)
WK = "Work index /projects"
w(WK, "WK0 SEO title (absolute)", 60, "SEO brief", [("Rec.", "Our work: websites, software and automations · Roadmap Labs")])
w(WK, "WK0 Meta description", 155, "SEO brief, no client names", [("Rec.", "Websites and AI automation we've built for clients and for our own companies, ReviewBuddy and Flexfolio.")])
w(WK, "WK1 Mono label", 12, "Render", [("Keep", "Work")])
w(WK, "WK2 Work H1", 52, "COPY-BRIEF", [("Rec.", "Client work, and the companies we run ourselves."), ("Alt", "What we're building, and who for.")])
w(WK, "WK3 Work lead", 160, "COPY-BRIEF", [
    ("Rec.", "Flexfolio and ReviewBuddy are our own companies. Both are in beta, and both run on the systems we build. Client work is shown with the client's OK."),
])
w(WK, "WK4 Card names", 28, "LIVE", [("1", "Compass Buyers Agency"), ("2", "ReviewBuddy"), ("3", "Flexfolio")])
w(WK, "WK5 Card description: Compass Buyers Agency", 90, "LIVE + Dan, 26 Oct", [("Rec.", "A website project for a buyers agency from Byron Bay to the Gold Coast.")])
w(WK, "WK5 Card description: ReviewBuddy", 90, "LIVE + fact", [("Rec.", "Google review software for Australian tradies. Our own company, in beta, on our systems.")])
w(WK, "WK5 Card description: Flexfolio", 90, "LIVE + fact", [("Rec.", "A portfolio platform for product managers. Our own company, in beta, on our systems.")])
w(WK, "WK6 Services list: Compass Buyers Agency", 60, "Dan, 26 Oct", [("Rec.", "Website · SEO · CRO")])
w(WK, "WK6 Services list: ReviewBuddy", 60, "COPY-BRIEF", [("Rec.", "Own company · In beta · AI automation")])
w(WK, "WK6 Services list: Flexfolio", 60, "COPY-BRIEF", [("Rec.", "Own company · In beta · AI automation")])
w(WK, "WK7 Card meta", 10, "Keep", [("All three", "View →")])
w(WK, "WK7 Card links", 999, "Routes", [("Compass Buyers Agency", "/projects/compass-buyers-agency"), ("ReviewBuddy", "/projects/review-buddy"), ("Flexfolio", "/projects/flexfolio")])
w(WK, "WK8 Closing band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

# ===================== CASE STUDY: COMPASS =====================
k = lambda *a: slot(CASE, *a)
CS = "Case study /projects/compass-buyers-agency (website project only, Dan 26 Oct)"
k(CS, "CS0 SEO title (absolute)", 60, "SEO brief", [("Rec.", "Compass Buyers Agency case study · Roadmap Labs")])
k(CS, "CS0 Meta description", 155, "SEO brief, edited (website only)", [
    ("Rec.", "How we built the Compass Buyers Agency website, with the SEO and conversion work that went with it."),
])
k(CS, "CS1 Breadcrumb", 40, "Render", [("Rec.", "Work / Compass Buyers Agency")])
k(CS, "CS2 Case study H1", 60, "COPY-BRIEF", [("Rec.", "Compass Buyers Agency: website, SEO and conversion"), ("Short", "Compass Buyers Agency")])
k(CS, "CS3 Lead", 180, "LIVE + Dan, 26 Oct", [
    ("Rec.", "Compass Buyers Agency works from Byron Bay to the Gold Coast. We built their website as a project, with the SEO and conversion work."),
])
k(CS, "CS4 Fact labels (mono)", 12, "Render", [("1", "Client"), ("2", "Services"), ("3", "Year"), ("4", "Live site")])
k(CS, "CS5 Client fact value", 30, "COPY-BRIEF", [("Rec.", "Compass Buyers Agency")])
k(CS, "CS6 Services value", 30, "Dan, 26 Oct", [("Rec.", "Website, SEO, CRO")])
k(CS, "CS7 Year value", 10, "COPY-BRIEF", [("TBC", "[TBC: project year]")])
k(CS, "CS8 Live link label", 30, "COPY-BRIEF", [("Rec.", "compassagency.com.au ↗")])
k(CS, "CS9 Section H2s", 48, "COPY-BRIEF", [("1", "The brief"), ("2", "What we built"), ("3", "Where it is now")])
k(CS, "CS10 Body: The brief", 999, "Fact + Dan writes", [
    ("Rec.", "[TBC: Dan to write what Compass needed from the website]"),
])
k(CS, "CS10 Body: What we built", 999, "Fact", [
    ("Rec.", "We built the Compass website, set up its SEO and worked on turning visits into enquiries."),
])
k(CS, "CS10 Body: Where it is now", 999, "Fact", [
    ("Rec.", "The website is live at compassagency.com.au. [TBC: result, with Compass's OK. Leave out until real]"),
    ("Quote", "[TBC: quote from Nick, with his written OK. Leave out until real]"),
])
k(CS, "CS11 Image caption (website)", 120, "DESIGN-SYSTEM caption format", [("Rec.", "compassagency.com.au, captured October 2026.")])
k(CS, "CS12 Next project label", 20, "COPY-BRIEF", [("Rec.", "Next project →")])

# ===================== CASE STUDY: FLEXFOLIO (own company) =====================
f = lambda *a: slot(CASE_FF, *a)
FF = "Case study /projects/flexfolio (own company, no customer results)"
f(FF, "CS0 SEO title (absolute)", 60, "NEW", [("Rec.", "Flexfolio, our own portfolio platform · Roadmap Labs")])
f(FF, "CS0 Meta description", 155, "NEW", [("Rec.", "Flexfolio is our own portfolio platform for product managers. It's in beta, and it runs on the AI systems and automations we build.")])
f(FF, "CS1 Breadcrumb", 40, "Render", [("Rec.", "Work / Flexfolio")])
f(FF, "CS2 Case study H1", 60, "COPY-BRIEF", [("Rec.", "Flexfolio: a portfolio platform for product managers"), ("Short", "Flexfolio")])
f(FF, "CS3 Lead", 180, "Fact + flexfolio.co", [
    ("Rec.", "Flexfolio is our own company. It helps product managers show their thinking across projects and career stages. It's in beta, and it runs on our own systems."),
])
f(FF, "CS4 Fact labels (mono)", 12, "Render", [("1", "Client"), ("2", "Services"), ("3", "Status"), ("4", "Live site")])
f(FF, "CS5 Client fact value", 30, "Fact", [("Rec.", "Our own company")])
f(FF, "CS6 Services value", 30, "Fact", [("Rec.", "Product, AI automation")])
f(FF, "CS7 Status value", 10, "Fact", [("Rec.", "In beta")])
f(FF, "CS8 Live link label", 30, "flexfolio.co", [("Rec.", "flexfolio.co ↗")])
f(FF, "CS9 Section H2s", 48, "COPY-BRIEF", [("1", "The brief"), ("2", "What we built"), ("3", "Where it is now")])
f(FF, "CS10 Body: The brief", 999, "flexfolio.co + Dan writes", [
    ("Rec.", "Flexfolio is for product managers whose work deserves more than a line on a CV. [TBC: Dan to write why he started it, in two or three lines]"),
])
f(FF, "CS10 Body: What we built", 999, "flexfolio.co + fact", [
    ("Para 1", "A portfolio, a blog and a newsletter on a domain you own. The structure and layout are already designed, so you add your work and share the link."),
    ("Para 2", "Each role can be marked as employment, founder, consulting or freelance. Side projects sit on the same timeline as the day job, with projects under the role they came from."),
    ("Para 3", "Behind it, Flexfolio runs on the AI systems and automations we build for clients. [TBC: which systems and automations, named by Dan]"),
])
f(FF, "CS10 Body: Where it is now", 999, "Fact", [("Rec.", "Flexfolio is in beta. It's free to start, with a 14-day Pro trial. [TBC: what's next, from Dan]")])
f(FF, "CS11 Image caption (home page)", 120, "DESIGN-SYSTEM caption format", [("Rec.", "flexfolio.co, captured October 2026.")])
f(FF, "CS11 Image caption (profile)", 120, "DESIGN-SYSTEM caption format", [("Rec.", "A demo profile on Flexfolio, captured October 2026. [TBC: confirm it's a demo account]")])
f(FF, "CS12 Next project label", 20, "COPY-BRIEF", [("Rec.", "Next project →")])

# ===================== CASE STUDY: REVIEWBUDDY (own company) =====================
r = lambda *a: slot(CASE_RB, *a)
RB = "Case study /projects/review-buddy (own company, no customer results)"
r(RB, "CS0 SEO title (absolute)", 60, "NEW", [("Rec.", "ReviewBuddy, our own review software · Roadmap Labs")])
r(RB, "CS0 Meta description", 155, "NEW", [("Rec.", "ReviewBuddy is our own Google review software for Australian tradies. It's in beta, and it runs on the AI systems and automations we build.")])
r(RB, "CS1 Breadcrumb", 40, "Render", [("Rec.", "Work / ReviewBuddy")])
r(RB, "CS2 Case study H1", 60, "COPY-BRIEF", [("Rec.", "ReviewBuddy: Google reviews for Australian tradies"), ("Short", "ReviewBuddy")])
r(RB, "CS3 Lead", 180, "Fact + ReviewBuddy site", [
    ("Rec.", "ReviewBuddy is our own company. It helps tradies get more Google reviews and show them on their website. It's in beta, and it runs on our own systems."),
])
r(RB, "CS4 Fact labels (mono)", 12, "Render", [("1", "Client"), ("2", "Services"), ("3", "Status"), ("4", "Live site")])
r(RB, "CS5 Client fact value", 30, "Fact", [("Rec.", "Our own company")])
r(RB, "CS6 Services value", 30, "Fact", [("Rec.", "Product, AI automation")])
r(RB, "CS7 Status value", 10, "Fact", [("Rec.", "In beta")])
r(RB, "CS8 Live link label", 30, "ReviewBuddy site", [("TBC", "[TBC: reviewbuddy.com.au ↗, once the site is serving]")])
r(RB, "CS9 Section H2s", 48, "COPY-BRIEF", [("1", "The brief"), ("2", "What we built"), ("3", "Where it is now")])
r(RB, "CS10 Body: The brief", 999, "ReviewBuddy site + Dan writes", [
    ("Rec.", "Before someone rings a tradie, they check the Google reviews. Then they look at the website. [TBC: Dan to write why he started ReviewBuddy, in two or three lines]"),
])
r(RB, "CS10 Body: What we built", 999, "ReviewBuddy site + fact", [
    ("Para 1", "Each business gets its own Google review link and QR code to share after a job. Reviews show on their website in one widget, alongside the other review sites they use. It updates when a new Google review comes in."),
    ("Para 2", "On the Growth plan, ReviewBuddy emails customers to ask for a review, with one reminder. Past customers can be brought in from a CSV."),
    ("Para 3", "Behind it, ReviewBuddy runs on the AI systems and automations we build for clients. [TBC: which systems and automations, named by Dan]"),
])
r(RB, "CS10 Body: Where it is now", 999, "Fact", [("Rec.", "ReviewBuddy is in beta, with a 7-day free trial and free setup. [TBC: what's next, from Dan]")])
r(RB, "CS11 Image caption (widget)", 120, "DESIGN-SYSTEM caption format", [("Rec.", "The ReviewBuddy review widget, captured October 2026. [TBC: capture without a client's reviews, or the client's OK]")])
r(RB, "CS11 Image caption (app)", 120, "DESIGN-SYSTEM caption format", [("Rec.", "The ReviewBuddy app, captured October 2026. [TBC: screenshot]")])
r(RB, "CS12 Next project label", 20, "COPY-BRIEF", [("Rec.", "Next project →")])

# ===================== ABOUT =====================
b = lambda *a: slot(ABOUT, *a)
AB = "About /about (render order: AB0 to AB5, AB14 to AB16, AB6 to AB13)"
b(AB, "AB0 SEO title (absolute)", 60, "SEO brief", [("Rec.", "About Dan Kovac, founder of Roadmap Labs")])
b(AB, "AB0 Meta description", 155, "SEO brief + Dan, 26 Oct", [
    ("Rec.", "Dan Kovac did ten years in digital marketing. Roadmap Labs is his Melbourne studio for software, AI automation and marketing."),
])
b(AB, "AB1 Mono label", 12, "Render", [("Keep", "About")])
b(AB, "AB2 About H1", 52, "COPY-BRIEF", [("Rec.", "Roadmap Labs is Dan Kovac, in Melbourne."), ("Alt", "Dan Kovac. Melbourne.")])
b(AB, "AB3 About lead", 160, "COPY-BRIEF + Dan, 26 Oct", [
    ("Rec.", "Dan did ten years in digital marketing. Now he runs Roadmap Labs and his own companies, Flexfolio and ReviewBuddy."),
])
b(AB, "AB4 Portrait", 999, "Render", [("Note", "Real photo of Dan only, 4:5. No placeholder art.")])
b(AB, "AB5 Body paragraphs ×4 (draft for Dan; refine after his article idea)", 999, "LinkedIn About + Dan's customer description", [
    ("1", "I've been in business one way or another since I was 15, mowing lawns with Dad's mower. Then I did ten years in digital marketing. Social media led to copywriting, copy to design, design to websites and apps. Each step was a client asking for the next thing."),
    ("2", "The businesses I talk to aren't short on tools. Most pay a few thousand dollars a month for software and use a fraction of it. They know AI could help. They haven't had the time to work it out, their tools and data aren't set up for it, and they're not sure how to use it safely with client data. Most don't know where to start."),
    ("3", "Marketing goes the same way. They know they should do more of it, but there's no budget for an agency, no time to do it themselves and nobody they trust to hand it to. Meanwhile quotes, follow-ups and data entry eat the team's week."),
    ("4", "Roadmap Labs is how I fix that. We set up the tools and data first, then put AI to work one job at a time, and keep the marketing going out. I run my own companies, Flexfolio and ReviewBuddy, on the same systems. [TBC: refine after Dan's article idea]"),
])
b(AB, "AB14 Section label: the problem", 20, "NEW (draft 4.5)", [("Rec.", "What we keep seeing")])
b(AB, "AB15 Problem H2", 52, "NEW (draft 4.5)", [("Rec.", "Why AI isn't working for most businesses yet."), ("Alt", "Where most businesses get stuck.")])
b(AB, "AB16 Problem 1 title / body", 120, "Positioning: no time", [
    ("Title", "No time to work it out"),
    ("Body", "The team's flat out running the business. Nobody has a spare week to learn the tools and test what works."),
])
b(AB, "AB16 Problem 2 title / body", 120, "Positioning: tools and data", [
    ("Title", "Tools that don't connect"),
    ("Body", "A few thousand a month on software, most of it underused, with the data spread across all of it."),
])
b(AB, "AB16 Problem 3 title / body", 120, "Positioning: safety", [
    ("Title", "Unsure it's safe"),
    ("Body", "If you can't say where client data goes and who sees it, it's easier not to start."),
])
b(AB, "AB16 Problem 4 title / body", 120, "Positioning: marketing and admin", [
    ("Title", "Marketing keeps slipping"),
    ("Body", "No budget for an agency and nobody you trust with it. Admin takes the hours that marketing needed."),
])
b(AB, "AB6 Section label: how we work", 20, "COPY-BRIEF", [("Rec.", "How we work")])
b(AB, "AB7 How we work H2", 52, "COPY-BRIEF", [("Rec.", "The right job first, then the build."), ("Alt", "What we hold to on every job.")])
b(AB, "AB8 Belief 1 title / body", 120, "Voice guide belief 1", [
    ("Title", "The right thing first"),
    ("Body", "Building is the easy part now. Working out what's worth building is where most of our time goes."),
])
b(AB, "AB8 Belief 2 title / body", 120, "Voice guide belief 10", [
    ("Title", "A month to prove it"),
    ("Body", "Every automation gets a one-month test. If it isn't working, we switch it off and try the next one."),
])
b(AB, "AB8 Belief 3 title / body", 120, "Voice guide belief 8", [
    ("Title", "Written for people"),
    ("Body", "Anything we publish for you has to be worth a real person's time. Writing for the algorithm doesn't count."),
])
b(AB, "AB8 Belief 4 title / body", 120, "Voice guide belief 3", [
    ("Title", "Foundations first"),
    ("Body", "Your tools and data get set up before the clever bits, so AI has something real to work from."),
])
b(AB, "AB9 Section label: own companies", 20, "COPY-BRIEF", [("Rec.", "Our own companies")])
b(AB, "AB10 Own companies H2", 52, "COPY-BRIEF", [("Rec.", "We run our own companies on the same systems.")])
b(AB, "AB11 Rows", 90, "LIVE + fact", [
    ("ReviewBuddy", "Google review software for Australian tradies. Our own company, in beta, on our systems."),
    ("Flexfolio", "A portfolio platform for product managers. Our own company, in beta, on our systems."),
])
b(AB, "AB12 Row meta", 10, "Keep", [("Both", "View →")])
b(AB, "AB13 Closing band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

# ===================== 404 =====================
n = lambda *a: slot(NF, *a)
NN = "404 (not-found.tsx)"
n(NN, "NF0 SEO title (absolute, noindex)", 60, "NEW", [("Rec.", "Page not found · Roadmap Labs")])
n(NN, "NF1 Mono label", 12, "Render", [("Keep", "404")])
n(NN, "NF2 H1 line 1 (grey)", 32, "COPY-BRIEF", [("Rec.", "This page isn't here.")])
n(NN, "NF3 H1 line 2 (ink)", 32, "COPY-BRIEF", [("Rec.", "The rest of the site is."), ("Alt", "Let's find what you were after.")])
n(NN, "NF4 Lead", 120, "COPY-BRIEF", [("Rec.", "The link may be old, or the page has moved. Head home, or book a call if you were looking for Dan.")])
n(NN, "NF5 Buttons", 16, "COPY-BRIEF", [("Primary", "Book a call"), ("Home link", "Back to home →")])
n(NN, "NF6 Nav links", 12, "Same as G4", [("1", "Work"), ("2", "Services"), ("3", "Insights"), ("4", "About")])

# ===================== /services/marketing (no COPY-BRIEF slots: /services structure and limits, new MK IDs) =====================
m = lambda *a: slot(MKT, *a)
MP = "Page head"
m(MP, "MKT1 SEO title (absolute)", 60, "site-structure.md", [("Rec.", "SEO, web design and Google Ads, Melbourne · Roadmap Labs")])
m(MP, "MKT2 Meta description", 155, "site-structure.md", [("Rec.", "SEO, web design, conversion and Google Ads for Melbourne small businesses, written for people first and run inside one monthly plan. No GST.")])
m(MP, "MK1 Label (as S1)", 24, "NEW", [("Rec.", "Part of the partner plan")])
m(MP, "MK2 H1 line 1 (grey, as S2)", 26, "SEO brief", [("Rec.", "SEO, websites, Google Ads.")])
m(MP, "MK2 H1 line 2 (ink, as S2)", 26, "SEO brief", [("Rec.", "Kept running for you.")])
m(MP, "MK3 Lead (as S3)", 170, "NEW", [("Rec.", "We're a Melbourne SEO agency and Google Ads agency for small businesses, and we build the website too. It's all in the one partner plan, at the same fee.")])
m(MP, "MK4 Button", 18, "Approved", [("Keep", "Book a call")])
m(MP, "MK5 Secondary text link (→ /services)", 24, "NEW", [("Rec.", "What's in the plan →")])
MS = [
 ("01 · Websites", "Web design for Melbourne small businesses.",
  "Sites that say what you do, who it's for and why it matters, in plain words. We build it, then keep it up to date inside the plan. [TBC: website scope, Dan confirming]"),
 ("02 · SEO", "An SEO agency that writes for people.",
  "Pages and articles written for the person searching first, then for Google. We pick the searches worth winning and keep at it every month."),
 ("03 · Google Ads", "Google Ads management from a Melbourne agency.",
  "We set up the campaigns, write the ads and keep an eye on what each click costs. Management is in the plan. [TBC: Dan confirming whether ad spend is included]"),
 ("04 · Conversion", "A site that turns visits into calls.",
  "We look at where people leave, fix the pages that lose them and test the changes, so more of the visits you already get turn into enquiries."),
 ("05 · Social and email", "Social and email that keep going out.",
  "Posts and emails written for people first and sent on schedule, so the marketing doesn't stop when the week gets busy. [TBC: client sign-off before it goes out]"),
]
for n,(lab,h2,lead) in enumerate(MS,1):
    m(lab, f"MS{n} Label (as SL1)", 24, "NEW", [("Rec.", lab)])
    m(lab, f"MS{n} H2 (proposed ≤ 48, home WG2 limit)", 48, "NEW", [("Rec.", h2)])
    m(lab, f"MS{n} Lead (as S3)", 170, "NEW", [("Rec.", lead)])
PR = "06 · Proof (Compass naming cleared by Dan, 26 Oct; website project only)"
m(PR, "MP1 Label", 24, "NEW", [("Rec.", "06 · Client work")])
m(PR, "MP2 H2", 48, "Fact", [("Rec.", "Website, SEO and conversion for Compass.")])
m(PR, "MP3 Lead", 170, "Fact", [("Rec.", "We built the website for Compass Buyers Agency, with the SEO and conversion work. [TBC: result, with Compass's OK]")])
m(PR, "MP4 Link (→ case study)", 40, "NEW", [("Rec.", "Read the Compass case study →")])
FE = "07 · The fee"
m(FE, "MF1 Label", 24, "NEW", [("Rec.", "07 · The fee")])
m(FE, "MF2 H2 (as S4)", 26, "NEW", [("Rec.", "One fee for all of it.")])
m(FE, "MF3 Price line (exact)", 90, "Dan, 26 Oct", [("Rec.", "A$3,500 a month, no GST. AI model costs included. No contract.")])
m(FE, "MF4 Lead", 170, "Fact", [("Rec.", "Marketing is one part of the partner plan. The same fee covers AI automation, software and internal tools.")])
m(FE, "MF5 Comparison rows (as OF9)", 40, "Dan's figures", [
    ("Row 1", "SEO campaign, well run"), ("Row 1 fig", "About A$2,000/mo"),
    ("Row 2", "Agency fee for Google Ads management"), ("Row 2 fig", "About A$1,000/mo"),
    ("Total", "Together"), ("Total fig", "About A$3,000/mo"),
    ("Us", "Roadmap Labs, everything in the plan"), ("Us fig", "A$3,500/mo"),
])
m(FE, "MF6 Footnote (as OF10)", 180, "NEW", [("Rec.", "Typical costs from Dan's ten years in digital marketing. The ad row is the agency's management fee on its own.")])
m(FE, "MF7 Link (→ /services)", 40, "NEW", [("Rec.", "See everything in the plan →")])
MQ = "08 · Questions"
m(MQ, "MQ0 H2 (as S4)", 24, "Keep", [("Keep", "Before you book.")])
MFAQ = [
 ("Hold until Dan answers", "Is Google Ads spend included?", "[TBC: Dan confirming]"),
 ("Hold until Dan answers", "Is a new website included?", "[TBC: website scope, Dan confirming] [DECISION: fair-use limit]"),
 ("Live", "Do you write the content?", "Yes. We write the pages, posts and emails for the people reading them first, then for search. [TBC: client sign-off before anything goes out]"),
 ("Live", "Do you only work with Melbourne businesses?", "No. We're based in Melbourne and work with Australian businesses wherever they are."),
 ("Live", "Is it a separate fee?", "No. It's the same partner plan: A$3,500 a month, no GST. AI model costs included. No contract."),
 ("Live", "What happens if we cancel?", "Cancel any month. We hand over everything we've built. [DECISION: handover terms]"),
]
for n,(st,q,a) in enumerate(MFAQ,1):
    m(MQ, f"MQ{n} Question ({st})", 60, "NEW", [(st, q)])
    m(MQ, f"MQ{n} Answer ({st})", 240, "NEW", [(st, a)])
MC = "09 · Start (dark, as home C)"
m(MC, "MC1 Label", 24, "NEW", [("Rec.", "09 · Start")])
m(MC, "MC2 H2 line 1 (grey)", 36, "NEW", [("Rec.", "Marketing keeps getting dropped?")])
m(MC, "MC3 H2 line 2 (ink)", 36, "NEW", [("Rec.", "That's what the first call is for.")])
m(MC, "MC4 Button", 18, "Approved", [("Primary", "Book a call")])
m(MC, "MC5 Reassurance", 90, "NEW", [("Rec.", "No pressure and no contract. We take on a small handful of clients at a time.")])

STRIP = re.compile(r'\s*\[(DECISION|TBC|CONFIRM)[^\]]*\]')
def render(store):
    out, bad, cur = [], [], None
    for section, sid, limit, src, opts in store:
        if section != cur:
            out += [f"\n### {section}\n", "| Slot | Limit | Source | Option | Copy | Chars | OK |", "|---|---|---|---|---|---|---|"]
            cur = section
        for label, copy in opts:
            n = len(STRIP.sub('', copy)); lim = "-" if limit == 999 else f"≤ {limit}"
            # titles in mixed title/body slots are held to 32 (WG/UN cards) or 24 (OF11)
            eff = limit
            if label.startswith("Title"): eff = 24 if sid.startswith(("OF11", "AB8", "AB16")) else 32
            ok = "-" if limit == 999 else ("✓" if n <= eff else "OVER")
            if limit != 999 and n > eff:
                bad.append((sid, label, copy, n, eff))
            out.append(f"| {sid} | {lim if not label.startswith("Title") else f"≤ {eff}"} | {src} | {label} | {copy.replace('|','\\|')} | {'-' if limit==999 else n} | {ok} |")
    return out, bad

which = sys.argv[1] if len(sys.argv) > 1 else "home"
out, bad = render({"home": HOME, "services": SERV, "pages": PAGES, "global": GLOB, "work": WORK, "case": CASE, "about": ABOUT, "404": NF, "marketing": MKT, "case-flexfolio": CASE_FF, "case-reviewbuddy": CASE_RB}[which])
if bad:
    sys.stderr.write("OVER LIMIT:\n" + "\n".join(map(str, bad)) + "\n"); sys.exit(1)
print("\n".join(out))
