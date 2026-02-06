import "./globals.css";
import "./glitch.css";
import type { Metadata } from "next";
import Header from "./Header";
import Script from "next/script";

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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <meta name="google-site-verification" content="WONRoky-usvNr6XYYYXEtV-HO735CeIdM36R7tzGIdc" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LLL1GFERJ4', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* クライアント側ヘッダー */}
        <Header />

        <main
          className="
          flex-grow
          pt-[56px]      /* ← スマホ最適化（Header高さジャスト） */
          md:pt-[63px]
          lg:pt-[70px]
          "
        >
          {children}
        </main>

        <footer className="border-t border-gray-800 bg-black/80 text-gray-400 text-xs md:text-sm text-center py-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-red-500 font-semibold mb-2 tracking-wide">
              株式会社トゥエンティエイト
            </p>
            <p className="text-gray-500 text-[11px] md:text-sm">
              〒533-0033 大阪府大阪市東淀川区東中島1丁目17-5
              ステュディオ新大阪1030号室
            </p>
            <p className="mt-2 text-gray-500 text-[11px] md:text-sm">
              © 2026 TwentyEight Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
