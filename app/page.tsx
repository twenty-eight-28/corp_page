"use client";

import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine, OutMode, MoveDirection } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [rippling, setRippling] = useState(false);
  const [ripplePos, setRipplePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const router = useRouter();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "#000000" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: { repulse: { distance: 100, duration: 0.3 } },
      },
      particles: {
        color: { value: ["#ff0033", "#3399ff", "#ff3366"] },
        links: {
          color: "#3399ff",
          distance: 160,
          enable: true,
          opacity: 0.35,
          width: 1.1,
        },
        move: {
          enable: true,
          speed: 2.2,
          direction: MoveDirection.none,
          outModes: { default: OutMode.bounce },
        },
        number: { value: 90, density: { enable: true, area: 800 } },
        opacity: {
          value: { min: 0.3, max: 0.9 },
          animation: { enable: true, speed: 1.5, minimumValue: 0.2 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 3 },
          animation: { enable: true, speed: 2, minimumValue: 0.5 },
        },
        shadow: { enable: true, color: "#3399ff", blur: 8 },
      },
    }),
    []
  );

  // クリック → 波紋 → 画面遷移
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setRipplePos({ x: e.clientX, y: e.clientY });
    setRippling(true);
    // 波紋のアニメーション時間に合わせて遷移
    setTimeout(() => router.push("/about"), 700);
  };

  return (
    <>
      {/* 背景は fixed 全面 → フッターの後ろまで赤が続く */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {ready && (
          <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,50,0.30)_0%,transparent_70%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(50,100,255,0.15)_0%,transparent_70%)]" />
      </div>

      {/* 本文：下端まで密着（Retina 13”でも隙間ゼロ） */}
      <main
        className="
          relative 
          min-h-[100vh] 
          bg-transparent 
          text-white 
          flex 
          flex-col 
          items-center 
          justify-center           /* ← 常に中央寄せに戻す */
          px-4 
          pb-0
          md:pt-0                  /* ← PCは余白なし */
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-3 max-w-[90%] md:max-w-full"
        >
          {/* ---- 上部キャッチコピー ---- */}
          <motion.h1
            className="
              text-base md:text-xl 
              font-semibold 
              tracking-wide 
              text-gray-500 
              mb-6 md:mb-10
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            株式会社トゥエンティエイト
          </motion.h1>

          {/* ---- グリッチテキスト ---- */}
          <motion.p
            className="
              glitch-text 
              text-4xl 
              sm:text-5xl 
              md:text-7xl 
              font-bold 
              text-gray-200 
              leading-tight
              origin-bottom-left
              rotate-[-1deg] sm:rotate-[-2deg] md:rotate-[-3deg]
              /* ← スマホでの見切れを防ぐため段階的に弱める */
            "
            data-text="創造の限界に挑戦する会社。"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            創造の限界に挑戦する会社。
          </motion.p>

          {/* ---- 英語サブキャッチ ---- */}
          <motion.p
            className="mt-6 md:mt-8 text-xs md:text-base text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Freedom &amp; Creativity as the foundation for the future.
          </motion.p>
        </motion.div>

        {/* ---- CTAボタン ---- */}
        <motion.a
          href="/about"
          onClick={onEnter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="
            relative 
            inline-block 
            mt-10 md:mt-12 
            mb-10               /* ← モバイルでフッターにくっつかないため */
            px-8 py-3 md:px-10 md:py-4 
            border border-red-500 
            text-red-400 
            font-medium 
            tracking-wide 
            rounded-full 
            overflow-hidden 
            transition-all 
            duration-500 
            hover:text-white 
            text-sm md:text-base
          "
        >
          <span className="relative z-10">Enter the World</span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-700 opacity-0 hover:opacity-100 blur-md transition-all duration-700"></span>
          <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-red-600/20 animate-ping-slow"></span>
        </motion.a>
      </main>

      {/* クリック波紋オーバーレイ（全画面） */}
      {rippling && (
        <motion.span
          className="fixed pointer-events-none rounded-full bg-red-600 mix-blend-screen blur-md"
          style={{
            left: ripplePos.x,
            top: ripplePos.y,
            width: 24,
            height: 24,
            transform: "translate(-50%, -50%)",
            zIndex: 60,
          }}
          initial={{ opacity: 0.5, scale: 0 }}
          animate={{ opacity: 1, scale: 35 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      )}
    </>
  );
}
