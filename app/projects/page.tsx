import type { Metadata } from "next";
import Link from "next/link";
import { selectedWork } from "@/lib/selected-work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Roadmap Labs.",
};

export default function ProjectsPage() {
  return (
    <section className="editorial" aria-labelledby="work-title">
      <p className="quiet">Work</p>
      <h1 className="thesis" id="work-title">
        <span className="thesis-line">The work, one page each.</span>
      </h1>
      <ul className="index-list">
        {selectedWork.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <span className="index-title">{project.name}</span>
              <span className="index-dek">{project.job}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
