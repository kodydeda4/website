import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { CopyButton } from "./copy-button";
import { HeroVideo } from "./hero-video";

export const revalidate = 300; // recheck every 5 minutes

async function getLatestRelease() {
  const res = await fetch(
    "https://api.github.com/repos/kodydeda4/redfin/releases/latest",
    { headers: { Accept: "application/vnd.github+json" } }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function MusicApp() {
  const release = await getLatestRelease();

  const version = release?.tag_name ?? "—";
  const date = release?.published_at
    ? new Date(release.published_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "—";
  const downloadUrl =
    release?.assets?.find((a: { name: string }) => a.name === "Redfin.zip")
      ?.browser_download_url ??
    "https://github.com/kodydeda4/redfin/releases/latest";

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col items-center gap-4 pb-12 px-4 md:px-0">
        <HeroVideo />
        <img src="/apps/redfin/icon.png" alt="Redfin" className="size-28 drop-shadow-md" />
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">Redfin</h1>
          <p className="max-w-md text-2xl font-bold leading-snug">
            The native Jellyfin music player.
          </p>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Redfin brings your Jellyfin music library to the desktop — a fast,
            native way to browse and play your music on macOS.
          </p>
        </div>
        <div className="grid w-full max-w-sm grid-cols-1 gap-3">
          <Button size="lg" className="h-11 w-full rounded-full px-6 text-base" asChild>
            <a href={downloadUrl} download>
              <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download for macOS
            </a>
          </Button>
          <CopyButton />
        </div>
        <a
          href="https://github.com/kodydeda4/redfin/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {version} · Releases
        </a>
      </main>
    </div>
  );
}
