import { ClosingCta } from "@/components/closing-cta";
import { OffersBand } from "@/components/offers-band";
import { OfferStrip } from "@/components/offer-strip";
import { WorkGrid } from "@/components/work-grid";
import { BookingLink } from "@/components/booking-link";
import { getHomeWork } from "@/lib/content";
import { contactHref, lockedDescription } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  const featured = getHomeWork();

  return (
    <div className="home">
      <section className="fold" aria-labelledby="fold-title">
        <div className="fold-copy">
          <p className="fold-kicker">Melbourne</p>
          <h1 className="fold-title" id="fold-title">
            <span className="fold-line">Building software has never been easier.</span>
            <span className="fold-line">Building the right software is still just as hard.</span>
          </h1>
          <p className="fold-support">{lockedDescription}</p>
          <div className="fold-actions">
            <BookingLink className="rl-btn rl-btn-primary">Book a call</BookingLink>
            <Link className="rl-btn rl-btn-secondary" href="/contact">
              Get in touch
            </Link>
            <a className="fold-mail" href={contactHref}>
              Email Dan
            </a>
          </div>
        </div>
      </section>
      <OffersBand />
      <section className="underfold" aria-labelledby="underfold-title">
        <h2 id="underfold-title">
          <span className="underfold-line">Software that respects the time.</span>
          <span className="underfold-line">It does the job, then it stops.</span>
        </h2>
        <div className="underfold-copy">
          <p>
            People open a tool to finish something. The useful ones let them. The rest keep a tab
            open and spend the hour on work the software should have done.
          </p>
          <p>The brief is smaller than it sounds. Do the job well. Leave the rest of the day alone.</p>
          <p>A clear step. A finished task. A product that does not ask for more time than it needs.</p>
        </div>
      </section>
      <OfferStrip />
      <section className="work" aria-labelledby="selected-work">
        <h2 id="selected-work">Selected work</h2>
        <WorkGrid items={featured} />
      </section>
      <ClosingCta />
    </div>
  );
}
