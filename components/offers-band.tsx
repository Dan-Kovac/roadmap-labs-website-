import Link from "next/link";
import { offers } from "@/lib/offers";

export function OffersBand() {
  return (
    <section className="offers" id="offers" aria-labelledby="offers-title">
      <div className="offers-intro">
        <p className="offers-kicker" id="offers-title">
          Three offers
        </p>
        <p className="offers-lead">
          Own products. Operating systems for a business. Automations and AI workflows.
        </p>
      </div>
      <div className="offers-grid">
        {offers.map((offer) => (
          <article key={offer.id}>
            <p className="offer-num">{offer.number}</p>
            <h2>
              <Link href={`/services#${offer.id}`}>{offer.title}</Link>
            </h2>
            <p>{offer.home}</p>
          </article>
        ))}
      </div>
      <p className="offers-aside">
        Dan also takes on website, SEO and conversion work.{" "}
        <Link href="/services#websites">See how the work is shaped</Link>
      </p>
    </section>
  );
}
