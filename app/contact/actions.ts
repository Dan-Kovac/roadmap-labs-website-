"use server";

import { formEndpoint } from "@/lib/delivery";
import { contactEmail } from "@/lib/site";

export type EnquiryState = {
  status: "idle" | "invalid" | "unconfigured" | "sent" | "error";
  message?: string;
  mailto?: string;
};

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function mailtoFor(input: {
  name: string;
  email: string;
  organisation: string;
  intent: string;
  message: string;
}) {
  const subject = `Roadmap Labs — ${input.intent}`;
  const lines = [
    input.message,
    "",
    `— ${input.name}`,
    input.organisation,
    input.email,
  ].filter((line) => line !== "");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  if (clean(formData.get("company_website"), 200)) {
    return {
      status: "unconfigured",
      message: "That note was set aside.",
    };
  }

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 160);
  const organisation = clean(formData.get("organisation"), 160);
  const intent = clean(formData.get("intent"), 80) || "Get in touch";
  const message = String(formData.get("message") ?? "").trim().slice(0, 4000);

  if (name.length < 2 || !validEmail(email) || message.length < 8) {
    return {
      status: "invalid",
      message: "Add your name, a real email, and a short note of at least a few words.",
    };
  }

  const mailto = mailtoFor({ name, email, organisation, intent, message });
  const endpoint = formEndpoint();

  if (!endpoint) {
    return {
      status: "unconfigured",
      message:
        "Nothing was stored and nothing was emailed. The form destination is not connected yet. Use the link below if you want Dan to receive this note now.",
      mailto,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, organisation, intent, message, source: "roadmaplabs.com.au" }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return {
        status: "error",
        message:
          "The form destination did not accept the note. Nothing else was stored. Email Dan directly with the link below.",
        mailto,
      };
    }
  } catch {
    return {
      status: "error",
      message:
        "The form destination could not be reached. Nothing was stored. Email Dan directly with the link below.",
      mailto,
    };
  }

  return {
    status: "sent",
    message: "Sent. Dan will reply by email.",
  };
}
