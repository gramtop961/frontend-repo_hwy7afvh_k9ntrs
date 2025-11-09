export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl overflow-hidden ring-1 ring-black/5 bg-gradient-to-br from-pink-100 to-sky-100 dark:from-pink-900/30 dark:to-sky-900/20">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl font-bold">Let's create something cute</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Tell me about your idea and we'll craft a kawaii, Korea-inspired interface together.
              </p>
              <form className="mt-6 grid gap-3">
                <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 ring-1 ring-black/5" />
                <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 ring-1 ring-black/5" />
                <textarea placeholder="Project details" rows={4} className="px-4 py-3 rounded-xl bg-white/90 dark:bg-neutral-900/60 ring-1 ring-black/5" />
                <button type="button" className="mt-2 rounded-full bg-pink-500 text-white px-5 py-2.5 shadow hover:bg-pink-600 transition w-fit">Send</button>
              </form>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600763295824-c2be87b3d49a?q=80&w=1965&auto=format&fit=crop"
                alt="Korean cafe"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/40 to-sky-200/40 pointer-events-none" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Hana — Made with love and bubble tea.
        </p>
      </div>
    </section>
  );
}
