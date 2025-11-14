"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 px-6 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-red-500 mb-10 text-center"
      >
        お問い合わせ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 mb-12 text-center max-w-2xl"
      >
        弊社へのご質問・ご依頼などこちらからお問い合わせください。
      </motion.p>

      {/* ✨← 実際に送信できるフォーム（Formspree） */}
      <motion.form
        action="https://formspree.io/f/xzzydgwg" // ←ここに Formspree の ID 入れる
        method="POST"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-lg bg-gray-900/40 p-8 rounded-2xl shadow-lg border border-gray-800"
      >
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">お名前</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            お問い合わせ内容
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-500 rounded-full font-semibold text-white transition"
        >
          送信する
        </button>
      </motion.form>

      <p className="mt-10 text-sm text-gray-500 text-center">
        ※ このフォームは Formspree で安全に送信されます。
      </p>
    </main>
  );
}
