import { LaptopFrame } from "@/components/laptop-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { ShotFrame } from "@/components/shot-frame";
import type { Shot, WorkDoc } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { visibleCopy } from "@/lib/text";

function captionFor(shot: Shot) {
  const caption = visibleCopy(shot.caption ?? "");
  return caption || undefined;
}

function ShotView({ shot, priority = false }: { shot: Shot; priority?: boolean }) {
  if (!shot.src) {
    return null;
  }

  const caption = captionFor(shot);
  const objectPosition = shot.src.includes("reviewbuddy-widget") ? "left center" : "top center";

  if (shot.frame === "phone") {
    return <PhoneFrame src={shot.src} alt={shot.alt} caption={caption} />;
  }

  if (shot.frame === "laptop") {
    return (
      <LaptopFrame
        state="image"
        src={shot.src}
        alt={shot.alt}
        caption={caption}
        objectPosition={objectPosition}
        priority={priority}
        sizes="(min-width: 768px) 60vw, 100vw"
      />
    );
  }

  return <ShotFrame src={shot.src} alt={shot.alt} caption={caption} ratio={shot.crop} objectPosition={objectPosition} />;
}

function placeFor(title: string): Shot["place"] | "" {
  if (title === "SEO") {
    return "seo";
  }

  if (title === "Conversion") {
    return "conversion";
  }

  if (title === "What's live now" || title.startsWith("Where it is now")) {
    return "about";
  }

  if (title === "What we built") {
    return "built";
  }

  return "";
}

export function CaseShots({ project }: { project: WorkDoc }) {
  const hero = project.shots.filter((shot) => shot.place === "hero" && shot.src);
  const framed = hero.some((shot) => shot.frame);
  const sections = project.body.trim().split(/\n(?=#{2,3} )/);
  const heroViews = hero.map((shot, index) => <ShotView key={shot.label} shot={shot} priority={index === 0} />);

  return (
    <>
      {hero.length ? framed ? <div className="device-pair">{heroViews}</div> : heroViews : null}
      {sections.map((section) => {
        const title = section.match(/^#{2,3} (.+)$/m)?.[1] ?? section.slice(0, 24);

        if (title === "The result" || title.startsWith("What's next")) {
          return null;
        }

        const place = placeFor(title);
        const shots = place ? project.shots.filter((shot) => shot.place === place && shot.src) : [];

        return (
          <div key={title}>
            <div className="prose">
              <Markdown source={section} />
            </div>
            {shots.map((shot) => (
              <ShotView key={shot.label} shot={shot} />
            ))}
          </div>
        );
      })}
    </>
  );
}
