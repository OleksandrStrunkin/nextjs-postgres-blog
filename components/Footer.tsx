import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#999999] bg-white text-[#666666]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-[#333333]">Sarrin</h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#666666]">
            A modern blog starter built with Next.js, Supabase, and Tailwind CSS.
            Stay connected and follow along for more updates.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-[#333333]">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#666666]">
              <li>
                <Link href="/" className="hover:text-[#7C4EE4] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#7C4EE4] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#newsletter"
                  className="hover:text-[#7C4EE4] transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#333333]">Connect</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#666666]">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#7C4EE4] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#7C4EE4] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#7C4EE4] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#333333]">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#666666]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#7C4EE4] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#7C4EE4] transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#999999] bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-[#666666] md:flex-row">
          <span>© {year} Sarrin. All rights reserved.</span>
          <span>Built with Next.js + Supabase + Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
