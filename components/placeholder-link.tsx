export function PlaceholderLink({ label, marker }: { label: string; marker: string }) {
  return (
    <p className="placeholder-link">
      <span className="rl-btn-text" aria-disabled="true">
        {label}
      </span>
      <span className="copy-slot">{marker}</span>
    </p>
  );
}
