export const permanentRedirects = [
  {
    source: "/projects/compass-website",
    destination: "/projects/compass-buyers-agency",
    permanent: true,
  },
  {
    source: "/projects/compass-os",
    destination: "/projects/compass-buyers-agency",
    permanent: true,
  },
  { source: "/work", destination: "/projects", permanent: true },
  // Skip files such as /work/*.jpg so screenshots in public/work stay on their URLs.
  { source: "/work/:slug((?!.*\\.).*)", destination: "/projects/:slug", permanent: true },
  { source: "/partner-plan", destination: "/services", permanent: true },
  { source: "/pricing", destination: "/services", permanent: true },
  { source: "/case-studies", destination: "/projects", permanent: true },
  { source: "/case-studies/:slug*", destination: "/projects/:slug*", permanent: true },
] as const;

export const temporaryRedirects = [
  { source: "/insights/page/1", destination: "/insights", permanent: false },
  {
    source: "/insights/category/:slug/page/1",
    destination: "/insights/category/:slug",
    permanent: false,
  },
] as const;

export const siteRedirects = [...permanentRedirects, ...temporaryRedirects];
