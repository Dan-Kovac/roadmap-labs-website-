"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useActionState, useEffect } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { track } from "@/lib/analytics";
import { contactCopy } from "@/lib/copy";

const initialState: EnquiryState = { status: "idle" };

function ContactFormInner({ deliveryConfigured }: { deliveryConfigured: boolean }) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const params = useSearchParams();
  const requested = params.get("intent") ?? "";
  const aliased = contactCopy.intentAliases[requested] ?? requested;
  const defaultIntent = contactCopy.intents.includes(aliased as (typeof contactCopy.intents)[number])
    ? aliased
    : "";

  useEffect(() => {
    if (state.status === "sent") {
      track("contact_submit", { location: "contact" });
    }
  }, [state.status]);

  if (state.status === "sent") {
    return (
      <div>
        <h2>{contactCopy.sentTitle}</h2>
        <p className="lead">{contactCopy.sentBody}</p>
      </div>
    );
  }

  return (
    <form id="book" className="enquiry" action={formAction} noValidate>
      <p className="form-note">
        {deliveryConfigured ? contactCopy.configuredNote : contactCopy.unconfiguredNote}
      </p>
      {state.status === "error" ? (
        <div>
          <h2>{contactCopy.failTitle}</h2>
          <p>{contactCopy.failBody}</p>
        </div>
      ) : null}
      {state.status === "unconfigured" && state.mailto ? (
        <p>
          <a className="rl-link" href={state.mailto}>
            Email this note to Dan
          </a>
        </p>
      ) : null}
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="name">
          {contactCopy.name} {contactCopy.required}
        </label>
        <input id="name" name="name" autoComplete="name" aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? "name-error" : undefined} required />
        {state.errors?.name ? (
          <p id="name-error" className="field-error">
            {state.errors.name}
          </p>
        ) : null}
      </div>
      <div className="field">
        <label htmlFor="email">
          {contactCopy.email} {contactCopy.required}
        </label>
        <input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(state.errors?.email)} aria-describedby={state.errors?.email ? "email-error" : undefined} required />
        {state.errors?.email ? (
          <p id="email-error" className="field-error">
            {state.errors.email}
          </p>
        ) : null}
      </div>
      <div className="field">
        <label htmlFor="organisation">{contactCopy.business}</label>
        <input id="organisation" name="organisation" autoComplete="organization" />
      </div>
      <fieldset className="field">
        <legend>{contactCopy.team}</legend>
        <div className="choices">
          {contactCopy.teamOptions.map((option) => (
            <label key={option}>
              <input type="radio" name="team" value={option} /> {option}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="field">
        <legend>
          {contactCopy.intent} {contactCopy.required}
        </legend>
        <div className="choices">
          {contactCopy.intents.map((option) => (
            <label key={option}>
              <input type="radio" name="intent" value={option} defaultChecked={option === defaultIntent} /> {option}
            </label>
          ))}
        </div>
        {state.errors?.intent ? <p className="field-error">{state.errors.intent}</p> : null}
      </fieldset>
      <div className="field">
        <label htmlFor="message">
          {contactCopy.message} {contactCopy.required}
        </label>
        <textarea id="message" name="message" rows={5} aria-invalid={Boolean(state.errors?.message)} aria-describedby={state.errors?.message ? "message-error" : undefined} required />
        {state.errors?.message ? (
          <p id="message-error" className="field-error">
            {state.errors.message}
          </p>
        ) : null}
      </div>
      <button className="rl-btn rl-btn-primary" type="submit" aria-busy={pending}>
        {contactCopy.send}
        {pending ? <span className="sr-only">Sending</span> : null}
      </button>
    </form>
  );
}

export function ContactForm({ deliveryConfigured }: { deliveryConfigured: boolean }) {
  return (
    <Suspense fallback={<p className="form-note">{contactCopy.configuredNote}</p>}>
      <ContactFormInner deliveryConfigured={deliveryConfigured} />
    </Suspense>
  );
}
