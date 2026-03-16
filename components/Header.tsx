"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#999999]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo_icon.svg" alt="logo" width={31} height={31} />
          <span className="text-2xl font-bold text-[#333333] hover:text-[#7C4EE4] transition">
            Sarrin
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <div className="hidden items-center gap-6 text-sm font-medium text-[#666666] md:flex">
            <Link
              href="/blog"
              className={`transition ${
                isActive("/blog") ? "text-[#7C4EE4]" : "hover:text-[#7C4EE4]"
              }`}
            >
              Blog
            </Link>
            <a href="#newsletter" className="hover:text-[#7C4EE4] transition">
              Newsletter
            </a>
            <Link
              href="/about"
              className={`transition ${
                isActive("/about") ? "text-[#7C4EE4]" : "hover:text-[#7C4EE4]"
              }`}
            >
              About
            </Link>
            <a
              href="#contact"
              className="rounded-full bg-[#7C4EE4] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7C4EE4]/90"
            >
              Contact Us
            </a>
          </div>

          <button
            aria-label="Toggle navigation"
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image src="/menu_icon.svg" alt="menu" width={30} height={30} />
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#999999] bg-white/95 px-6 py-4">
          <ul className="space-y-3 text-sm font-medium text-[#666666]">
            <li>
              <Link
                href="/blog"
                className={`block transition ${
                  isActive("/blog") ? "text-[#7C4EE4]" : "hover:text-[#7C4EE4]"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="#newsletter"
                className="block hover:text-[#7C4EE4] transition"
              >
                Newsletter
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className={`block transition ${
                  isActive("/about") ? "text-[#7C4EE4]" : "hover:text-[#7C4EE4]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded-full bg-[#7C4EE4] px-5 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#7C4EE4]/90"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
