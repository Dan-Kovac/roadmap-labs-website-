# Generates homepage.md slot tables with character counts (spaces included) and limit checks.
# Edit copy here, then run: python3 homepage_slots.py > ../homepage.md (header text is in the script).
import sys

S = []  # (section, slot, limit, kind, source, [(label, copy)])
def slot(section, slot_id, limit, source, options, kind="max"):
    S.append((section, slot_id, limit, kind, source, options))

# ---------- Global ----------
G = "Global"
slot(G, "Site title (`lockedTitle`)", 60, "LIVE → option", [
    ("LIVE, over limit", "Roadmap Labs - apps, websites and automations that fit real use"),
    ("Rec.", "Roadmap Labs - automations and software, one flat fee"),
    ("Alt", "Roadmap Labs - automations for SEO, social, email and admin"),
])
slot(G, "Meta description (`lockedDescription`)", 155, "LIVE → option", [
    ("Keep LIVE", "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them."),
    ("Rec.", "We build and manage automations for your SEO, social, email and admin. One flat fee of A$3,000 a month incl. GST. No contract."),
])
slot(G, "Nav labels (4)", 12, "Dan to decide", [
    ("Rec.", "Work"), ("Rec.", "How we work"), ("Rec.", "Insights"), ("Rec.", "About"),
])
slot(G, "Header buttons", 18, "Dan to decide", [
    ("Rec. secondary", "Email Dan"), ("Rec. primary", "Book a call"),
    ("Option", "Book an intro call"), ("Over limit, don't use", "Book a scoping call"),
])
slot(G, "Footer descriptor", 40, "LIVE", [("Keep LIVE", "Software & automations studio")])
slot(G, "Footer location", 30, "LIVE", [("Keep LIVE", "Melbourne, Australia")])
slot(G, "Footer bottom line", 40, "NEW", [("Rec. (left)", "© 2026 Roadmap Labs"), ("Rec. (right, link)", "dan@roadmaplabs.com.au")])

# ---------- Hero ----------
H = "Hero"
slot(H, "H1 Mono label", 40, "LIVE (part)", [
    ("Rec.", "Melbourne · Automations studio"),
    ("Alt", "Melbourne · Automations and software"),
    ("Render, over limit", "Melbourne · Software & automations studio"),
])
slot(H, "H2 Display line 1 (grey)", 42, "NEW (replaces LIVE)", [
    ("Rec.", "The work that keeps slipping."),
    ("Alt A", "SEO, social, email and admin."),
    ("Alt B (keep LIVE)", "Building software has never been easier."),
])
slot(H, "H3 Display line 2 (ink)", 52, "NEW (replaces LIVE)", [
    ("Rec.", "Automated for A$3,000 a month."),
    ("Alt A", "Done every week, for one flat fee."),
    ("Alt B (keep LIVE)", "Building the right software is still just as hard."),
])
slot(H, "H4 Lead", 150, "NEW", [
    ("Rec.", "We build automations for your SEO, social, email and admin, one at a time, and manage every one. No contract. Cancel any month and keep it all."),
    ("Alt (if hero keeps LIVE pair)", "We build and manage automations for the work that keeps slipping. One flat fee of A$3,000 a month incl. GST, and no contract."),
])
slot(H, "H5 Primary button", 18, "Dan to decide", [("Rec.", "Book a call"), ("Option", "Book an intro call")])
slot(H, "H6 Secondary button", 16, "NEW", [("Rec.", "How it works"), ("Alt", "See the work")])
slot(H, "H7 Reassurance microcopy (NEW slot, optional, under the buttons)", 60, "NEW", [
    ("Rec.", "A$3,000/mo incl. GST · About A$690 a week · No contract"),
])

