import type { Metadata } from "next";
import { SelectedWork } from "@/components/selected-work";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them.",
};

export default function HomePage() {
  return (
    <div className="home">
      <section className="fold">
        <h1>
          Building software has never been easier.
          <br />
          Building the right software is still just as hard.
        </h1>
      </section>
      <div className="fold-follow">
        <p className="fold-support">
          We work out exactly what your business needs, then build apps, websites
          and automations around how people actually use them.
        </p>
        <a className="rl-btn rl-btn-primary" href={contactHref}>
          Email Dan
        </a>
      </div>
      <SelectedWork />
    </div>
  );
}
