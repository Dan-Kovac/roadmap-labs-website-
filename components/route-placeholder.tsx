type RoutePlaceholderProps = {
  kicker: string;
  title: string;
  note: string;
  slug?: string;
};

export function RoutePlaceholder({
  kicker,
  title,
  note,
  slug,
}: RoutePlaceholderProps) {
  return (
    <article className="placeholder">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="note">{note}</p>
      {slug ? <p className="slug">{slug}</p> : null}
    </article>
  );
}
