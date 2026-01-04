"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Header() {
  const [mobile, setMobile] = useState(true);

  const toggleMobile = () => {
    if (window.innerWidth < 320) {
      setMobile(!mobile);
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-3xl p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Image src="/logo_icon.svg" alt="logo" width={31} height={31} /> Sarrin</h1>
        <nav>
          {mobile ? (
            <button
              className="md:hidden"
              onClick={toggleMobile}
            >
              <Image src="/menu_icon.svg" alt="menu" width={34} height={34} />
            </button>
          ) : (
            <ul className="flex text-base font-medium">
              <li>
                <a href="#" className="text-black ">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black ">
                  Contact Us
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
