"use client";

import { useEffect, useState } from "react";
import { UserRound, BriefcaseBusiness, CodeXml, Layers, X } from "lucide-react";
import { Breadcrumbs } from "@/src/components/navigation/breadcrumbs";

import {
  CodeIcon,
  PlugsConnectedIcon,
  FlaskIcon,
  GitBranchIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

// ナビゲーション
const sections = [
  { id: "profile", number: "01", label: "Profile", icon: UserRound },
  { id: "career", number: "02", label: "Career", icon: BriefcaseBusiness },
  { id: "skills", number: "03", label: "Skills", icon: CodeXml },
  { id: "experience", number: "04", label: "Experience", icon: Layers },
];

// Profile
const profile = {
  introduction: [
    "東北電子専門学校 システムエンジニア科を2018年3月に卒業。",
    "同年4月から約4年半、鉄道関連の業務システム開発・保守に携わりました。客先常駐の環境で、担当者と協働しながら、COBOLを用いた既存システムの改修や、内部設計からテストまでの工程を経験しました。",
    "2025年1月には、Excel VBAを用いて医療機関向けの受付管理・集計ツールを開発。実際の業務で継続利用されています。",
    "2026年からはWebアプリケーションの個人開発に取り組み、Next.js、React、TypeScriptなどを使用したアプリケーションの設計・実装を行っています。",
  ],
};

// Career
const careerHistory = [
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

// Development Experience
const developmentExperiences = [
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
const developmentPrinciples = [
  "役割ごとにコンポーネントや処理を分離し、保守しやすい構成にする",
  "APIから取得したデータの流れや状態管理を理解して実装する",
  "実際に使う人の視点でUIや操作性を考える",
  "AIを活用しながら実装やテストを進め、処理内容を確認する",
  "IssueやPull Requestを活用し、テスト結果を確認しながら開発する",
];

// セクション見出し
function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <span className="text-xs font-dm tracking-[0.2em] text-[#d8c3a5]">
        {number}
      </span>
      <h2 className="mt-3 font-cormorant text-3xl font-light tracking-wide text-[#f3e9d9] md:text-4xl">
        {children}
      </h2>
    </div>
  );
}

// Careerの項目
function CareerItem({ item }: { item: (typeof careerHistory)[number] }) {
  return (
    <article className="relative pb-12 pl-8 last:pb-0 md:pl-12">
      {/* タイムラインのポイント */}
      <span className="absolute -left-1.75 top-1.5 h-3 w-3 rounded-full border-2 border-[#d8c3a5] bg-[#29231f]" />

      {/* 年月 */}
      <p className="text-sm tracking-wider text-[#d8c3a5]">{item.period}</p>

      {/* タイトル */}
      <h3 className="mt-3 text-lg font-medium leading-relaxed text-[#f3e9d9] md:text-xl">
        {item.title}
      </h3>

      {/* 説明 */}
      <p className="mt-4 text-sm leading-8 text-[#d0c2b0]">
        {item.description}
      </p>
    </article>
  );
}

// Skillsの項目
function SkillGroup({ group }: { group: (typeof skillGroups)[number] }) {
  return (
    <div className="group border border-[#665448] bg-[#46372f] p-5 transition-colors duration-300 hover:bg-[#594438] md:p-7">
      <h3 className="text-sm font-medium tracking-wider text-[#d8c3a5]">
        {group.title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="border border-[#806b59] px-3 py-2 text-xs tracking-wide text-[#f3e9d9] transition-colors group-hover:border-[#a58c73] md:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Experienceの項目
function ExperienceItem({
  item,
}: {
  item: (typeof developmentExperiences)[number];
}) {
  const Icon = item.icon;

  return (
    <article className="group border border-[#665448] bg-[#46372f] p-6 transition-colors duration-300 hover:bg-[#594438] md:p-7">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#594438] text-[#d8c3a5] transition-colors duration-300 group-hover:bg-[#6b5241]">
          <Icon size={32} weight="light" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-dm font-medium tracking-wide text-[#f3e9d9] md:text-lg">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-8 text-[#d0c2b0]">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // 指定したセクションまでスクロール
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    setMenuOpen(false);

    const top = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  // スクロール位置に応じて右下のメニューを表示
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);

      if (!scrolled) {
        setMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Escapeキーでメニューを閉じる
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 現在表示しているセクションを監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page relative">
      {/* ぱんくずリスト */}
      <div className="absolute left-6 top-24 z-20 sm:left-10 lg:left-16">
        <Breadcrumbs
          items={[{ label: "Top", href: "/" }, { label: "About" }]}
        />
      </div>

      {/* ファーストビュー */}
      <section className="about-hero">
        <div className="quadrant-grid">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className="quadrant-link"
              onClick={() => scrollToSection(section.id)}
            >
              <span className="quadrant-number font-dm">{section.number}</span>

              <span className="quadrant-label font-cormorant">
                {section.label}
              </span>
            </button>
          ))}
        </div>

        {/* 中央のアイコン */}
        <div className="center-icon">
          <img src="/images/profile.png" alt="Profile" />
        </div>

        <p className="scroll-indicator">SCROLL TO EXPLORE</p>
      </section>

      <div className="about-content">
        {/* 01 Profile */}
        <section id="profile" className="about-section">
          <SectionHeading number="01 / PROFILE">Profile</SectionHeading>

          <div className="max-w-3xl space-y-6">
            {profile.introduction.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-8 text-[#d0c2b0] md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* 02 Career */}
        <section id="career" className="about-section">
          <SectionHeading number="02 / CAREER">Career</SectionHeading>

          <div className="max-w-4xl border-l border-[#665448]">
            {careerHistory.map((item) => (
              <CareerItem key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* 03 Skills */}
        <section id="skills" className="about-section">
          <SectionHeading number="03 / SKILLS">Skills</SectionHeading>
          <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>{" "}
        </section>

        {/* 04 Experience */}
        <section id="experience" className="about-section">
          <SectionHeading number="04 / EXPERIENCE">
            Development Experience
          </SectionHeading>

          <div className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
            {developmentExperiences.map((experience) => (
              <ExperienceItem key={experience.title} item={experience} />
            ))}
          </div>

          <div className="mt-20 max-w-4xl">
            <h3 className="mb-8 text-xl font-light tracking-wide text-[#f3e9d9]">
              開発で意識していること
            </h3>

            <ul className="grid grid-cols-1 gap-5 border-t border-[#665448] pt-8 md:grid-cols-2">
              {developmentPrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-4">
                  <CheckCircleIcon
                    size={22}
                    weight="light"
                    className="mt-1 shrink-0 text-[#d8c3a5]"
                  />

                  <span className="text-sm leading-7 text-[#d0c2b0]">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* セクションインジケーター */}
      <nav
        className={`section-indicator ${isScrolled ? "is-visible" : ""}`}
        aria-label="セクションナビゲーション"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`section-dot ${
              activeSection === section.id ? "is-active" : ""
            }`}
            aria-label={`${section.number} ${section.label}`}
            aria-current={activeSection === section.id ? "location" : undefined}
            onClick={() => scrollToSection(section.id)}
          />
        ))}
      </nav>

      {/* スクロール後の右下固定アイコン */}
      <div className={`floating-navigation ${isScrolled ? "is-visible" : ""}`}>
        {menuOpen && (
          <button
            type="button"
            className="menu-backdrop"
            aria-label="メニューを閉じる"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`icon-menu ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.id}
                className={`icon-menu ${menuOpen ? "is-open" : ""}`}
                aria-hidden={!menuOpen}
              >
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      className="menu-item"
                      tabIndex={menuOpen ? 0 : -1}
                      onClick={() => scrollToSection(section.id)}
                    >
                      <Icon size={22} />
                      <span>{section.number}</span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="floating-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          tabIndex={isScrolled ? 0 : -1}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <img src="/images/profile.png" alt="" />
          )}
        </button>
      </div>
    </main>
  );
}
