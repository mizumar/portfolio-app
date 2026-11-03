import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Suspense } from "react";

import worksData from "@/src/data/works.json";
import type { Work } from "@/src/types/work";

import { Badge } from "@/src/components/ui/badge";
import { buttonVariants } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const works: Work[] = worksData;

type WorkDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getWorkContent(id: string): Promise<string | null> {
  "use cache";

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "works",
    `${id}.md`,
  );

  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    // ファイルが存在しない場合は本文なしとして扱う
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

async function WorkDetailContent({ params }: WorkDetailPageProps) {
  const { id } = await params;

  const work = works.find((item) => item.id === id);

  if (!work) {
    notFound();
  }

  const content = work.hasDetail ? await getWorkContent(work.id) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* 作品タイトルと概要 */}
      <header className="mt-8">
        <p className="text-sm text-muted-foreground">WORK DETAIL</p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {work.title}
        </h1>

        <p className="mt-5 leading-7 text-muted-foreground">{work.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {work.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      {/* 開発概要 */}
      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>開発概要</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">開発期間</p>
              <p className="mt-1">{work.period}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {work.links.site && (
                <Link
                  href={work.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ className: "w-full" })}
                >
                  公開サイトを見る
                </Link>
              )}

              {work.links.github && (
                <Link
                  href={work.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ className: "w-full" })}
                >
                  GitHubを見る
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主な実装・工夫した点 */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">主な実装・工夫した点</h2>

        <ul className="mt-4 space-y-3">
          {work.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-7">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Markdown の詳細説明 */}
      {content && (
        <section className="mt-10 border-t pt-8">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-8 mb-4 border-l-4 border-slate-900 pl-3 text-lg font-bold text-slate-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 mb-3 border-b border-slate-200 pb-2 text-base font-bold text-slate-800">
                    {children}
                  </h3>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </section>
      )}

      <div className="mt-12 border-t pt-6">
        <Link
          href="/"
          className="text-sm font-medium underline underline-offset-4"
        >
          ← 作品一覧へ戻る
        </Link>
      </div>
    </div>
  );
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← 作品一覧へ戻る
        </Link>

        <Suspense fallback={<p className="mt-8">作品情報を読み込み中...</p>}>
          <WorkDetailContent params={params} />
        </Suspense>
      </div>
    </main>
  );
}
