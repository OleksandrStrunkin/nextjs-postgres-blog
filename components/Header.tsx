"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#999999]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/">
          <h1 className="text-2xl font-bold flex items-center gap-3 text-[#333333] hover:text-[#7C4EE4] transition cursor-pointer">
            <Image src="/logo_icon.svg" alt="logo" width={31} height={31} />
            Sarrin
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <div className="hidden items-center gap-6 text-sm font-medium text-[#666666] md:flex">
            <a href="#blog" className="hover:text-[#7C4EE4] transition">
              Blog
            </a>
            <a href="#newsletter" className="hover:text-[#7C4EE4] transition">
              Newsletter
            </a>
            <a href="#" className="hover:text-[#7C4EE4] transition">
              About
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
              <a href="#blog" className="block hover:text-[#7C4EE4] transition">
                Blog
              </a>
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
              <a href="#" className="block hover:text-[#7C4EE4] transition">
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
