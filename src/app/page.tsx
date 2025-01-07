'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-black pt-28 pb-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl">
              <Image
                src="/images/profile.avif"
                alt="Profil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
            Merhaba, Ben Mucahid
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Full Stack yazılım geliştirici olarak modern web teknolojileri üzerinde çalışıyor ve sürekli kendimi geliştiriyorum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Blog Yazılarım</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/hakkimda"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-medium shadow-lg shadow-gray-200/25 dark:shadow-gray-900/25 hover:shadow-xl hover:shadow-gray-200/35 dark:hover:shadow-gray-900/35 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Hakkımda</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Geliştirme
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              React, Next.js ve TypeScript ile modern ve performanslı web uygulamaları geliştiriyorum.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Backend Geliştirme
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Node.js ve veritabanı teknolojileri ile güvenli ve ölçeklenebilir API'lar oluşturuyorum.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              UI/UX Tasarım
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailwind CSS ve modern tasarım prensipleri ile kullanıcı dostu arayüzler tasarlıyorum.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 