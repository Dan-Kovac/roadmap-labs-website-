import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Roadmap Labs is Dan Kovac’s studio in Melbourne. He builds software, internal systems, automations, and the occasional website.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="editorial">
      <p className="quiet">About</p>
      <h1 className="thesis">
        <span className="thesis-line">Dan Kovac.</span>
        <span className="thesis-line">Melbourne.</span>
      </h1>
      <p className="positioning">Roadmap Labs is Dan’s studio.</p>
      <div className="editorial-prose">
        <p>
          He builds three kinds of thing. Software products the studio owns. Internal operating
          systems a business runs on. Automations and AI workflows around the work that repeats.
        </p>
        <p>He also takes on website, SEO and conversion work, when the public site is the job.</p>
        <p>
          Dan Kovac Builds is where he writes about building with AI. A weekly article goes on
          Substack. The same piece can be copied into{" "}
          <Link href="/insights">Insights</Link>, with the Substack address set as the canonical
          URL so the original stays clear.
        </p>
      </div>
      <dl className="fact-list">
        <div>
          <dt>Photo</dt>
          <dd>[PHOTO TBC]</dd>
        </div>
        <div>
          <dt>Longer bio</dt>
          <dd>[BIO TBC]</dd>
        </div>
      </dl>
      <p className="article-back">
        <Link className="back-link" href="/contact">
          Get in touch
        </Link>
      </p>
    </article>
  );
}
