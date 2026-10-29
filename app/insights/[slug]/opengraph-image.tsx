import { findInsight } from "@/lib/content";
import { ogContentType, ogSize, titleImage } from "@/lib/og";

export const alt = "Roadmap Labs insight";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findInsight(slug);

  return titleImage({ label: "Insights", title: article?.title ?? "Insights" });
}
