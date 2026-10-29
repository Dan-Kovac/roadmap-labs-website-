import { ogContentType, ogSize, titleImage } from "@/lib/og";
import { seo } from "@/lib/seo";

export const alt = seo.services.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return titleImage({ label: "Services", title: "Outsourced marketing and AI" });
}
