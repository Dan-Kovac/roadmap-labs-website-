import Link from "next/link";
import { EnquiryLink } from "@/components/enquiry-link";
import { ComparisonTable } from "@/components/comparison-table";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PlanBlock } from "@/components/plan-block";
import { PutToWork } from "@/components/put-to-work";
import { Rich } from "@/components/rich";
import { SectionHeader } from "@/components/section-header";
import { Steps } from "@/components/steps";
import { chrome, dan, homeInsights, howItWorks, offer, properly, selectedHero } from "@/lib/copy";
import { homeInsightsVisible } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { professionalServiceJsonLd, websiteJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { priceFigure, priceUnit } from "@/lib/text";

export const metadata = pageMetadata({
  title: seo.home.title,
  description: seo.home.description,
  path: "/",
});

export default function HomePage() {
  const hero = selectedHero();

  return (
    <>
      <JsonLd data={[professionalServiceJsonLd(), websiteJsonLd()]} />
      <section className="section hero">
        <div className="rl-container">
          <p className="rl-mono">{chrome.eyebrow}</p>
          <h1>
            <span className="voice-2">{hero.line1}</span>
            <span className="h-line">{hero.line2}</span>
          </h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero-actions">
            <EnquiryLink className="rl-btn rl-btn-primary" location="hero">
              {chrome.enquire}
            </EnquiryLink>
            <a className="rl-btn-text" href="#how-we-work">
              {chrome.howItWorks}
            </a>
          </div>
          <p className="microcopy">{hero.microcopy}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="properly-heading">
        <div className="rl-container">
          <SectionHeader
            id="properly-heading"
            index="01"
            label={properly.label}
            second={<Rich text={properly.line1} />}
            title={<Rich text={properly.line2} />}
            lead={<Rich text={properly.lead} />}
          />
          <div className="card-grid">
            {properly.blocks.map((block) => (
              <article key={block.title} className="card">
                <h3>{block.title}</h3>
                <p>
                  <Rich text={block.body} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PutToWork />

      <section className="section rl-dark" id="how-we-work" aria-labelledby="how-heading">
        <div className="rl-container">
          <SectionHeader
            id="how-heading"
            index="03"
            label={howItWorks.label}
            second={howItWorks.line1}
            title={howItWorks.line2}
            lead={howItWorks.lead}
          />
          <Steps />
          <div className="hero-actions">
            <EnquiryLink className="rl-btn rl-btn-primary" location="how-it-works">
              {chrome.enquire}
            </EnquiryLink>
            <p className="microcopy">{howItWorks.reassurance}</p>
          </div>
        </div>
      </section>

      <ComparisonTable index="04" href="/services" />

      <section className="section" id="offer" aria-labelledby="fee-heading">
        <div className="rl-container">
          <SectionHeader
            id="fee-heading"
            index="05"
            label={offer.label}
            second={offer.line1}
            title={offer.line2}
            lead={offer.lead}
          />
          <p className="sr-only">
            {priceFigure}
            {priceUnit}
          </p>
          <PlanBlock />
          <div className="hero-actions">
            <EnquiryLink className="rl-btn-text" location="offer">
              {offer.textLink}
            </EnquiryLink>
            <Link className="rl-btn-text" href="/services">
              {offer.planLink}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="dan" aria-labelledby="dan-heading">
        <div className="rl-container">
          <SectionHeader
            id="dan-heading"
            index="06"
            label={dan.label}
            title={dan.title}
            lead={dan.lead}
            action={
              <Link className="rl-btn-text" href="/projects">
                {dan.action}
              </Link>
            }
          />
          <div className="dan-layout">
            <p className="portrait copy-slot">{dan.portrait}</p>
            <p className="lead">
              <Rich text={dan.bio} />
            </p>
          </div>
          <div>
            {dan.rows.map((row) => (
              <article key={row.name} className="work-row">
                <div>
                  <h3>{row.name}</h3>
                  <p className="rl-mono">{row.tag}</p>
                </div>
                <p>{row.body}</p>
                <p>
                  <Link href={row.href}>{row.meta}</Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {homeInsightsVisible() ? (
        <section className="section" aria-labelledby="insights-heading">
          <div className="rl-container">
            <SectionHeader
              id="insights-heading"
              index=""
              label={homeInsights.label}
              second={<Rich text={homeInsights.line1} />}
              title={homeInsights.line2}
              lead={homeInsights.lead}
              action={
                <Link className="rl-btn-text" href="/insights">
                  {homeInsights.action}
                </Link>
              }
            />
          </div>
        </section>
      ) : null}

      <CtaBand index="07" form />
    </>
  );
}
