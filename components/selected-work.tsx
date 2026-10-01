import Link from "next/link";
import { selectedWork, type WorkFrame } from "@/lib/selected-work";

function Frame({ kind }: { kind: WorkFrame }) {
  if (kind === "app") {
    return (
      <div className="ui ui-app">
        <div className="ui-side">
          <span />
          <span />
          <span className="is-mark" />
          <span />
        </div>
        <div className="ui-main">
          <div className="ui-panel ui-panel-wide" />
          <div className="ui-panel" />
          <div className="ui-panel" />
          <div className="ui-panel" />
        </div>
      </div>
    );
  }

  if (kind === "reviews") {
    return (
      <div className="ui ui-reviews">
        <div className="ui-review">
          <span className="ui-avatar" />
          <span className="ui-lines" />
        </div>
        <div className="ui-review is-mark">
          <span className="ui-avatar" />
          <span className="ui-lines" />
        </div>
        <div className="ui-review">
          <span className="ui-avatar" />
          <span className="ui-lines" />
        </div>
      </div>
    );
  }

  if (kind === "portfolio") {
    return (
      <div className="ui ui-portfolio">
        <span className="ui-tile is-petrol" />
        <span className="ui-tile" />
        <span className="ui-tile" />
        <span className="ui-tile is-petrol is-mark" />
      </div>
    );
  }

  return (
    <div className="ui ui-site">
      <div className="ui-hero is-mark">
        <span />
        <span />
      </div>
      <div className="ui-split">
        <span />
        <span />
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section className="work" aria-labelledby="selected-work">
      <h2 id="selected-work">Selected work</h2>
      <ul className="work-grid">
        {selectedWork.map((project) => (
          <li key={project.slug}>
            <article className="mock">
              <div className="browser" aria-hidden="true">
                <div className="browser-chrome">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="browser-address" />
                </div>
                <Frame kind={project.frame} />
              </div>
              <h3>{project.name}</h3>
              <p>{project.job}</p>
              <Link className="rl-btn rl-btn-secondary" href={`/projects/${project.slug}`}>
                {project.cta}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
