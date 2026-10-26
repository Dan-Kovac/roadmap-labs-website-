# Slot copy + limit checks for homepage and /services. Draft 3, 25 Oct 2026. [DECISION: ...] tags are not counted towards limits.
# Run: python3 slots.py home   -> homepage slot tables
#      python3 slots.py services -> /services slot tables
# Exits 1 if any non-flagged option is over its limit.
import sys, re
HOME, SERV = [], []
def slot(store, section, sid, limit, src, opts):
    store.append((section, sid, limit, src, opts))

# ===================== HOME =====================
h = lambda *a: slot(HOME, *a)
G = "Global"
h(G, "Site title (`lockedTitle`)", 60, "LIVE → option", [
    ("LIVE, over limit", "Roadmap Labs - apps, websites and automations that fit real use"),
    ("Rec.", "Roadmap Labs - software and automations, one retainer"),
])
h(G, "Meta description (`lockedDescription`)", 155, "LIVE → option", [
    ("Rec.", "Software, automations and marketing automations for owner-led businesses. One monthly retainer, AI running costs included, no contract."),
    ("Alt (draft 2)", "We build software, automations and marketing automations that take the admin off your team. One monthly retainer, no contract."),
    ("Keep LIVE", "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them."),
])
h(G, "Nav labels (4)", 12, "Dan to decide", [("Rec.", "Work"), ("Rec.", "Services"), ("Rec.", "Insights"), ("Rec.", "About")])
h(G, "Header button (primary only, as rendered)", 18, "Approved", [("Approved", "Book a call")])
h(G, "Footer descriptor", 40, "LIVE", [("Keep LIVE", "Software & automations studio")])
h(G, "Footer location", 30, "LIVE", [("Keep LIVE", "Melbourne, Australia")])
h(G, "Footer bottom line", 40, "NEW", [("Left", "© 2026 Roadmap Labs"), ("Right, link", "dan@roadmaplabs.com.au")])

H = "Hero (no price)"
h(H, "H1 Eyebrow (mono)", 40, "Brief", [("Rec.", "Melbourne · Software and automations"), ("Alt (pairs with hero 1)", "For owner-led teams · Melbourne")])
# Ranked hero options: each is (grey, ink, lead)
HERO = [
 ("1 (rec.)", "Owner by day. Admin by night.", "Hand the admin to a system.",
  "For owner-led teams: software, automations and marketing automations that take the quotes and admin off you. It starts with a free discovery session."),
 ("2", "Paying for tools no one uses?", "Put your tools to work.",
  "We build software, automations and marketing automations that get your CRM and other tools doing the admin. It starts with a free discovery session."),
 ("3", "Admin your team does by hand.", "Done by a system, every week.",
  "Software, automations and marketing automations that stop quotes, follow-ups and onboarding eating the week. Start with a free discovery session."),
 ("4", "The big players post every day.", "Now your business can too.",
  "Software, automations and marketing automations that keep your SEO, social and email going out, no extra hires. Start with a free discovery session."),
]
for rank, g, i, lead in HERO:
    h(H, f"Hero option {rank}: H2 line 1 (grey)", 32, "NEW", [(f"Option {rank}", g)])
    h(H, f"Hero option {rank}: H3 line 2 (ink)", 32, "NEW", [(f"Option {rank}", i)])
    h(H, f"Hero option {rank}: H4 Lead", 150, "NEW", [(f"Option {rank}", lead)])
h(H, "H5 Primary button", 18, "Approved", [("Approved", "Book a call")])
h(H, "H6 Secondary text link", 18, "NEW", [("Rec.", "How it works →"), ("Alt", "See the work →")])
h(H, "H7 Microcopy (discovery, no price)", 60, "NEW", [
    ("Rec.", "Free discovery session. See the numbers before you pay."),
    ("Alt A", "Start free. See the numbers before you pay a cent."),
    ("Alt B", "First step: a free session to map what's worth automating"),
])

