import "./globals.css";
import "./glitch.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "株式会社トゥエンティエイト",
  description: "創造の限界に挑戦する会社。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-black text-white min-h-screen flex flex-col font-sans">
        {/* ====== ヘッダー ====== */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* ロゴ画像＋社名 */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/28.png" // ← ここを変更！
                alt="株式会社トゥエンティエイト ロゴ"
                width={42}
                height={42}
                className="drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]"
                priority
              />
            </Link>

            {/* ナビゲーション */}
            <nav className="hidden md:flex gap-8 text-sm text-gray-300">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-red-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/service"
                className="hover:text-red-500 transition-colors"
              >
                Service
              </Link>
              <Link
                href="/news"
                className="hover:text-red-500 transition-colors"
              >
                News
              </Link>
              <Link
                href="/recruit"
                className="hover:text-red-500 transition-colors"
              >
                Recruit
              </Link>
              <Link
                href="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* ====== ページ本体 ====== */}
        <main className="flex-grow pt-[80px]">{children}</main>

        {/* ====== フッター ====== */}
        <footer className="border-t border-gray-800 bg-black/80 text-gray-400 text-sm text-center py-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-red-500 font-semibold mb-2 tracking-wide">
              株式会社トゥエンティエイト
            </p>
            <p className="text-gray-500">
              〒533-0033 大阪府大阪市東淀川区東中島1丁目17-5
              ステュディオ新大阪1030号室
            </p>
            <p className="mt-2 text-gray-500">
              © 2025 TwentyEight Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
