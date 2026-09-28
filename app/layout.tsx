import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roadmap Labs",
  description:
    "Building software has never been easier. Building the right software is still just as hard.",
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
