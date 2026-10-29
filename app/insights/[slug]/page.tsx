import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { NewsletterBand } from "@/components/newsletter-band";
import { findInsight, getInsights, isoDate, relatedInsights } from "@/lib/content";
import { insightsCopy } from "@/lib/copy";
import { articleCanonical, pageMetadata } from "@/lib/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { markerPattern } from "@/lib/text";

export function generateStaticParams() {
  return getInsights().map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findInsight(slug);

  if (!article) {
    return {};
  }

  return pageMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/insights/${article.slug}`,
    indexable: !article.draft,
    type: "article",
    publishedTime: isoDate(article.date),
  });
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findInsight(slug);

  if (!article || (article.draft && process.env.VERCEL_ENV === "production")) {
    notFound();
  }

  const canonical = articleCanonical(article.slug);
  const source = article.body.replace(markerPattern, (match) => `<span class="copy-slot">${match}</span>`);
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${article.slug}` },
  ];
  const related = relatedInsights(article);

  return (
    <>
      <article className="section">
        <JsonLd
          data={[
            articleJsonLd({
              headline: article.title,
              description: article.dek,
              path: `/insights/${article.slug}`,
              datePublished: isoDate(article.date),
              dateModified: isoDate(article.updated) ?? isoDate(article.date),
            }),
            breadcrumbJsonLd(crumbs),
          ]}
        />
        <div className="rl-container">
          <Breadcrumbs items={crumbs} />
          <p className="rl-mono">
            {insightsCopy.authorName} · {article.date} · {article.readingTime} min
          </p>
          <h1>{article.title}</h1>
          <p className="lead">{article.dek}</p>
          <div className="prose">{content}</div>
          <p className="sr-only">{canonical}</p>
          <aside style={{ marginTop: 32 }}>
            <h2>{insightsCopy.authorName}</h2>
            <p>{insightsCopy.authorBio}</p>
            <p>
              <Link href="/about">{insightsCopy.aboutLink}</Link>
            </p>
          </aside>
          {related.length ? (
            <section style={{ marginTop: 32 }}>
              <h2>{insightsCopy.related}</h2>
              {related.map((item) => (
                <p key={item.slug}>
                  <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                </p>
              ))}
            </section>
          ) : null}
        </div>
      </article>
      <NewsletterBand variant="article" />
    </>
  );
}
