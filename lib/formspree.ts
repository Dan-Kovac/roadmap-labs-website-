import { contactEmail } from "@/lib/site";

let warned = false;

/** HTTPS Formspree endpoint from NEXT_PUBLIC_FORMSPREE_ENDPOINT, or "" when it is unset or not https. */
export function formspreeEndpoint() {
  const value = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ?? "";

  if (!value) {
    return "";
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:") {
      return "";
    }

    return url.toString();
  } catch {
    return "";
  }
}

/** Logs once per server process when the enquiry form has to fall back to email. */
export function warnIfFormspreeMissing() {
  const endpoint = formspreeEndpoint();

  if (endpoint) {
    return endpoint;
  }

  if (!warned) {
    warned = true;
    console.warn(
      `NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set. Enquiry forms fall back to mailto:${contactEmail}.`,
    );
  }

  return "";
}

export function resetFormspreeWarningForTests() {
  warned = false;
}
