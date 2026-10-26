import Image from "next/image";
import { Rich } from "@/components/rich";

export function PhoneFrame({
  alt,
  src,
  caption,
}: {
  alt: string;
  src: string;
  caption?: string;
}) {
  return (
    <figure className="phone-figure">
      <div className="phone">
        <div className="phone-scr">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="280px"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>
      {caption ? (
        <figcaption>
          <Rich text={caption} />
        </figcaption>
      ) : null}
    </figure>
  );
}
