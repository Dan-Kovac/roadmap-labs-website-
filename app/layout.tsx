import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roadmap Labs - apps, websites and automations that fit real use",
  description:
    "We work out exactly what your business needs, then build apps, websites and automations around how people actually use them.",
};

export const viewport: Viewport = {
  themeColor: "#f3f7fc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSans.className}`}>
      <body>{children}</body>
    </html>
  );
}
