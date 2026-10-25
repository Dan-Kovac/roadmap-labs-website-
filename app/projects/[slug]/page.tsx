import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectEditorial } from "@/components/project-editorial";
import { findWork, getWork } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getWork().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findWork(slug);

  if (!project) {
    return { title: "Project" };
  }

  return pageMetadata({
    title: project.title,
    description: project.dek,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = findWork(slug);

  if (!project) {
    notFound();
  }

  return <ProjectEditorial project={project} />;
}
