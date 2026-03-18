import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-dark">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Centered Logo */}
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_icon.svg"
              alt="Zarrin logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-dark">Zarrin</span>
          </Link>

          {/* Horizontal Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              FB
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              IG
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              LN
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              YT
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-[#E0E0E0]"></div>
      <div className="mx-auto max-w-6xl px-6 py-6 text-center">
        <p className="text-xs text-gray-medium">
          Copyright Ideapeel Inc © 2023. All Right Reserved
        </p>
      </div>
    </footer>
  );
}
