"use client";

import { motion } from "framer-motion";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center">
      {/* ヘッダー */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] mb-12 text-center"
      >
        事業紹介
      </motion.h1>

      <section className="max-w-5xl space-y-16 text-gray-300 leading-relaxed">
        {/* SES事業 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="border-l-4 border-red-500 pl-6"
        >
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            ① SES事業
          </h2>
          <p>
            エンジニアとしての豊富な開発経験を活かし、企業向けにシステム開発・運用支援を提供。
            JavaやPythonなどの主要技術を中心に、柔軟なSES・受託開発体制を構築しています。
          </p>
          <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>主要技術：Java（Spring Boot）、Python、Vue.js、AWS など</li>
            <li>対応形態：常駐・リモート・受託開発</li>
            <li>目的：顧客と共に成長する技術パートナーを目指す</li>
          </ul>
        </motion.div>

        {/* SaaS事業 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-l-4 border-red-500 pl-6"
        >
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            ② SaaS事業
          </h2>
          <p>
            自社開発サービス「ClipBeats」「NowWhere」などを中心に、日常や創作活動を支えるSaaSを展開。
            AI・音楽・位置情報・会計など、テクノロジーで人の創造力を拡張するプロダクトを目指しています。
          </p>
          <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>ClipBeats：AIによるBGMジェネレーター</li>
            <li>NowWhere：リアルタイム位置情報共有アプリ</li>
            <li>Shiwake：AI補助つき会計アプリ（開発中）</li>
          </ul>
        </motion.div>

        {/* 宇宙・ハードウェア事業 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="border-l-4 border-red-500 pl-6"
        >
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            ③ 宇宙・ハードウェア事業
          </h2>
          <p>
            MEMSセンサーやIMU（慣性計測装置）を中心としたハードウェア開発に取り組み、
            宇宙・ロボティクス・センシング領域に新しい価値を創出します。
          </p>
          <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>IMUモジュール開発（センサーフュージョン・温度補正）</li>
            <li>宇宙空間でのセンサー動作実験・評価</li>
            <li>関連技術のZenn記事による情報発信</li>
          </ul>
        </motion.div>

        {/* コンテンツ/IP事業 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="border-l-4 border-red-500 pl-6"
        >
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            ④ コンテンツ / IP事業
          </h2>
          <p>
            キャラクターやアート、映像、演劇などを通じて表現活動を行うIP創出事業。
            AIと人の創造を融合させ、次世代のエンターテインメントを生み出します。
          </p>
          <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>AIキャラクター制作とYouTube展開</li>
            <li>「ショートコントプロジェクト」などの演劇・映像企画</li>
            <li>ゲーム・アニメーション・音楽などへのIP拡張</li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
