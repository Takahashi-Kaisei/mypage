import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ポートフォリオサイト",
  description: "記事と経歴をまとめたポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
