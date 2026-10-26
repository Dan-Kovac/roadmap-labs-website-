import { contactCopy } from "@/lib/copy";

export const enquirySubject = "New Roadmap Labs enquiry";

export type EnquiryFields = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
  gotcha: string;
};

export type EnquiryField = "name" | "email" | "website" | "message";

export type FieldErrors = Partial<Record<EnquiryField, string>>;

export type EnquiryStatus = "idle" | "invalid" | "sending" | "sent" | "error";

export type EnquiryState = {
  status: EnquiryStatus;
  errors: FieldErrors;
};

export type EnquiryRequest = {
  endpoint: string;
  payload: Record<string, string>;
};

export type EnquiryEvent =
  | { type: "submit"; fields: EnquiryFields; endpoint: string }
  | { type: "succeeded" }
  | { type: "failed" };

export type EnquiryReduction = {
  state: EnquiryState;
  request?: EnquiryRequest;
};

export const initialEnquiryState: EnquiryState = { status: "idle", errors: {} };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function cleanLine(value: string, max: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export function validWebsite(value: string) {
  if (!value || /\s/.test(value)) {
    return !value;
  }

  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return (url.protocol === "https:" || url.protocol === "http:") && url.hostname.includes(".");
  } catch {
    return false;
  }
}

export function validateEnquiry(fields: EnquiryFields): { errors: FieldErrors; payload?: Record<string, string> } {
  const name = cleanLine(fields.name, 120);
  const email = cleanLine(fields.email, 160);
  const company = cleanLine(fields.company, 160);
  const website = fields.website.trim().slice(0, 200);
  const message = fields.message.trim().slice(0, 4000);
  const errors: FieldErrors = {};

  if (name.length < 2) {
    errors.name = contactCopy.errors.name;
  }

  if (!emailPattern.test(email)) {
    errors.email = contactCopy.errors.email;
  }

  if (!validWebsite(website)) {
    errors.website = contactCopy.errors.website;
  }

  if (message.length < 2) {
    errors.message = contactCopy.errors.message;
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  return {
    errors,
    payload: {
      name,
      email,
      company,
      website,
      message,
      _subject: enquirySubject,
      _gotcha: "",
    },
  };
}

export function firstError(errors: FieldErrors): EnquiryField | undefined {
  return (["name", "email", "website", "message"] as const).find((key) => errors[key]);
}

export function reduceEnquiry(state: EnquiryState, event: EnquiryEvent): EnquiryReduction {
  if (event.type === "succeeded") {
    return { state: { status: "sent", errors: {} } };
  }

  if (event.type === "failed") {
    return { state: { status: "error", errors: {} } };
  }

  if (state.status === "sending") {
    return { state };
  }

  if (event.fields.gotcha.trim()) {
    return { state: { status: "sent", errors: {} } };
  }

  if (!event.endpoint) {
    return { state: { status: "error", errors: {} } };
  }

  const checked = validateEnquiry(event.fields);

  if (!checked.payload) {
    return { state: { status: "invalid", errors: checked.errors } };
  }

  return {
    state: { status: "sending", errors: {} },
    request: { endpoint: event.endpoint, payload: checked.payload },
  };
}
