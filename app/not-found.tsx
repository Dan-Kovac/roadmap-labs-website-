import Link from "next/link";

export default function NotFound() {
  return (
    <section className="editorial">
      <p className="quiet">404</p>
      <h1 className="thesis">
        <span className="thesis-line">That page is not on this site.</span>
      </h1>
      <p className="article-back">
        <Link className="back-link" href="/">
          Back home
        </Link>
      </p>
    </section>
  );
}
