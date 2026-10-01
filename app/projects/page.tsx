import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/route-placeholder";

export const metadata: Metadata = {
  title: "Work",
};

export default function ProjectsPage() {
  return (
    <RoutePlaceholder
      kicker="Work"
      title="Projects"
      note="Placeholder. Selected work will be listed here."
    />
  );
}
