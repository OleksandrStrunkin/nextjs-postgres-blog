export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20"
    >
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-10 shadow-sm backdrop-blur-md">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              Subscribe to our monthly newsletter to receive the latest posts,
              design tips, and Supabase updates straight to your inbox.
            </p>
          </div>
          <form className="flex flex-col gap-4 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
            <button
              type="submit"
              className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
