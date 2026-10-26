import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryLink } from "@/components/enquiry-link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Rich } from "@/components/rich";
import { chrome, marketingPage } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { offers, partnerPlan } from "@/lib/offers";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

const pages = {
  automations: {
    seo: seo.automations,
    offer: offers[0],
  },
  marketing: {
    seo: seo.marketing,
    offer: offers[1],
  },
  software: {
    seo: seo.software,
    offer: offers[2],
  },
} as const;

type ServiceSlug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as ServiceSlug];

  if (!page) {
    return {};
  }

  return pageMetadata({
    title: page.seo.title,
    description: page.seo.description,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as ServiceSlug];

  if (!page) {
    notFound();
  }

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: page.offer.title, path: `/services/${slug}` },
  ];

  if (slug === "marketing") {
    return (
      <article className="section">
        <JsonLd data={[serviceJsonLd({ name: page.seo.title, description: page.seo.description, path: "/services/marketing" }), breadcrumbJsonLd(crumbs)]} />
        <div className="rl-container">
          <Breadcrumbs items={crumbs} />
          <PageHeader
            label={marketingPage.label}
            line1={marketingPage.line1}
            line2={marketingPage.line2}
            lead={<Rich text={marketingPage.lead} />}
          />
          <div className="inline-actions">
            <EnquiryLink className="rl-btn rl-btn-primary" location="marketing">
              {chrome.enquire}
            </EnquiryLink>
            <Link className="rl-btn-text" href="/services">
              {marketingPage.planLink}
            </Link>
          </div>
          {marketingPage.sections.map((section) => (
            <section key={section.id} className="service-block" style={{ marginTop: 40 }}>
              <p className="rl-mono">{section.label}</p>
              <h2>{section.title}</h2>
              <p className="lead">
                <Rich text={section.body} />
              </p>
            </section>
          ))}
          <section className="service-block" style={{ marginTop: 40 }}>
            <p className="rl-mono">{marketingPage.proof.label}</p>
            <h2>{marketingPage.proof.title}</h2>
            <p className="lead">
              <Rich text={marketingPage.proof.body} />
            </p>
            <p>
              <Link href={marketingPage.proof.href}>{marketingPage.proof.link}</Link>
            </p>
          </section>
          <section className="service-block" style={{ marginTop: 40 }}>
            <p className="rl-mono">{marketingPage.fee.label}</p>
            <h2>{marketingPage.fee.title}</h2>
            <p className="price-note">{marketingPage.fee.priceLine}</p>
            <p className="lead">{marketingPage.fee.lead}</p>
            <table className="compare">
              <tbody>
                {marketingPage.fee.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.figure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="footnote">
              <Rich text={marketingPage.fee.footnote} />
            </p>
            <p>
              <Link className="rl-btn-text" href="/services">
                {marketingPage.fee.link}
              </Link>
            </p>
          </section>
          <section style={{ marginTop: 40 }}>
            <h2>{marketingPage.questionsTitle}</h2>
            <div className="faq">
              {[...marketingPage.heldQuestions, ...marketingPage.questions].map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p>
                      <Rich text={item.a} />
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
        <section className="section rl-dark cta-band">
          <div className="rl-container">
            <p className="rl-mono">09 · {marketingPage.close.label}</p>
            <h2>
              <span className="voice-2">{marketingPage.close.line1}</span>
              <span className="h-line">{marketingPage.close.line2}</span>
            </h2>
            <div className="cta-actions">
              <EnquiryLink className="rl-btn rl-btn-primary" location="marketing-close" href="/contact">
                {chrome.enquire}
              </EnquiryLink>
            </div>
            <p className="cta-note">{marketingPage.close.reassurance}</p>
          </div>
        </section>
      </article>
    );
  }

  return (
    <article className="section">
      <JsonLd
        data={[
          serviceJsonLd({ name: page.seo.title, description: page.seo.description, path: `/services/${slug}` }),
          breadcrumbJsonLd(crumbs),
        ]}
      />
      <div className="rl-container">
        <Breadcrumbs items={crumbs} />
        <PageHeader label={partnerPlan.name} line1={page.offer.title} lead={page.offer.home} />
        <div className="prose">
          {page.offer.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{partnerPlan.priceLine}</p>
          <ul>
            {partnerPlan.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {page.offer.links.map((link) => (
            <p key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </p>
          ))}
          <p>
            <Link href="/services">See the partner plan</Link>
          </p>
          {slug === "automations" ? (
            <>
              <p>
                <Link href="/insights/small-business-automation">Small business automation: what to automate first</Link>
              </p>
              <p>
                <Link href="/insights/ai-for-small-business">AI for small business: where to actually start</Link>
              </p>
            </>
          ) : null}
          {slug === "software" ? (
            <p>
              <Link href="/projects/review-buddy">ReviewBuddy</Link>
            </p>
          ) : null}
        </div>
        <div className="inline-actions">
          <EnquiryLink className="rl-btn rl-btn-primary" location={slug}>
            {chrome.enquire}
          </EnquiryLink>
        </div>
      </div>
      <CtaBand index="02" />
    </article>
  );
}
