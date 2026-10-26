# Contact page copy: `/contact`

Draft 4, 26 October 2026 (AEDT). Limits are from COPY-BRIEF (Contact); "proposed" limits are mine where the brief has none. Counts checked by `_tools/slots.py pages` (every slot passes). Draft 3 is archived at `_tools/old/contact_draft3_2026-10-25.md`.

## Reading view (recommended)

> **Contact**
> *(grey)* The first step is free.
> *(ink)* Tell Dan where AI should help.
>
> Book a call to talk it through, or send a note below. Dan reads these and replies by email.
>
> Name (required)
> Email (required)
> Business name, if you have one
> How many people work there? · Just me / 2 to 4 / 5 to 10 / 11 to 25 / More than 25
> What do you need help with? (required)
>   Getting AI working properly · Connecting our tools and data · Using AI safely with client data · Admin, quotes or follow-ups · Marketing: SEO, social or email · Not sure yet · ReviewBuddy or Flexfolio · Something else
> Where should AI be helping? (required)
> [Send]
>
> **Sent.** Thanks. It's with Dan, and he'll reply by email. If it's easier, book a call in the meantime.
> **Not sent.** Something went wrong on our end. Email Dan at dan@roadmaplabs.com.au and it'll get to him.
>
> Aside: Email · dan@roadmaplabs.com.au | Book a call · Free first call → | Based in · Melbourne

**What changed from draft 3:** the ink line and the message label move from admin ("what's eating the week") to the AI angle in the canvas. The first three intent options match the reasons owners give for not using AI properly: no setup, data not connected, unsure about safety. "Not sure yet" covers "I don't know what to do". The admin and marketing options stay because those are the jobs people come in with.
**"Using AI safely with client data"** is an intent option, not a claim, so it can stay even while the safety paragraph is open.
**The unconfigured form note** (LIVE "not connected to an inbox yet" text) is unchanged.

## Slot tables
### Contact /contact

| Slot | Limit | Source | Option | Copy | Chars | OK |
|---|---|---|---|---|---|---|
| Mono label | ≤ 12 | 08 | Keep | Contact | 7 | ✓ |
| H1 line 1 (grey) | ≤ 32 | Keep | Rec. | The first step is free. | 23 | ✓ |
| H1 line 2 (ink) | ≤ 32 | NEW | Rec. | Tell Dan where AI should help. | 30 | ✓ |
| H1 line 2 (ink) | ≤ 32 | NEW | Alt | Tell Dan what has to happen. | 28 | ✓ |
| Lead | ≤ 140 | Keep | Rec. | Book a call to talk it through, or send a note below. Dan reads these and replies by email. | 91 | ✓ |
| Form note (configured) | ≤ 260 | LIVE | Keep | Dan reads these and replies by email. | 37 | ✓ |
| Field label: name | ≤ 32 | LIVE | Keep | Name | 4 | ✓ |
| Field label: email | ≤ 32 | LIVE | Keep | Email | 5 | ✓ |
| Field label: business | ≤ 32 | Keep | Rec. | Business name, if you have one | 30 | ✓ |
| Field label: team size (optional) | ≤ 32 | Keep | Rec. | How many people work there? | 27 | ✓ |
| Team size options | ≤ 32 | Keep | 1 | Just me | 7 | ✓ |
| Team size options | ≤ 32 | Keep | 2 | 2 to 4 | 6 | ✓ |
| Team size options | ≤ 32 | Keep | 3 | 5 to 10 | 7 | ✓ |
| Team size options | ≤ 32 | Keep | 4 | 11 to 25 | 8 | ✓ |
| Team size options | ≤ 32 | Keep | 5 | More than 25 | 12 | ✓ |
| Field label: intent | ≤ 32 | Keep | Rec. | What do you need help with? | 27 | ✓ |
| Intent options | ≤ 32 | NEW | 1 | Getting AI working properly | 27 | ✓ |
| Intent options | ≤ 32 | NEW | 2 | Connecting our tools and data | 29 | ✓ |
| Intent options | ≤ 32 | NEW | 3 | Using AI safely with client data | 32 | ✓ |
| Intent options | ≤ 32 | NEW | 4 | Admin, quotes or follow-ups | 27 | ✓ |
| Intent options | ≤ 32 | NEW | 5 | Marketing: SEO, social or email | 31 | ✓ |
| Intent options | ≤ 32 | NEW | 6 | Not sure yet | 12 | ✓ |
| Intent options | ≤ 32 | NEW | 7 | ReviewBuddy or Flexfolio | 24 | ✓ |
| Intent options | ≤ 32 | NEW | 8 | Something else | 14 | ✓ |
| Field label: message | ≤ 32 | NEW | Rec. | Where should AI be helping? | 27 | ✓ |
| Field label: message | ≤ 32 | NEW | Keep LIVE | Message | 7 | ✓ |
| Required marker | ≤ 12 | Brief | Keep | (required) | 10 | ✓ |
| Error messages | ≤ 60 | Keep | Name | Error: enter your name. | 23 | ✓ |
| Error messages | ≤ 60 | Keep | Email | Error: enter a full email address. | 34 | ✓ |
| Error messages | ≤ 60 | Keep | Intent | Error: pick what you need help with. | 36 | ✓ |
| Error messages | ≤ 60 | Keep | Message | Error: add a line or two about the business. | 44 | ✓ |
| Submit / pending | ≤ 10 | LIVE | Keep | Send | 4 | ✓ |
| Submit / pending | ≤ 10 | LIVE | Keep | Sending… | 8 | ✓ |
| Result heading: success | ≤ 12 | LIVE | Keep | Sent | 4 | ✓ |
| Success message (proposed limit) | ≤ 120 | Keep | Rec. | Thanks. It's with Dan, and he'll reply by email. If it's easier, book a call in the meantime. | 93 | ✓ |
| Result heading: failure | ≤ 12 | LIVE | Keep | Not sent | 8 | ✓ |
| Failure message (proposed limit) | ≤ 120 | Keep | Rec. | Something went wrong on our end. Email Dan at dan@roadmaplabs.com.au and it'll get to him. | 90 | ✓ |
| Aside labels | ≤ 16 | Brief | 1 | Email | 5 | ✓ |
| Aside labels | ≤ 16 | Brief | 2 | Book a call | 11 | ✓ |
| Aside labels | ≤ 16 | Brief | 3 | Based in | 8 | ✓ |
| Aside link (proposed limit) | ≤ 28 | NEW | Rec. | Free first call → | 17 | ✓ |
