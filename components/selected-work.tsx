import type { ReactNode } from "react";
import Link from "next/link";
import { homeWork } from "@/lib/selected-work";

function Hill() {
  return (
    <svg className="screen-hill" viewBox="0 0 200 90" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 90V52c22 2 34-34 62-32 24 2 30 22 54 20 18-2 32-12 48-26 12 14 24 28 36 32v44H0Z"
      />
    </svg>
  );
}

function Phone({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? "phone phone-wide" : "phone"}>
      <div className="phone-screen">{children}</div>
    </div>
  );
}

function CompassOs() {
  return (
    <Phone>
      <div className="screen screen-compass">
        <div className="screen-hero">
          <Hill />
        </div>
        <div className="screen-sheet">
          <p className="screen-name">Compass</p>
          <p className="screen-line">Today</p>
          <p className="screen-line">Board</p>
          <p className="screen-line">Notes</p>
        </div>
      </div>
    </Phone>
  );
}

function ReviewBuddy() {
  return (
    <Phone wide>
      <div className="screen screen-reviews">
        <p className="screen-name">Review Buddy</p>
        <div className="review-card">
          <p className="screen-kicker">New</p>
          <p className="screen-quote">Clear, and done the same day.</p>
          <p className="screen-stars" aria-hidden="true">
            ●●●●●
          </p>
        </div>
        <div className="review-card">
          <p className="screen-kicker">Answered</p>
          <p className="screen-quote">Asked once. Replied once.</p>
          <p className="screen-stars" aria-hidden="true">
            ●●●●○
          </p>
        </div>
      </div>
    </Phone>
  );
}

function Flexfolio() {
  return (
    <Phone>
      <div className="screen screen-flex">
        <p className="flex-mark">Flexfolio</p>
        <div className="flex-piece">
          <p className="screen-name">Project</p>
          <p className="screen-kicker">Published</p>
        </div>
        <div className="flex-piece">
          <p className="screen-name">Project</p>
          <p className="screen-kicker">Draft</p>
        </div>
        <div className="flex-piece">
          <p className="screen-name">Writing</p>
          <p className="screen-kicker">Live</p>
        </div>
      </div>
    </Phone>
  );
}

function Frame({ frame }: { frame: (typeof homeWork)[number]["frame"] }) {
  if (frame === "compass-os") return <CompassOs />;
  if (frame === "review-buddy") return <ReviewBuddy />;
  return <Flexfolio />;
}

export function SelectedWork() {
  return (
    <section className="work" aria-labelledby="selected-work">
      <h2 id="selected-work">Selected work</h2>
      <ul className="work-strip">
        {homeWork.map((project) => (
          <li key={project.slug} className={`work-panel work-panel-${project.frame}`}>
            <div className="work-copy">
              <h3>{project.name}</h3>
              <p>{project.job}</p>
              {project.external ? (
                <a className="platform-cta" href={project.href} rel="noreferrer">
                  {project.cta}
                </a>
              ) : (
                <Link className="platform-cta" href={project.href}>
                  {project.cta}
                </Link>
              )}
            </div>
            <div className={`scene scene-${project.frame}`}>
              <Frame frame={project.frame} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
