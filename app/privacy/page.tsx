import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Rich } from "@/components/rich";
import { privacyCopy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { contactEmail, contactHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: seo.privacy.title,
  description: seo.privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <article className="section">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="rl-container prose">
        <Breadcrumbs items={crumbs} />
        <PageHeader label={privacyCopy.label} line1={privacyCopy.title} />
        <p>
          Messages sent from the contact form are emailed to Dan only when a form endpoint is configured. Until then, nothing typed into the form is stored.
        </p>
        <p>
          Analytics loads only when a measurement ID is set. Consent mode for Australia is still open: <Rich text={privacyCopy.consent} />
        </p>
        <p>
          <Rich text={privacyCopy.missing} />
        </p>
        <p>
          Questions: <a href={contactHref}>{contactEmail}</a>
        </p>
      </div>
    </article>
  );
}
