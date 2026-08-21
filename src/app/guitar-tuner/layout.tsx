import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guitar Tuner",
  description: "A simple, accurate guitar tuner.",
  openGraph: {
    title: "Guitar Tuner",
    description: "A simple, accurate guitar tuner.",
    url: "https://kodydeda.vercel.app/guitar-tuner",
    siteName: "Kody Deda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guitar Tuner",
    description: "A simple, accurate guitar tuner.",
  },
};

export default function GuitarTunerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
