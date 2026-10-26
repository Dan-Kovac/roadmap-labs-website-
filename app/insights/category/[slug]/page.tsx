import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { NewsletterBand } from "@/components/newsletter-band";
import { PageHeader } from "@/components/page-header";
import { categoriesInUse, categoryBySlug, getLiveInsights, showInsightFilters } from "@/lib/content";
import { insightsCopy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export function generateStaticParams() {
  return categoriesInUse().map((category) => ({ slug: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryBySlug(slug);

  if (!category || !categoriesInUse().some((item) => item.slug === slug)) {
    return {};
  }

  return pageMetadata({
    title: `${category.name} · Insights · Roadmap Labs`,
    description: seo.insights.description,
    path: `/insights/category/${category.slug}`,
  });
}

export default async function InsightCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  const articles = getLiveInsights().filter((article) => article.category === slug);

  if (!category || articles.length === 0) {
    notFound();
  }

  const path = `/insights/category/${category.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: category.name, path },
  ];

  return (
    <>
      <article className="section">
        <JsonLd
          data={[
            collectionJsonLd({ name: category.name, description: insightsCopy.lead, path }),
            breadcrumbJsonLd(crumbs),
          ]}
        />
        <div className="rl-container">
          <Breadcrumbs items={crumbs} />
          <PageHeader label={insightsCopy.label} line1={category.name} lead={insightsCopy.lead} />
          {showInsightFilters() ? (
            <nav aria-label="Categories">
              <Link href="/insights">{insightsCopy.all}</Link>
              {categoriesInUse().map((item) => (
                <Link key={item.slug} href={`/insights/category/${item.slug}`} aria-current={item.slug === slug ? "page" : undefined}>
                  {item.name}
                </Link>
              ))}
            </nav>
          ) : null}
          {articles.map((article) => (
            <article key={article.slug} className="work-row">
              <p className="rl-mono">{article.date}</p>
              <h2>
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.dek}</p>
            </article>
          ))}
        </div>
      </article>
      <NewsletterBand />
    </>
  );
}
