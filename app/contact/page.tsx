"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("送信が完了しました！（ダミー動作）");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 px-6 bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] mb-10 text-center"
      >
        お問い合わせ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 mb-12 text-center max-w-2xl"
      >
        弊社へのご質問・ご依頼・取材などはこちらのフォームよりお問い合わせください。
        <br />
        （現在はテスト用フォームです）
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-lg bg-gray-900/40 p-8 rounded-2xl shadow-lg border border-gray-800"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 text-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-500 rounded-full font-semibold text-white transition-colors duration-300"
        >
          送信する
        </button>
      </motion.form>

      <p className="mt-10 text-sm text-gray-500 text-center">
        ※ 実際の送信機能は未接続です。 後ほど Formspree または AWS SES
        で接続可能です。
      </p>
    </main>
  );
}
