import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav className="crumbs rl-mono" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={`${item.name}-${index}`}>
              {item.path && !last ? <Link href={item.path}>{item.name}</Link> : <span>{item.name}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
