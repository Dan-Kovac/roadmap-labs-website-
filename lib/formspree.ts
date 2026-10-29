import type { FieldErrors } from "@/lib/enquiry";

/** Dan's Formspree form. Not a secret. Override with NEXT_PUBLIC_FORMSPREE_FORM_ID in tests. */
export const defaultFormspreeFormId = "xdeeekqw";

const formIdPattern = /^[A-Za-z0-9]+$/;
const enquiryFields = new Set(["name", "email", "company", "website", "message"]);

/** `process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? 'xdeeekqw'`, ignoring a blank or malformed override. */
export function formspreeFormId() {
  const configured = (process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? defaultFormspreeFormId).trim();
  return formIdPattern.test(configured) ? configured : defaultFormspreeFormId;
}

export function formspreeEndpoint() {
  return `https://formspree.io/f/${formspreeFormId()}`;
}

function messageText(value: unknown) {
  if (typeof value === "string") {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean).join(" ");
  }

  return "";
}

/** Field messages and a form-level message from a Formspree JSON error body. */
export function readFormspreeErrors(body: unknown): { errors: FieldErrors; formError: string } {
  const errors: FieldErrors = {};
  const formMessages: string[] = [];

  if (!body || typeof body !== "object") {
    return { errors, formError: "" };
  }

  const record = body as Record<string, unknown>;
  const raw = record.errors;

  const add = (field: string, message: string) => {
    if (!message) {
      return;
    }

    if (enquiryFields.has(field)) {
      errors[field as keyof FieldErrors] = message;
      return;
    }

    formMessages.push(message);
  };

  if (Array.isArray(raw)) {
    for (const item of raw) {
      if (!item || typeof item !== "object") {
        continue;
      }

      const entry = item as Record<string, unknown>;
      add(typeof entry.field === "string" ? entry.field : "", messageText(entry.message));
    }
  } else if (raw && typeof raw === "object") {
    for (const [field, value] of Object.entries(raw)) {
      add(field, messageText(value));
    }
  }

  const summary = messageText(record.error);

  if (summary && Object.keys(errors).length) {
    formMessages.unshift(summary);
  } else if (summary && !formMessages.length) {
    formMessages.push(summary);
  }

  return { errors, formError: formMessages.join(" ") };
}
