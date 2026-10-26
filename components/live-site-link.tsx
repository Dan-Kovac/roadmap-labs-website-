export function LiveSiteLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} rel="noopener">
      {label} ↗
    </a>
  );
}
