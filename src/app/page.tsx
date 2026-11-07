import Link from "next/link";

import worksData from "@/src/data/works.json";
import type { Work } from "@/src/types/work";
import { WorkCard } from "@/src/components/works/work-card";
import { CoffeeCup } from "@/src/components/cafe/coffee-cup";

const works: Work[] = worksData;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#29231f] text-[#f3e9d9]">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden border-b border-[#665448]">
        <div className="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs tracking-[0.3em] text-[#d8c3a5]">
              PORTFOLIO
            </p>

            <h1 className="text-5xl font-light leading-[1.1] tracking-tight text-[#f3e9d9] sm:text-6xl lg:text-8xl">
              Web Application
              <br />
              Development
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#d0c2b0] sm:text-base">
              Web技術を使って、日常の課題を解決するアプリケーションを
              開発しています。
              <br />
              データの取得・加工から、ユーザーが使いやすいUIの実装まで、
              一つひとつ理解しながら開発に取り組んでいます。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#works"
                className="border border-[#d8c3a5] px-6 py-3 text-sm tracking-wide text-[#d8c3a5] transition-colors hover:bg-[#d8c3a5] hover:text-[#29231f]"
              >
                View Works
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 text-sm tracking-wide text-[#d0c2b0] transition-colors hover:text-[#f3e9d9]"
              >
                About →
              </Link>
            </div>
          </div>
        </div>

        {/* Hero bottom label */}
        <div className="absolute bottom-6 right-6 hidden text-[10px] tracking-[0.25em] text-[#806b59] sm:block">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Works */}
      <section
        id="works"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#d8c3a5]">
              SELECTED WORKS
            </p>

            <h2 className="mt-3 text-3xl font-light tracking-wide text-[#f3e9d9] sm:text-4xl">
              Works
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#b9a58e]">
            これまでに開発したWebアプリケーションや業務ツールを紹介しています。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* About introduction */}
      <section className="border-t border-[#665448]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#d8c3a5]">
                ABOUT ME
              </p>

              <h2 className="mt-3 text-3xl font-light tracking-wide text-[#f3e9d9] sm:text-4xl">
                Profile
              </h2>

              <div className="grid gap-16 md:grid-cols-2 pt-10">
                <CoffeeCup
                  type="hot"
                  image="/images/profile.png"
                  title="HOTEL SEARCH"
                  cupColor="#594438"
                  accentColor="#d0c2b0"
                />
                <CoffeeCup
                  type="hot"
                  image="/images/profile.png"
                  title="SMART CARD SELECT"
                  paperColor="#c9b08d"
                  cupColor="#46372f"
                  accentColor="#d8c3a5"
                />{" "}
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-[#d0c2b0]">
                これまでの経験や、現在取り組んでいるWebアプリケーション開発、
                使用している技術などをまとめています。
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex w-fit border border-[#665448] px-6 py-3 text-sm tracking-wide text-[#d8c3a5] transition-colors hover:border-[#d8c3a5] hover:bg-[#46372f]"
            >
              経歴・スキルを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#665448]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-7 text-xs text-[#806b59] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="tracking-[0.15em]">PORTFOLIO</p>

          <nav className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-[#d8c3a5]">
              Home
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#d8c3a5]"
            >
              About
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
