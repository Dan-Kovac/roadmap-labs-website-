import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { gaId } from "@/lib/site";

export function Analytics() {
  const id = gaId();

  return (
    <>
      <SpeedInsights />
      {id ? <GoogleAnalytics gaId={id} /> : null}
    </>
  );
}
