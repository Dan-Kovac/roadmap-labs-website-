import Link from "next/link";
import { selectedWork, type WorkFrame } from "@/lib/selected-work";

function Hill({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 72" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 72V46c16 1 26-28 46-26 16 2 22 18 40 16 14-2 24-8 36-20 12 10 22 24 38 28v28H0Z"
      />
    </svg>
  );
}

function CompassOs() {
  return (
    <div className="ui-os">
      <Hill className="ui-hill" />
      <p className="ui-word">Compass</p>
      <ul className="ui-list">
        <li>Today</li>
        <li>Board</li>
        <li>Notes</li>
      </ul>
    </div>
  );
}

function Stars({ filled }: { filled: number }) {
  return (
    <span className="ui-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < filled ? "is-on" : undefined} />
      ))}
    </span>
  );
}

function ReviewRow({ filled }: { filled: number }) {
  return (
    <li>
      <span className="ui-avatar" />
      <span className="ui-copy">
        <span className="ui-line" />
        <span className="ui-line ui-line-short" />
        <Stars filled={filled} />
      </span>
    </li>
  );
}

function ReviewBuddy() {
  return (
    <div className="ui-rb">
      <p className="ui-word">Review Buddy</p>
      <ul className="ui-reviews">
        <ReviewRow filled={5} />
        <ReviewRow filled={4} />
        <ReviewRow filled={5} />
      </ul>
    </div>
  );
}

function Flexfolio() {
  return (
    <div className="ui-flex">
      <div className="ui-flex-bar">Flexfolio</div>
      <ul className="ui-flex-list">
        <li>Project</li>
        <li>Project</li>
        <li>Writing</li>
      </ul>
    </div>
  );
}

function CompassSite() {
  return (
    <div className="ui-site">
      <p className="ui-word">Compass</p>
      <Hill className="ui-hill ui-hill-lg" />
    </div>
  );
}

function Frame({ frame }: { frame: WorkFrame }) {
  if (frame === "compass-os") return <CompassOs />;
  if (frame === "review-buddy") return <ReviewBuddy />;
  if (frame === "flexfolio") return <Flexfolio />;
  return <CompassSite />;
}

export function SelectedWork() {
  return (
    <section className="work" aria-labelledby="selected-work">
      <div className="work-intro">
        <h2 id="selected-work">Selected work</h2>
        <p>Placeholder frames. Product colour only.</p>
      </div>
      <ul className="work-strip">
        {selectedWork.map((project) => (
          <li key={project.slug} className={`work-panel work-panel-${project.frame}`}>
            <h3>{project.name}</h3>
            <div className="panel">
              <div className="panel-ui" aria-hidden="true">
                <Frame frame={project.frame} />
              </div>
              <div className="panel-foot">
                <p>{project.job}</p>
                {project.external ? (
                  <a className="platform-cta" href={project.href}>
                    {project.cta}
                  </a>
                ) : (
                  <Link className="platform-cta" href={project.href}>
                    {project.cta}
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
