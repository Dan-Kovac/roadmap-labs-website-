import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Markdown } from "@/lib/markdown";
import { Rich } from "@/components/rich";
import { CaseShots } from "@/components/case-shots";
import { CtaBand } from "@/components/cta-band";
import { ShotFrame } from "@/components/shot-frame";
import { findWork, getListedWork, getWork, nextWork } from "@/lib/content";
import { caseStudy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return getWork().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findWork(slug);

  if (!project) {
    return {};
  }

  const listed = getListedWork().some((item) => item.slug === slug);

  return pageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
    indexable: listed && project.indexable,
    type: "article",
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findWork(slug);

  if (!project || !getListedWork().some((item) => item.slug === slug)) {
    notFound();
  }

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/projects" },
    { name: project.name ?? project.title, path: `/projects/${project.slug}` },
  ];
  const next = nextWork(slug);

  return (
    <>
    <article className="section">
      <JsonLd
        data={[
          articleJsonLd({
            headline: project.title,
            description: project.dek,
            path: `/projects/${project.slug}`,
            about: project.about,
          }),
          breadcrumbJsonLd(crumbs),
        ]}
      />
      <div className="rl-container">
        <Breadcrumbs items={crumbs} />
        <h1>{project.title}</h1>
        <p className="lead">{project.dek}</p>
        <dl className="card-grid">
          {project.client ? (
            <div>
              <dt className="rl-mono">Client</dt>
              <dd>{project.client}</dd>
            </div>
          ) : null}
          {project.services ? (
            <div>
              <dt className="rl-mono">Services</dt>
              <dd>{project.services}</dd>
            </div>
          ) : null}
          {project.year ? (
            <div>
              <dt className="rl-mono">Year</dt>
              <dd>
                <Rich text={project.year} />
              </dd>
            </div>
          ) : null}
          {project.status ? (
            <div>
              <dt className="rl-mono">Status</dt>
              <dd>{project.status}</dd>
            </div>
          ) : null}
          {project.liveUrl ? (
            <div>
              <dt className="rl-mono">Live site</dt>
              <dd>
                <a href={project.liveUrl} rel="noreferrer">
                  {project.liveLabel ?? project.liveUrl} ↗
                </a>
              </dd>
            </div>
          ) : null}
          {project.liveNote ? (
            <div>
              <dt className="rl-mono">Live site</dt>
              <dd>
                <Rich text={project.liveNote} />
              </dd>
            </div>
          ) : null}
        </dl>
        {project.shots.some((shot) => shot.place) ? (
          <CaseShots project={project} />
        ) : (
          <>
            <div className="prose">
              <Markdown source={project.body} />
            </div>
            {project.shots.map((shot) => (
              <ShotFrame
                key={shot.label}
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
                placeholder={shot.placeholder}
                ratio={shot.crop}
                objectPosition={shot.src?.includes("reviewbuddy-widget") ? "left center" : "top center"}
              />
            ))}
          </>
        )}
        {next && next.slug !== project.slug ? (
          <p style={{ marginTop: 32 }}>
            <Link href={`/projects/${next.slug}`}>
              {caseStudy.next} {next.name ?? next.title}
            </Link>
          </p>
        ) : null}
      </div>
    </article>
    <CtaBand secondary={false} />
    </>
  );
}