# ---------- Offer ----------
O = "01 · The offer"
slot(O, "OF1 Section label", 24, "NEW", [("Rec.", "01 · The offer")])
slot(O, "OF2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "One monthly fee."), ("Alt", "One fee. No contract.")])
slot(O, "OF3 H2 line 2 (ink)", 26, "NEW", [("Rec.", "Unlimited automations."), ("Alt", "As many jobs as you need.")])
slot(O, "OF4 Lead", 170, "NEW", [
    ("Rec.", "We build your automations one at a time, as many as you need, and look after every one. The fee stays the same at every stage."),
])
slot(O, "OF5 Price", 24, "NEW", [("Rec.", "A$3,000/mo incl. GST")])
slot(O, "OF6 Price note", 90, "NEW", [
    ("Rec.", "About A$690 a week. No contract. Cancel any month and we hand everything over."),
])
slot(O, "OF7 Included list item ×6", 80, "NEW", [
    ("1", "Automations for SEO, social, email, admin and sales, built one at a time"),
    ("2", "Testing and management of every automation"),
    ("3", "Your data and automations kept secure"),
    ("4", "Each automation kept on the best AI model for the job, at the best cost"),
    ("5", "A company portal for your data and team, when you're ready"),
    ("6", "A full handover if you leave"),
])
slot(O, "OF8 Comparison label", 40, "NEW", [("Rec.", "What it replaces")])
slot(O, "OF9 Comparison rows (label / figure)", 40, "NEW", [
    ("Row 1", "SEO campaign, well run"), ("Row 1 fig", "A$2,000/mo"),
    ("Row 2", "Ad management"), ("Row 2 fig", "A$1,000/mo"),
    ("Row 3", "Virtual assistant at A$500+ a week"), ("Row 3 fig", "A$2,170+/mo"),
    ("Total", "Together"), ("Total fig", "About A$5,170/mo"),
    ("Us", "Roadmap Labs"), ("Us fig", "A$3,000/mo incl. GST"),
])
slot(O, "OF10 Comparison footnote", 180, "NEW", [
    ("Rec.", "Typical costs from Dan's agency years. AI model and tool running costs are extra: they vary by automation and sit on your own accounts."),
])
slot(O, "OF11 Fine print item ×4 (title / body)", 120, "NEW", [
    ("Title 1", "Running costs"),
    ("Body 1", "Model and tool costs depend on what you run, so they sit on your own accounts. We pick the models and keep costs down."),
    ("Title 2", "One-month test"),
    ("Body 2", "Every automation gets a month to earn its place. If it isn't working, we switch it off and build the next one."),
    ("Title 3", "No contract"),
    ("Body 3", "Cancel any month. We hand everything over and it's yours to run."),
    ("Title 4", "A handful of clients"),
    ("Body 4", "We only work with a few partner businesses at a time. That's on purpose, so each one gets done properly."),
])
slot(O, "OF12 Action (text link)", 18, "NEW", [("Rec.", "Book a call →")])

# ---------- How we work ----------
W = "02 · How we work (dark)"
slot(W, "HW1 Label", 24, "RENDER → new", [("Rec.", "02 · How we work")])
slot(W, "HW2 H2", 36, "RENDER → new", [
    ("Rec.", "Prove it first. Then build on it."),
    ("Alt", "Start small. Grow what works."),
])
slot(W, "HW3 Lead", 170, "RENDER → new", [
    ("Rec.", "We don't start by rebuilding your business. We start with a couple of automations that earn their keep, then build the system that ties it all together."),
])
slot(W, "HW4 Step title 1", 30, "RENDER → new", [("Rec.", "Prove it.")])
slot(W, "HW5 Step body 1", 110, "RENDER → new", [
    ("Rec.", "A couple of automations on the job that costs you most or never gets done. Each gets a month to prove itself."),
])
slot(W, "HW4 Step title 2", 30, "RENDER → new", [("Rec.", "Bring it together.")])
slot(W, "HW5 Step body 2", 110, "RENDER → new", [
    ("Rec.", "A company portal that puts your data, systems and team in one secure place. Usually a month of work, same fee."),
])
slot(W, "HW4 Step title 3", 30, "RENDER → new", [("Rec.", "Grow it.")])
slot(W, "HW5 Step body 3", 110, "RENDER → new", [
    ("Rec.", "We keep building, one automation at a time. With your data in one place, each new one has more to work with."),
])
slot(W, "HW6 Buttons", 18, "RENDER → new", [("Primary (dark)", "Book a call"), ("Drop", "See a live build")])
slot(W, "HW7 Optional line, only if Dan confirms reports", 110, "OPTION", [
    ("Option", "You get a plain-English report every fortnight on what's running and what it's doing."),
])

# ---------- Selected work ----------
K = "03 · Selected work"
slot(K, "W1 Section label", 24, "LIVE (renumbered)", [("Rec.", "03 · Selected work")])
slot(K, "W5 Section lead (NEW slot)", 120, "NEW", [
    ("Rec.", "Two of these are our own companies. Flexfolio and ReviewBuddy run on the same systems we build for clients."),
])
slot(K, "W2 Section action", 14, "RENDER", [("Keep", "All work →")])
slot(K, "W3 Work card titles", 28, "LIVE", [
    ("1", "Compass Buyers Agency"), ("2", "Compass OS"), ("3", "ReviewBuddy"), ("4", "Flexfolio"),
])
slot(K, "W4 One-liner: Compass Buyers Agency", 90, "LIVE + render", [
    ("Keep render", "Website, SEO and CRO, plus Compass OS, an internal platform built in Retool."),
])
slot(K, "W4 One-liner: Compass OS (list row, Private)", 90, "NEW", [
    ("Rec.", "An internal operating system for Compass Buyers Agency, being built in Retool"),
])
slot(K, "W4 One-liner: ReviewBuddy", 90, "LIVE", [
    ("Keep LIVE", "Review-growth software for Australian small businesses"),
    ("Alt", "Review-growth software for small businesses. Our own company, run on our systems."),
])
slot(K, "W4 One-liner: Flexfolio", 90, "LIVE", [
    ("Keep LIVE", "A portfolio platform for product managers"),
    ("Alt", "A portfolio platform for product managers. Our own company, run on our systems."),
])
slot(K, "W6 Result line per card (hidden until real)", 90, "TBC", [
    ("Placeholder", "[placeholder: real result from Dan]"),
])

# ---------- Insights teaser ----------
I = "04 · Insights teaser"
slot(I, "IN1 Section label", 24, "NEW", [("Rec.", "04 · Insights")])
slot(I, "IN2 H2 line 1 (grey)", 26, "NEW", [("Rec.", "We test on our own first."), ("Alt", "Notes on the work.")])
slot(I, "IN3 H2 line 2 (ink)", 26, "NEW", [("Rec.", "Then Dan writes it up."), ("Alt", "What works, what doesn't.")])
slot(I, "IN4 Lead", 150, "NEW", [
    ("Rec.", "Notes on building with AI: what works, what doesn't and what it actually costs to run."),
])
slot(I, "IN5 Action", 14, "NEW", [("Rec.", "All insights →")])

# ---------- CTA ----------
C = "05 · Start (CtaBand, dark)"
slot(C, "C1 CTA label", 16, "NEW", [("Rec.", "05 · Start")])
slot(C, "C2 H2 line 1 (grey)", 36, "NEW", [
    ("Rec.", "Got a job that keeps slipping?"),
    ("Alt", "Know which job costs you most?"),
])
slot(C, "C3 H2 line 2 (ink)", 36, "LIVE", [("Keep LIVE", "Tell Dan what has to happen.")])
slot(C, "C4 Buttons", 18, "LIVE", [("Primary", "Book a call"), ("Secondary", "Email Dan")])
slot(C, "C5 Reassurance line (NEW slot, optional)", 90, "NEW", [
    ("Rec.", "A$3,000/mo incl. GST. No contract. We take on a small handful of clients at a time."),
])

def esc(s): return s.replace("|", "\\|")
out = []
bad = []
cur = None
for section, sid, limit, kind, src, opts in S:
    if section != cur:
        out.append(f"\n## {section}\n")
        out.append("| Slot | Limit | Source | Option | Copy | Chars | OK |")
        out.append("|---|---|---|---|---|---|---|")
        cur = section
    for label, copy in opts:
        n = len(copy)
        ok = "✓" if n <= limit else "OVER"
        if n > limit and "over limit" not in label.lower() and "don't use" not in label.lower():
            bad.append((sid, label, copy, n, limit))
        out.append(f"| {esc(sid)} | ≤ {limit} | {src} | {label} | {esc(copy)} | {n} | {ok} |")
if bad:
    sys.stderr.write("OVER LIMIT:\n" + "\n".join(map(str, bad)) + "\n")
    sys.exit(1)
print("\n".join(out))
