import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(
    path.join(process.cwd(), "public/appicon-music.png")
  );
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

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
          gap: 40,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconSrc}
          width={160}
          height={160}
          style={{ borderRadius: 36 }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              color: "#fff",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            Music App
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: 48,
              fontWeight: 400,
              opacity: 0.85,
            }}
          >
            Music player for macOS with vim keybindings.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
