import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { contactCopy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { contactEmail, contactHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: seo.contact.title,
  description: seo.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <article className="section">
      <JsonLd data={[contactPageJsonLd(), breadcrumbJsonLd(crumbs)]} />
      <div className="rl-container contact-grid">
        <div>
          <Breadcrumbs items={crumbs} />
          <PageHeader label={contactCopy.label} line1={contactCopy.line1} line2={contactCopy.line2} lead={contactCopy.lead} />
          <ContactForm formId="contact-form" />
        </div>
        <aside className="aside">
          <p className="rl-mono">{contactCopy.asideEmail}</p>
          <p>
            <a className="rl-link" href={contactHref}>
              {contactEmail}
            </a>
          </p>
          <p className="rl-mono">{contactCopy.asideBased}</p>
          <p>{contactCopy.based}</p>
        </aside>
      </div>
    </article>
  );
}
