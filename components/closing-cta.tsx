import Link from "next/link";
import { BookingLink } from "@/components/booking-link";
import { contactHref } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <h2 id="closing-title">
        <span className="underfold-line">Tell Dan what has to happen.</span>
      </h2>
      <div className="fold-actions">
        <BookingLink className="rl-btn rl-btn-primary">Book a call</BookingLink>
        <Link className="rl-btn rl-btn-secondary" href="/contact">
          Get in touch
        </Link>
        <a className="fold-mail" href={contactHref}>
          Email Dan
        </a>
      </div>
    </section>
  );
}
