"use client";

import { motion } from "framer-motion";

export default function NewsPage() {
  const newsList = [
    {
      date: "2025-11-01",
      title: "SaaS第3弾「Shiwake」開発開始",
      content:
        "フリーランスエンジニア向けの買い切り型会計SaaS『Shiwake』の開発を開始しました。AIによる仕訳補助機能を搭載予定です。",
    },
    {
      date: "2025-10-30",
      title: "「NowWhere」β版テスト完了",
      content:
        "リアルタイム位置情報共有アプリ『NowWhere』の開発が完了し、社内テストフェーズへ移行しました。年内リリースを予定しています。",
    },
    // {
    //   date: "2025-08-31",
    //   title: "「ClipBeats」β版リリース",
    //   content:
    //     "AIが自動でBGMを生成する音楽SaaS『ClipBeats』のβ版を公開しました。正式リリースは2025年12月を予定しています。",
    // },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-6 pb-20 pt-20 bg-black text-white overflow-hidden">
      {/* ===== 背景（淡い青赤グラデーション） ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(60,120,255,0.15),transparent_70%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,50,80,0.2),transparent_70%)] z-0" />

      {/* ===== タイトル ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-10 text-center
                   bg-gradient-to-r from-red-400 via-blue-400 to-red-400 
                   bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
      >
        お知らせ
      </motion.h1>

      {/* ===== 説明文 ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-gray-400 mb-14 text-center max-w-2xl"
      >
        株式会社トゥエンティエイトの最新情報・プロダクトリリース・開発状況などをお届けします。
      </motion.p>

      {/* ===== ニュースリスト ===== */}
      <section className="relative z-10 w-full max-w-3xl space-y-8">
        {newsList.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            className="bg-black/40 backdrop-blur-md border border-gray-800 
                       p-6 rounded-xl hover:border-red-500 transition-all duration-300
                       shadow-[0_0_15px_rgba(255,0,0,0.15)]"
          >
            <p className="text-sm text-gray-400 mb-1">{news.date}</p>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              {news.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {news.content}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ===== 補足 ===== */}
    </main>
  );
}
