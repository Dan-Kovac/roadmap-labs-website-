import Link from "next/link";
import { LaptopFrame } from "@/components/laptop-frame";
import { Rich } from "@/components/rich";
import { SectionHeader } from "@/components/section-header";
import { putToWork } from "@/lib/copy";

export function PutToWork() {
  return (
    <section className="section" id="put-to-work" aria-labelledby="work-heading">
      <div className="rl-container">
        <SectionHeader
          id="work-heading"
          index="02"
          label={putToWork.label}
          title={<Rich text={putToWork.title} />}
          lead={<Rich text={putToWork.lead} />}
        />
        <ul className="card-grid">
          {putToWork.cards.map((card, number) => (
            <li key={card.title} className="card">
              <p className="rl-mono">{String(number + 1).padStart(2, "0")}</p>
              <h3>{card.title}</h3>
              <p>
                <Rich text={card.body} />
              </p>
              <LaptopFrame
                state={card.shot}
                src={card.src || undefined}
                alt={card.title}
                objectPosition="left center"
                note={card.shot === "image" ? "" : "[IMAGE: held until a capture is supplied]"}
              />
              {card.caseName ? (
                <p className="case-ref">
                  <span className="rl-mono">{card.caseLabel}</span>
                  {card.href ? (
                    <>
                      {" "}
                      <Link href={card.href}>
                        {card.caseName} <span aria-hidden="true">→</span>
                      </Link>
                    </>
                  ) : (
                    <> {card.caseName}</>
                  )}
                </p>
              ) : null}
              <p>
                <Link className="rl-btn-text" href={card.serviceHref}>
                  {card.serviceLabel}
                </Link>
              </p>
            </li>
          ))}
        </ul>
        <p className="lead" style={{ marginTop: 24 }}>
          <Rich text={putToWork.models} />
        </p>
      </div>
    </section>
  );
}
