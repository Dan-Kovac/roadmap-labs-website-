export const insights = [
  {
    slug: "respect-the-time",
    title: "Software that respects the time",
    date: "Date placeholder",
    dek: "Doing the job well, and leaving the hour alone.",
    body: [
      "People do not have spare hours for software that almost works. The useful version does the job, then stops asking.",
      "That is the brief. Fewer steps. A clear screen. Work that finishes.",
      "This note is a placeholder. The full piece is not written yet.",
    ],
  },
] as const;

export function findInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
