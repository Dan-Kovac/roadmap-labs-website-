import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectEditorial } from "@/components/project-editorial";
import { findSelectedWork, selectedWork } from "@/lib/selected-work";

export function generateStaticParams() {
  return selectedWork.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findSelectedWork(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.name,
    description: project.job,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = findSelectedWork(slug);

  if (!project) {
    notFound();
  }

  return <ProjectEditorial project={project} />;
}
