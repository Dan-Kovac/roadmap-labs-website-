import { ImageResponse } from "next/og";

export const alt = "Roadmap Labs. Building the right software is still just as hard.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f7fc",
          color: "#152033",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "99px",
              background: "#2a62f0",
            }}
          />
          <div style={{ fontSize: "28px", color: "#2a62f0" }}>Roadmap Labs</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "58px",
            lineHeight: 1.08,
            letterSpacing: "-1.4px",
            maxWidth: "980px",
          }}
        >
          <div>Building software has never been easier.</div>
          <div>Building the right software is still just as hard.</div>
        </div>
        <div style={{ fontSize: "28px", color: "#526070" }}>Melbourne, Australia</div>
      </div>
    ),
    { ...size },
  );
}
