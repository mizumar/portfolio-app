"use client";

import Link from "next/link";
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

import { Button } from "@/src/components/ui/button";
import { Menu } from "@/src/components/layout/menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#665448]/70 bg-[#29231f]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="font-cormorant text-xl font-medium tracking-[0.08em] text-[#f3e9d9] transition-colors hover:text-[#d8c3a5]"
          >
            PORTFOLIO
          </Link>

          <Button
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-[#d8c3a5] hover:bg-transparent hover:text-[#f3e9d9]"
          >
            {isMenuOpen ? (
              <XIcon size={25} weight="light" />
            ) : (
              <ListIcon size={25} weight="light" />
            )}
          </Button>
        </div>
      </header>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
