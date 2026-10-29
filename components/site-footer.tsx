import Link from "next/link";
import { Logo } from "@/components/logo";
import { chrome } from "@/lib/copy";
import { contactEmail, contactHref, footerServiceLinks, navItems } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="rl-container footer-top">
        <div>
          <Logo variant="footer" />
          <p className="footer-note">{chrome.footerDescriptor}</p>
          <p className="footer-note">{chrome.footerLocation}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            {footerServiceLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/privacy">Privacy</Link>
          </div>
        </nav>
      </div>
      <div className="rl-container footer-bottom">
        <p>
          © {year} Roadmap Labs
          <span aria-hidden="true"> · </span>
          <a className="rl-link" href={contactHref}>
            {contactEmail}
          </a>
        </p>
      </div>
    </footer>
  );
}
