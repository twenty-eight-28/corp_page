"use client";

import { motion } from "framer-motion";

export default function RecruitPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16 flex flex-col items-center overflow-hidden">
      {/* ====== ページタイトル ====== */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glitch-text text-5xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] mb-12 text-center"
        data-text="Recruit"
      >
        Recruit
      </motion.h1>

      {/* ====== コンテンツ ====== */}
      <section className="max-w-3xl space-y-12 text-gray-300 leading-relaxed relative z-10">
        {/* 概要 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-red-400 mb-3 glitch-text"
            data-text="採用メッセージ"
          >
            採用メッセージ
          </h2>
          <p>
            株式会社トゥエンティエイトは、「創造の限界に挑戦する」という理念のもと、
            テクノロジーと表現の力を融合させて、世界に新しい価値を生み出しています。
          </p>
          <p className="mt-3">
            私たちは、枠にとらわれない発想と、挑戦を楽しむ心を持った仲間を求めています。
            学歴・年齢・職種の垣根を越えて、“未来を創るチーム”に加わりませんか？
          </p>
        </motion.div>

        {/* 募集職種 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-red-400 mb-3 glitch-text"
            data-text="募集職種"
          >
            募集職種
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-400">
            <li>システムエンジニア（SES / 自社サービス開発）</li>
            <li>フロントエンドエンジニア（Next.js / Flutterなど）</li>
            <li>AIエンジニア（Python / LLM活用 / SaaS構築）</li>
            <li>コンテンツクリエイター（映像・脚本・キャラクター開発）</li>
            <li>ハードウェア技術者（センサー / 宇宙関連開発）</li>
          </ul>
        </motion.div>

        {/* 募集要項 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-red-400 mb-3 glitch-text"
            data-text="募集要項"
          >
            募集要項
          </h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>雇用形態：業務委託 / フリーランス契約 / 正社員（検討中）</li>
            <li>勤務地：大阪・リモート（ハイブリッド可）</li>
            <li>勤務時間：裁量労働制（案件・プロジェクトによる）</li>
            <li>報酬：スキル・成果に応じて応相談</li>
          </ul>
        </motion.div>

        {/* 応募方法 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-red-400 mb-3 glitch-text"
            data-text="応募方法"
          >
            応募方法
          </h2>
          <p className="text-sm text-gray-400">
            下記のメールアドレス宛に、履歴書またはポートフォリオURLを添付のうえお送りください。
          </p>
          <p className="mt-2 text-red-400 font-semibold">
            📧 sakuraiakira2828@gmail.com
          </p>
          <p className="mt-3 text-sm text-gray-500">
            ※選考通過者のみ、オンライン面談の日程をご連絡いたします。
          </p>
        </motion.div>
      </section>
    </main>
  );
}
