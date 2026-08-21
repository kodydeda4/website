import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6">
      <div className="flex items-center justify-between gap-4 border-t py-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kody Deda
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
