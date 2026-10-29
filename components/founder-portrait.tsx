import Image from "next/image";
import { founderPhoto } from "@/lib/copy";

export function FounderPortrait({
  priority = false,
  sizes,
}: {
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure className="portrait">
      <Image
        src={founderPhoto.src}
        alt={founderPhoto.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </figure>
  );
}
