import Image from "next/image";
import { Rich } from "@/components/rich";
import { showPlaceholders } from "@/lib/text";

export function LaptopFrame({
  alt,
  src,
  state,
  note,
  caption,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  objectPosition = "top center",
  priority = false,
}: {
  alt: string;
  src?: string;
  state: "image" | "held" | "capture";
  note?: string;
  caption?: string;
  sizes?: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  const showNote = showPlaceholders() && state !== "image" && note;

  return (
    <figure className="lap">
      <div className="lap-body">
        {/* The laptop SVG is decorative. The screenshot carries the description. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lap-svg" src="/device/laptop.svg" alt="" aria-hidden="true" />
        <div className={`lap-scr${state === "image" ? "" : " lap-held"}`}>
          {state === "image" && src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              style={{ objectFit: "cover", objectPosition }}
            />
          ) : null}
          {showNote ? (
            <p className="lap-note rl-mono">
              <Rich text={note} />
            </p>
          ) : null}
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
