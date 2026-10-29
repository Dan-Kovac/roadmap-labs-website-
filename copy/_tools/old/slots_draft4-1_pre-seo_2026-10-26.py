# Slot copy + limit checks. Draft 4, 26 Oct 2026 (AEDT), from Dan's positioning canvas.
# Run: python3 slots.py home      -> homepage slot tables
#      python3 slots.py services  -> /services slot tables
#      python3 slots.py pages     -> contact and insights
#      python3 slots.py global|work|case|about|404 -> global.md, work.md, case-study-compass.md, about.md, 404.md
# [DECISION: ...], [TBC: ...] and [CONFIRM: ...] tags are not counted towards limits.
# Exits 1 if any option is over its limit.
import sys, re
HOME, SERV, PAGES, GLOB, WORK, CASE, ABOUT, NF = [], [], [], [], [], [], [], []
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
h(U, "UN2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "Most AI stops at a login.")])
h(U, "UN2 H2 line 2 (ink)", 26, "Canvas line 2", [("Rec.", "Use it properly.")])
h(U, "UN3 Lead", 160, "Canvas", [
    ("Rec.", "Properly means your tools are connected, your data is in a shape AI can use and each job is picked on purpose. Then we go as far as is sensible."),
])
h(U, "UN4 Block 1 title / body", 140, "NEW", [
    ("Title", "Set up properly"),
    ("Body", "We connect your tools and get your data into one place AI can read. Most of the time that becomes your company portal."),
])
h(U, "UN4 Block 2 title / body", 140, "NEW", [
    ("Title", "Tried on us first"),
    ("Body", "New models and tools go into our own companies before they go into yours. What works there comes to you. [TBC: confirm with Dan]"),
])
h(U, "UN4 Block 3 title / body", 140, "Canvas line 3", [
    ("Title", "Ethically and safely"),
    ("Body", "[TBC: safety paragraph from Dan: where client data lives, who can see it, whose accounts it runs on]"),
])

WG = "02 · Where it goes (replaces 'What we do' in Direction 11)"
h(WG, "WG1 Label", 16, "NEW", [("Rec.", "02 · Put to work")])
h(WG, "WG2 H2", 48, "Canvas", [("Rec.", "AI on the jobs that sit there all week."), ("Alt", "The quote, the follow-up, the marketing.")])
h(WG, "WG3 Lead", 160, "NEW", [
    ("Rec.", "We start where AI makes the most difference, one job at a time. Your company portal comes later, once you can see the value."),
])
h(WG, "WG4 Card 1 title / description", 140, "NEW", [
    ("Title", "Admin and sales"),
    ("Description", "Quotes, follow-ups, onboarding and data entry handled by automations, so leads get an answer and nobody types it all by hand."),
])
h(WG, "WG4 Card 2 title / description", 140, "NEW", [
    ("Title", "Marketing that keeps going out"),
    ("Description", "SEO, social posts and email, written for people first and sent on schedule, without paying an agency for each."),
])
h(WG, "WG4 Card 3 title / description", 140, "NEW", [
    ("Title", "Your company portal"),
    ("Description", "One place for your data and tools, built around how your team works, so AI has something real to work from."),
])
h(WG, "WG5 Case study labels (≤ 16)", 16, "NEW", [
    ("Card 1 → ReviewBuddy", "Our own company"),
    ("Card 2 → Compass Buyers Agency", "Client"),
    ("Card 3 → Compass OS", "Being built"),
])
h(WG, "WG6 Models line (new slot, under the cards)", 140, "NEW", [
    ("Rec.", "We pick the AI model for each job and keep an eye on what it costs. The running costs are in your fee."),
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

O = "04 · The fee"
h(O, "OF1 Label", 24, "Canvas", [("Rec.", "04 · The fee")])
h(O, "OF2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "One monthly fee.")])
h(O, "OF3 H2 line 2 (ink)", 26, "Dan, 26 Oct", [("Rec.", "AI running costs included.")])
h(O, "OF4 Lead", 170, "NEW", [
    ("Rec.", "We build one job at a time, as many as you need, and look after each one. The AI running costs are in the fee, so there's no second bill."),
])
h(O, "OF5 Price", 24, "Dan, 26 Oct", [("Plan label", "Partner plan"), ("Price", "A$3,500/mo")])
h(O, "OF6 Price note", 90, "Dan, 26 Oct", [("Rec.", "About A$808 a week. AI running costs included. No GST added, no contract.")])
h(O, "OF7 Included items ×6", 80, "NEW", [
    ("1", "Automations for admin, sales, SEO, social posting and email"),
    ("2", "A company portal that joins your data and tools, when you're ready"),
    ("3", "AI models picked for each job, with running costs in the fee [DECISION: fair-use limit]"),
    ("4", "A one-month test for every automation"),
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
    ("Rec.", "Typical costs from Dan's ten years running an agency. The ad row is the management fee, not ad spend. Our fee has no GST added."),
])
h(O, "OF11 Fine print ×4 (title ≤ 24 / body ≤ 120)", 120, "NEW", [
    ("Title 1", "AI running costs"),
    ("Body 1", "They're in the fee. We pick the model for each job and keep an eye on the spend. [DECISION: fair-use limit]"),
    ("Title 2", "One-month test"),
    ("Body 2", "Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one."),
    ("Title 3", "No contract"),
    ("Body 3", "Cancel any month and we hand over everything we've built. [DECISION: handover terms]"),
    ("Title 4", "A handful of clients"),
    ("Body 4", "We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly."),
])
h(O, "OF12 Text link", 18, "Approved", [("Keep", "Book a call →")])

K = "05 · Dan (replaces Selected work)"
h(K, "W1 Label", 24, "Canvas", [("Rec.", "05 · Dan Kovac")])
h(K, "W6 H2 (new slot, COPY-BRIEF ≤ 52)", 52, "Canvas", [("Rec.", "Dan builds it. His own companies run on it.")])
h(K, "W5 Lead", 120, "NEW", [
    ("Rec.", "Dan ran a digital agency for ten years. Now he builds AI systems, and Flexfolio and ReviewBuddy run on them."),
])
h(K, "W2 Action", 16, "Keep", [("Keep", "All work →")])
h(K, "W3 Row names", 28, "LIVE", [("1", "Flexfolio"), ("2", "ReviewBuddy"), ("3", "Compass Buyers Agency"), ("4", "Compass OS")])
h(K, "W4 Description: Flexfolio", 90, "Fact", [("Rec.", "A portfolio platform for product managers. Our own company, in beta, on our systems.")])
h(K, "W4 Description: ReviewBuddy", 90, "Fact", [("Rec.", "Review-growth software for small businesses. Our own company, in beta, on our systems.")])
h(K, "W4 Description: Compass Buyers Agency", 90, "Fact", [("Rec.", "We run their website, SEO and conversion work. Google Ads is next.")])
h(K, "W4 Description: Compass OS", 90, "Fact", [("Rec.", "Their internal platform, being built in Retool. In progress.")])
h(K, "W4 Meta", 10, "Keep", [("Rows 1, 2, 3", "View →"), ("Row 4", "Private")])

I = "Insights teaser (hidden until 3+ articles are live; sits after 05 when shown)"
h(I, "IN1 Label", 24, "Keep", [("Keep", "Insights")])
h(I, "IN2 H2 line 1 (grey)", 30, "Keep", [("Keep", "We test on our own first. [TBC: confirm with Dan]")])
h(I, "IN2 H2 line 2 (ink)", 30, "Keep", [("Keep", "Then Dan writes it up.")])
h(I, "IN3 Lead", 120, "Keep", [("Keep", "Notes on building with AI: what works, what doesn't and what it actually costs to run.")])
h(I, "IN5 Link", 18, "Keep", [("Keep", "All insights →")])

C = "06 · Close (dark)"
h(C, "C1 Label", 24, "NEW", [("Rec.", "06 · Start")])
h(C, "C2 H2 line 1 (grey)", 36, "NEW", [("Rec.", "Not sure where AI fits yet?")])
h(C, "C3 H2 line 2 (ink)", 36, "NEW", [("Rec.", "That's what the first call is for."), ("Keep LIVE", "Tell Dan what has to happen.")])
h(C, "C4 Buttons", 18, "Approved", [("Primary", "Book a call"), ("Secondary", "Email Dan")])
h(C, "C5 Reassurance (no price)", 90, "NEW", [("Rec.", "No pressure and no contract. We take on a small handful of clients at a time.")])

# ===================== SERVICES =====================
s = lambda *a: slot(SERV, *a)
P = "Page head"
s(P, "S1 Label", 24, "Keep", [("Keep", "Services & Pricing")])
s(P, "S2 H1 line 1 (grey)", 26, "NEW", [("Rec.", "AI doing the actual work.")])
s(P, "S2 H1 line 2 (ink)", 26, "NEW", [("Rec.", "One monthly fee.")])
s(P, "S3 Lead", 170, "NEW", [
    ("Rec.", "We set the business up to use AI properly, then build automations one at a time. A$3,500 a month, AI running costs included, no contract."),
])
D = "01 · What we build"
s(D, "O1 title", 24, "NEW", [("Rec.", "Automations")])
s(D, "O1 body", 100, "NEW", [("Rec.", "Admin, sales follow-ups, SEO, social posting and email. Built one at a time and looked after by us.")])
s(D, "O2 title", 24, "NEW", [("Rec.", "A company portal")])
s(D, "O2 body", 100, "NEW", [("Rec.", "One place for your data and tools, so AI has something real to work from. Usually about a month.")])
s(D, "O3 title", 24, "NEW", [("Rec.", "Safety and security")])
s(D, "O3 body", 100, "NEW", [("Hold until Dan answers", "[TBC: safety paragraph from Dan, short version]")])
s(D, "O1 to O3 meta", 20, "NEW", [("All three", "In the fee")])
s(D, "O4 own-products line", 90, "Fact", [("Rec.", "Our own companies, ReviewBuddy and Flexfolio, run on the same systems.")])
F = "02 · The offer"
s(F, "SO1 Offer block", 999, "Same as home", [("Note", "Use OF2 to OF10 from homepage.md")])
s(F, "SO1 Included / not included line", 170, "NEW", [
    ("Rec.", "AI running costs are in the fee. Software you already pay for, like your CRM, stays on your own accounts. [DECISION: fair-use limit]"),
])
s(F, "SO2 Before-you-commit line (end of offer)", 200, "Approved draft", [
    ("Keep", "Before you commit, you see what each automation could save, when it'll be running and when it should pay back. The most you can spend finding out after that is one month, and you keep what we built."),
])
s(F, "SO1 Supporting line", 140, "NEW", [
    ("Rec.", "That's about A$1,670 a month you could put towards ad spend or your people."),
])
HWs = "03 · How it works (dark)"
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
 ("Live", "Are the AI running costs extra?",
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
  "No. It's A$3,500 a month, and that's the whole fee."),
 ("Spare", "Do I need to know anything about AI?",
  "No. You know your business, and that's the part we need. We look after the models, the setup and the running costs, and explain it in plain English."),
 ("Spare", "Does the fee cover custom software?",
  "Yes. Software, automations and marketing automations all sit inside the one fee. Nothing is quoted separately."),
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
    ("Rec.", "Dan ran a digital agency for ten years. Now he builds software and automations at Roadmap Labs, in Melbourne."),
    ("Alt (draft)", "Dan runs Roadmap Labs, a software and automations studio in Melbourne."),
])
c(IN, "Related heading", 24, "08", [("Keep", "Keep reading.")])
c(IN, "Pagination", 24, "08", [("Keep", "Older articles →")])



# ===================== SERVICES: section labels (COPY-BRIEF "Home and Services") =====================
s = lambda *a: slot(SERV, *a)
SL = "Section labels and small label (COPY-BRIEF, render 09-services)"
s(SL, "SL1 01 section label", 14, "COPY-BRIEF", [("Rec.", "What we build")])
s(SL, "SL2 01 section H2", 26, "COPY-BRIEF", [("Rec.", "What we build for you."), ("Alt", "Where AI goes to work.")])
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
g(GG, "G1 Site title (`lockedTitle`)", 60, "NEW", [("Rec.", "Roadmap Labs - make AI work for your business")])
g(GG, "G2 Meta description (`lockedDescription`)", 155, "NEW", [
    ("Rec.", "For owner-led businesses that want AI working properly and safely. We set up your tools and data, then put AI to work one job at a time."),
])
GH = "Header, nav and menu"
g(GH, "G3 Skip link (first focusable element)", 24, "COPY-BRIEF", [("Rec.", "Skip to content")])
g(GH, "G4 Nav labels ×4", 12, "Keep", [("1", "Work"), ("2", "Services"), ("3", "Insights"), ("4", "About")])
g(GH, "G5 Header button (primary only)", 18, "Approved", [("Approved", "Book a call")])
g(GH, "G6 Mobile menu open label", 8, "COPY-BRIEF", [("Rec.", "Menu")])
g(GH, "G7 Mobile menu close label", 8, "COPY-BRIEF", [("Rec.", "Close")])
g(GH, "G8 Mobile menu button (one only)", 18, "Approved", [("Approved", "Book a call")])
GF = "Footer"
g(GF, "G9 Footer descriptor", 40, "NEW", [("Rec.", "AI, software and automations"), ("Keep LIVE", "Software & automations studio")])
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
w(WK, "WK1 Mono label", 12, "Render", [("Keep", "Work")])
w(WK, "WK2 Work H1", 52, "COPY-BRIEF", [("Rec.", "Client work, and the companies we run ourselves."), ("Alt", "What we're building, and who for.")])
w(WK, "WK3 Work lead", 160, "COPY-BRIEF", [
    ("Rec.", "Flexfolio and ReviewBuddy are our own companies, both in beta, and they run on the systems we build. Client work is shown with the client's OK."),
])
w(WK, "WK4 Card names", 28, "LIVE", [("1", "Compass Buyers Agency"), ("2", "Compass OS"), ("3", "ReviewBuddy"), ("4", "Flexfolio")])
w(WK, "WK5 Card description: Compass Buyers Agency", 90, "LIVE", [("Keep", "Website, SEO and CRO for a buyers agency from Byron Bay to the Gold Coast.")])
w(WK, "WK5 Card description: Compass OS", 90, "Fact", [("Rec.", "Their internal platform, being built in Retool. In progress.")])
w(WK, "WK5 Card description: ReviewBuddy", 90, "LIVE + fact", [("Rec.", "Review-growth software for small businesses. Our own company, in beta, on our systems.")])
w(WK, "WK5 Card description: Flexfolio", 90, "LIVE + fact", [("Rec.", "A portfolio platform for product managers. Our own company, in beta, on our systems.")])
w(WK, "WK6 Services list: Compass Buyers Agency", 60, "COPY-BRIEF", [("Rec.", "Website · SEO · CRO · Google Ads (coming soon)")])
w(WK, "WK6 Services list: Compass OS", 60, "COPY-BRIEF", [("Rec.", "Internal platform · Retool")])
w(WK, "WK6 Services list: ReviewBuddy", 60, "COPY-BRIEF", [("Rec.", "Own company · In beta · [TBC: which systems run on it]")])
w(WK, "WK6 Services list: Flexfolio", 60, "COPY-BRIEF", [("Rec.", "Own company · In beta · [TBC: which systems run on it]")])
w(WK, "WK7 Card meta", 10, "Keep", [("Compass Buyers Agency, ReviewBuddy, Flexfolio", "View →"), ("Compass OS", "Private")])
w(WK, "WK8 Closing band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

# ===================== CASE STUDY TEMPLATE (filled for Compass) =====================
k = lambda *a: slot(CASE, *a)
CS = "Case study /projects/[slug], filled for Compass (needs Compass's written OK before it's published)"
k(CS, "CS1 Breadcrumb", 40, "Render", [("Rec.", "Work / Compass Buyers Agency")])
k(CS, "CS2 Case study H1", 60, "COPY-BRIEF", [("Rec.", "Compass Buyers Agency and Compass OS")])
k(CS, "CS3 Lead (proposed ≤ 180)", 180, "Fact", [
    ("Rec.", "We run the website, SEO and conversion work for Compass Buyers Agency, and we're building Compass OS, their internal platform, in Retool. It's in progress."),
    ("Keep LIVE", "Website, SEO and CRO for a buyers agency from Byron Bay to the Gold Coast."),
])
k(CS, "CS4 Fact labels (mono, proposed ≤ 12)", 12, "Render", [("1", "Client"), ("2", "Services"), ("3", "Year"), ("4", "Live site")])
k(CS, "CS5 Client fact value", 30, "COPY-BRIEF", [("Rec.", "Compass Buyers Agency")])
k(CS, "CS6 Services value", 30, "COPY-BRIEF", [("Rec.", "Website, SEO, CRO, Compass OS")])
k(CS, "CS7 Year value", 10, "COPY-BRIEF", [("TBC", "[TBC: start year]")])
k(CS, "CS8 Live link label", 30, "COPY-BRIEF", [("Rec.", "compassagency.com.au ↗")])
k(CS, "CS9 Section H2s", 48, "COPY-BRIEF", [("1", "The brief"), ("2", "What we built"), ("3", "Where it is now")])
k(CS, "CS10 Body: The brief", 999, "Dan writes", [("TBC", "[TBC: Dan to write what Compass needed and why]")])
k(CS, "CS10 Body: What we built (facts-only starter)", 999, "Fact", [
    ("Starter", "We look after the Compass website, its SEO and the work that turns visits into enquiries. Google Ads comes next."),
    ("Starter", "We're also building Compass OS, the agency's internal platform. It started as a custom build, then moved to Retool for governance reasons. [TBC: Dan to say what governance meant here] Retool also has an API. [TBC: what it's used for]"),
])
k(CS, "CS10 Body: Where it is now", 999, "Fact", [("Starter", "In progress. [TBC: result]"), ("Quote slot", "[TBC: quote from Nick, with his approval]")])
k(CS, "CS11 Image caption (Compass OS)", 120, "COPY-BRIEF", [("Rec.", "Compass OS in Retool, in progress. Shown with Compass's permission. [TBC: screenshot and written OK]")])
k(CS, "CS11 Image caption (website)", 120, "COPY-BRIEF", [("Rec.", "The Compass Buyers Agency website. [TBC: screenshot and written OK]")])
k(CS, "CS12 Next project label", 20, "COPY-BRIEF", [("Rec.", "Next project →")])

# ===================== ABOUT =====================
b = lambda *a: slot(ABOUT, *a)
AB = "About /about"
b(AB, "AB1 Mono label", 12, "Render", [("Keep", "About")])
b(AB, "AB2 About H1", 52, "COPY-BRIEF", [("Rec.", "Roadmap Labs is Dan Kovac, in Melbourne."), ("Alt", "Dan Kovac. Melbourne.")])
b(AB, "AB3 About lead", 160, "COPY-BRIEF", [
    ("Rec.", "Dan ran Roadmap Digital, a digital agency, for ten years [CONFIRM]. Now he runs Roadmap Labs and his own companies, Flexfolio and ReviewBuddy."),
])
b(AB, "AB4 Portrait", 999, "Render", [("Note", "Real photo of Dan only, 4:5. No placeholder art.")])
b(AB, "AB5 Body paragraphs ×3", 999, "Dan writes", [("1", "[TBC: Dan writes]"), ("2", "[TBC: Dan writes]"), ("3", "[TBC: Dan writes]")])
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
b(AB, "AB8 Belief 4 title / body (optional: the render shows 4, the brief says 3)", 120, "Voice guide belief 3", [
    ("Title", "Foundations first"),
    ("Body", "Your tools and data get set up before the clever bits, so AI has something real to work from."),
])
b(AB, "AB9 Section label: own companies", 20, "COPY-BRIEF", [("Rec.", "Our own companies")])
b(AB, "AB10 Own companies H2", 52, "COPY-BRIEF", [("Rec.", "We run our own companies on the same systems.")])
b(AB, "AB11 Rows", 90, "LIVE + fact", [
    ("ReviewBuddy", "Review-growth software for small businesses. Our own company, in beta, on our systems."),
    ("Flexfolio", "A portfolio platform for product managers. Our own company, in beta, on our systems."),
])
b(AB, "AB12 Row meta", 10, "Keep", [("Both", "View →")])
b(AB, "AB13 Closing band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

# ===================== 404 =====================
n = lambda *a: slot(NF, *a)
NN = "404 (not-found.tsx)"
n(NN, "NF1 Mono label", 12, "Render", [("Keep", "404")])
n(NN, "NF2 H1 line 1 (grey)", 32, "COPY-BRIEF", [("Rec.", "This page isn't here.")])
n(NN, "NF3 H1 line 2 (ink)", 32, "COPY-BRIEF", [("Rec.", "The rest of the site is."), ("Alt", "Let's find what you were after.")])
n(NN, "NF4 Lead", 120, "COPY-BRIEF", [("Rec.", "The link may be old, or the page has moved. Head home, or book a call if you were looking for Dan.")])
n(NN, "NF5 Buttons", 16, "COPY-BRIEF", [("Primary", "Book a call"), ("Home link", "Back to home →")])
n(NN, "NF6 Nav links", 12, "Same as G4", [("1", "Work"), ("2", "Services"), ("3", "Insights"), ("4", "About")])

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
            if label.startswith("Title"): eff = 24 if sid.startswith("OF11") else 32
            ok = "-" if limit == 999 else ("✓" if n <= eff else "OVER")
            if limit != 999 and n > eff:
                bad.append((sid, label, copy, n, eff))
            out.append(f"| {sid} | {lim if not label.startswith("Title") else f"≤ {eff}"} | {src} | {label} | {copy.replace('|','\\|')} | {'-' if limit==999 else n} | {ok} |")
    return out, bad

which = sys.argv[1] if len(sys.argv) > 1 else "home"
out, bad = render({"home": HOME, "services": SERV, "pages": PAGES, "global": GLOB, "work": WORK, "case": CASE, "about": ABOUT, "404": NF}[which])
if bad:
    sys.stderr.write("OVER LIMIT:\n" + "\n".join(map(str, bad)) + "\n"); sys.exit(1)
print("\n".join(out))
