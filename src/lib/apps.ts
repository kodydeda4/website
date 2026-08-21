export type App = {
  href: string;
  icon: string;
  name: string;
  navLabel?: string;
  description: string;
};

export const apps: App[] = [
  {
    href: "/redfin",
    icon: "/apps/redfin/icon.png",
    name: "Redfin",
    description: "The native Jellyfin music player",
  },
  {
    href: "/guitar-tuner",
    icon: "/apps/guitar-tuner/icon.png",
    name: "Guitar Tuner",
    description: "A simple, accurate guitar tuner.",
  },
  {
    href: "/peg-puzzle-classic",
    icon: "/apps/peg-puzzle-classic/icon.png",
    name: "Peg Puzzle Classic",
    navLabel: "Peg Puzzle",
    description: "The classic peg solitaire puzzle game.",
  },
];
