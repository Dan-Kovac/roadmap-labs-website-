import type { ReactNode } from "react";
import { Rich } from "@/components/rich";

export function SectionHeader({
  index,
  label,
  title,
  second,
  lead,
  action,
  id,
}: {
  index: string;
  label: string;
  title?: ReactNode;
  second?: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <header className="section-head">
      <p className="rl-mono section-label">
        {index ? (
          <>
            {index} · {typeof label === "string" ? <Rich text={label} /> : label}
          </>
        ) : (
          typeof label === "string" ? <Rich text={label} /> : label
        )}
      </p>
      <div className="section-title-row">
        <h2 id={id}>
          {second ? <span className="voice-2">{second}</span> : null}
          {title ? <span className="h-line">{title}</span> : null}
        </h2>
        {action ? <div className="section-action">{action}</div> : null}
      </div>
      {lead ? <p className="lead">{lead}</p> : null}
    </header>
  );
}
