import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function titleImage({ label, title }: { label: string; title: string }) {
  const [display, mono] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InterDisplay-SemiBold-600.ttf")),
    readFile(join(process.cwd(), "assets/fonts/JetBrainsMono-Regular-400.ttf")),
  ]);
  const titleSize = title.length < 48 ? 64 : 48;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FFFFFF",
          color: "#0B0D12",
          borderBottom: "12px solid #0B0D12",
        }}
      >
        <div style={{ fontFamily: "JetBrains Mono", fontSize: 22, color: "#5B616E" }}>{label}</div>
        <div
          style={{
            fontFamily: "Inter Display",
            fontWeight: 600,
            fontSize: titleSize,
            letterSpacing: "-0.03em",
            lineHeight: 1.04,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "Inter Display", fontSize: 28, fontWeight: 600 }}>Roadmap Labs</div>
          <div style={{ fontFamily: "JetBrains Mono", fontSize: 22, color: "#5B616E" }}>
            roadmaplabs.com.au
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter Display", data: display, weight: 600, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
