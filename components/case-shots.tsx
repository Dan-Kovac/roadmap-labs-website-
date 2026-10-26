import { LaptopFrame } from "@/components/laptop-frame";
import { PhoneFrame } from "@/components/phone-frame";
import { ShotFrame } from "@/components/shot-frame";
import type { Shot, WorkDoc } from "@/lib/content";
import { Markdown } from "@/lib/markdown";

function ShotView({ shot, priority = false }: { shot: Shot; priority?: boolean }) {
  if (!shot.src) {
    return null;
  }

  if (shot.frame === "phone") {
    return <PhoneFrame src={shot.src} alt={shot.alt} caption={shot.caption} />;
  }

  if (shot.frame === "laptop") {
    return (
      <LaptopFrame
        state="image"
        src={shot.src}
        alt={shot.alt}
        caption={shot.caption}
        objectPosition="top center"
        priority={priority}
        sizes="(min-width: 768px) 60vw, 100vw"
      />
    );
  }

  return (
    <ShotFrame src={shot.src} alt={shot.alt} caption={shot.caption} ratio={shot.crop} objectPosition="top center" />
  );
}

function placeFor(title: string): Shot["place"] | "" {
  if (title === "SEO") {
    return "seo";
  }

  if (title === "Conversion") {
    return "conversion";
  }

  if (title.startsWith("Where it is now")) {
    return "about";
  }

  return "";
}

export function CaseShots({ project }: { project: WorkDoc }) {
  const hero = project.shots.filter((shot) => shot.place === "hero" && shot.src);
  const sections = project.body.split(/\n(?=## )/);

  return (
    <>
      {hero.length ? (
        <div className="device-pair">
          {hero.map((shot, index) => (
            <ShotView key={shot.label} shot={shot} priority={index === 0} />
          ))}
        </div>
      ) : null}
      {hero.length && project.liveUrl ? (
        <p className="visit-site">
          <a className="rl-btn rl-btn-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit the site
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      ) : null}
      {sections.map((section) => {
        const title = section.match(/^## (.+)$/m)?.[1] ?? section.slice(0, 24);
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
