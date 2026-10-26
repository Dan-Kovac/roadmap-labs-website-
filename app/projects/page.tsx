import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LaptopFrame } from "@/components/laptop-frame";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Rich } from "@/components/rich";
import { workIndex } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: seo.projects.title,
  description: seo.projects.description,
  path: "/projects",
});

export default function ProjectsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/projects" },
  ];
  const cards = workIndex.cards;

  return (
    <>
      <article className="section">
        <JsonLd data={[collectionJsonLd({ name: seo.projects.title, description: seo.projects.description, path: "/projects" }), breadcrumbJsonLd(crumbs)]} />
        <div className="rl-container">
          <Breadcrumbs items={crumbs} />
          <PageHeader label={workIndex.label} line1={workIndex.title} lead={workIndex.lead} />
          <div>
            {cards.map((card) => (
              <article key={card.name} className={card.shot ? "work-row has-frame" : "work-row"}>
                {card.shot ? (
                  <LaptopFrame
                    state="image"
                    src={card.shot}
                    alt={`${card.name} home`}
                    objectPosition="top center"
                    sizes="(min-width: 768px) 340px, 100vw"
                  />
                ) : null}
                <div className="work-main">
                  <h2>{card.name}</h2>
                  <div>
                    <p>{card.body}</p>
                    <p className="rl-mono">
                      <Rich text={card.services} />
                    </p>
                  </div>
                  <p>
                    {card.href ? <Link href={card.href}>{card.meta}</Link> : <span className="rl-mono">{card.meta}</span>}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
      <CtaBand index="02" secondary={false} />
    </>
  );
}
