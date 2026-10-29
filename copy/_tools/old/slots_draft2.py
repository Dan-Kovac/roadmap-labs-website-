# Slot copy + limit checks for homepage and /services. Draft 2, 25 Oct 2026.
# Run: python3 slots.py home   -> homepage slot tables
#      python3 slots.py services -> /services slot tables
# Exits 1 if any non-flagged option is over its limit.
import sys
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
    ("Rec.", "We build software, automations and marketing automations that take the admin off your team. One monthly retainer, no contract."),
    ("Keep LIVE", "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them."),
])
h(G, "Nav labels (4)", 12, "Dan to decide", [("Rec.", "Work"), ("Rec.", "Services"), ("Rec.", "Insights"), ("Rec.", "About")])
h(G, "Header button (primary only, as rendered)", 18, "Approved", [("Approved", "Book a call")])
h(G, "Footer descriptor", 40, "LIVE", [("Keep LIVE", "Software & automations studio")])
h(G, "Footer location", 30, "LIVE", [("Keep LIVE", "Melbourne, Australia")])
h(G, "Footer bottom line", 40, "NEW", [("Left", "© 2026 Roadmap Labs"), ("Right, link", "dan@roadmaplabs.com.au")])

H = "Hero (no price)"
h(H, "H1 Eyebrow (mono)", 40, "NEW", [("Rec.", "Melbourne · Software and automations"), ("Alt", "Melbourne · Automations studio")])
# Ranked hero options: each is (grey, ink, lead)
HERO = [
 ("1 (rec.)", "Every quote typed out by hand.", "Every follow-up sent on time.",
  "We build software, automations and marketing automations for your quotes, follow-ups, onboarding and admin. It starts with a free discovery session."),
 ("2", "Admin is eating your week.", "Let a system do the follow-ups.",
  "Software, automations and marketing automations that take admin off your team and keep growth work going. It starts with a free discovery session."),
 ("3", "The work that keeps slipping.", "Running every week, on its own.",
  "Admin, onboarding, SEO and email get done when a system does them. We build the software, automations and marketing automations. Discovery is free."),
 ("4", "Busywork costs you every week.", "A system can do the repeat jobs.",
  "We build software, automations and marketing automations for the admin, quotes and emails your team does by hand. Start with a free discovery session."),
]
for rank, g, i, lead in HERO:
    h(H, f"Hero option {rank}: H2 line 1 (grey)", 32, "NEW", [(f"Option {rank}", g)])
    h(H, f"Hero option {rank}: H3 line 2 (ink)", 32, "NEW", [(f"Option {rank}", i)])
    h(H, f"Hero option {rank}: H4 Lead", 150, "NEW", [(f"Option {rank}", lead)])
h(H, "H5 Primary button", 18, "Approved", [("Approved", "Book a call")])
h(H, "H6 Secondary text link", 16, "NEW", [("Rec.", "How it works →"), ("Alt", "See the work →")])
h(H, "H7 Microcopy (discovery, no price)", 60, "NEW", [
    ("Rec.", "First step: a free session to map what's worth automating"),
    ("Alt A", "Free discovery session · No contract · Cancel any month"),
    ("Alt B", "Start with a free discovery session"),
])

