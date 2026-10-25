import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findInsight, getInsights } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getInsights().map((article) => ({ slug: article.slug }));
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

  const canonical = article.canonical.startsWith("https://") ? article.canonical : undefined;

  return pageMetadata({
    title: article.title,
    description: article.dek,
    path: `/insights/${article.slug}`,
    canonical,
  });
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = findInsight(slug);

  if (!article) {
    notFound();
  }

  const canonical = article.canonical.startsWith("https://") ? article.canonical : "";

  return (
    <article className="editorial">
      <p className="quiet">
        <Link href="/insights">Insights</Link>
      </p>
      <p className="index-date">{article.date}</p>
      <h1 className="thesis">
        <span className="thesis-line">{article.title}</span>
      </h1>
      <p className="positioning">{article.dek}</p>
      <div className="article-body">
        <Markdown source={article.body} />
      </div>
      <p className="canonical-note">
        {canonical ? (
          <a href={canonical} rel="noreferrer">
            Canonical copy on Substack
          </a>
        ) : (
          "[SUBSTACK URL TBC]"
        )}
      </p>
      <p className="article-back">
        <Link className="back-link" href="/insights">
          Back to Insights
        </Link>
      </p>
    </article>
  );
}
