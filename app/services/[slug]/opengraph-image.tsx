import { ogContentType, ogSize, titleImage } from "@/lib/og";
import { seo } from "@/lib/seo";

export const alt = "Roadmap Labs service";
export const size = ogSize;
export const contentType = ogContentType;

const titles: Record<string, string> = {
  automations: seo.automations.title,
  marketing: seo.marketing.title,
  software: seo.software.title,
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return titleImage({ label: "Services", title: titles[slug] ?? "Services" });
}
