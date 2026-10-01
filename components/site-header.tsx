"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { contactHref, navItems } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href.includes("#")) {
    return false;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-bar">
        <Link className="logo-link" href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="nav nav-desktop" aria-label="Primary">
          {navItems.map((item) =>
            item.href.includes("#") ? (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header-actions">
          <a className="header-mail" href={contactHref}>
            Email Dan
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="nav nav-mobile" id="mobile-nav" aria-label="Primary">
          {navItems.map((item) =>
            item.href.includes("#") ? (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      ) : null}
    </header>
  );
}
