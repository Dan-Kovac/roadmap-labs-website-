/** Server-only. Imported by the contact page and the form action, not by client components. */
export function formEndpoint() {
  const value = process.env.CONTACT_FORM_ENDPOINT?.trim() ?? "";

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
