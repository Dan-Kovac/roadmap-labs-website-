import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findInsight, insights } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = findInsight(slug);

  if (!article) {
    return { title: "Insight" };
  }

  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = findInsight(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="editorial">
      <p className="quiet">
        <Link href="/insights">Insights</Link>
      </p>
      <p className="index-date">{article.date}</p>
      <h1 className="thesis">
        <span className="thesis-line">{article.title}</span>
      </h1>
      <div className="article-body">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="article-back">
        <Link className="back-link" href="/insights">
          Back to Insights
        </Link>
      </p>
    </article>
  );
}
