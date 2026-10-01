import type { Metadata } from "next";
import { OfferStrip } from "@/components/offer-strip";
import { SelectedWork } from "@/components/selected-work";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them.",
};

export default function HomePage() {
  return (
    <div className="home">
      <section className="fold" aria-labelledby="fold-title">
        <div className="fold-copy">
          <h1 id="fold-title">
            Building software has never been easier. Building the right software
            is still just as hard.
          </h1>
          <p className="fold-support">
            We work out exactly what your business needs, then build apps, websites
            and automations around how people actually use them.
          </p>
          <a className="fold-cta" href={contactHref}>
            Email Dan
          </a>
        </div>
      </section>
      <section className="bleed" aria-label="Photograph">
        <p>Black-and-white photograph. None approved yet.</p>
      </section>
      <OfferStrip />
      <SelectedWork />
    </div>
  );
}
