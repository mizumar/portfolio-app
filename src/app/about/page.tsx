import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const profile = {
  name: "名前",
  role: "Webアプリケーションを個人開発",
  location: "", // 公開しないなら空欄、または項目ごと削除
  introduction: [
    "業務システムの開発を経験した後、Webアプリケーションの個人開発に取り組んでいます。",
    "現在は、使いやすさと保守性を意識した画面設計に関心があります。",
  ],
};

const skillGroups = [
  {
    title: "フロントエンド",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "データ取得・管理",
    skills: ["REST API", "TanStack Query", "JSON"],
  },
  {
    title: "開発・運用",
    skills: ["Git", "GitHub", "Vercel", "SEO"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {/* ページタイトル */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← トップページへ戻る
          </Link>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            About
          </h1>

          <p className="mt-4 leading-7 text-muted-foreground">
            これまでの経歴や、Webアプリケーション開発で
            使用している技術について紹介します。
          </p>
        </div>

        {/* プロフィール */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">プロフィール</h2>
          <Card>
            <CardContent>
              {profile.introduction.map((paragraph) => (
                <p key={paragraph} className="leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* 経歴 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">経歴</h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <p className="text-sm text-muted-foreground">
                  2018年4月〜2022年10月
                </p>
                <CardTitle className="text-lg">業務システム開発</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  鉄道関連の業務システムに携わり、
                  COBOLを使用したシステム開発を経験。
                  業務システムの開発・保守を通じて、
                  既存システムの構造や業務要件を踏まえた
                  開発の基礎を学びました。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <p className="text-sm text-muted-foreground">2026年〜</p>
                <CardTitle className="text-lg">
                  Webアプリケーションの個人開発
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  Next.js、React、TypeScriptなどを使用し、
                  クレジットカード比較サイトやホテル検索アプリを開発。
                  外部APIとの連携、検索機能、データ管理、
                  UIの実装などに取り組んでいます。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* スキル */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">スキル</h2>

          <div className="space-y-4">
            {skillGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle className="text-base">{group.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 開発方針 */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">開発で意識していること</h2>

          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                <li>役割ごとにコンポーネントや処理を分離する</li>
                <li>APIから取得したデータを適切に扱う</li>
                <li>実際に使う人の視点でUIや操作性を考える</li>
                <li>実装した機能の仕組みを理解しながら開発する</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* 作品一覧への導線 */}
        <div className="mt-12 border-t pt-6">
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4"
          >
            作品一覧を見る →
          </Link>
        </div>
      </div>
    </main>
  );
}
