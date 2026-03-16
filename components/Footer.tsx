import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Sarrin</h2>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            A modern blog starter built with Next.js, Supabase, and Tailwind CSS.
            Stay connected and follow along for more updates.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-200">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#newsletter"
                  className="hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200">Connect</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 bg-zinc-950 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-slate-500 md:flex-row">
          <span>© {year} Sarrin. All rights reserved.</span>
          <span>Built with Next.js + Supabase + Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