O = "01 · The offer"
h(O, "OF1 Label", 24, "Brief", [("Keep", "01 · The offer")])
h(O, "OF2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "One monthly retainer."), ("Alt", "One monthly fee.")])
h(O, "OF3 H2 line 2 (ink)", 26, "NEW", [("Rec.", "Software and automations."), ("Alt", "Unlimited automations.")])
h(O, "OF4 Lead", 170, "NEW", [
    ("Rec.", "It covers software, automations and marketing automations. We build one thing at a time, as many as you need, and look after every one."),
])
h(O, "OF5 Price", 24, "Confirmed", [("Keep", "A$3,000/mo incl. GST")])
h(O, "OF6 Price note", 90, "Confirmed", [("Keep", "About A$690 a week. Same fee at every stage. No contract, cancel any month.")])
h(O, "OF7 Included items ×6", 80, "NEW", [
    ("1", "Software built around how your team works, including a company portal"),
    ("2", "Automations for admin, quotes, follow-ups and onboarding"),
    ("3", "Marketing automations for SEO, social posting and email"),
    ("4", "Testing, management and security for everything we build"),
    ("5", "Each automation on the best AI model for the job, at the best cost"),
    ("6", "A full handover if you leave"),
])
h(O, "OF8 Comparison label", 40, "Brief", [("Keep", "What it replaces")])
h(O, "OF9 Comparison rows", 40, "Confirmed", [
    ("Row 1", "SEO campaign, well run"), ("Row 1 fig", "A$2,000/mo"),
    ("Row 2", "Agency fees: Meta, Google or social ads"), ("Row 2 fig", "A$1,000/mo"),
    ("Row 3", "Virtual assistant at A$500+ a week"), ("Row 3 fig", "A$2,170+/mo"),
    ("Total", "Together"), ("Total fig", "About A$5,170/mo"),
    ("Us", "Roadmap Labs"), ("Us fig", "A$3,000/mo incl. GST"),
])
h(O, "OF10 Footnote (directly under table)", 180, "NEW", [
    ("Rec.", "Typical costs from Dan's agency years. The ad row is the agency's management fee, not ad spend. AI model and tool running costs are extra."),
])
h(O, "OF11 Fine print ×4 (title ≤ 24 / body ≤ 120)", 120, "Confirmed", [
    ("Title 1", "Running costs"),
    ("Body 1", "Model and tool costs depend on what you run, so they sit on your own accounts. We pick the models and keep costs down."),
    ("Title 2", "One-month test"),
    ("Body 2", "Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one."),
    ("Title 3", "No contract"),
    ("Body 3", "Cancel any month. We hand everything over and it's yours to run."),
    ("Title 4", "A handful of clients"),
    ("Body 4", "We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly."),
])
h(O, "OF12 Text link", 18, "Approved", [("Keep", "Book a call →")])

W = "02 · How it works (dark)"
h(W, "HW1 Label", 24, "NEW", [("Rec.", "02 · How it works")])
h(W, "HW2 H2 pair (≤ 36 total)", 36, "NEW", [
    ("Rec.", "See the numbers. Then we build."),
    ("Alt", "We show you first. Then we build."),
])
h(W, "HW3 Lead", 170, "NEW", [
    ("Rec.", "It starts with a free discovery session and a proposal with our best estimates. If the numbers stack up, we start the retainer. One flat fee, no contract."),
])
h(W, "HW4 Step title 1", 30, "NEW", [("Rec.", "Free discovery session.")])
h(W, "HW5 Step body 1", 110, "NEW", [
    ("Rec.", "We look at where your team's time and money go, then scope and map out the automations worth building."),
])
h(W, "HW4 Step title 2", 30, "NEW", [("Rec.", "A proposal with the numbers.")])
h(W, "HW5 Step body 2", 110, "NEW", [
    ("Rec.", "What's possible, what we estimate it could save and the extra revenue it could add, before you commit."),
])
h(W, "HW4 Step title 3", 30, "NEW", [("Rec.", "The retainer build.")])
h(W, "HW5 Step body 3", 110, "NEW", [
    ("Rec.", "One automation at a time, each with a one-month test. Your portal when you're ready. Same fee, no contract."),
])
h(W, "HW6 Button", 18, "Approved", [("Keep", "Book a call")])

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
    ("Rec.", "A free discovery session first. Then A$3,000/mo incl. GST, with no contract."),
    ("Alt", "We take on a small handful of clients at a time. No contract, cancel any month."),
])

