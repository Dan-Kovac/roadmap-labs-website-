import { EnquiryLink } from "@/components/enquiry-link";
import { HomeBottom } from "@/components/home-bottom";
import { JsonLd } from "@/components/json-ld";
import { PutToWork } from "@/components/put-to-work";
import { Rich } from "@/components/rich";
import { SectionHeader } from "@/components/section-header";
import { chrome, properly, selectedHero } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { professionalServiceJsonLd, websiteJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { visibleCopy } from "@/lib/text";

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
            <a className="rl-btn-text" href="#run">
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
            {properly.blocks.filter((block) => visibleCopy(block.body)).map((block) => (
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
      <HomeBottom />
    </>
  );
}
