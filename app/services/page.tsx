import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { PlanBlock } from "@/components/plan-block";
import { Rich } from "@/components/rich";
import { SectionHeader } from "@/components/section-header";
import { Steps } from "@/components/steps";
import { howItWorks, offer, servicesPage } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd, serviceOfferJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { visibleCopy } from "@/lib/text";
import { FinePrint } from "@/components/plan-block";

export const metadata = pageMetadata({
  title: seo.services.title,
  description: seo.services.description,
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <article className="section">
      <JsonLd
        data={[
          serviceOfferJsonLd(),
          faqJsonLd(),
          breadcrumbJsonLd(crumbs),
        ]}
      />
      <div className="rl-container">
        <Breadcrumbs items={crumbs} />
        <PageHeader
          label={servicesPage.label}
          line1={servicesPage.line1}
          line2={servicesPage.line2}
          lead={<Rich text={servicesPage.lead} />}
        />
        <section aria-labelledby="build-heading">
          <SectionHeader
            id="build-heading"
            index="01"
            label={servicesPage.buildLabel}
            title={servicesPage.buildTitle}
          />
          <div className="kind-grid four">
            {servicesPage.kinds.filter((kind) => visibleCopy(kind.body)).map((kind) => (
              <article key={kind.title} className="kind">
                <h3>{kind.href ? <Link href={kind.href}>{kind.title}</Link> : kind.title}</h3>
                <p>
                  <Rich text={kind.body} />
                </p>
                <p className="rl-mono">{servicesPage.meta}</p>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 24 }}>
            {servicesPage.ownProducts}
          </p>
        </section>
      </div>

      <section className="section" aria-labelledby="plan-heading">
        <div className="rl-container">
          <SectionHeader id="plan-heading" index="02" label={servicesPage.offerLabel} title={offer.line2} second={offer.line1} lead={offer.lead} />
          <PlanBlock services />
          <p className="lead" style={{ marginTop: 24 }}>
            <Rich text={offer.beforeYouCommit} />
          </p>
        </div>
      </section>

      <ComparisonTable href="#how-it-works" />

      <section className="section rl-dark" id="how-it-works" aria-labelledby="services-how">
        <div className="rl-container">
          <SectionHeader
            id="services-how"
            index="03"
            label={servicesPage.howLabel}
            second={howItWorks.line1}
            title={howItWorks.line2}
            lead={howItWorks.servicesLead}
          />
          <Steps />
        </div>
      </section>

      <section className="section">
        <div className="rl-container">
          <SectionHeader index="04" label={servicesPage.fineLabel} title={servicesPage.fineTitle} />
          <FinePrint items={[...offer.fine, offer.tax]} />
        </div>
      </section>

      <section className="section" aria-labelledby="questions-heading">
        <div className="rl-container">
          <SectionHeader id="questions-heading" index="05" label={servicesPage.questionsLabel} title={servicesPage.questionsTitle} />
          <FaqList />
        </div>
      </section>

      <CtaBand index="06" />
    </article>
  );
}
