import Link from "next/link";
import { Rich } from "@/components/rich";
import { SectionHeader } from "@/components/section-header";
import { comparison } from "@/lib/copy";

export function ComparisonTable({ index = "", href }: { index?: string; href: string }) {
  return (
    <section className="section" aria-labelledby="compare-heading">
      <div className="rl-container">
        <SectionHeader
          id="compare-heading"
          index={index}
          label={comparison.label}
          title={comparison.title}
          lead={comparison.lead}
        />
        <div className="cmp">
          <div className="cmp-head" aria-hidden="true">
            <span>{comparison.issueHeader}</span>
            <span>{comparison.teamHeader}</span>
            <span>{comparison.usHeader}</span>
            <span>{comparison.whyHeader}</span>
          </div>
          {comparison.rows.map((row) => (
            <article key={row.label} className="cmp-row">
              <h3 className="cmp-label">{row.label}</h3>
              <p className="cmp-team">
                <span className="cmp-k">{comparison.teamHeader}</span>
                <Rich text={row.team} />
              </p>
              <p className="cmp-us">
                <span className="cmp-k">{comparison.usHeader}</span>
                <Rich text={row.us} />
              </p>
              <p className="cmp-why">
                <span className="cmp-k">{comparison.whyHeader}</span>
                <Rich text={row.why} />
              </p>
            </article>
          ))}
        </div>
        <p className="footnote">
          <Rich text={comparison.footnote} />
        </p>
        <p>
          <Link className="rl-btn-text" href={href}>
            {comparison.linkLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
