import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#f3f7fc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={sans.variable}>
      <body>
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
