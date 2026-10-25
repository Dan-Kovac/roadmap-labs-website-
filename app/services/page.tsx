import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta } from "@/components/closing-cta";
import { offers, websiteOffer } from "@/lib/offers";
import { pageMetadata } from "@/lib/metadata";
import { contactHref, howWeWorkId } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Roadmap Labs builds its own software, internal operating systems, and automations and AI workflows. Dan also takes on website, SEO and conversion work.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="home">
      <section className="editorial" aria-labelledby="services-title">
        <p className="quiet">Services</p>
        <h1 className="thesis" id="services-title">
          <span className="thesis-line">Three ways the work comes in.</span>
        </h1>
        <p className="positioning">
          Own products. The system a business runs on. Automations and AI around the work that
          repeats.
        </p>
        <div className="service-list">
          {offers.map((offer) => (
            <article key={offer.id} id={offer.id} className="service-row">
              <p className="offer-num">{offer.number}</p>
              <h2>{offer.title}</h2>
              <div className="editorial-prose">
                {offer.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="service-links">
                {offer.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </p>
            </article>
          ))}
          <article id={websiteOffer.id} className="service-row">
            <p className="offer-num">Also</p>
            <h2>{websiteOffer.title}</h2>
            <div className="editorial-prose">
              {websiteOffer.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="service-links">
              {websiteOffer.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </p>
          </article>
        </div>
      </section>
      <section className="offer" id={howWeWorkId} aria-labelledby="how-we-work-title">
        <div className="offer-row">
          <h2 id="how-we-work-title">What we offer</h2>
          <div className="offer-copy">
            <p>Build — apps, sites, automations. Weekly Builds.</p>
            <p>Run — keep it humming after launch.</p>
          </div>
        </div>
        <div className="offer-row">
          <h2>How we work</h2>
          <div className="offer-copy">
            <p>Anchor · Iterate · live board · you own the IP.</p>
            <p>
              Pricing on request — <a href={contactHref}>Email Dan</a>.
            </p>
          </div>
        </div>
      </section>
      <ClosingCta />
    </div>
  );
}
