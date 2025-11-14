"use client";

import { motion } from "framer-motion";
import { Code, Cpu } from "lucide-react"; // アイコン

export default function ServicePage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-8 pt-20 pb-20 flex flex-col items-center overflow-hidden">
      {/* ===== 背景（控えめな青赤グラデーション） ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(60,120,255,0.15),transparent_70%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,50,80,0.20),transparent_70%)] z-0" />

      {/* ===== ページタイトル ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r
                   from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent
                   drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]"
      >
        事業紹介
      </motion.h1>

      {/* ===== 事業一覧 ===== */}
      <section className="relative z-10 max-w-4xl w-full space-y-12 text-gray-300 leading-relaxed">
        {/* === ① SES事業 === */}
        <ServiceCard
          icon={<Code className="text-blue-400 w-10 h-10" />}
          title="① SES事業"
          color="blue"
          description="エンジニアとしての豊富な開発経験を活かし、企業向けにシステム開発・運用支援を提供。JavaやPythonなどの主要技術を中心に、柔軟なSES・受託開発体制を構築しています。"
          items={[
            "主要技術：Java（Spring Boot）、Python、Vue.js、AWS など",
            "対応形態：常駐・リモート・受託開発",
            "目的：顧客と共に成長する技術パートナーを目指す",
          ]}
        />

        {/* === ② SaaS事業 === */}
        <ServiceCard
          icon={<Cpu className="text-red-400 w-10 h-10" />}
          title="② SaaS事業"
          color="red"
          description="ClipBeats、NowWhereなど、自社サービスを中心に日常や創作活動を支えるSaaSを展開。AI・音楽・位置情報・会計など、テクノロジーによって人の創造力を拡張するプロダクトを開発。"
          items={[
            `ClipBeats：<a href="https://clip-beats.com/" target="_blank" class="text-blue-400 underline decoration-red-400 decoration-2 underline-offset-4 hover:text-red-400 transition">AIによるBGMジェネレーター</a>`,
            "NowWhere：リアルタイム位置情報共有アプリ",
          ]}
        />

        {/* === ③ 宇宙 / ハードウェア ===
        <ServiceCard
          icon={<Rocket className="text-purple-400 w-10 h-10" />}
          title="③ 宇宙・ハードウェア事業"
          color="purple"
          description="MEMSセンサーやIMU（慣性計測装置）を中心としたハードウェア開発に取り組み、宇宙・ロボティクス・センシング領域に新しい価値を創出します。"
          items={[
            "IMUモジュール開発（センサーフュージョン・温度補正）",
            "宇宙空間でのセンサー動作実験",
            "技術情報のZenn発信",
          ]}
        />

        {/* === ④ IP / コンテンツ === */}
        {/* <ServiceCard
          icon={<Sparkles className="text-pink-400 w-10 h-10" />}
          title="④ コンテンツ / IP事業"
          color="pink"
          description="キャラクター、アート、映像、演劇などを通じて表現活動を行うIP創出事業。AIと創造の融合によって次世代エンタメを生み出しています。"
          items={[
            "AIキャラクター制作・YouTube展開",
            "ショートコントプロジェクト",
            "ゲーム・アニメーションなどへのIP拡張",
          ]}
        /> */}
      </section>
    </main>
  );
}

/* ===== カードコンポーネント ===== */
function ServiceCard({
  icon,
  title,
  description,
  items,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  color: "red" | "blue" | "purple" | "pink";
}) {
  const borderColor = {
    red: "border-red-500",
    blue: "border-blue-500",
    purple: "border-purple-500",
    pink: "border-pink-400",
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`p-6 rounded-xl bg-black/40 backdrop-blur-md border-l-4 ${borderColor}`}
    >
      <div className="flex items-center gap-4 mb-3">
        {icon}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <p className="text-gray-300 mb-3">{description}</p>

      <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </motion.div>
  );
}
