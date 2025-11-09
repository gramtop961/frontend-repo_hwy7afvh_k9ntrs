import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/50 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-300 to-sky-300 shadow-sm">
            <Sparkles className="h-5 w-5 text-pink-700" />
          </span>
          <span className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
            K-Portfolio
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-sky-400 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg active:scale-95 transition"
        >
          Say 안녕!
        </a>
      </div>
    </header>
  );
}
