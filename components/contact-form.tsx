"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";

const initialState: EnquiryState = { status: "idle" };

const intents = [
  "Book a call",
  "An own-product question",
  "An internal operating system",
  "Automations and AI",
  "Website, SEO or conversion",
  "Something else",
] as const;

export function ContactForm({
  deliveryConfigured,
  defaultIntent,
}: {
  deliveryConfigured: boolean;
  defaultIntent?: string;
}) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const intent =
    defaultIntent && intents.includes(defaultIntent as (typeof intents)[number])
      ? defaultIntent
      : "Book a call";

  return (
    <form className="enquiry" action={formAction} noValidate>
      {deliveryConfigured ? (
        <p className="form-note">Dan reads these and replies by email.</p>
      ) : (
        <p className="form-note">
          The form is on the page. It is not connected to an inbox yet, so a note typed here
          is not stored and is not emailed. For anything that needs a reply now, email Dan
          directly. On send, you can open a prefilled email with what you wrote.
        </p>
      )}

      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required maxLength={120} />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={160} />
      </div>
      <div className="field">
        <label htmlFor="organisation">Organisation, if you have one</label>
        <input
          id="organisation"
          name="organisation"
          autoComplete="organization"
          maxLength={160}
        />
      </div>
      <div className="field">
        <label htmlFor="intent">What do you need?</label>
        <select id="intent" name="intent" defaultValue={intent}>
          {intents.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required maxLength={4000} rows={6} />
      </div>

      {state.status === "invalid" ? (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button className="rl-btn rl-btn-primary form-submit" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send"}
      </button>

      {state.status === "unconfigured" || state.status === "sent" || state.status === "error" ? (
        <div className="form-result" role="status" tabIndex={-1}>
          <h2>{state.status === "sent" ? "Sent" : "Not sent"}</h2>
          <p>{state.message}</p>
          {state.mailto ? (
            <a className="platform-line" href={state.mailto}>
              Email this note to Dan
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
