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
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-light">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo_icon.svg" alt="logo" width={31} height={31} />
          <span className="text-2xl font-bold text-dark hover:text-primary transition">
            Sarrin
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-medium md:flex">
            <Link
              href="/blog"
              className={`transition ${
                isActive("/blog") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`transition ${
                isActive("/about") ? "text-primary" : "hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 ${
                isActive("/contact") ? "" : ""
              }`}
            >
              Contact Us
            </Link>
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
        <div className="md:hidden border-t border-gray-light bg-white/95 px-6 py-4">
          <ul className="space-y-3 text-sm font-medium text-gray-medium">
            <li>
              <Link
                href="/blog"
                className={`block transition ${
                  isActive("/blog") ? "text-primary" : "hover:text-primary"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block transition ${
                  isActive("/about") ? "text-primary" : "hover:text-primary"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
