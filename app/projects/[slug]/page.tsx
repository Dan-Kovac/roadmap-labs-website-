import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/route-placeholder";

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  return { title: `Project · ${slug}` };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return (
    <RoutePlaceholder
      kicker="Work"
      title="Project"
      note="Placeholder. Showcase detail is not on this shell yet."
      slug={slug}
    />
  );
}
