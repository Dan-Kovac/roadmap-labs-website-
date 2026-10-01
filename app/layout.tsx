import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Roadmap Labs",
    template: "%s · Roadmap Labs",
  },
  description: "Software and automations studio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={sans.variable}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
