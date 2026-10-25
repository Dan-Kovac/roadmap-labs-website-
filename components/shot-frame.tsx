import Image from "next/image";
import type { Shot } from "@/lib/content";

export function ShotFrame({
  shot,
  priority = false,
  sizes,
}: {
  shot: Shot;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure className={`shot shot-${shot.crop}`}>
      <div className="shot-well">
        {shot.src ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="shot-img"
          />
        ) : (
          <div className="shot-empty">
            <span>{shot.placeholder || "[SCREENSHOT TBC]"}</span>
          </div>
        )}
      </div>
      <figcaption>
        <span>{shot.label}</span>
        {shot.src ? <span>Captured from the live site</span> : <span>Placeholder</span>}
      </figcaption>
    </figure>
  );
}
