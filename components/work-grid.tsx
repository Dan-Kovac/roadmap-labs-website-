import Image from "next/image";
import Link from "next/link";
import type { WorkDoc } from "@/lib/content";

export function WorkGrid({ items }: { items: WorkDoc[] }) {
  return (
    <ul className="work-strip">
      {items.map((project) => {
        const shot = project.shots[0];

        return (
          <li key={project.slug}>
            <Link className="work-visual" href={`/projects/${project.slug}`}>
              <span className="shot-well">
                {shot?.src ? (
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 900px) 30vw, 100vw"
                    className="shot-img"
                  />
                ) : (
                  <span className="shot-empty">
                    <span>{shot?.placeholder || "[SCREENSHOT TBC]"}</span>
                  </span>
                )}
              </span>
            </Link>
            <div className="work-copy">
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.job}</p>
              {project.liveUrl ? (
                <a className="platform-cta" href={project.liveUrl} rel="noreferrer">
                  {project.liveLabel || "Visit the site"}
                </a>
              ) : (
                <Link className="platform-cta" href={`/projects/${project.slug}`}>
                  {project.liveLabel || "Read the note"}
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
