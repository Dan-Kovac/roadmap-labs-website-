import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { contactCopy } from "@/lib/copy";
import {
  enquirySubject,
  initialEnquiryState,
  reduceEnquiry,
  type EnquiryFields,
} from "@/lib/enquiry";
import { defaultFormspreeFormId, formspreeEndpoint, formspreeFormId, readFormspreeErrors } from "@/lib/formspree";
import { enquiryHref } from "@/lib/site";

const endpoint = "https://formspree.io/f/test";

const valid: EnquiryFields = {
  name: "Alex Nguyen",
  email: "alex@example.com.au",
  company: "Northwind",
  website: "northwind.com.au",
  message: "Follow-ups are falling through.",
  gotcha: "",
};

describe("enquiry form state", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("uses the approved button and success lines, with no GST wording", () => {
    expect(contactCopy.send).toBe("Send enquiry");
    expect(contactCopy.success).toBe("Thanks. I'll get back to you within one business day.");
    expect(contactCopy.send).not.toMatch(/GST/i);
    expect(contactCopy.success).not.toMatch(/GST/i);
    expect(contactCopy.send).not.toContain("[[");
    expect(contactCopy.success).not.toContain("[[");
  });

  it("stays idle until a valid note is ready to send", () => {
    const result = reduceEnquiry(initialEnquiryState, {
      type: "submit",
      fields: valid,
      endpoint,
    });

    expect(result.state.status).toBe("sending");
    expect(result.request?.endpoint).toBe(endpoint);
    expect(result.request?.payload).toMatchObject({
      name: "Alex Nguyen",
      email: "alex@example.com.au",
      company: "Northwind",
      website: "northwind.com.au",
      message: "Follow-ups are falling through.",
      _subject: enquirySubject,
      _gotcha: "",
    });
    expect(enquirySubject).toBe("New Roadmap Labs enquiry");
  });

  it("keeps field errors and does not post when the note is incomplete", () => {
    const result = reduceEnquiry(initialEnquiryState, {
      type: "submit",
      fields: { ...valid, name: " ", email: "alex", website: "not a site", message: " " },
      endpoint,
    });

    expect(result.state.status).toBe("invalid");
    expect(result.request).toBeUndefined();
    expect(result.state.errors.name).toBe(contactCopy.errors.name);
    expect(result.state.errors.email).toBe(contactCopy.errors.email);
    expect(result.state.errors.website).toBe(contactCopy.errors.website);
    expect(result.state.errors.message).toBe(contactCopy.errors.message);
  });

  it("treats a filled honeypot as sent and does not call Formspree", () => {
    const result = reduceEnquiry(initialEnquiryState, {
      type: "submit",
      fields: { ...valid, gotcha: "https://spam.example" },
      endpoint,
    });

    expect(result.state).toEqual({ status: "sent", errors: {} });
    expect(result.request).toBeUndefined();
  });

  it("moves from sending to sent or error without another request", () => {
    const sending = reduceEnquiry(initialEnquiryState, { type: "submit", fields: valid, endpoint });
    expect(reduceEnquiry(sending.state, { type: "succeeded" }).state.status).toBe("sent");
    expect(reduceEnquiry(sending.state, { type: "failed" }).state.status).toBe("error");
    expect(reduceEnquiry(sending.state, { type: "submit", fields: valid, endpoint }).request).toBeUndefined();
  });

  it("does not post when the endpoint is missing", () => {
    const result = reduceEnquiry(initialEnquiryState, { type: "submit", fields: valid, endpoint: "" });
    expect(result.state.status).toBe("error");
    expect(result.request).toBeUndefined();
  });

  it("posts to Dan's form unless a test id is set", () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_FORM_ID", "");
    expect(defaultFormspreeFormId).toBe("xdeeekqw");
    expect(formspreeFormId()).toBe("xdeeekqw");
    expect(formspreeEndpoint()).toBe("https://formspree.io/f/xdeeekqw");

    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_FORM_ID", "citest");
    expect(formspreeEndpoint()).toBe("https://formspree.io/f/citest");
    expect(formspreeEndpoint()).not.toContain("xdeeekqw");

    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_FORM_ID", "https://formspree.io/f/xdeeekqw");
    expect(formspreeFormId()).toBe("xdeeekqw");
  });

  it("reads Formspree field errors and a form-level error", () => {
    expect(
      readFormspreeErrors({
        error: "Validation errors",
        errors: [{ field: "email", message: "must be a valid email" }],
      }),
    ).toEqual({
      errors: { email: "must be a valid email" },
      formError: "Validation errors",
    });

    expect(readFormspreeErrors({ errors: { website: ["must be a url"] } })).toEqual({
      errors: { website: "must be a url" },
      formError: "",
    });

    const failed = reduceEnquiry(
      { status: "sending", errors: {} },
      { type: "failed", errors: { email: "must be a valid email" }, formError: "Validation errors" },
    );
    expect(failed.state).toEqual({
      status: "error",
      errors: { email: "must be a valid email" },
      formError: "Validation errors",
    });
    expect(failed.request).toBeUndefined();
  });

  it("points home enquiries at the start form and other pages at contact", () => {
    expect(enquiryHref("/")).toBe("#start");
    expect(enquiryHref("/contact")).toBe("#enquiry");
    expect(enquiryHref("/services")).toBe("/contact");
    expect(enquiryHref("/services/marketing")).toBe("/contact");
  });

  it("keeps Book a call off the rendered site", () => {
    const roots = ["app", "components", "lib", "content/insights", "content/work"];

    function filesIn(dir: string): string[] {
      return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          return filesIn(full);
        }

        return /\.(ts|tsx|md|mdx)$/.test(entry.name) && !entry.name.endsWith(".test.ts") ? [full] : [];
      });
    }

    const hits = roots.flatMap((root) =>
      filesIn(path.join(process.cwd(), root)).filter((file) => fs.readFileSync(file, "utf8").includes("Book a call")),
    );

    expect(hits).toEqual([]);
  });
});
