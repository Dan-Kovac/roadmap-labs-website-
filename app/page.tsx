import Link from "next/link";

const MAIL = "mailto:dan@roadmaplabs.com.au";

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page">
      <div className="frame">
        <header className="nav">
          <Link className="wordmark" href="/">
            {/* SVG lockup, not a rasterized next/image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/roadmap-labs-primary-horizontal-blue-dmsans.svg"
              alt="Roadmap Labs"
              width={1206}
              height={364}
            />
          </Link>
          <a className="mail" href={MAIL}>
            Email Dan
            <Arrow />
          </a>
        </header>

        <main className="hero">
          <p className="soon">Full website coming soon</p>
          <h1>
            <span className="line">
              Building software has never been easier.
            </span>{" "}
            <span className="line">
              Building the right software is still just as hard.
            </span>
          </h1>
          <p className="support">
            We work out exactly what your business needs, then build apps,
            websites and automations around how people actually use them.
          </p>
          <div className="contact">
            <a className="mail" href={MAIL}>
              Email Dan
              <Arrow />
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
