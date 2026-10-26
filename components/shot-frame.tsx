import Image from "next/image";
import { Rich } from "@/components/rich";
import { showPlaceholders } from "@/lib/text";

export function ShotFrame({
  src,
  alt,
  caption,
  ratio = "wide",
  placeholder,
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
    if (!showPlaceholders() || !placeholder) {
      return null;
    }

    return (
      <figure className={`shot shot-${ratio} shot-missing`}>
        <div className="shot-slot rl-mono">
          <Rich text={placeholder} />
        </div>
        {caption ? (
          <figcaption>
            <Rich text={caption} />
          </figcaption>
        ) : null}
      </figure>
    );
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
