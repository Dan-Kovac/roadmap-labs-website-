import { contactHref, howWeWorkId } from "@/lib/site";

export function OfferStrip() {
  return (
    <section className="offer" id={howWeWorkId} aria-labelledby="what-we-offer">
      <div className="offer-row">
        <h2 id="what-we-offer">What we offer</h2>
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
  );
}
