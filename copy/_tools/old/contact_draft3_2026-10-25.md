# Contact page copy: `/contact`

Draft 3, 25 October 2026 (AEDT). Limits are from COPY-BRIEF (Contact). Limits marked "proposed" are my suggestions where the brief has none. Counts were checked by `_tools/slots.py pages`.

## Reading view (recommended)

> **Contact**
> *(grey)* The first step is free.
> *(ink)* Tell Dan what's eating the week.
>
> Book a call to talk it through, or send a note below. Dan reads these and replies by email.
>
> Name (required)
> Email (required)
> Business name, if you have one
> How many people work there? · Just me / 2 to 4 / 5 to 10 / 11 to 25 / More than 25
> What do you need help with? (required)
>   Admin, quotes or follow-ups · Marketing: SEO, social or email · Software or a company portal · Getting our tools to do more · Not sure yet · ReviewBuddy or Flexfolio · Something else
> What's taking your team's time? (required)
> [Send]
>
> **Sent.** Thanks. It's with Dan, and he'll reply by email. If it's easier, book a call in the meantime.
> **Not sent.** Something went wrong on our end. Email Dan at dan@roadmaplabs.com.au and it'll get to him.
>
> Aside: Email · dan@roadmaplabs.com.au | Book a call · Free discovery session → | Based in · Melbourne

**Why the headline changed:** the draft reused C2/C3 ("Got a job that keeps slipping?"), which repeats the Start band word for word straight before the form. That pair is kept as the alt. The new pair leads with the free first step, which answers the price fear.
**Intent options** follow the buyer's jobs, not our three categories, so the owner picks the problem they have. "Not sure yet" catches the "I don't know where to start with AI" visitor. "ReviewBuddy or Flexfolio" replaces "An own-product question", which read like internal language.
**Team size** is a new, optional field for qualifying leads before the free session. Drop it if Dan doesn't want to qualify on size.
**The unconfigured form note** (the LIVE "not connected to an inbox yet" text) is unchanged. Keep both versions, per the brief.

## Slot tables
### Contact /contact

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| Mono label | ≤ 12 | 08 | Keep | Contact | 7 | ✓ |
| H1 line 1 (grey) | ≤ 32 | NEW | Rec. | The first step is free. | 23 | ✓ |
| H1 line 1 (grey) | ≤ 32 | NEW | Alt | Got a job that keeps slipping? | 30 | ✓ |
| H1 line 2 (ink) | ≤ 32 | NEW | Rec. | Tell Dan what's eating the week. | 32 | ✓ |
| H1 line 2 (ink) | ≤ 32 | NEW | Alt | Tell Dan what has to happen. | 28 | ✓ |
| Lead | ≤ 140 | NEW | Rec. | Book a call to talk it through, or send a note below. Dan reads these and replies by email. | 91 | ✓ |
| Lead | ≤ 140 | NEW | Alt | Tell us what takes up your team's time. We'll come back with a time for a free discovery session. | 97 | ✓ |
| Form note (configured) | ≤ 260 | LIVE | Keep | Dan reads these and replies by email. | 37 | ✓ |
| Field label: name | ≤ 32 | LIVE | Keep | Name | 4 | ✓ |
| Field label: email | ≤ 32 | LIVE | Keep | Email | 5 | ✓ |
| Field label: business | ≤ 32 | NEW | Rec. | Business name, if you have one | 30 | ✓ |
| Field label: business | ≤ 32 | NEW | Keep LIVE | Organisation, if you have one | 29 | ✓ |
| Field label: team size (new, optional) | ≤ 32 | NEW | Rec. | How many people work there? | 27 | ✓ |
| Team size options | ≤ 32 | NEW | 1 | Just me | 7 | ✓ |
| Team size options | ≤ 32 | NEW | 2 | 2 to 4 | 6 | ✓ |
| Team size options | ≤ 32 | NEW | 3 | 5 to 10 | 7 | ✓ |
| Team size options | ≤ 32 | NEW | 4 | 11 to 25 | 8 | ✓ |
| Team size options | ≤ 32 | NEW | 5 | More than 25 | 12 | ✓ |
| Field label: intent | ≤ 32 | NEW | Rec. | What do you need help with? | 27 | ✓ |
| Intent options | ≤ 32 | NEW | 1 | Admin, quotes or follow-ups | 27 | ✓ |
| Intent options | ≤ 32 | NEW | 2 | Marketing: SEO, social or email | 31 | ✓ |
| Intent options | ≤ 32 | NEW | 3 | Software or a company portal | 28 | ✓ |
| Intent options | ≤ 32 | NEW | 4 | Getting our tools to do more | 28 | ✓ |
| Intent options | ≤ 32 | NEW | 5 | Not sure yet | 12 | ✓ |
| Intent options | ≤ 32 | NEW | 6 | ReviewBuddy or Flexfolio | 24 | ✓ |
| Intent options | ≤ 32 | NEW | 7 | Something else | 14 | ✓ |
| Field label: message | ≤ 32 | NEW | Rec. | What's taking your team's time? | 31 | ✓ |
| Field label: message | ≤ 32 | NEW | Keep LIVE | Message | 7 | ✓ |
| Required marker | ≤ 12 | Brief | Keep | (required) | 10 | ✓ |
| Error messages | ≤ 60 | NEW | Name | Error: enter your name. | 23 | ✓ |
| Error messages | ≤ 60 | NEW | Email | Error: enter a full email address. | 34 | ✓ |
| Error messages | ≤ 60 | NEW | Intent | Error: pick what you need help with. | 36 | ✓ |
| Error messages | ≤ 60 | NEW | Message | Error: add a line or two about the job. | 39 | ✓ |
| Submit / pending | ≤ 10 | LIVE | Keep | Send | 4 | ✓ |
| Submit / pending | ≤ 10 | LIVE | Keep | Sending… | 8 | ✓ |
| Result heading: success | ≤ 12 | LIVE | Keep | Sent | 4 | ✓ |
| Success message (proposed limit) | ≤ 120 | NEW | Rec. | Thanks. It's with Dan, and he'll reply by email. If it's easier, book a call in the meantime. | 93 | ✓ |
| Result heading: failure | ≤ 12 | LIVE | Keep | Not sent | 8 | ✓ |
| Failure message (proposed limit) | ≤ 120 | NEW | Rec. | Something went wrong on our end. Email Dan at dan@roadmaplabs.com.au and it'll get to him. | 90 | ✓ |
| Aside labels | ≤ 16 | Brief | 1 | Email | 5 | ✓ |
| Aside labels | ≤ 16 | Brief | 2 | Book a call | 11 | ✓ |
| Aside labels | ≤ 16 | Brief | 3 | Based in | 8 | ✓ |
| Aside link (proposed limit) | ≤ 28 | 08 | Keep | Free discovery session → | 24 | ✓ |

