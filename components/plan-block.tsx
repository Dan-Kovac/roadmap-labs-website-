import Link from "next/link";
import { Rich } from "@/components/rich";
import { offer } from "@/lib/copy";
import { priceFigure, priceLine, priceUnit, visibleCopy } from "@/lib/text";

export function PlanBlock({ services = false }: { services?: boolean }) {
  return (
    <div className="plan" id="offer">
      <div className="plan-main">
        <div className="plan-price-row">
          <div>
            <p className="rl-mono">{offer.planLabel}</p>
            <p className="price">
              {priceFigure}
              <span className="price-unit">{priceUnit}</span>
            </p>
            <p className="price-note">
              <Rich text={priceLine} />
            </p>
          </div>
          <ol className="included">
            {offer.included.map((item, index) => (
              <li key={item}>
                <span className="rl-mono">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="plan-side">
        <p className="rl-mono" id="compare-label">
          {offer.comparisonLabel}
        </p>
        <table className="compare" aria-describedby="offer-footnote">
          <caption className="sr-only">What a monthly plan replaces</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">What a business pays for</th>
              <th scope="col">Per month</th>
            </tr>
          </thead>
          <tbody>
            {offer.rows.map((row) => (
              <tr key={row.label} className={row.tone}>
                <th scope="row">{row.label}</th>
                <td>{row.figure}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="footnote" id="offer-footnote">
          <Rich text={offer.footnote} />
        </p>
        <p className="table-link">
          <Link className="rl-btn-text" href="/services">
            See what&apos;s in the plan <span className="arrow">→</span>
          </Link>
        </p>
      </div>
      {services ? (
        <div className="plan-extra">
          <p>
            <Rich text={offer.notIncluded} />
          </p>
          <p>
            <Rich text={offer.supporting} />
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function FinePrint({ items }: { items: { title: string; body: string; marker?: string }[] }) {
  return (
    <div className="fine">
      {items.map((item) => (
        <article key={item.title}>
          <h3>
            {item.marker && visibleCopy(item.marker) ? (
              <span className="copy-slot">{visibleCopy(item.marker)} </span>
            ) : null}
            {item.title}
          </h3>
          <p>
            <Rich text={item.body} />
          </p>
        </article>
      ))}
    </div>
  );
}
