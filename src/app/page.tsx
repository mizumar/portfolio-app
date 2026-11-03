import Link from "next/link";

import worksData from "@/src/data/works.json";
import type { Work } from "@/src/types/work";
import { WorkCard } from "@/src/components/works/work-card";

const works: Work[] = worksData;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 自己紹介 */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            PORTFOLIO
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Webアプリケーション開発
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
            Web技術を使って、日常の課題を解決するアプリケーションを
            開発しています。
            データの取得・加工から、ユーザーが使いやすいUIの実装まで、
            一つひとつ理解しながら開発に取り組んでいます。
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm font-medium underline underline-offset-4"
            >
              経歴・スキルを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 作品一覧 */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Works</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            これまでに開発したWebアプリケーション
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Portfolio</p>

          <nav className="flex gap-4">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
