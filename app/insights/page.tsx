import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { NewsletterBand } from "@/components/newsletter-band";
import { PageHeader } from "@/components/page-header";
import { categoriesInUse, getLiveInsights, showInsightFilters } from "@/lib/content";
import { insightsCopy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: seo.insights.title,
  description: seo.insights.description,
  path: "/insights",
  indexable: getLiveInsights().length > 0,
});

export default function InsightsPage() {
  const articles = getLiveInsights();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <>
      <article className="section">
        <JsonLd data={[collectionJsonLd({ name: seo.insights.title, description: seo.insights.description, path: "/insights" }), breadcrumbJsonLd(crumbs)]} />
        <div className="rl-container">
          <Breadcrumbs items={crumbs} />
          <PageHeader label={insightsCopy.label} line1={insightsCopy.title} lead={insightsCopy.lead} />
          {showInsightFilters() ? (
            <nav aria-label="Categories">
              <Link href="/insights">{insightsCopy.all}</Link>
              {categoriesInUse().map((category) => (
                <Link key={category.slug} href={`/insights/category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </nav>
          ) : null}
          {articles.length === 0 ? <p>{insightsCopy.empty}</p> : null}
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
