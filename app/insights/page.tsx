import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from Roadmap Labs.",
};

export default function InsightsPage() {
  return (
    <section className="editorial" aria-labelledby="insights-title">
      <p className="quiet">Insights</p>
      <h1 className="thesis" id="insights-title">
        <span className="thesis-line">Notes on the work.</span>
      </h1>
      <ul className="index-list">
        {insights.map((article) => (
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
