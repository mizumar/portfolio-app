import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-app-nine-lilac.vercel.app"),

  title: {
    default: "mizumar | Portfolio",
    template: "%s | mizumar",
  },

  description:
    "mizumarのWebアプリケーション開発の経験や制作物、これまでの開発について紹介するポートフォリオです。",

  authors: [{ name: "mizumar" }],
  creator: "mizumar",

  keywords: [
    "mizumar",
    "ポートフォリオ",
    "Web開発",
    "Next.js",
    "React",
    "TypeScript",
  ],

  openGraph: {
    title: "mizumar | Portfolio",
    description:
      "Webアプリケーション開発の経験や制作物を紹介するポートフォリオ。",
    url: "https://portfolio-app-nine-lilac.vercel.app",
    siteName: "mizumar",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "mizumar | Portfolio",
    description:
      "Webアプリケーション開発の経験や制作物を紹介するポートフォリオ。",
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
