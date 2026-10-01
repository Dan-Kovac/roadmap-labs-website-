import type { Metadata } from "next";
import { OfferStrip } from "@/components/offer-strip";
import { SelectedWork } from "@/components/selected-work";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Building software has never been easier. Building the right software is still just as hard.",
};

export default function HomePage() {
  return (
    <div className="home">
      <section className="fold" aria-labelledby="fold-title">
        <h1 className="fold-copy" id="fold-title">
          <span className="fold-line">Building software has never been easier.</span>
          <span className="fold-line">Building the right software is still just as hard.</span>
          <a className="fold-line fold-cta" href={contactHref}>
            Email Dan.
          </a>
        </h1>
      </section>
      <div className="bleed" aria-hidden="true" />
      <OfferStrip />
      <SelectedWork />
    </div>
  );
}
