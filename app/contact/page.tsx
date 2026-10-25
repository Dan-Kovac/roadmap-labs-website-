import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/metadata";
import { formEndpoint } from "@/lib/delivery";
import { bookingUrl, contactEmail, contactHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Book a call or write to Dan Kovac at Roadmap Labs in Melbourne.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const intent = typeof params.intent === "string" ? params.intent : undefined;
  const booking = bookingUrl();
  const defaultIntent =
    intent === "call"
      ? "Book a call"
      : intent === "automation"
        ? "Automations and AI"
        : undefined;

  return (
    <article className="editorial">
      <p className="quiet">Contact</p>
      <h1 className="thesis" id="book">
        <span className="thesis-line">Get in touch.</span>
      </h1>
      <p className="positioning">
        A call, a product question, or the shape of a system you need built.
      </p>
      <div className="contact-layout">
        <ContactForm deliveryConfigured={Boolean(formEndpoint())} defaultIntent={defaultIntent} />
        <aside className="contact-aside">
          <h2>Email</h2>
          <p>
            <a href={contactHref}>{contactEmail}</a>
          </p>
          <h2>Book a call</h2>
          {booking ? (
            <p>
              <a href={booking} rel="noreferrer">
                Open the booking page
              </a>
            </p>
          ) : (
            <p>
              [BOOKING LINK TBC]. There is no calendar link yet. Choose “Book a call” in the form,
              or email Dan and ask for a time.
            </p>
          )}
          <h2>Studio</h2>
          <p>Roadmap Labs. Melbourne, Australia.</p>
        </aside>
      </div>
    </article>
  );
}
