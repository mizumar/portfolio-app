import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "作品一覧",
  description: "制作した作品を紹介するポートフォリオです。",
  robots: {
    index: false, // 検索結果に表示させない
    follow: false, // ページ内のリンクを辿らせない（必要に応じて設定）
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
