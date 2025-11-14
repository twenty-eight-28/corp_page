"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/28.png"
              alt="株式会社トゥエンティエイト ロゴ"
              width={36}
              height={36}
              className="md:w-[42px] md:h-[42px] drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]"
            />
          </Link>

          {/* PC Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <NavLinks />
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-200 hover:text-red-500 transition text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 z-[60] 
          bg-gradient-to-b from-black via-[#120010] to-[#001020]
          border-l border-red-600
          transform ${menuOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-out
          flex flex-col p-6 gap-6
        `}
      >
        <button
          className="text-gray-300 text-3xl self-end hover:text-red-500 transition"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <nav className="flex flex-col gap-6 text-lg mt-4">
          <NavLinks onClick={() => setMenuOpen(false)} mobile />
        </nav>
      </div>
    </>
  );
}

function NavLinks({
  onClick,
  mobile,
}: {
  onClick?: () => void;
  mobile?: boolean;
}) {
  const base = mobile
    ? "text-gray-200 text-lg tracking-wide hover:text-red-400 transition"
    : "hover:text-red-500 transition";

  return (
    <>
      <Link href="/" className={base} onClick={onClick}>
        Home
      </Link>
      <Link href="/about" className={base} onClick={onClick}>
        About
      </Link>
      <Link href="/service" className={base} onClick={onClick}>
        Service
      </Link>
      <Link href="/news" className={base} onClick={onClick}>
        News
      </Link>
      <Link href="/recruit" className={base} onClick={onClick}>
        Recruit
      </Link>
      <Link href="/contact" className={base} onClick={onClick}>
        Contact
      </Link>
    </>
  );
}
