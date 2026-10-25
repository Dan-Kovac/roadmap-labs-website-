import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";
import { getWork } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "ReviewBuddy, Flexfolio, Compass OS and the Compass Buyers Agency website.",
  path: "/projects",
});

export default function ProjectsPage() {
  const work = getWork();

  return (
    <section className="editorial" aria-labelledby="work-title">
      <p className="quiet">Work</p>
      <h1 className="thesis" id="work-title">
        <span className="thesis-line">The work, one page each.</span>
      </h1>
      <p className="positioning">
        Screens where a live page could be reached. Empty frames where it could not.
      </p>
      <WorkGrid items={work} />
    </section>
  );
}
