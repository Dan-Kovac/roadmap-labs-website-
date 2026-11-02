/* Laptop screens are positioned by the hi-fi CSS, which targets img directly. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BOOKING_URL, bookingCta } from "@/lib/booking";
import "@/app/home-hifi.css";

const cta = `${bookingCta} →`;

const includes = [
  "Your data sorted and kept in order as the business changes",
  "Your Claude Enterprise or Grok Bot Teams account set up and looked after",
  "One job automated at a time, built, tested and kept running",
  "A score for the quality of every automation's work",
  "A report showing hours saved or revenue grown for each job",
];

const compareRows = [
  ["Your data", "Sorted so AI can read and find it", "Used as it is, wherever it sits"],
  ["Your tools", "Connected to your AI account, one by one", "Each tool used on its own"],
  ["The account", "In your business's name, and you own it", "Logins set up person by person"],
  ["Picking the job", "Your weakest stage, from your own numbers", "Whichever job someone has time for"],
  ["Measuring it", "Hours saved or revenue grown, every job", "Mostly a feel for whether it helps"],
  ["Quality", "Every automation's work tested and scored", "Checked when someone spots a mistake"],
  ["Who looks after it", "We do, every month", "Whoever's keenest, around their usual work"],
] as const;

const work = [
  {
    href: "/projects/compass-buyers-agency",
    src: "/hifi/compass-home-2880x1800.jpg",
    phone: "/home-bottom/compass-m-1170x2532.jpg",
    alt: "Compass Buyers Agency website",
    meta: "A website we built for Compass Buyers Agency",
    title: "Compass Buyers Agency",
    line: "We built the site and set up its SEO and enquiry form.",
    caption: "The Compass Buyers Agency website, on a laptop and a phone.",
  },
  {
    href: "/projects/review-buddy",
    src: "/hifi/reviewbuddy-home-2880x1800.jpg",
    phone: "/home-bottom/reviewbuddy-m-1170x2532.jpg",
    alt: "ReviewBuddy",
    meta: "Our product, for Australian tradies",
    title: "ReviewBuddy",
    line: "Gets tradies more Google reviews and shows them on their website.",
    caption: "ReviewBuddy, on a laptop and a phone.",
  },
  {
    href: "/projects/flexfolio",
    src: "/hifi/flexfolio-home-2880x1800.jpg",
    phone: "/home-bottom/flexfolio-m-1170x2532.jpg",
    alt: "Flexfolio",
    meta: "Our product, for product managers",
    title: "Flexfolio",
    line: "A portfolio that shows the thinking behind your work.",
    caption: "Flexfolio, on a laptop and a phone.",
  },
] as const;

const marks = [
  {
    src: "/brand/compass-wordmark.svg",
    alt: "Compass",
    className: "logo logo-compass",
    caption: "A website we built for Compass Buyers Agency",
  },
  {
    src: "/brand/flexfolio-wordmark.svg",
    alt: "Flexfolio",
    className: "logo logo-flexfolio",
    caption: "Flexfolio, our product",
  },
  {
    src: "/brand/reviewbuddy-wordmark.svg",
    alt: "ReviewBuddy",
    className: "logo logo-reviewbuddy",
    caption: "ReviewBuddy, our product",
  },
] as const;

const buildFlow = [
  ["01", "Ticket", "The change starts as a ticket"],
  ["02", "Agent", "An AI engineer builds it"],
  ["03", "Tests", "Lint, unit and end-to-end checks run"],
  ["04", "Preview", "Desktop and phone, ready to review"],
  ["05", "Sign-off", "Dan reviews it, then it ships"],
] as const;

const mailFlow = [
  ["01", "Email arrives", "A client writes in"],
  ["02", "Harry drafts", "Our AI assistant writes the reply"],
  ["03", "Dan checks", "He reviews it before it sends"],
  ["04", "Update goes out", "The client gets the reply"],
] as const;

export function HomeHifi() {
  return (
    <div className="hf">
      <header className="hero">
        <div className="w">
          <div className="meta">AI automation for owner-led businesses · Melbourne</div>
          <h1 style={{ marginTop: 22 }}>
            Make AI do real work <br />
            in your business
          </h1>
          <p className="lead">
            We get your data ready, set AI up in an account you own, then hand it your repetitive admin one job at a
            time. Every job has a fixed price and a number it has to beat.
          </p>
          <div className="ctas">
            <Link className="btn" href={BOOKING_URL}>
              {cta}
            </Link>
            <p className="micro">
              You leave the call with an AI plan for your business. It&apos;s yours whether you run it yourself or hire
              us.
            </p>
          </div>
        </div>
        <div className="stage">
          <div className="stage-row">
            <div className="laptop side l">
              <div className="scr">
                <img src="/hifi/compass-home-2880x1800.jpg" alt="" />
              </div>
            </div>
            <div className="laptop main">
              <div className="scr">
                <img src="/hifi/flexfolio-home-2880x1800.jpg" alt="Flexfolio" />
              </div>
            </div>
            <div className="laptop side r">
              <div className="scr">
                <img src="/hifi/reviewbuddy-home-2880x1800.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="marks">
            {marks.map((mark) => (
              <figure key={mark.alt}>
                <img className={mark.className} src={mark.src} alt={mark.alt} />
                <figcaption>{mark.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </header>

      <section id="how-it-works">
        <div className="w">
          <div className="head">
            <div>
              <div className="meta">How it works</div>
              <h2 style={{ marginTop: 16 }}>
                Three steps,
                <br />
                in this order
              </h2>
            </div>
          </div>
          <figure className="build">
            <ol>
              {buildFlow.map((step) => (
                <li key={step[0]}>
                  <span>{step[0]}</span>
                  <strong>{step[1]}</strong>
                  <em>{step[2]}</em>
                </li>
              ))}
            </ol>
            <figcaption>How a change gets built, from ticket to sign-off.</figcaption>
          </figure>
          <div className="steps">
            <div className="card">
              <div className="num">01</div>
              <h3>Get your data ready</h3>
              <p>
                AI can only work with what it can read. We go through your tools and files and sort them so AI can read
                them, find what it needs and keep client details private. Most businesses skip this part. It&apos;s
                where we start.
              </p>
            </div>
            <div className="card">
              <div className="num">02</div>
              <h3>Set it up in your own account</h3>
              <p>
                We set you up on Claude Enterprise or Grok Bot Teams, whichever suits how your team works. The account
                is in your business&apos;s name. You own it, your team logs in to it, and it stays yours if we ever part
                ways.
              </p>
            </div>
            <div className="card">
              <div className="num">03</div>
              <h3>Automate one job at a time</h3>
              <p>
                We find the repetitive work that&apos;s slowing the business down most, agree its price and the number
                it has to hit, then build it. Your team gets that time back for better work. Once it&apos;s running and
                scoring well, we move to the next one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ink">
        <div className="w race">
          <div>
            <div className="meta">How we pick the job</div>
            <h2 style={{ marginTop: 16 }}>We start where the money gets stuck</h2>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Every team has admin that eats into the day. We look for the repetitive work AI can take off their plate,
              starting where it helps the business grow most. On the call we look at four stages and ask for your
              numbers at each one.
            </p>
            <p className="note">
              The weakest stage is where we build first. If you don&apos;t track a stage yet, measuring it becomes part
              of the first job.
            </p>
          </div>
          <div className="funnel">
            <div className="stg">
              <div>
                <b>Getting seen</b>
                <small>How many people come across your business each week?</small>
              </div>
              <div className="fb" style={{ width: "100%" }}>
                01
              </div>
            </div>
            <div className="stg">
              <div>
                <b>Getting in touch</b>
                <small>How many of them call, book or fill in a form?</small>
              </div>
              <div className="fb weak" style={{ width: "46%" }}>
                02 · Build here first
              </div>
            </div>
            <div className="stg">
              <div>
                <b>Saying yes</b>
                <small>How many of those become paying customers?</small>
              </div>
              <div className="fb" style={{ width: "62%" }}>
                03
              </div>
            </div>
            <div className="stg">
              <div>
                <b>Coming back</b>
                <small>How much more do your customers buy over time?</small>
              </div>
              <div className="fb" style={{ width: "52%" }}>
                04
              </div>
            </div>
            <div className="meta" style={{ color: "#8B919C", marginTop: 6, textAlign: "right" }}>
              Diagram only. Bar lengths are an example, not data.
            </div>
          </div>
        </div>
      </section>

      <section id="compare">
        <div className="w">
          <div className="head">
            <div>
              <div className="meta">Doing it yourself or with us</div>
              <h2 style={{ marginTop: 16 }}>Doing it yourself, or with us</h2>
            </div>
            <p>Plenty of teams set up AI themselves. Here&apos;s how the two compare.</p>
          </div>
          <div className="cmp">
            <div className="ccol labels">
              <div className="ch">&nbsp;</div>
              {compareRows.map((row) => (
                <div className="cl" key={row[0]}>
                  {row[0]}
                </div>
              ))}
            </div>
            <div className="ccol rl">
              <div className="ch">
                <img className="logo" src="/hifi/roadmap-labs-white.svg" alt="Roadmap Labs" />
              </div>
              {compareRows.map((row) => (
                <div className="cc" key={row[0]}>
                  <span className="tick">✓</span>
                  <div>
                    <span className="mlab">{row[0]}</span>
                    {row[1]}
                  </div>
                </div>
              ))}
            </div>
            <div className="ccol yt">
              <div className="ch">Your team does it</div>
              {compareRows.map((row) => (
                <div className="cc" key={row[0]}>
                  <span className="dash">–</span>
                  <div>
                    <span className="mlab">{row[0]}</span>
                    {row[2]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fee" style={{ paddingTop: 0 }}>
        <div className="w">
          <div className="head">
            <div>
              <div className="meta">The fee</div>
              <h2 style={{ marginTop: 16 }}>One fee, and you can stop any month</h2>
            </div>
          </div>
          <div className="fee">
            <div className="pcard">
              <div className="meta" style={{ color: "#A3A9B4" }}>
                Roadmap Labs
              </div>
              <div className="price">
                A$3,500<span className="per"> a month, no GST</span>
              </div>
              <div className="terms">No contract. That&apos;s about A$808 a week.</div>
              <ul>
                {includes.map((item) => (
                  <li key={item}>
                    <span className="tick">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="btn inv" href={BOOKING_URL} style={{ alignSelf: "flex-start" }}>
                {cta}
              </Link>
            </div>
            <div className="gcard">
              <div>
                <div className="meta">Billed to you direct</div>
                <h3 style={{ fontSize: 26, marginTop: 12, letterSpacing: "-0.02em" }}>Your AI and token fees</h3>
                <p style={{ marginTop: 12 }}>
                  Your AI and token fees go on your own account, billed to you direct by the provider. We don&apos;t
                  mark them up, so you always see what the AI costs.
                </p>
              </div>
              <div className="bill">
                <div className="r">
                  <span>Roadmap Labs</span>
                  <span>A$3,500 a month</span>
                </div>
                <div className="r">
                  <span>Your AI provider</span>
                  <span>Billed to your account</span>
                </div>
                <div className="r">
                  <span>Markup on AI fees</span>
                  <span>None</span>
                </div>
              </div>
              <div>
                <div className="meta">If you stop</div>
                <p style={{ marginTop: 8 }}>
                  Cancel any month. The account, the data and everything we&apos;ve built in it stay with you.
                </p>
              </div>
            </div>
          </div>
          <div className="three">
            <div className="card">
              <div className="ic">01</div>
              <h3>How a job gets picked</h3>
              <p>
                We look at your numbers across the four stages and pick the job that fixes the weakest one. Before we
                build, you see what it will cost and the number it has to beat. You say yes or no to every job.
              </p>
            </div>
            <div className="card">
              <div className="ic">02</div>
              <h3>How we track the value</h3>
              <p>
                Every job is measured in hours saved or revenue grown, against the number we agreed. We run the
                automation over and over and score its work, so one good result isn&apos;t mistaken for a good system.
              </p>
            </div>
            <div className="card">
              <div className="ic">03</div>
              <h3>If it doesn&apos;t pay its way</h3>
              <p>If a job doesn&apos;t pay its way within a month, we switch it off and move on.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="w call">
          <div>
            <div className="meta">Free · 30 minutes</div>
            <h2 style={{ marginTop: 16 }}>30 minutes, and you leave with a plan</h2>
            <p>
              We spend the call learning how your business runs and where it&apos;s stuck. We go through your numbers at
              each stage, the tools you use now and anything you&apos;ve already tried with AI.
            </p>
            <p>
              After the call, we send you a written AI plan: the job to start with and what it should save or earn.
              It&apos;s yours to keep. Run it yourself, or have us build it with you.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link className="btn" href={BOOKING_URL}>
                {cta}
              </Link>
              <p className="micro">No cost and no obligation.</p>
            </div>
          </div>
          <div className="doc">
            <div className="paper">
              <div className="meta">Your AI plan</div>
              <h4>A written AI plan</h4>
              <div className="sec">
                <b style={{ fontSize: 15 }}>The job to start with</b>
                <div className="bar k" style={{ width: "70%" }} />
                <div className="bar" style={{ width: "55%" }} />
              </div>
              <div className="sec">
                <b style={{ fontSize: 15 }}>What it should save or earn</b>
                <div className="bar k" style={{ width: "40%" }} />
                <div className="bar" style={{ width: "62%" }} />
              </div>
              <div className="sec">
                <b style={{ fontSize: 15 }}>Run it yourself, or have us build it</b>
                <div className="bar" style={{ width: "66%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)", borderTop: "1px solid var(--g1)" }}>
        <div className="w">
          <div className="head">
            <div>
              <div className="meta">Work</div>
              <h2 style={{ marginTop: 16 }}>What we&apos;ve built lately</h2>
            </div>
            <p>Two of our own products, and a website we built for Compass Buyers Agency.</p>
          </div>
          <div className="shots">
            {work.map((card) => (
              <figure key={card.href}>
                <div className="devices">
                  <div className="mac">
                    <div className="bezel">
                      <div className="screen">
                        <img src={card.src} alt={card.alt} width={2880} height={1800} />
                      </div>
                    </div>
                    <div className="base" />
                  </div>
                  <div className="phone">
                    <div className="screen">
                      <img src={card.phone} alt="" width={1170} height={2532} />
                    </div>
                  </div>
                </div>
                <figcaption>{card.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="work">
            {work.map((card) => (
              <div className="wcard" key={card.href}>
                <div className="meta">{card.meta}</div>
                <h3>{card.title}</h3>
                <p>{card.line}</p>
                <Link href={card.href}>Read the case study →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ink">
        <div className="w own">
          <div>
            <div className="meta">How we run our own products</div>
            <h2 style={{ marginTop: 16 }}>We use this on ourselves every day</h2>
            <p style={{ marginTop: 20, fontSize: 18 }}>
              ReviewBuddy and Flexfolio each have their own AI designer, engineer and writer.
            </p>
            <figure className="mail">
              <ol>
                {mailFlow.map((step) => (
                  <li key={step[0]} className={step[0] === "03" ? "on" : undefined}>
                    <span>{step[0]}</span>
                    <strong>{step[1]}</strong>
                    <em>{step[2]}</em>
                  </li>
                ))}
              </ol>
              <figcaption>Harry handling a client email.</figcaption>
            </figure>
          </div>
          <div className="list">
            <div>
              <span className="n">01</span>
              <div>
                <b>Ticket to preview.</b>
                <p>Every change starts as a ticket. An AI engineer builds it and a preview goes up.</p>
              </div>
            </div>
            <div>
              <span className="n">02</span>
              <div>
                <b>Checked, then signed off.</b>
                <p>Desktop and mobile checks run, then Dan reviews the preview.</p>
              </div>
            </div>
            <div>
              <span className="n">03</span>
              <div>
                <b>Client emails.</b>
                <p>Harry, our AI assistant, keeps clients posted.</p>
              </div>
            </div>
            <div>
              <span className="n">04</span>
              <div>
                <b>New enquiries.</b>
                <p>A sales assistant answers people who get in touch.</p>
              </div>
            </div>
            <div>
              <span className="n">05</span>
              <div>
                <b>Articles.</b>
                <p>Dan talks through the week&apos;s work, and it becomes our next article.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w founder">
          <img src="/hifi/dan-kovac.jpg" alt="Dan Kovac" />
          <div>
            <div className="meta">Founder</div>
            <h2 style={{ marginTop: 16 }}>Run by Dan Kovac</h2>
            <p>
              Dan spent ten years in digital marketing before starting Roadmap Labs in Melbourne. He built ReviewBuddy
              and Flexfolio himself, on the same setup clients get.
            </p>
            <p className="deal">You&apos;ll deal with Dan from the first call.</p>
          </div>
        </div>
      </section>

      <section className="final" id="book-placeholder">
        <div className="w">
          <h2>Find the first job to take off your team&apos;s plate</h2>
          <p className="lead">
            Book the call and we&apos;ll find the repetitive work worth handing to AI first, then put a plan for it in
            writing.
          </p>
          <Link className="btn" href={BOOKING_URL}>
            {cta}
          </Link>
          <p className="micro">The call is free, and the plan&apos;s yours to keep.</p>
        </div>
      </section>
    </div>
  );
}
