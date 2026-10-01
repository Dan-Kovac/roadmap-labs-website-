import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/route-placeholder";
import { findSelectedWork } from "@/lib/selected-work";

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findSelectedWork(slug);

  return { title: project?.name ?? `Project · ${slug}` };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = findSelectedWork(slug);

  return (
    <RoutePlaceholder
      kicker="Work"
      title={project?.name ?? "Project"}
      note={
        project && "detailNote" in project
          ? project.detailNote
          : "Placeholder. Showcase detail is not on this shell yet."
      }
      slug={slug}
    />
  );
}
