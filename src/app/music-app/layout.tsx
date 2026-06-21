import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music App",
  description: "Music player for macOS with vim keybindings.",
  openGraph: {
    title: "Music App",
    description: "Music player for macOS with vim keybindings.",
    url: "https://kodydeda.vercel.app/music-app",
    siteName: "Kody Deda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Music App",
    description: "Music player for macOS with vim keybindings.",
  },
};

export default function MusicAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
