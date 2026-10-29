import { howItWorks } from "@/lib/copy";

export function Steps() {
  return (
    <ol className="steps">
      {howItWorks.steps.map((step, index) => (
        <li key={step.title}>
          <p className="rl-mono">{String(index + 1).padStart(2, "0")}</p>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
