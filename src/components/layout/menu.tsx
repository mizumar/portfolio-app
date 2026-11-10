"use client";

import Link from "next/link";
import { GithubLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#29231f]">
      <div className="mx-auto flex min-h-full max-w-6xl items-center px-6 sm:px-10 lg:px-16">
        <nav className="w-full">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={onClose}
              className="group border-b border-[#665448] py-5"
            >
              <span className="font-dm text-xs tracking-[0.3em] text-[#806b59]">
                01
              </span>

              <span className="ml-6 font-cormorant text-5xl font-light text-[#f3e9d9] transition-colors group-hover:text-[#d8c3a5] sm:text-6xl">
                Top
              </span>
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="group border-b border-[#665448] py-5"
            >
              <span className="font-dm text-xs tracking-[0.3em] text-[#806b59]">
                02
              </span>

              <span className="ml-6 font-cormorant text-5xl font-light text-[#f3e9d9] transition-colors group-hover:text-[#d8c3a5] sm:text-6xl">
                About
              </span>
            </Link>

            <Link
              href="/#works"
              onClick={onClose}
              className="group border-b border-[#665448] py-5"
            >
              <span className="font-dm text-xs tracking-[0.3em] text-[#806b59]">
                03
              </span>

              <span className="ml-6 font-cormorant text-5xl font-light text-[#f3e9d9] transition-colors group-hover:text-[#d8c3a5] sm:text-6xl">
                Works
              </span>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#b9a58e] transition-colors hover:text-[#d8c3a5]"
            >
              <GithubLogoIcon size={24} weight="light" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#b9a58e] transition-colors hover:text-[#d8c3a5]"
            >
              <InstagramLogoIcon size={24} weight="light" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
