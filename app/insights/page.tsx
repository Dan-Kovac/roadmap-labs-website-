import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/route-placeholder";

export const metadata: Metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <RoutePlaceholder
      kicker="Insights"
      title="Insights"
      note="Placeholder. Writing will be listed here."
    />
  );
}
