import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 grid lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs text-pink-700 dark:text-pink-300 ring-1 ring-black/5">
            <span className="font-semibold">K-vibe</span>
            <span className="text-neutral-500">•</span>
            <span>chibi style</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-600 via-rose-500 to-sky-500">
            Annyeong! I'm Hana — a Frontend Dev who loves kawaii design.
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
            Blending pastel Korea vibes, bubble gradients and playful chibi mascots to craft interfaces that feel warm and delightful.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-pink-500 text-white px-5 py-2.5 shadow hover:bg-pink-600 transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-full bg-white/80 dark:bg-neutral-900/60 ring-1 ring-black/5 px-5 py-2.5 hover:ring-pink-300 transition">
              Get in touch
            </a>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/40 via-rose-200/40 to-sky-200/40 blur-2xl rounded-3xl pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1887&auto=format&fit=crop"
              alt="Chibi character"
              className="relative rounded-3xl shadow-xl border border-white/50"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-neutral-900/80 rounded-2xl px-4 py-2 shadow ring-1 ring-black/5">
              <p className="text-xs">Mascot: Haru the Chibi Dev</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
