import type { NextConfig } from "next";
import { siteRedirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return siteRedirects.map((redirect) => ({ ...redirect }));
  },
};

export default nextConfig;