# ===================== SERVICES =====================
s = lambda *a: slot(SERV, *a)
P = "Page head"
s(P, "S1 Label", 24, "Brief", [("Keep", "Services & Pricing")])
s(P, "S2 H1 line 1 (grey)", 26, "NEW", [("Rec.", "Three kinds of work."), ("Alt", "One retainer.")])
s(P, "S2 H1 line 2 (ink)", 26, "NEW", [("Rec.", "One monthly retainer."), ("Alt", "All of it in one fee.")])
s(P, "S3 Lead", 160, "NEW", [
    ("Rec.", "Software, automations and marketing automations, all in one retainer of A$3,000 a month incl. GST. No contract. It starts with a free discovery session."),
])
D = "01 · What we build"
s(D, "O1 title", 24, "NEW", [("Rec.", "Software development")])
s(D, "O1 body", 100, "NEW", [("Rec.", "Software built around how your team works, from a company portal to an internal app.")])
s(D, "O2 title", 24, "NEW", [("Rec.", "Automations")])
s(D, "O2 body", 100, "NEW", [("Rec.", "Admin, quotes, follow-ups and onboarding, built one at a time and managed by us.")])
s(D, "O3 title", 24, "NEW", [("Rec.", "Marketing automations")])
s(D, "O3 body", 100, "NEW", [("Rec.", "SEO, social posting and email marketing that keep going out, week after week.")])
s(D, "O1 to O3 meta", 20, "NEW", [("All three", "In the retainer")])
s(D, "O4 line (replaces the website line)", 90, "NEW", [("Rec.", "We build our own products too. ReviewBuddy and Flexfolio run on the same systems.")])
F = "02 · The offer"
s(F, "SO1 Offer block", 999, "Same as home", [("Note", "Use OF2 to OF10 from homepage.md")])
s(F, "SO1 Not included line", 170, "NEW", [
    ("Rec.", "Not included: AI model and tool running costs. They vary by automation and sit on your own accounts. We choose the models and keep those costs down."),
])
s(F, "SO1 Supporting line", 140, "NEW", [
    ("Rec.", "That's about A$2,170 a month back for ad spend, for your people, or for running a leaner business with less to worry about."),
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
 ("Live", "What's in the proposal?",
  "What we'd build and in what order, plus our estimate of what it could save you and the extra revenue it could bring in. You see it before you commit to anything."),
 ("Live", "Are the savings guaranteed?",
  "No. They're estimates, and we'll walk you through how we got to each one. What we do promise is the one-month test: if an automation isn't working, we switch it off."),
 ("Live", "Does the retainer cover custom software?",
  "Yes. Software development, automations and marketing automations all sit inside the one retainer. Nothing is quoted separately."),
 ("Live", "What will the AI running costs come to?",
  "It depends on what you run, so there's no single number. The costs sit on your own accounts, so you see every dollar, and we pick the models that do the job for the least."),
 ("Live", "Do we have to build the portal first?",
  "No. We usually start with a couple of automations and build the portal once you can see the value. It's usually a month of work, at the same fee."),
 ("Live", "What happens if we cancel?",
  "Cancel any month. We hand everything over and you run it from there."),
 ("Live", "Why only a handful of clients?",
  "We'd rather do a great job for a few businesses than an average job for a lot of them."),
 ("Hold until Dan answers", "What counts as one automation?",
  "[DECISION] Suggested: one workflow that does one job, like publishing a weekly blog post or chasing unpaid invoices."),
 ("Hold until Dan answers", "How fast do you build each automation?",
  "[DECISION: typical turnaround]"),
]
for n, (status, q, a) in enumerate(FAQ, 1):
    s(Q, f"SQ{n} Question ({status})", 60, "NEW", [(status, q)])
    s(Q, f"SQ{n} Answer ({status})", 240, "NEW", [(status, a)])
s("06 · Start (dark)", "Start band", 999, "Same as home", [("Note", "Use C1 to C5 from homepage.md")])

def render(store):
    out, bad, cur = [], [], None
    for section, sid, limit, src, opts in store:
        if section != cur:
            out += [f"\n### {section}\n", "| Slot | Limit | Source | Option | Copy | Chars | OK |", "|---|---|---|---|---|---|---|"]
            cur = section
        for label, copy in opts:
            n = len(copy); lim = "-" if limit == 999 else f"≤ {limit}"
            ok = "-" if limit == 999 else ("✓" if n <= limit else "OVER")
            if limit != 999 and n > limit and "over limit" not in label.lower():
                bad.append((sid, label, copy, n, limit))
            out.append(f"| {sid} | {lim} | {src} | {label} | {copy.replace('|','\\|')} | {'-' if limit==999 else n} | {ok} |")
    return out, bad

which = sys.argv[1] if len(sys.argv) > 1 else "home"
out, bad = render(HOME if which == "home" else SERV)
# HW2 pair total check is the whole string, fine. Extra: hero lines <=32 already per slot.
if bad:
    sys.stderr.write("OVER LIMIT:\n" + "\n".join(map(str, bad)) + "\n"); sys.exit(1)
print("\n".join(out))
