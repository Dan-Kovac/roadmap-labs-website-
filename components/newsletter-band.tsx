import { insightsCopy } from "@/lib/copy";

export function NewsletterBand({ variant = "index" }: { variant?: "index" | "article" }) {
  const line1 = variant === "article" ? insightsCopy.articleLine1 : null;
  const line2 = variant === "article" ? insightsCopy.articleLine2 : insightsCopy.newsletterTitle;

  return (
    <section className="section rl-dark newsletter" aria-labelledby="newsletter-heading">
      <div className="rl-container">
        <p className="rl-mono section-label">{insightsCopy.newsletterLabel}</p>
        <h2 id="newsletter-heading">
          {line1 ? <span className="voice-2">{line1}</span> : null}
          <span className="h-line">{line2}</span>
        </h2>
        <p className="lead">{insightsCopy.newsletterPitch}</p>
        <p className="copy-slot substack-decision">{insightsCopy.substackDecision}</p>
        <p>
          <span className="rl-btn rl-btn-primary" aria-disabled="true">
            {insightsCopy.newsletterButton}
          </span>
        </p>
      </div>
    </section>
  );
}
