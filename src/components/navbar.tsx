import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex justify-center px-6 py-4 md:pt-12">
      <div className="flex items-center gap-3 w-full max-w-xl">
      <img src="/avatar-profile.jpg" alt="Kody Deda" className="size-7 rounded-full object-cover" />
      <Link href="/" className="text-sm font-semibold hover:text-muted-foreground transition-colors">
        Kody Deda
      </Link>
      </div>
    </header>
  );
}
