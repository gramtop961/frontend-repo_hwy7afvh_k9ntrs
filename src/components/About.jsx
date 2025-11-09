export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I'm a frontend engineer focused on creating feel-good experiences. I draw from K-drama color palettes, stationery textures, and cozy cafe vibes. My toolkit blends solid engineering with a playful visual language.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li>• Strong UI engineering with React + Tailwind</li>
            <li>• Animation craft with Framer Motion</li>
            <li>• Design systems with accessibility baked in</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-pink-200/40 via-rose-200/40 to-sky-200/40 blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative rounded-3xl p-6 bg-white/70 dark:bg-neutral-900/60 ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=2070&auto=format&fit=crop"
              alt="Chibi artist desk"
              className="rounded-2xl shadow border border-white/60"
            />
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              I love sketching chibi mascots and translating them into delightful micro-interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
