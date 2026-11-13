"use client";

import Link from "next/link";

/** フッターを表示する */
export function Footer() {
  return (
    <footer className="border-t border-[#665448] bg-[#29231f]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-7 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="hidden shrink-0 font-cormorant text-xl font-medium tracking-[0.08em] text-[#f3e9e9] transition-colors hover:text-[#d8c3a5] sm:block"
        >
          PORTFOLIO
        </Link>
        <nav className="flex items-center gap-5 font-dm text-[10px] tracking-[0.15em]">
          <Link
            href="/"
            className="text-[#806b59] transition-colors hover:text-[#d8c3a5]"
          >
            TOP
          </Link>

          <Link
            href="/about"
            className="text-[#806b59] transition-colors hover:text-[#d8c3a5]"
          >
            ABOUT
          </Link>

          <Link
            href="/#works"
            className="text-[#806b59] transition-colors hover:text-[#d8c3a5]"
          >
            WORKS
          </Link>
        </nav>
        <p className="shrink-0 font-dm text-[10px] tracking-[0.15em] text-[#665448]">
          © 2026 PORTFOLIO
        </p>
      </div>
    </footer>
  );
}
