import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

const screenshots = [
  "/apps/peg-puzzle-classic/screenshot-1.png",
  "/apps/peg-puzzle-classic/screenshot-2.png",
  "/apps/peg-puzzle-classic/screenshot-3.png",
];

export default function PegPuzzleClassic() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col items-center gap-4 pb-12 px-4 md:px-0">
        <img src="/apps/peg-puzzle-classic/icon.png" alt="Peg Puzzle Classic" className="size-24 mt-2 drop-shadow-md" />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-semibold tracking-tight">Peg Puzzle Classic</h1>
          <p className="text-muted-foreground text-sm">The classic peg solitaire puzzle game.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button size="lg" className="h-11 w-full rounded-full px-6 text-base" asChild>
            <a
              href="https://apps.apple.com/us/app/peg-puzzle-classic/id6469359729"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-11 w-full rounded-full px-6 text-base" asChild>
            <a
              href="https://github.com/kodydeda4/peg-puzzle-classic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </Button>
        </div>
        <div className="flex w-full max-w-2xl snap-x snap-mandatory justify-start md:justify-center gap-4 overflow-x-auto px-4 pt-2 pb-6 md:px-0">
          {screenshots.map((src) => (
            <img
              key={src}
              src={src}
              alt="Peg Puzzle Classic screenshot"
              className="w-48 flex-none snap-center rounded-2xl border border-white/10"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
