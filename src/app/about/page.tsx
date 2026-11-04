import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const profile = {
  introduction: [
    "東北電子専門学校 システムエンジニア科を2018年3月に卒業。",
    "同年4月から約4年半、鉄道関連の業務システム開発・保守に携わりました。客先常駐の環境で、担当者と協働しながら、COBOLを用いた既存システムの改修や、内部設計からテストまでの工程を経験しました。",
    "2025年1月には、Excel VBAを用いて医療機関向けの受付管理・集計ツールを開発。実際の業務で継続利用されています。",
    "2026年からはWebアプリケーションの個人開発に取り組み、Next.js、React、TypeScriptなどを使用したアプリケーションの設計・実装を行っています。",
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
    skills: ["REST API", "TanStack Query", "JSON", "CSV"],
  },
  {
    title: "テスト・開発運用",
    skills: ["Jest", "Playwright", "Git", "GitHub", "GitHub Actions", "Vercel"],
  },
  {
    title: "その他の技術・経験",
    skills: ["Excel VBA", "COBOL", "JCL", "SEO"],
  },
];

const developmentExperiences = [
  {
    title: "Web Application Development",
    description:
      "Next.js、React、TypeScriptを使用したWebアプリケーションの個人開発。ページ構成やReactコンポーネントの実装、画面表示の調整などに取り組んでいます。",
  },
  {
    title: "API Integration",
    description:
      "外部REST APIとの連携や、Next.js Route Handlerを利用したAPI処理の実装。サービス層とAPIリクエスト処理を分けた構成で開発しています。",
  },
  {
    title: "Testing",
    description:
      "JestやPlaywrightを使用したテストの実装。画面表示やユーザー操作に加え、入力値の検証、異常系、境界値なども確認しています。",
  },
  {
    title: "Development Workflow",
    description:
      "GitHub IssuesやPull Requestを利用したタスク管理・変更管理。GitHub Actionsによるテストの自動実行も取り入れています。",
  },
  {
    title: "Business Tool Development",
    description:
      "Excel VBAを使用した医療機関向け受付管理・集計ツールの開発。受付情報の管理、CSVによるデータ保存、履歴検索、月次集計など、実際の業務フローに合わせた機能を実装しました。",
  },
];

const developmentPrinciples = [
  "役割ごとにコンポーネントや処理を分離し、保守しやすい構成にする",
  "APIから取得したデータの流れや状態管理を理解して実装する",
  "実際に使う人の視点でUIや操作性を考える",
  "AIを活用しながら実装やテストを進め、処理内容を確認する",
  "IssueやPull Requestを活用し、テスト結果を確認しながら開発する",
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
            <CardContent className="space-y-4 pt-6">
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
                <CardTitle className="text-lg">
                  鉄道関連業務システムの開発・保守
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  鉄道関連の業務システムにおいて、COBOLを用いた既存プログラムの改修を担当。
                  係員操作型端末とメインフレーム間の通信中継機能や、
                  座席・運賃などに関わる在庫管理機能の改修に携わりました。
                  内部設計、設計書の作成・レビュー対応、プログラム修正、
                  テスト仕様書の作成からテスト実施までを経験しました。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <p className="text-sm text-muted-foreground">2025年1月</p>
                <CardTitle className="text-lg">
                  医療機関向け受付管理・集計ツールの開発
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  Excel VBAを使用し、紙で管理されていた受付業務を
                  Excel上で扱えるツールを開発しました。
                  患者情報の登録、受付記録、CSVバックアップ、
                  履歴検索、月次集計などの機能を実装。
                  実際の事務スタッフ約5名が利用しており、
                  初期バージョンが約2年間継続して使用されています。
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

        {/* 開発経験 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Development Experience</h2>

          <div className="space-y-4">
            {developmentExperiences.map((experience) => (
              <Card key={experience.title}>
                <CardHeader>
                  <CardTitle className="text-base">
                    {experience.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-7 text-muted-foreground">
                    {experience.description}
                  </p>
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
                {developmentPrinciples.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
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
