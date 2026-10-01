import Link from "next/link";
import { Logo } from "@/components/logo";
import { contactHref, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-bar">
        <div className="footer-brand">
          <Link className="logo-link" href="/">
            <Logo variant="footer" />
          </Link>
          <p className="footer-descriptor">Software & automations studio</p>
        </div>
        <nav className="nav" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={contactHref}>Email Dan</a>
        </nav>
      </div>
    </footer>
  );
}
