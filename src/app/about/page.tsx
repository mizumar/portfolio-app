"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { Breadcrumbs } from "@/src/components/navigation/breadcrumbs";

import { CheckCircleIcon } from "@phosphor-icons/react";

import {
  careerHistory,
  developmentExperiences,
  developmentPrinciples,
  profile,
  sections,
  skillGroups,
} from "./about-data";

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

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    setMenuOpen(false);

    const top = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

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
    if (!("IntersectionObserver" in window)) return;

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
      if (element) observer.observe(element);
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
          </div>
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

        <div className={`icon-menu ${menuOpen ? "is-open" : ""}`}>
          {sections.map(({ id, number, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className="menu-item"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => scrollToSection(id)}
            >
              <Icon size={22} />
              <span>{number}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="floating-icon"
          onClick={() => setMenuOpen((open) => !open)}
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
