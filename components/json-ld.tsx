import { organisationJsonLd } from "@/lib/site";

export function JsonLd() {
  const json = JSON.stringify(organisationJsonLd).replace(/</g, "\\u003c");

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
