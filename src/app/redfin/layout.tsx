import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redfin",
  description: "The native Jellyfin music player",
  openGraph: {
    title: "Redfin",
    description: "The native Jellyfin music player",
    url: "https://kodydeda.vercel.app/redfin",
    siteName: "Kody Deda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redfin",
    description: "The native Jellyfin music player",
  },
};

export default function MusicAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
