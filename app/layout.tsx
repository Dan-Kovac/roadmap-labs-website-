import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Analytics } from "@/components/analytics";
import { CookieNotice } from "@/components/cookie-notice";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { rootMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/schema";
import { warnIfFormspreeMissing } from "@/lib/formspree";
import { assertProductionClean } from "@/lib/surface";
import "./globals.css";

const sans = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  assertProductionClean();
  warnIfFormspreeMissing();

  return (
    <html lang="en-AU" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <SiteShell>{children}</SiteShell>
        <CookieNotice />
        <Analytics />
      </body>
    </html>
  );
}
