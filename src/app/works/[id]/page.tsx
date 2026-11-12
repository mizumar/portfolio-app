import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Suspense } from "react";

import { Breadcrumbs } from "@/src/components/navigation/breadcrumbs";
import worksData from "@/src/data/works.json";
import type { Work } from "@/src/types/work";
import { WorkGallery } from "@/src/components/works/work-gallery";

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
    <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10 lg:px-16">
      {/* パンくず */}
      <Breadcrumbs
        items={[
          { label: "Top", href: "/" },
          { label: "Works", href: "/#works" },
          { label: work.title },
        ]}
      />

      {/* ========================================
          作品タイトル
      ======================================== */}
      <header className="mt-10">
        <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
          WORK DETAIL
        </p>

        <h1 className="mt-4 text-3xl font-light tracking-wide text-[#f3e9e9] sm:text-5xl">
          {work.title}
        </h1>

        <p className="mt-6 max-w-3xl text-sm leading-8 text-[#d0c2b0] sm:text-base">
          {work.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {work.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-[#806b59] bg-transparent font-normal text-[#d8c3a5]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </header>
      <section className="mt-16">
        <div>
          {work.images && work.images.length > 0 && (
            <WorkGallery images={work.images} />
          )}
        </div>
      </section>

      {/* ========================================
          開発概要
      ======================================== */}
      <section className="mt-16">
        <Card className="border-[#665448] bg-[#46372f] shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-medium tracking-wide text-[#f3e9e9]">
              開発概要
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <p className="font-dm text-xs tracking-[0.2em] text-[#806b59]">
                PERIOD
              </p>

              <p className="mt-2 text-sm text-[#d0c2b0]">{work.period}</p>
            </div>

            {(work.links.site || work.links.github) && (
              <div className="flex flex-col gap-3 border-t border-[#665448] pt-6 sm:flex-row">
                {work.links.site && (
                  <Link
                    href={work.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      size: "lg",
                      variant: "outline",
                      className:
                        "border-[#665448]! bg-[#594438]! text-[#d8c3a5]! shadow-none hover:border-[#806b59]! hover:bg-[#3b2d25]! hover:text-[#f3e9e9]!",
                    })}
                  >
                    公開サイトを見る
                  </Link>
                )}

                {work.links.github && (
                  <Link
                    href={work.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className:
                        "border-[#665448]! bg-[#594438]! text-[#d8c3a5]! shadow-none hover:border-[#806b59]! hover:bg-[#3b2d25]! hover:text-[#f3e9e9]!",
                    })}
                  >
                    GitHubを見る
                  </Link>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* ========================================
          主な実装・工夫した点
          → React側で「見せる」情報
      ======================================== */}
      <section className="mt-16">
        <div className="mb-8">
          <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
            HIGHLIGHTS
          </p>

          <h2 className="mt-3 text-2xl font-light tracking-wide text-[#f3e9e9] sm:text-3xl">
            主な実装・工夫した点
          </h2>
        </div>

        <ul className="space-y-4">
          {work.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-4 border-b border-[#665448] pb-4 text-sm leading-8 text-[#d0c2b0]"
            >
              <span
                aria-hidden="true"
                className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c3a5]"
              />

              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ========================================
          開発について
          → ここからMarkdown
          → 「読む」ための領域
      ======================================== */}
      {content && (
        <section className="mt-20 border-t border-[#665448] pt-14">
          <div className="mb-10">
            <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
              DEVELOPMENT STORY
            </p>

            <h2 className="mt-3 text-2xl font-light tracking-wide text-[#f3e9e9] sm:text-3xl">
              開発について
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#806b59]">
              開発の背景や考えたこと、実装までの過程についてまとめています。
            </p>
          </div>

          <article className="max-w-3xl">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-14 border-l-2 border-[#d8c3a5] pl-4 text-xl font-medium tracking-wide text-[#f3e9e9] first:mt-0">
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className="mt-10 text-base font-medium tracking-wide text-[#f3e9e9]">
                    {children}
                  </h3>
                ),

                p: ({ children }) => (
                  <p className="mt-5 leading-8 text-[#d0c2b0]">{children}</p>
                ),

                ul: ({ children }) => (
                  <ul className="mt-5 space-y-2 pl-5 text-sm leading-8 text-[#d0c2b0]">
                    {children}
                  </ul>
                ),

                ol: ({ children }) => (
                  <ol className="mt-5 space-y-2 pl-5 text-sm leading-8 text-[#d0c2b0]">
                    {children}
                  </ol>
                ),

                li: ({ children }) => (
                  <li className="pl-1 text-[#d0c2b0]">{children}</li>
                ),

                strong: ({ children }) => (
                  <strong className="font-medium text-[#f3e9e9]">
                    {children}
                  </strong>
                ),

                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d8c3a5] underline decoration-[#806b59] underline-offset-4 transition-colors hover:text-[#f3e9e9]"
                  >
                    {children}
                  </a>
                ),

                blockquote: ({ children }) => (
                  <blockquote className="mt-6 border-l border-[#806b59] pl-5 text-sm leading-8 text-[#b9a58e]">
                    {children}
                  </blockquote>
                ),

                code: ({ children }) => (
                  <code className="rounded bg-[#46372f] px-1.5 py-0.5 text-xs text-[#d8c3a5]">
                    {children}
                  </code>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </section>
      )}

      {/* ========================================
          一覧へ戻る
      ======================================== */}
      <div className="mt-16 border-t border-[#665448] pt-6">
        <Link
          href="/#works"
          className="font-dm text-xs tracking-wide text-[#b9a58e] transition-colors hover:text-[#d8c3a5]"
        >
          ← Worksへ戻る
        </Link>
      </div>
    </div>
  );
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#29231f]">
      <Suspense
        fallback={
          <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10 lg:px-16">
            <p className="text-sm text-[#806b59]">作品情報を読み込み中...</p>
          </div>
        }
      >
        <WorkDetailContent params={params} />
      </Suspense>
    </main>
  );
}
