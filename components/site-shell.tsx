import type { ReactNode } from "react";
import { Rich } from "@/components/rich";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { chrome } from "@/lib/copy";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <a className="skip rl-btn rl-btn-primary" href="#main">
        <Rich text={chrome.skip} />
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
