import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryLink } from "@/components/enquiry-link";
import { chrome, notFoundCopy } from "@/lib/copy";
import { pageMetadata } from "@/lib/metadata";
import { seo } from "@/lib/seo";
import { navItems } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: seo.notFound.title,
  description: seo.notFound.description,
  path: "/404",
  indexable: false,
});

export default function NotFound() {
  return (
    <article className="section">
      <div className="rl-container">
        <p className="rl-mono">{notFoundCopy.label}</p>
        <h1>
          <span className="voice-2">{notFoundCopy.line1}</span>
          <span className="h-line">{notFoundCopy.line2}</span>
        </h1>
        <p className="lead">{notFoundCopy.lead}</p>
        <div className="inline-actions">
          <EnquiryLink className="rl-btn rl-btn-primary" location="not-found" href="/contact">
            {chrome.enquire}
          </EnquiryLink>
          <Link className="rl-btn-text" href="/">
            {notFoundCopy.home}
          </Link>
        </div>
        <nav aria-label="Pages" style={{ marginTop: 32 }}>
          {navItems.map((item) => (
            <p key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </p>
          ))}
        </nav>
      </div>
    </article>
  );
}
