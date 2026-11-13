import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumbs } from "@/src/components/navigation/breadcrumbs";

import worksData from "@/src/data/works.json";
import type { Work } from "@/src/types/work";

import { WorkHeader } from "./_components/work-header";
import { WorkHighlights } from "./_components/work-highlights";
import { DevelopmentStory } from "./_components/development-story";
import { WorkOverview } from "./_components/work-overview";

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

  // 詳細記事がある作品だけMarkdownを読み込む
  const content = work.hasDetail ? await getWorkContent(work.id) : null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
      <Breadcrumbs
        items={[
          { label: "Top", href: "/" },
          { label: "Works", href: "/#works" },
          { label: work.title },
        ]}
      />
      <WorkHeader title={work.title} />
      <WorkOverview work={work} />
      <WorkHighlights highlights={work.highlights} />
      {content && <DevelopmentStory content={content} />}
    </div>
  );
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#29231f]">
      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <p className="text-sm text-[#806b59]">作品情報を読み込み中...</p>
          </div>
        }
      >
        <WorkDetailContent params={params} />
      </Suspense>
    </main>
  );
}
