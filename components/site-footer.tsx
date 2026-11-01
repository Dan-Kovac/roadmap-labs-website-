import Link from "next/link";
import { Logo } from "@/components/logo";
import { chrome } from "@/lib/copy";
import { contactEmail, contactHref, navItems } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="rl-container ft-top">
        <Logo variant="footer" />
        <nav className="footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="rl-container ft-bot">
        <span>
          {chrome.footerDescriptor} · {chrome.footerLocation}
        </span>
        <span>
          © {year} Roadmap Labs ·{" "}
          <a href={contactHref}>{contactEmail}</a>
        </span>
      </div>
    </footer>
  );
}
