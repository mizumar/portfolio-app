import Link from "next/link";
import worksData from "@/src/data/works.json";
import type { Work } from "@/src/types/work";
import { WorkCard } from "@/src/components/works/work-card";

const works: Work[] = worksData;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#29231f] text-[#f3e9d9]">
      {/* Hero */}
      <section className="border-b border-[#665448]">
        <div className="mx-auto flex min-h-[72vh] max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-16">
          <div>
            {/* <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
              PORTFOLIO
            </p> */}

            <h1 className="mt-6 font-cormorant text-6xl font-light leading-[0.95] tracking-tight text-[#f3e9d9] sm:text-7xl lg:text-9xl">
              Web Application
              <br />
              Development
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#d0c2b0] sm:text-base">
              Next.js / React / TypeScriptを中心に、
              <br />
              Webアプリケーションを開発しています。
            </p>

            <div className="mt-10 flex items-center gap-5 font-dm">
              <Link
                href="#works"
                className="border border-[#d8c3a5] bg-[#594438] px-6 py-3 text-sm tracking-wide text-[#d8c3a5] transition-colors hover:bg-[#6b5241] hover:text-[#f3e9d9]"
              >
                Worksを見る
              </Link>

              <Link
                href="/about"
                className="text-sm tracking-wide text-[#b9a58e] transition-colors hover:text-[#d8c3a5]"
              >
                About →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section
        id="works"
        className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mb-12">
          <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
            WORKS
          </p>

          <h2 className="mt-3 font-cormorant text-4xl font-light tracking-wide text-[#f3e9d9] sm:text-5xl">
            Works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[#665448]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
                ABOUT
              </p>

              <h2 className="mt-3 font-cormorant text-4xl font-light tracking-wide text-[#f3e9d9] sm:text-5xl">
                About Me
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#d0c2b0]">
                これまでの経験やスキル、現在取り組んでいる開発について
                まとめています。
              </p>
            </div>

            <Link
              href="/about"
              className="w-fit border border-[#665448] bg-[#46372f] px-6 py-3 font-dm text-sm tracking-wide text-[#d8c3a5] transition-colors hover:border-[#d8c3a5] hover:bg-[#594438] hover:text-[#f3e9d9]"
            >
              Aboutを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#665448]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-7 font-dm text-xs text-[#806b59] sm:flex-row sm:items-center sm:justify-between lg:px-16">
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
