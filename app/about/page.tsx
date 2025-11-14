"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-8 pt-20 pb-16 flex flex-col items-center overflow-hidden">
      {/* ===== 背景 ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,100,255,0.12),transparent_70%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,40,60,0.18),transparent_70%)] z-0" />

      {/* ===== タイトル ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-center 
                   bg-gradient-to-r from-red-400 via-blue-400 to-red-400 
                   bg-clip-text text-transparent
                   drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
      >
        会社概要
      </motion.h1>

      {/* ===== 本文 ===== */}
      <section className="relative z-10 max-w-3xl space-y-16 text-gray-300 leading-relaxed">
        {/* --- 会社情報 --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-red-400 mb-3 border-l-4 pl-3 border-blue-400">
            会社情報
          </h2>

          <p className="mb-4">
            株式会社トゥエンティエイト（TwentyEight Inc.）は大阪を拠点に、
            テクノロジーと創造を軸にした多領域イノベーション企業です。
          </p>

          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              所在地：大阪府大阪市東淀川区東中島1丁目17-5
              ステュディオ新大阪1030号室
            </li>
            <li>設立：2025年6月2日</li>
            <li>代表取締役：櫻井 陽</li>
            <li>資本金：100万円</li>
            <li>Webサイト：https://twenty-eight28.com</li>
          </ul>
        </motion.div>

        {/* --- 理念 --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-red-400 mb-3 border-l-4 pl-3 border-blue-400">
            企業理念
          </h2>

          <p className="italic text-xl text-gray-100 mb-3">
            「自由と創造を礎に、人類の未来に貢献する。」
          </p>

          <p className="text-sm text-gray-400">
            私たちは創造性を解き放ち、テクノロジーとアートを融合させ、
            世界に新しい価値を生み出す企業であり続けます。
          </p>
        </motion.div>

        {/* --- ビジョン --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-red-400 mb-3 border-l-4 pl-3 border-blue-400">
            ビジョン
          </h2>

          <p className="text-xl text-gray-100 mb-3">
            「技術と表現の力で、人々がワクワクする未来を形にする会社へ。」
          </p>

          <p className="text-sm text-gray-400">
            30年後、私たちは“未来型の総合創造会社”として、
            IT・メーカー・アートなどあらゆる領域を横断する企業体を目指しています。
          </p>
        </motion.div>

        {/* --- ミッション --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-red-400 mb-3 border-l-4 pl-3 border-blue-400">
            ミッション
          </h2>

          <p className="text-xl text-gray-100 mb-3">
            ものづくりを通じて新しい体験を提供し、世界の可能性を広げる。
          </p>

          <p className="text-sm text-gray-400">
            トゥエンティエイトは、SES・SaaS・ハードウェア技術・コンテンツなど多軸の事業で
            “創造の限界に挑戦”します。
          </p>
        </motion.div>
      </section>

      {/* ===== 代表メッセージ ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.9 }}
        className="relative z-10 max-w-3xl mx-auto mt-20 pb-12"
      >
        <h2 className="text-3xl font-semibold text-red-400 mb-6 border-l-4 pl-3 border-blue-400">
          代表メッセージ
        </h2>

        <p className="text-gray-300 leading-relaxed mb-10 text-sm">
          私たちは、テクノロジーと表現の力を掛け合わせ、
          社会や産業の持つ可能性を最大限に引き出すことを使命としています。
          自由な発想と創造性を武器に、世界をより面白く、より豊かにしていきます。
        </p>

        {/* 写真 */}
        <div className="w-full flex justify-center">
          <div className="relative group">
            <Image
              src="/representative.jpg"
              alt="代表写真"
              width={480} // ← 小さくした
              height={680}
              className="rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
