// about-data.ts
import { UserRound, BriefcaseBusiness, CodeXml, Layers } from "lucide-react";

import {
  CodeIcon,
  PlugsConnectedIcon,
  FlaskIcon,
  GitBranchIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";

// Navigation
export const sections = [
  { id: "profile", number: "01", label: "Profile", icon: UserRound },
  { id: "career", number: "02", label: "Career", icon: BriefcaseBusiness },
  { id: "skills", number: "03", label: "Skills", icon: CodeXml },
  { id: "experience", number: "04", label: "Experience", icon: Layers },
];

// Profile
export const profile = {
  introduction: [
    "東北電子専門学校 システムエンジニア科を2018年3月に卒業。",
    "同年4月から約4年半、鉄道関連の業務システム開発・保守に携わりました。客先常駐の環境で、担当者と協働しながら、COBOLを用いた既存システムの改修や、内部設計からテストまでの工程を経験しました。",
    "2025年1月には、Excel VBAを用いて医療機関向けの受付管理・集計ツールを開発。実際の業務で継続利用されています。",
    "2026年からはWebアプリケーションの個人開発に取り組み、Next.js、React、TypeScriptなどを使用したアプリケーションの設計・実装を行っています。",
  ],
};

// Career
export const careerHistory = [
  {
    period: "2018.04 — 2022.10",
    title: "鉄道関連業務システムの開発・保守",
    description:
      "鉄道関連の業務システムにおいて、COBOLを用いた既存プログラムの改修を担当。係員操作型端末とメインフレーム間の通信中継機能や、座席・運賃などに関わる在庫管理機能の改修に携わりました。内部設計、設計書の作成・レビュー対応、プログラム修正、テスト仕様書の作成からテスト実施までを経験しました。",
  },
  {
    period: "2025.01",
    title: "医療機関向け受付管理・集計ツールの開発",
    description:
      "Excel VBAを使用し、紙で管理されていた受付業務をExcel上で扱えるツールを開発しました。患者情報の登録、受付記録、CSVバックアップ、履歴検索、月次集計などの機能を実装。実際の事務スタッフ約5名が利用しており、初期バージョンが約1年間継続して使用されています。",
  },
  {
    period: "2026 —",
    title: "Webアプリケーションの個人開発",
    description:
      "Next.js、React、TypeScriptなどを使用し、クレジットカード比較サイトやホテル検索アプリを開発。外部APIとの連携、検索機能、データ管理、UIの実装などに取り組んでいます。",
  },
];

// Skills
export const skillGroups = [
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

// Development Experience
export const developmentExperiences = [
  {
    title: "Web Application Development",
    icon: CodeIcon,
    description:
      "Next.js、React、TypeScriptを使用したWebアプリケーションの個人開発。ページ構成やReactコンポーネントの実装、画面表示の調整などに取り組んでいます。",
  },
  {
    title: "API Integration",
    icon: PlugsConnectedIcon,
    description:
      "外部REST APIとの連携や、Next.js Route Handlerを利用したAPI処理の実装。サービス層とAPIリクエスト処理を分けた構成で開発しています。",
  },
  {
    title: "Testing",
    icon: FlaskIcon,
    description:
      "JestやPlaywrightを使用したテストの実装。画面表示やユーザー操作に加え、入力値の検証、異常系、境界値なども確認しています。",
  },
  {
    title: "Development Workflow",
    icon: GitBranchIcon,
    description:
      "GitHub IssuesやPull Requestを利用したタスク管理・変更管理。GitHub Actionsによるテストの自動実行も取り入れています。",
  },
  {
    title: "Business Tool Development",
    icon: BriefcaseIcon,
    description:
      "Excel VBAを使用した医療機関向け受付管理・集計ツールの開発。受付情報の管理、CSVによるデータ保存、履歴検索、月次集計など、実際の業務フローに合わせた機能を実装しました。",
  },
];

// Development Principles
export const developmentPrinciples = [
  "役割ごとにコンポーネントや処理を分離し、保守しやすい構成にする",
  "APIから取得したデータの流れや状態管理を理解して実装する",
  "実際に使う人の視点でUIや操作性を考える",
  "AIを活用しながら実装やテストを進め、処理内容を確認する",
  "IssueやPull Requestを活用し、テスト結果を確認しながら開発する",
];
