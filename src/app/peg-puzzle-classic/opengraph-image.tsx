import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          gap: 16,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          Peg Puzzle Classic
        </span>
        <span
          style={{
            color: "#fff",
            fontSize: 48,
            fontWeight: 400,
            opacity: 0.85,
          }}
        >
          The classic peg solitaire puzzle game.
        </span>
      </div>
    ),
    { ...size }
  );
}
