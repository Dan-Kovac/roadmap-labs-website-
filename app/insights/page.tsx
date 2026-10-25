import type { Metadata } from "next";
import Link from "next/link";
import { getInsights } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Notes from Roadmap Labs. Weekly Dan Kovac Builds articles can be copied here from Substack.",
  path: "/insights",
});

export default function InsightsPage() {
  const articles = getInsights();

  return (
    <section className="editorial" aria-labelledby="insights-title">
      <p className="quiet">Insights</p>
      <h1 className="thesis" id="insights-title">
        <span className="thesis-line">Notes on the work.</span>
      </h1>
      <p className="positioning">
        Dan Kovac Builds is the weekly Substack. A note can be copied here, with the Substack
        address kept as the canonical URL.
      </p>
      <ul className="index-list">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/insights/${article.slug}`}>
              <span className="index-date">{article.date}</span>
              <span className="index-title">{article.title}</span>
              <span className="index-dek">{article.dek}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
