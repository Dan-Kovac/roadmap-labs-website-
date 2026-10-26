"use server";

import { contactCopy } from "@/lib/copy";
import { formEndpoint } from "@/lib/delivery";
import { contactEmail } from "@/lib/site";

export type FieldErrors = {
  name?: string;
  email?: string;
  intent?: string;
  message?: string;
};

export type EnquiryState = {
  status: "idle" | "invalid" | "unconfigured" | "sent" | "error";
  errors?: FieldErrors;
  mailto?: string;
};

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (clean(formData.get("company_website"), 200)) {
    return { status: "unconfigured" };
  }

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 160);
  const organisation = clean(formData.get("organisation"), 160);
  const team = clean(formData.get("team"), 40);
  const intent = clean(formData.get("intent"), 80);
  const message = String(formData.get("message") ?? "").trim().slice(0, 4000);
  const errors: FieldErrors = {};

  if (name.length < 2) {
    errors.name = contactCopy.errors.name;
  }

  if (!validEmail(email)) {
    errors.email = contactCopy.errors.email;
  }

  if (!contactCopy.intents.includes(intent as (typeof contactCopy.intents)[number])) {
    errors.intent = contactCopy.errors.intent;
  }

  if (message.length < 8) {
    errors.message = contactCopy.errors.message;
  }

  if (Object.keys(errors).length) {
    return { status: "invalid", errors };
  }

  const subject = `Roadmap Labs — ${intent}`;
  const lines = [message, "", `— ${name}`, organisation, team, email].filter(Boolean);
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  const endpoint = formEndpoint();

  if (!endpoint) {
    return { status: "unconfigured", mailto };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        organisation,
        team,
        intent,
        message,
        source: "roadmaplabs.com.au",
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return { status: "error", mailto };
    }
  } catch {
    return { status: "error", mailto };
  }

  return { status: "sent" };
}
