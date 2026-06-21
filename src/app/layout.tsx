import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kody Deda - Senior iOS Developer",
  description: "Senior iOS Developer from Wilmington, NC",
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
  },
  metadataBase: new URL("https://kodydeda.vercel.app"),
  openGraph: {
    title: "Kody Deda",
    description: "Senior iOS Developer from Wilmington, NC",
    url: "https://kodydeda.vercel.app",
    siteName: "Kody Deda",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kody Deda",
    description: "Senior iOS Developer from Wilmington, NC",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
