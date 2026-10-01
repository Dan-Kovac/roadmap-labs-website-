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
      <section className="underfold" aria-labelledby="underfold-title">
        <h2 id="underfold-title">
          <span className="underfold-line">Software that respects the time.</span>
          <span className="underfold-line">It does the job, then it stops.</span>
        </h2>
        <div className="underfold-copy">
          <p>
            People open a tool to finish something. The useful ones let them. The rest keep a tab
            open and spend the hour on work the software should have done.
          </p>
          <p>The brief is smaller than it sounds. Do the job well. Leave the rest of the day alone.</p>
          <p>A clear step. A finished task. A product that does not ask for more time than it needs.</p>
        </div>
      </section>
      <OfferStrip />
      <SelectedWork />
    </div>
  );
}
