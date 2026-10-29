import { findWork } from "@/lib/content";
import { ogContentType, ogSize, titleImage } from "@/lib/og";

export const alt = "Roadmap Labs project";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findWork(slug);

  return titleImage({ label: "Work", title: project?.title ?? "Work" });
}
