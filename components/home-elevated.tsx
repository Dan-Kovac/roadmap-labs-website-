/* Device frames size raw images. The spec CSS targets img directly. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BOOKING_URL, bookingCta } from "@/lib/booking";
import { aiFeesLine } from "@/lib/text";
import { homeWork } from "@/lib/home-bottom";
import "@/app/home-bottom.css";

const steps = [
  {
    number: "01",
    title: "Get your data ready",
    body: "AI is only as good as what it can read. We look at your tools and databases, then make sure your data is easy to read, easy to find and kept secure. Most businesses skip this. It's where we start.",
  },
  {
    number: "02",
    title: "Set it up properly",
    body: "We set you up with your own Claude Enterprise or Grok Bot Teams account, whichever suits your business. It's in your name and you own it. Your team can use it, check on it and keep it if we ever part ways. You pay your AI model and token fees direct, so there's no markup and you always see what it costs.",
  },
  {
    number: "03",
    title: "Automate one job at a time",
    body: "We pick the job that matters most and build it. Then we track it in hours saved or revenue grown, and score the agent's work every week.",
  },
] as const;

const stages = [
  { name: "Reach", question: "How many people see your business?" },
  { name: "Acquire", question: "How many of them get in touch?" },
  { name: "Convert", question: "How many become paying customers?" },
  { name: "Expand", question: "How much more do existing customers buy over time?" },
] as const;

const planPoints = [
  "Learn your business",
  "Your AI plan to keep",
  "Build it yourself or with us",
] as const;

export function HomeElevated() {
  return (
    <div className="nb home">
      <section className="ev-hero">
        <div className="wrap">
          <p className="idx">AI automation for owner-led businesses · Melbourne</p>
          <h1>Make AI do real work in your business</h1>
          <p className="lead">
            We get your data ready, set it up in your own account, then automate one job at a time. Each job is priced
            up front and measured in hours saved or revenue grown.
          </p>
          <div className="ev-actions">
            <Link className="book" href={BOOKING_URL}>
              {bookingCta}
            </Link>
            <a className="tlink" href="#how-it-works">
              How it works →
            </a>
          </div>
          <p className="under">Walk away with an AI plan for your business. Free, and yours to keep.</p>
          <ol className="ev-diagram" aria-label="Three steps: get your data ready, set it up properly, automate one job at a time">
            <li>
              <span>1</span>Get your data ready<small>Legible, findable, secure</small>
            </li>
            <li>
              <span>2</span>Set it up properly<small>Your own account, your own AI fees</small>
            </li>
            <li>
              <span>3</span>Automate one job at a time<small>Priced, measured, scored</small>
            </li>
          </ol>
        </div>
      </section>

      <section id="how-it-works">
        <div className="wrap">
          <h2>Three steps, in this order</h2>
          <div className="ev-steps">
            {steps.map((step) => (
              <article key={step.number}>
                <p className="idx">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pick">
        <div className="wrap">
          <h2>We start where the money&apos;s stuck</h2>
          <p className="lead">
            Most businesses don&apos;t need more back-office tools. They need more of the right people finding them, and
            more of those people saying yes. On our first call we go through four stages and ask for your numbers at
            each one.
          </p>
          <div className="ev-stages">
            {stages.map((stage) => (
              <article key={stage.name}>
                <h3>{stage.name}</h3>
                <p>{stage.question}</p>
              </article>
            ))}
          </div>
          <p className="ev-close">The weakest number is where we build first.</p>
        </div>
      </section>

      <section id="prove">
        <div className="wrap">
          <h2>Every automation earns its place</h2>
          <p className="lead">
            Each job gets a number to beat before we build it. We test the agent&apos;s output again and again and score
            it, so a good result isn&apos;t a fluke. If it doesn&apos;t pay its way within a month, we switch it off.
          </p>
        </div>
      </section>

      <section id="fee">
        <div className="wrap">
          <h2>One fee a month</h2>
          <div className="ev-price">
            <div className="ev-price-head">
              <p>Partner</p>
              <p className="ev-figure">
                A$3,500 <span>/ month</span>
              </p>
              <p className="ev-terms">No GST · No contract</p>
            </div>
            <ul>
              <li>Get your data ready</li>
              <li>Your own Claude Enterprise or Grok Bot Teams account</li>
              <li>One job at a time, measured as it runs</li>
            </ul>
            <p className="ev-note">{aiFeesLine}</p>
            <Link className="book" href={BOOKING_URL}>
              {bookingCta}
            </Link>
          </div>
        </div>
      </section>

      <section id="ourselves">
        <div className="wrap">
          <h2>We run it on ourselves first</h2>
          <p className="lead">ReviewBuddy and Flexfolio run on the same setup.</p>
          <div className="wk-grid">
            {homeWork.map((card) => (
              <article className="wk" key={card.href}>
                <Link className="wk-a" href={card.href}>
                  <div className="wk-f dv">
                    <div className="mb">
                      <div className="mb-l">
                        <div className="mb-s">
                          <img src={card.desktop.src} alt={card.desktop.alt} width={card.desktop.width} height={card.desktop.height} />
                        </div>
                      </div>
                      <div className="mb-b" />
                    </div>
                    <div className="ip">
                      <div className="ip-s">
                        <img src={card.phone.src} alt={card.phone.alt} width={card.phone.width} height={card.phone.height} />
                      </div>
                    </div>
                  </div>
                  <div className="wk-t">
                    <p className="wk-e">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p className="wk-l">{card.line}</p>
                    <span className="tlink">Read the case study →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="start">
        <div className="wrap">
          <h2>Tell us what&apos;s eating your week</h2>
          <p className="lead">We&apos;ll tell you straight if AI can take it off you.</p>
        </div>
      </section>

      <section className="plan-cta" id="book-placeholder">
        <div className="wrap ev-cta">
          <div>
            <p className="idx">Free · 30 minutes</p>
            <h2>Get a clear AI plan, free</h2>
            <p className="lead">
              Spend 30 minutes with us. We learn how your business runs and where it&apos;s stuck. Then we send back a
              clear AI plan and strategy. It&apos;s yours to keep.
            </p>
            <ul className="ev-ticks">
              {planPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="ev-ways">Run the plan yourself. Or we become your partner and build it with you.</p>
          </div>
          <div className="ev-cta-action">
            <Link className="book" href={BOOKING_URL}>
              {bookingCta}
            </Link>
            <p className="under">No cost. No obligation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
