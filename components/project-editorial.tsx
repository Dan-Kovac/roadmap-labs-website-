import Link from "next/link";
import { ShotFrame } from "@/components/shot-frame";
import type { WorkDoc } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { contactHref } from "@/lib/site";

export function ProjectEditorial({ project }: { project: WorkDoc }) {
  return (
    <article className="editorial">
      <p className="quiet">
        <Link href="/projects">Work</Link>
        <span aria-hidden="true"> · </span>
        <span>{project.role}</span>
      </p>
      <h1 className="thesis">
        {project.thesis.map((line) => (
          <span className="thesis-line" key={line}>
            {line}
          </span>
        ))}
      </h1>
      <p className="positioning">{project.job}</p>
      <div className="editorial-prose">
        <Markdown source={project.body} />
      </div>
      <dl className="fact-list">
        <div>
          <dt>Result</dt>
          <dd>{project.result}</dd>
        </div>
        <div>
          <dt>Testimonial</dt>
          <dd>{project.testimonial}</dd>
        </div>
      </dl>
      <section className="editorial-block" aria-labelledby={`${project.slug}-screens`}>
        <h2 className="quiet" id={`${project.slug}-screens`}>
          Screens
        </h2>
        <div className="shot-grid">
          {project.shots.map((shot) => (
            <ShotFrame
              key={shot.label}
              shot={shot}
              sizes="(min-width: 900px) 46vw, 100vw"
            />
          ))}
        </div>
      </section>
      <div className="editorial-actions">
        {project.liveUrl ? (
          <a className="platform-line" href={project.liveUrl} rel="noreferrer">
            {project.liveLabel || "Visit"}
          </a>
        ) : (
          <p className="quiet">{project.privateNote}</p>
        )}
        <a className="editorial-mail" href={contactHref}>
          Email Dan
        </a>
      </div>
    </article>
  );
}
