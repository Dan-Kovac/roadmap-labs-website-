import Link from "next/link";
import { Logo } from "@/components/logo";
import { contactEmail, contactHref, contactPath, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-bar">
        <div className="footer-brand">
          <Link className="logo-link" href="/">
            <Logo variant="footer" />
          </Link>
          <p className="footer-descriptor">Software & automations studio</p>
          <p className="footer-meta">Melbourne, Australia</p>
        </div>
        <nav className="nav" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={contactPath}>Get in touch</Link>
          <a href={contactHref}>Email {contactEmail}</a>
        </nav>
      </div>
    </footer>
  );
}
