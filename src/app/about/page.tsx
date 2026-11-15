import type { Metadata } from "next";

import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description: "これまでの開発経験、スキル、制作活動について紹介しています。",
};

export default function AboutPage() {
  return <AboutClient />;
}