O = "01 · The offer"
h(O, "OF1 Label", 24, "Brief", [("Keep", "01 · The offer")])
h(O, "OF2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "One monthly retainer."), ("Alt", "One monthly fee.")])
h(O, "OF3 H2 line 2 (ink)", 26, "NEW", [("Rec.", "Software and automations."), ("Alt", "Unlimited automations.")])
h(O, "OF4 Lead", 170, "NEW", [
    ("Rec.", "We build one thing at a time, as many as you need, and look after every one. AI running costs and GST are in the fee."),
    ("Alt", "It covers software, automations and marketing automations. We build one thing at a time, as many as you need, and look after every one."),
])
h(O, "OF5 Price", 24, "Confirmed", [("Plan label", "One retainer"), ("Price", "A$3,500/mo incl. GST")])
h(O, "OF6 Price note", 90, "Confirmed", [("Rec.", "About A$808 a week, with AI running costs and GST included. No contract.")])
h(O, "OF7 Included items ×6", 80, "NEW", [
    ("1", "Software built around how your team works, including a company portal"),
    ("2", "Automations for admin, quotes, follow-ups and onboarding"),
    ("3", "Marketing automations for SEO, social and email, written for people first"),
    ("4", "Testing and upkeep of everything we build"),
    ("5", "AI running costs included, up to a fair-use limit [DECISION: fair-use limit]"),
    ("6", "A full handover if you leave"),
])
h(O, "OF8 Comparison label", 40, "Brief", [("Keep", "What it replaces")])
h(O, "OF9 Comparison rows", 40, "Confirmed", [
    ("Row 1", "SEO campaign, well run"), ("Row 1 fig", "A$2,000/mo"),
    ("Row 2", "Agency fees: Meta, Google or social ads"), ("Row 2 fig", "A$1,000/mo"),
    ("Row 3", "Virtual assistant at A$500+ a week"), ("Row 3 fig", "A$2,170+/mo"),
    ("Total", "Together"), ("Total fig", "About A$5,170/mo"),
    ("Us", "Roadmap Labs"), ("Us fig", "A$3,500/mo incl. GST"), ("Diff", "Difference"), ("Diff fig", "About A$1,670/mo"),
])
h(O, "OF10 Footnote (directly under table)", 180, "NEW", [
    ("Rec.", "Typical costs from Dan's ten years running an agency. The ad row is the management fee, not ad spend. Our fee includes AI running costs and GST."),
])
h(O, "OF11 Fine print ×4 (title ≤ 24 / body ≤ 120)", 120, "Confirmed", [
    ("Title 1", "AI running costs"),
    ("Body 1", "AI running costs are in the fee, up to a fair-use limit we agree upfront. We pick the models and watch the bill. [DECISION: fair-use limit]"),
    ("Title 2", "One-month test"),
    ("Body 2", "Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one."),
    ("Title 3", "No contract"),
    ("Body 3", "Cancel any month. We hand everything over and move the AI accounts into your name. [DECISION: handover terms]"),
    ("Title 4", "A handful of clients"),
    ("Body 4", "We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly."),
])
h(O, "OF12 Text link", 18, "Approved", [("Keep", "Book a call →")])

W = "02 · How it works (dark)"
h(W, "HW1 Label", 24, "NEW", [("Rec.", "02 · How it works")])
h(W, "HW2 H2 pair", 26, "NEW", [
    ("Line 1 (grey)", "See the numbers."), ("Line 2 (ink)", "Then we build."),
])
h(W, "HW3 Lead", 170, "NEW", [
    ("Rec.", "It starts with a free discovery session and a roadmap with our best estimates. If the numbers stack up, we start the retainer. One flat fee, no contract."),
])
h(W, "HW4 Step title 1", 30, "NEW", [("Rec.", "Free discovery session.")])
h(W, "HW5 Step body 1", 110, "NEW", [
    ("Rec.", "We look at where your team's time and money go, then scope and map out the automations worth building."),
])
h(W, "HW4 Step title 2", 30, "NEW", [("Approved draft", "A roadmap with the numbers.")])
h(W, "HW5 Step body 2", 110, "NEW", [
    ("Approved draft", "What each automation could save or earn, how long it takes to get running and when it should start paying off."),
])
h(W, "HW4 Step title 3", 30, "NEW", [("Rec.", "The retainer build.")])
h(W, "HW5 Step body 3", 110, "NEW", [
    ("Rec.", "One automation at a time, each with a one-month test. Your portal when you're ready. Same fee, no contract."),
])
h(W, "HW6 Button", 18, "Approved", [("Keep", "Book a call")])
h(W, "HW8 Line beside the button (new slot)", 60, "Approved draft", [("Rec.", "No pressure. Look over the numbers, then decide.")])

K = "03 · Selected work (factual, no outcomes)"
h(K, "W1 Label", 24, "Brief", [("Keep", "03 · Selected work")])
h(K, "W5 Lead", 120, "NEW", [
    ("Rec.", "Two of these are our own companies. Flexfolio and ReviewBuddy run on the same systems we build for clients."),
])
h(K, "W2 Action", 14, "RENDER", [("Keep", "All work →")])
h(K, "W3 Row names", 28, "LIVE", [("1", "Compass Buyers Agency"), ("2", "Compass OS"), ("3", "ReviewBuddy"), ("4", "Flexfolio")])
h(K, "W4 Description: Compass Buyers Agency", 90, "LIVE + render", [("Keep", "Website, SEO and CRO for a buyers agency from Byron Bay to the Gold Coast.")])
h(K, "W4 Description: Compass OS", 90, "NEW", [("Rec.", "A private internal operating system for Compass Buyers Agency, being built in Retool")])
h(K, "W4 Description: ReviewBuddy", 90, "LIVE + fact", [("Rec.", "Review-growth software for small businesses. Our own company, run on our systems.")])
h(K, "W4 Description: Flexfolio", 90, "LIVE + fact", [("Rec.", "A portfolio platform for product managers. Our own company, run on our systems.")])
h(K, "W4 Meta", 10, "Brief", [("Rows 1, 3, 4", "View →"), ("Row 2", "Private")])

I = "04 · Insights (hidden until 3+ articles are live)"
h(I, "IN1 Label", 24, "Brief", [("Keep", "04 · Insights")])
h(I, "IN2 H2 line 1 (grey)", 30, "Brief", [("Keep", "We test on our own first.")])
h(I, "IN2 H2 line 2 (ink)", 30, "Brief", [("Keep", "Then Dan writes it up.")])
h(I, "IN3 Lead", 120, "Brief", [("Keep", "Notes on building with AI: what works, what doesn't and what it actually costs to run.")])
h(I, "IN5 Link", 18, "Brief", [("Keep", "All insights →")])

C = "05 · Start (dark)"
h(C, "C1 Label", 24, "Brief", [("Keep", "05 · Start")])
h(C, "C2 H2 line 1 (grey)", 36, "NEW", [("Rec.", "Got a job that keeps slipping?"), ("Alt", "Know which job costs you most?")])
h(C, "C3 H2 line 2 (ink)", 36, "LIVE", [("Keep", "Tell Dan what has to happen.")])
h(C, "C4 Buttons", 18, "Approved / brief slot", [("Primary", "Book a call"), ("Secondary", "Email Dan")])
h(C, "C5 Reassurance", 90, "NEW", [
    ("Rec. (no price, as brief)", "We take on a small handful of clients at a time. No contract, cancel any month."),
    ("Alt", "See the numbers first. Then A$3,500 a month, AI running costs and GST in. No contract."),
])

# ===================== SERVICES =====================
s = lambda *a: slot(SERV, *a)
P = "Page head"
s(P, "S1 Label", 24, "Brief", [("Keep", "Services & Pricing")])
s(P, "S2 H1 line 1 (grey)", 26, "NEW", [("Rec.", "Three kinds of work."), ("Alt", "One retainer.")])
s(P, "S2 H1 line 2 (ink)", 26, "NEW", [("Rec.", "One monthly retainer."), ("Alt", "All of it in one fee.")])
s(P, "S3 Lead", 170, "NEW", [
    ("Rec.", "Software, automations and marketing automations in one retainer: A$3,500 a month, with AI running costs and GST included. It starts with a free discovery session."),
])
D = "01 · What we build"
s(D, "O1 title", 24, "NEW", [("Rec.", "Software development")])
s(D, "O1 body", 100, "NEW", [("Rec.", "Software built around how your team works, from a company portal to an internal app.")])
s(D, "O2 title", 24, "NEW", [("Rec.", "Automations")])
s(D, "O2 body", 100, "NEW", [("Rec.", "Admin, quotes, follow-ups and onboarding, built one at a time and managed by us.")])
s(D, "O3 title", 24, "NEW", [("Rec.", "Marketing automations")])
s(D, "O3 body", 100, "NEW", [("Rec.", "SEO, social posting and email that keep going out every week, written for people first.")])
s(D, "O1 to O3 meta", 20, "NEW", [("All three", "In the retainer")])
s(D, "O4 line (replaces the website line)", 90, "NEW", [("Rec.", "We build our own products too. ReviewBuddy and Flexfolio run on the same systems.")])
F = "02 · The offer"
s(F, "SO1 Offer block", 999, "Same as home", [("Note", "Use OF2 to OF10 from homepage.md")])
s(F, "SO1 Included / not included line", 170, "NEW", [
    ("Rec.", "AI running costs are included, up to a fair-use limit. Other software you already pay for, like your CRM, stays on your accounts. [DECISION: fair-use limit]"),
])
s(F, "SO2 Before-you-commit line (end of offer, new slot)", 200, "Approved draft", [
    ("Rec.", "Before you commit, you see what each automation could save, when it'll be running and when it should pay back. The most you can spend finding out after that is one month, and you keep what we built."),
])
s(F, "SO1 Supporting line", 140, "NEW", [
    ("Rec.", "That's about A$1,670 a month back for ad spend, for your people, or for running a leaner business with less to worry about."),
])
HWs = "03 · How it works (dark)"
s(HWs, "SH1 Lead", 170, "NEW", [
    ("Rec.", "You don't have to start with the portal. Most businesses see value sooner from a couple of working automations, so that's where the build starts."),
])
s(HWs, "SH2 Steps", 999, "Same as home", [("Note", "Use HW4 and HW5 from homepage.md")])
FP = "04 · Fine print"
s(FP, "S4 H2", 24, "Designer draft", [("Keep", "In plain English.")])
s(FP, "SF1 Fine print 1 to 4", 999, "Same as home", [("Note", "Use OF11 from homepage.md")])
s(FP, "SF1 Fine print 5 title", 24, "OPTION", [("Option", "Tax")])
s(FP, "SF1 Fine print 5 body", 120, "OPTION", [("Option", "Generally a deductible business expense - check with your accountant.")])
Q = "05 · Questions"
s(Q, "S4 H2", 24, "Designer draft", [("Keep", "Before you book.")])
FAQ = [
 ("Live", "What happens in the discovery session?",
  "We look at where your team's time and money go, and map out the automations worth building first. It's free. [DECISION: length and format, e.g. 60 minutes on a video call]"),
 ("Live", "How do I know it'll be worth it?",
  "Before you decide, we work out what each automation could save your team and the growth it could bring, and map out how long each takes to get running and start paying back. They're estimates with the working shown, not promises."),
 ("Live", "Are the savings guaranteed?",
  "No. They're estimates, and we'll walk you through how we got to each one. What we do promise is the one-month test: if an automation isn't working, we switch it off."),
 ("Live", "Does the retainer cover custom software?",
  "Yes. Software development, automations and marketing automations all sit inside the one retainer. Nothing is quoted separately."),
 ("Live", "What will the AI running costs come to?",
  "They're in the fee, up to a fair-use limit we agree before we start. If an automation would run past it, we tell you first and you decide. [DECISION: fair-use limit]"),
 ("Live", "Do we have to build the portal first?",
  "No. We usually start with a couple of automations and build the portal once you can see the value. It's usually a month of work, at the same fee."),
 ("Live", "What happens if we cancel?",
  "Cancel any month. We hand everything over, move the AI accounts into your name and tell you what they cost to run. [DECISION: handover terms]"),
 ("Spare", "Do I need to know anything about AI?",
  "No. You know your business, and that's the part we need. We look after the models, the setup and the running costs, and explain it in plain English."),
 ("Hold until Dan answers", "What counts as one automation?",
  "[DECISION] Suggested: one workflow that does one job, like publishing a weekly blog post or chasing unpaid invoices."),
 ("Hold until Dan answers", "How fast do you build each automation?",
  "[DECISION: typical turnaround]"),
]
for n, (status, q, a) in enumerate(FAQ, 1):
    s(Q, f"SQ{n} Question ({status})", 60, "NEW", [(status, q)])
    s(Q, f"SQ{n} Answer ({status})", 240, "NEW", [(status, a)])
s("06 · Start (dark)", "Start band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

# ===================== CONTACT + INSIGHTS =====================
PAGES = []
c = lambda *a: slot(PAGES, *a)
CT = "Contact /contact"
c(CT, "Mono label", 12, "08", [("Keep", "Contact")])
c(CT, "H1 line 1 (grey)", 32, "NEW", [("Rec.", "The first step is free."), ("Alt", "Got a job that keeps slipping?")])
c(CT, "H1 line 2 (ink)", 32, "NEW", [("Rec.", "Tell Dan what's eating the week."), ("Alt", "Tell Dan what has to happen.")])
c(CT, "Lead", 140, "NEW", [
    ("Rec.", "Book a call to talk it through, or send a note below. Dan reads these and replies by email."),
    ("Alt", "Tell us what takes up your team's time. We'll come back with a time for a free discovery session."),
])
c(CT, "Form note (configured)", 260, "LIVE", [("Keep", "Dan reads these and replies by email.")])
c(CT, "Field label: name", 32, "LIVE", [("Keep", "Name")])
c(CT, "Field label: email", 32, "LIVE", [("Keep", "Email")])
c(CT, "Field label: business", 32, "NEW", [("Rec.", "Business name, if you have one"), ("Keep LIVE", "Organisation, if you have one")])
c(CT, "Field label: team size (new, optional)", 32, "NEW", [("Rec.", "How many people work there?")])
c(CT, "Team size options", 32, "NEW", [("1", "Just me"), ("2", "2 to 4"), ("3", "5 to 10"), ("4", "11 to 25"), ("5", "More than 25")])
c(CT, "Field label: intent", 32, "NEW", [("Rec.", "What do you need help with?")])
c(CT, "Intent options", 32, "NEW", [
    ("1", "Admin, quotes or follow-ups"),
    ("2", "Marketing: SEO, social or email"),
    ("3", "Software or a company portal"),
    ("4", "Getting our tools to do more"),
    ("5", "Not sure yet"),
    ("6", "ReviewBuddy or Flexfolio"),
    ("7", "Something else"),
])
c(CT, "Field label: message", 32, "NEW", [("Rec.", "What's taking your team's time?"), ("Keep LIVE", "Message")])
c(CT, "Required marker", 12, "Brief", [("Keep", "(required)")])
c(CT, "Error messages", 60, "NEW", [
    ("Name", "Error: enter your name."),
    ("Email", "Error: enter a full email address."),
    ("Intent", "Error: pick what you need help with."),
    ("Message", "Error: add a line or two about the job."),
])
c(CT, "Submit / pending", 10, "LIVE", [("Keep", "Send"), ("Keep", "Sending…")])
c(CT, "Result heading: success", 12, "LIVE", [("Keep", "Sent")])
c(CT, "Success message (proposed limit)", 120, "NEW", [
    ("Rec.", "Thanks. It's with Dan, and he'll reply by email. If it's easier, book a call in the meantime."),
])
c(CT, "Result heading: failure", 12, "LIVE", [("Keep", "Not sent")])
c(CT, "Failure message (proposed limit)", 120, "NEW", [
    ("Rec.", "Something went wrong on our end. Email Dan at dan@roadmaplabs.com.au and it'll get to him."),
])
c(CT, "Aside labels", 16, "Brief", [("1", "Email"), ("2", "Book a call"), ("3", "Based in")])
c(CT, "Aside link (proposed limit)", 28, "08", [("Keep", "Free discovery session →")])

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

def render(store):
    out, bad, cur = [], [], None
    for section, sid, limit, src, opts in store:
        if section != cur:
            out += [f"\n### {section}\n", "| Slot | Limit | Source | Option | Copy | Chars | OK |", "|---|---|---|---|---|---|---|"]
            cur = section
        for label, copy in opts:
            n = len(re.sub(r'\s*\[DECISION[^\]]*\]', '', copy)); lim = "-" if limit == 999 else f"≤ {limit}"
            ok = "-" if limit == 999 else ("✓" if n <= limit else "OVER")
            if limit != 999 and n > limit and "over limit" not in label.lower():
                bad.append((sid, label, copy, n, limit))
            out.append(f"| {sid} | {lim} | {src} | {label} | {copy.replace('|','\\|')} | {'-' if limit==999 else n} | {ok} |")
    return out, bad

which = sys.argv[1] if len(sys.argv) > 1 else "home"
out, bad = render({"home": HOME, "services": SERV, "pages": PAGES}[which])
# HW2 pair total check is the whole string, fine. Extra: hero lines <=32 already per slot.
if bad:
    sys.stderr.write("OVER LIMIT:\n" + "\n".join(map(str, bad)) + "\n"); sys.exit(1)
print("\n".join(out))
