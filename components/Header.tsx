"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-zinc-950 border-b border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold flex items-center gap-3 text-white">
          <Image src="/logo_icon.svg" alt="logo" width={31} height={31} />
          Sarrin
        </h1>

        <nav className="flex items-center gap-4">
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <a href="#blog" className="hover:text-white transition">
              Blog
            </a>
            <a href="#newsletter" className="hover:text-white transition">
              Newsletter
            </a>
            <a href="#" className="hover:text-white transition">
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
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 px-6 py-4">
          <ul className="space-y-3 text-sm font-medium text-slate-200">
            <li>
              <a href="#blog" className="block hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#newsletter" className="block hover:text-white transition">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-white transition">
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
