import { ContactForm } from "@/components/contact-form";
import { EnquiryLink } from "@/components/enquiry-link";
import { chrome, start } from "@/lib/copy";
import { contactHref } from "@/lib/site";

export function CtaBand({
  index,
  secondary = true,
  form = false,
}: {
  index?: string;
  secondary?: boolean;
  form?: boolean;
}) {
  return (
    <section className="section rl-dark cta-band" id="start" aria-labelledby="start-heading">
      <div className="rl-container">
        <p className="rl-mono section-label">
          {index ? `${index} · ${start.label}` : start.label}
        </p>
        <h2 id="start-heading">
          <span className="voice-2">{start.line1}</span>
          <span className="h-line">{start.line2}</span>
        </h2>
        {form ? (
          <ContactForm formId="start-form" />
        ) : (
          <div className="cta-actions">
            <EnquiryLink className="rl-btn rl-btn-primary" location="closing" href="/contact">
              {chrome.enquire}
            </EnquiryLink>
            {secondary ? (
              <a className="rl-btn rl-btn-secondary" href={contactHref}>
                {chrome.emailDan}
              </a>
            ) : null}
          </div>
        )}
        <p className="cta-note">{start.reassurance}</p>
      </div>
    </section>
  );
}
