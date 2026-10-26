"use client";

import { useRef, useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { contactCopy } from "@/lib/copy";
import {
  firstError,
  initialEnquiryState,
  reduceEnquiry,
  type EnquiryFields,
  type EnquiryState,
} from "@/lib/enquiry";
import { contactEmail, contactHref } from "@/lib/site";

function readFields(data: FormData): EnquiryFields {
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    company: String(data.get("company") ?? ""),
    website: String(data.get("website") ?? ""),
    message: String(data.get("message") ?? ""),
    gotcha: String(data.get("_gotcha") ?? ""),
  };
}

export function ContactForm({ endpoint, formId }: { endpoint: string; formId: string }) {
  const [state, setState] = useState<EnquiryState>(initialEnquiryState);
  const sending = useRef(false);

  if (!endpoint) {
    return (
      <p className="form-fallback">
        {contactCopy.fallbackBefore}{" "}
        <a className="rl-link" href={contactHref}>
          {contactEmail}
        </a>
        .
      </p>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (sending.current) {
      return;
    }

    const reduced = reduceEnquiry(state, {
      type: "submit",
      fields: readFields(new FormData(form)),
      endpoint,
    });
    setState(reduced.state);

    if (!reduced.request) {
      const key = firstError(reduced.state.errors);
      if (key) {
        document.getElementById(`${formId}-${key}`)?.focus();
      }
      return;
    }

    sending.current = true;

    try {
      const response = await fetch(reduced.request.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reduced.request.payload),
      });

      if (!response.ok) {
        sending.current = false;
        setState(reduceEnquiry(reduced.state, { type: "failed" }).state);
        return;
      }

      track("contact_submit", { location: formId });
      setState(reduceEnquiry(reduced.state, { type: "succeeded" }).state);
    } catch {
      sending.current = false;
      setState(reduceEnquiry(reduced.state, { type: "failed" }).state);
    }
  }

  const statusId = `${formId}-status`;
  const showStatus = state.status === "sent" || state.status === "error" || state.status === "invalid" || state.status === "sending";

  return (
    <form id={formId === "contact-form" ? "enquiry" : formId} className="enquiry" onSubmit={onSubmit}>
      <p id={statusId} role="status" aria-live="polite" className={showStatus ? "form-status" : "sr-only"}>
        {state.status === "sending" ? contactCopy.sending : null}
        {state.status === "sent" ? contactCopy.success : null}
        {state.status === "invalid" ? contactCopy.invalid : null}
        {state.status === "error" ? (
          <>
            {contactCopy.errorBefore}{" "}
            <a className="rl-link" href={contactHref}>
              {contactEmail}
            </a>{" "}
            {contactCopy.errorAfter}
          </>
        ) : null}
      </p>
      {state.status === "sent" ? null : (
        <>
          <input type="hidden" name="_subject" value="New Roadmap Labs enquiry" />
          <div className="hp" aria-hidden="true">
            <label>
              Leave this blank
              <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <Field
            formId={formId}
            name="name"
            label={contactCopy.name}
            required
            autoComplete="name"
            minLength={2}
            maxLength={120}
            error={state.errors.name}
          />
          <Field
            formId={formId}
            name="email"
            label={contactCopy.email}
            type="email"
            required
            autoComplete="email"
            maxLength={160}
            error={state.errors.email}
          />
          <Field
            formId={formId}
            name="company"
            label={contactCopy.company}
            autoComplete="organization"
            maxLength={160}
          />
          <Field
            formId={formId}
            name="website"
            label={contactCopy.website}
            autoComplete="url"
            inputMode="url"
            maxLength={200}
            error={state.errors.website}
          />
          <Field
            formId={formId}
            name="message"
            label={contactCopy.message}
            required
            minLength={2}
            maxLength={4000}
            multiline
            error={state.errors.message}
          />
          <button className="rl-btn rl-btn-primary" type="submit" disabled={state.status === "sending"} aria-busy={state.status === "sending"}>
            {state.status === "sending" ? contactCopy.sending : contactCopy.send}
          </button>
        </>
      )}
    </form>
  );
}

function Field({
  formId,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
  minLength,
  maxLength,
  multiline = false,
  error,
}: {
  formId: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "url";
  minLength?: number;
  maxLength?: number;
  multiline?: boolean;
  error?: string;
}) {
  const id = `${formId}-${name}`;
  const errorId = `${id}-error`;
  const describedBy = error ? errorId : undefined;

  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {required ? <span className="sr-only">, required</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          minLength={minLength}
          maxLength={maxLength}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
      )}
      {error ? (
        <p id={errorId} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
