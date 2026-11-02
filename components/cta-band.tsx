import Link from "next/link";
import { BOOKING_URL, bookingCta } from "@/lib/booking";

const points = ["Learn your business", "Your AI plan to keep", "Build it yourself or with us"];

export function CtaBand() {
  return (
    <section className="section plan-cta" id="book-placeholder" aria-labelledby="book-heading">
      <div className="rl-container ev-cta">
        <div>
          <p className="rl-mono">Free · 30 minutes</p>
          <h2 id="book-heading">Get a clear AI plan, free</h2>
          <p className="lead">
            Spend 30 minutes with us. We learn how your business runs and where it&apos;s stuck. Then we send back a
            clear AI plan and strategy. It&apos;s yours to keep.
          </p>
          <ul className="ev-ticks">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link className="rl-btn rl-btn-primary" href={BOOKING_URL}>
            {bookingCta}
          </Link>
          <p className="microcopy">No cost. No obligation.</p>
        </div>
      </div>
    </section>
  );
}
