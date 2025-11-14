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
      date: "2025-09-01",
      title: "「NowWhere」β版テスト完了",
      content:
        "リアルタイム位置情報共有アプリ『NowWhere』の開発が完了し、社内テストフェーズへ移行しました。年内リリースを予定しています。",
    },
    {
      date: "2025-08-31",
      title: "「ClipBeats」β版リリース",
      content:
        "AIが自動でBGMを生成する音楽SaaS『ClipBeats』のβ版を公開しました。正式リリースは2025年12月を予定しています。",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 px-6 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] mb-10 text-center"
      >
        お知らせ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 mb-12 text-center max-w-2xl"
      >
        株式会社トゥエンティエイトの最新情報・プロダクトリリース・開発状況などをお届けします。
      </motion.p>

      <section className="w-full max-w-3xl space-y-8">
        {newsList.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl hover:border-red-500 transition-all duration-300"
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

      <p className="mt-14 text-gray-500 text-sm text-center">
        ※ 現在はサンプルデータです。今後CMSまたはMarkdown連携に対応予定。
      </p>
    </main>
  );
}
