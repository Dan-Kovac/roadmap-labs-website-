import Link from "next/link";
import { contactHref } from "@/lib/site";
import { findSelectedWork } from "@/lib/selected-work";

type Project = NonNullable<ReturnType<typeof findSelectedWork>>;

export function ProjectEditorial({ project }: { project: Project }) {
  return (
    <article className="editorial">
      <p className="quiet">
        <Link href="/projects">Work</Link>
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
        {project.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="editorial-block" aria-labelledby={`${project.slug}-screens`}>
        <h2 className="quiet" id={`${project.slug}-screens`}>
          Screens
        </h2>
        <div className="shot-grid">
          {project.shots.map((shot) => (
            <figure className={`shot shot-${shot.crop}`} key={shot.label}>
              <div className="shot-well" aria-hidden="true">
                <span className="shot-crop" />
              </div>
              <figcaption>
                <span>{shot.label}</span>
                <span>Empty screenshot</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <div className="editorial-actions">
        {project.external ? (
          <a className="platform-line" href={project.href} rel="noreferrer">
            {project.cta}
          </a>
        ) : (
          <p className="quiet">{"detailNote" in project ? project.detailNote : null}</p>
        )}
        <a className="editorial-mail" href={contactHref}>
          Email Dan
        </a>
      </div>
    </article>
  );
}
