import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Rich } from "@/components/rich";
import { aboutCopy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, personJsonLd, profileJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: seo.about.title,
  description: seo.about.description,
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <article className="section">
        <JsonLd data={[personJsonLd, profileJsonLd(), breadcrumbJsonLd(crumbs)]} />
        <div className="rl-container">
          <Breadcrumbs items={crumbs} />
          <PageHeader label={aboutCopy.label} line1={aboutCopy.title} lead={<Rich text={aboutCopy.lead} />} />
          <p className="copy-slot">{aboutCopy.photo}</p>
          <div className="prose">
            {aboutCopy.body.map((paragraph) => (
              <p key={paragraph}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
          <section style={{ marginTop: 48 }}>
            <p className="rl-mono">{aboutCopy.problemLabel}</p>
            <h2>{aboutCopy.problemTitle}</h2>
            <div className="belief-grid" style={{ marginTop: 24 }}>
              {aboutCopy.problems.map((problem, index) => (
                <article key={problem.title} className="belief">
                  <p className="rl-mono">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </article>
              ))}
            </div>
          </section>
          <section style={{ marginTop: 48 }}>
            <p className="rl-mono">{aboutCopy.howLabel}</p>
            <h2>{aboutCopy.howTitle}</h2>
            <div className="belief-grid" style={{ marginTop: 24 }}>
              {aboutCopy.beliefs.map((belief, index) => (
                <article key={belief.title} className="belief">
                  <p className="rl-mono">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{belief.title}</h3>
                  <p>{belief.body}</p>
                </article>
              ))}
            </div>
          </section>
          <section style={{ marginTop: 48 }}>
            <p className="rl-mono">{aboutCopy.companiesLabel}</p>
            <h2>{aboutCopy.companiesTitle}</h2>
            {aboutCopy.companies.map((company) => (
              <article key={company.name} className="work-row">
                <h3>{company.name}</h3>
                <p>{company.body}</p>
                <p>
                  <Link href={company.href}>View →</Link>
                </p>
              </article>
            ))}
          </section>
          <p className="copy-slot" style={{ marginTop: 24 }}>
            {aboutCopy.sameAs}
          </p>
        </div>
      </article>
      <CtaBand index="03" />
    </>
  );
}
