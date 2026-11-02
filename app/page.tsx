import { HomeHifi } from "@/components/home-hifi";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { professionalServiceJsonLd, websiteJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata = pageMetadata({
  title: seo.home.title,
  description: seo.home.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[professionalServiceJsonLd(), websiteJsonLd()]} />
      <HomeHifi />
    </>
  );
}
