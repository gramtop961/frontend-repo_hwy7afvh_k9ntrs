import { Code2, Palette, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Bubble Tea UI Kit",
    desc: "A pastel component library with micro-interactions, inspired by Seoul cafes.",
    icon: Palette,
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "K-pop Fanlight App",
    desc: "Mobile app concept with rhythmic haptics and neon gradients.",
    icon: Smartphone,
    tags: ["Expo", "TypeScript"],
    link: "#",
  },
  {
    title: "Portfolio Engine",
    desc: "Fast static site generator with kawaii presets and MDX blocks.",
    icon: Code2,
    tags: ["Vite", "MDX"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          A selection of playful builds mixing clean UX with cozy aesthetics.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-3xl p-6 bg-white/70 dark:bg-neutral-900/60 ring-1 ring-black/5 hover:ring-pink-300 transition overflow-hidden">
              <div className="absolute -inset-8 bg-gradient-to-br from-pink-200/30 via-rose-200/30 to-sky-200/30 opacity-0 group-hover:opacity-100 blur-2xl transition pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-sky-400 text-white shadow">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/70 dark:bg-neutral-800 ring-1 ring-black/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
