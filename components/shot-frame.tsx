import Image from "next/image";
import { Rich } from "@/components/rich";

export function ShotFrame({
  src,
  alt,
  caption,
  ratio = "wide",
  objectPosition = "top center",
}: {
  src?: string;
  alt: string;
  caption?: string;
  ratio?: "wide" | "tall" | "video";
  placeholder?: string;
  objectPosition?: string;
}) {
  if (!src) {
    return null;
  }

  return (
    <figure className={`shot shot-${ratio}`}>
      <div className="shot-media">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          style={{ objectFit: "cover", objectPosition }}
        />
      </div>
      {caption ? (
        <figcaption>
          <Rich text={caption} />
        </figcaption>
      ) : null}
    </figure>
  );
}
