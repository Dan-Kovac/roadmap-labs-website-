import type { ReactNode } from "react";
import { Rich } from "@/components/rich";

export function PageHeader({
  label,
  line1,
  line2,
  lead,
}: {
  label: string;
  line1: string;
  line2?: string;
  lead?: ReactNode;
}) {
  return (
    <header className="page-header">
      <p className="rl-mono">{label}</p>
      <h1>
        {line2 ? (
          <>
            <span className="voice-2">
              <Rich text={line1} />
            </span>
            <span className="h-line">
              <Rich text={line2} />
            </span>
          </>
        ) : (
          <Rich text={line1} />
        )}
      </h1>
      {lead ? <div className="lead">{lead}</div> : null}
    </header>
  );
}
