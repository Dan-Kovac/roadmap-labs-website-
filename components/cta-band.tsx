import { BookingLink } from "@/components/booking-link";
import { chrome, start } from "@/lib/copy";
import { contactHref } from "@/lib/site";

export function CtaBand({ index, secondary = true }: { index: string; secondary?: boolean }) {
  return (
    <section className="section rl-dark cta-band" id="start" aria-labelledby="start-heading">
      <div className="rl-container">
        <p className="rl-mono section-label">
          {index} · {start.label}
        </p>
        <h2 id="start-heading">
          <span className="voice-2">{start.line1}</span>
          <span className="h-line">{start.line2}</span>
        </h2>
        <div className="cta-actions">
          <BookingLink className="rl-btn rl-btn-primary" location="closing">
            {chrome.book}
          </BookingLink>
          {secondary ? (
            <a className="rl-btn rl-btn-secondary" href={contactHref}>
              {chrome.emailDan}
            </a>
          ) : null}
        </div>
        <p className="cta-note">{start.reassurance}</p>
      </div>
    </section>
  );
}
