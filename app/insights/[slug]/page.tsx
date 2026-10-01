import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/route-placeholder";

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  return { title: `Insight · ${slug}` };
}

export default async function InsightPage({
  params,
}: PageProps<"/insights/[slug]">) {
  const { slug } = await params;

  return (
    <RoutePlaceholder
      kicker="Insights"
      title="Insight"
      note="Placeholder. This note has no content yet."
      slug={slug}
    />
  );
}
