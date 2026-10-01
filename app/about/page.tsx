import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/route-placeholder";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <RoutePlaceholder
      kicker="About"
      title="About"
      note="Placeholder — Dan refine. Mission copy is not on this shell yet."
    />
  );
}
