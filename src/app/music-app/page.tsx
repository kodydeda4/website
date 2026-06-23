import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { CopyButton } from "./copy-button";

export const revalidate = 3600; // recheck every hour

async function getLatestRelease() {
  const res = await fetch(
    "https://api.github.com/repos/kodydeda4/music-player-releases/releases/latest",
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
    release?.assets?.find((a: { name: string }) => a.name === "Music.zip")
      ?.browser_download_url ??
    "https://github.com/kodydeda4/music-player-releases/releases/latest";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col items-center gap-6 pb-12 px-4 md:px-0">
        <video
          src="/demo-music.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-2xl rounded-2xl"
        />
        <img src="/appicon-music.png" alt="Music App" className="size-24 rounded-2xl" />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-semibold tracking-tight">Music App</h1>
          <p className="text-muted-foreground text-sm">Music player for macOS with vim keybindings.</p>
        </div>
        <CopyButton />
        <Button size="lg" asChild>
          <a href={downloadUrl} download>
            Download
          </a>
        </Button>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{version}</span>
          <span>·</span>
          <span>Updated {date}</span>
        </div>
      </main>
    </div>
  );
}
