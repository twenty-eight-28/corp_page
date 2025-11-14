"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function RecruitPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-8 pt-20 pb-20 flex flex-col items-center overflow-hidden">
      {/* ===== 背景（青×赤の淡い未来グラデーション） ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(60,120,255,0.15),transparent_70%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,40,60,0.20),transparent_70%)] z-0" />

      {/* ===== ページタイトル ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-16 text-center 
                   bg-gradient-to-r from-red-400 via-blue-400 to-red-400 
                   bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
      >
        Recruit
      </motion.h1>

      {/* ===== コンテンツ ===== */}
      <section className="relative z-10 max-w-3xl space-y-16 text-gray-300 leading-relaxed">
        {/* --- 採用メッセージ --- */}
        <RecruitCard
          title="採用メッセージ"
          content={
            <>
              <p>
                株式会社トゥエンティエイトは、「創造の限界に挑戦する」を理念に、
                テクノロジーと表現を融合させて新しい価値を世の中に生み出しています。
              </p>
              <p className="mt-3">
                私たちは、枠を越えた発想・挑戦を楽しめる心を持つ仲間を求めています。
                学歴・経歴は問いません。“未来を創るチーム”に加わりませんか？
              </p>
            </>
          }
        />

        {/* --- 募集職種 --- */}
        <RecruitCard
          title="募集職種"
          content={
            <ul className="list-disc pl-6 space-y-3 text-gray-400">
              <li>システムエンジニア（SES / 自社サービス）</li>
              <li>フロントエンドエンジニア（Next.js / Flutterほか）</li>
              <li>AIエンジニア（Python / LLM / SaaS）</li>
            </ul>
          }
        />

        {/* --- 募集要項 --- */}
        <RecruitCard
          title="募集要項"
          content={
            <ul className="space-y-2 text-sm text-gray-400">
              <li>雇用形態：業務委託 / フリーランス契約 / 正社員（検討中）</li>
              <li>勤務地：大阪・リモート併用可</li>
              <li>勤務時間：裁量労働制</li>
              <li>報酬：スキルに応じて応相談</li>
            </ul>
          }
        />

        {/* --- 応募方法 --- */}
        <RecruitCard
          title="応募方法"
          content={
            <>
              <p className="text-sm text-gray-400">
                下記のメール宛に履歴書をお送りください。
              </p>
              <p className="mt-3 text-red-400 font-semibold">
                📧 sakuraiakira2828@gmail.com
              </p>
              <p className="mt-3 text-xs text-gray-500">
                ※ 選考通過者のみ、オンライン面談・面談の案内をお送りします。
              </p>
            </>
          }
        />
      </section>

      {/* ===== CTAボタン ===== */}
      <a
        href="mailto:sakuraiakira2828@gmail.com"
        className="relative z-10 mt-16 px-10 py-3 rounded-full bg-red-600/80 hover:bg-red-500 
             transition text-white font-bold shadow-[0_0_20px_rgba(255,0,0,0.4)]"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="inline-block"
        >
          応募する
        </motion.span>
      </a>
    </main>
  );
}

/* ===== カードコンポーネント ===== */
function RecruitCard({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-gray-800 
                 shadow-[0_0_20px_rgba(255,0,0,0.1)]"
    >
      <h2 className="text-2xl font-semibold text-red-400 mb-3">{title}</h2>
      {content}
    </motion.div>
  );
}
