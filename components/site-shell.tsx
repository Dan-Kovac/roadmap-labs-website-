import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="site-main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
