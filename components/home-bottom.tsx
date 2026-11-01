/* Device stages and proof crops are sized by the spec CSS, which targets img directly. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { feeRows, feeTerms, homeBrands, homeWork, runLoop, runRows } from "@/lib/home-bottom";
import "@/app/home-bottom.css";

export function HomeBottom() {
  return (
    <div className="nb">
      <section id="work">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="idx">03 · Work</p>
              <h2>What we&apos;ve built lately</h2>
              <p className="lead">Two of our own products, and a website we built for Compass.</p>
            </div>
          </div>
          <div className="wk-grid">
            {homeWork.map((card) => (
              <article className="wk" key={card.href}>
                <Link className="wk-a" href={card.href}>
                  <div className="wk-f dv">
                    <div className="mb">
                      <div className="mb-l">
                        <div className="mb-s">
                          <img
                            src={card.desktop.src}
                            alt={card.desktop.alt}
                            width={card.desktop.width}
                            height={card.desktop.height}
                          />
                        </div>
                      </div>
                      <div className="mb-b" />
                    </div>
                    <div className="ip">
                      <div className="ip-s">
                        <img
                          src={card.phone.src}
                          alt={card.phone.alt}
                          width={card.phone.width}
                          height={card.phone.height}
                        />
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

      <section id="run">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="idx">What we run</p>
              <h2>The same setup runs our own products</h2>
              <p className="rn-line">
                Before we build anything for you, it&apos;s already doing the work on ReviewBuddy, Flexfolio and this
                site.
              </p>
            </div>
          </div>
          <div
            className="lp"
            role="img"
            aria-label="Idea, ticket, agent, preview, QA, Dan's approval, live, then back to the next idea"
          >
            <ol>
              {runLoop.map((step) => (
                <li key={step.label} className={"on" in step && step.on ? "on" : undefined}>
                  {step.label}
                  {"tool" in step ? <span>{step.tool}</span> : null}
                </li>
              ))}
            </ol>
          </div>
          <div className="rn-shots">
            <figure>
              <div className="fr">
                <img
                  src="/home-bottom/ci-job-crop.jpg"
                  alt="GitHub Actions CI job for this site: lint, unit tests, build and Playwright end-to-end tests, all passed"
                />
              </div>
              <figcaption>QA · GitHub Actions</figcaption>
            </figure>
            <figure>
              <div className="fr">
                <img
                  src="/home-bottom/preview-2880x1800.jpg"
                  alt="Vercel preview of the Roadmap Labs site, ready for review"
                />
              </div>
              <figcaption>Preview · Vercel</figcaption>
            </figure>
          </div>
          <div className="rn-cols">
            {runRows.map((row) => (
              <div key={row.name}>
                <h3>{row.name}</h3>
                <p>{row.line}</p>
              </div>
            ))}
          </div>
          <div className="br">
            <p className="idx">Brands we&apos;ve built</p>
            <ul>
              {homeBrands.map((brand) => (
                <li key={brand.name}>
                  <span className="mk">
                    {"logo" in brand && brand.logo ? (
                      <img
                        className={"wordmark" in brand && brand.wordmark ? "sq" : undefined}
                        src={brand.logo}
                        alt={"wordmark" in brand && brand.wordmark ? "" : brand.name}
                      />
                    ) : null}
                    {"wordmark" in brand && brand.wordmark ? brand.name : null}
                    {"logo" in brand ? null : brand.name}
                  </span>
                  <p>{brand.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="offer">
        <div className="wrap">
          <div className="offer-grid">
            <div className="plan">
              <p className="idx">04 · The fee</p>
              <h2>One fee a month, and that&apos;s it</h2>
              <p className="lead">We take one job off you at a time, and keep each one running.</p>
              <p className="price">A$3,500</p>
              <p className="per">a month</p>
              <p className="terms">{feeTerms}</p>
              <p className="note">Each automation gets a month&apos;s test. If it doesn&apos;t work, we switch it off.</p>
              <Link className="btn" href="/contact">
                Send enquiry
              </Link>
            </div>
            <div className="cmp" role="table" aria-label="Doing it yourself compared with Roadmap Labs">
              <div className="h l" role="columnheader">
                What it is
              </div>
              <div className="h y" role="columnheader">
                Doing it yourself
              </div>
              <div className="h u" role="columnheader">
                With us
              </div>
              <div className="mh">
                <span>Doing it yourself</span>
                <span>With us</span>
              </div>
              {feeRows.map((row, index) => {
                const last = index === feeRows.length - 1 ? " last" : "";

                return (
                  <div className="rw" role="row" style={{ display: "contents" }} key={row.label}>
                    <div className={`l${last}`} role="rowheader">
                      {row.label}
                    </div>
                    <div className={`y${last}`} role="cell">
                      {row.yourself}
                    </div>
                    <div className={`u${last}`} role="cell">
                      {row.us}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="dan">
        <div className="wrap">
          <div className="fd">
            <div className="ph">
              <img src="/home-bottom/dan-kovac.jpg" alt="Dan Kovac, founder of Roadmap Labs" />
            </div>
            <div className="tx">
              <p className="idx">05 · Who we are</p>
              <h2>We do it for ourselves too</h2>
              <p className="body">
                Roadmap Labs is Dan Kovac&apos;s studio in Melbourne, after ten years in digital marketing. We built
                ReviewBuddy and Flexfolio ourselves, and we run their growth on our own automations. It&apos;s the same
                work we do for you.
              </p>
              <div className="sig">
                <b>Dan Kovac</b>
                <span className="idx">Founder, Melbourne</span>
                <Link className="tlink" href="/about">
                  About us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="start" id="start">
        <div className="wrap">
          <p className="idx">06 · Start</p>
          <h2>Tell us what&apos;s eating your week</h2>
          <div className="row">
            <p className="lead">We&apos;ll tell you straight if AI can take it off you.</p>
            <Link className="btn" href="/contact">
              Send enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
