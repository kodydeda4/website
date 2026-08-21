import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peg Puzzle Classic",
  description: "The classic peg solitaire puzzle game.",
  openGraph: {
    title: "Peg Puzzle Classic",
    description: "The classic peg solitaire puzzle game.",
    url: "https://kodydeda.vercel.app/peg-puzzle-classic",
    siteName: "Kody Deda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peg Puzzle Classic",
    description: "The classic peg solitaire puzzle game.",
  },
};

export default function PegPuzzleClassicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
