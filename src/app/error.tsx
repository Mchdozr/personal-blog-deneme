'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-semibold text-apple-gray-800 mb-6">
          Bir Hata Oluştu
        </h1>
        <p className="text-xl text-apple-gray-600 mb-8 max-w-lg mx-auto">
          Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin veya ana sayfaya dönün.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="apple-button"
          >
            Tekrar Dene
          </button>
          <a href="/" className="apple-button-outline">
            Ana Sayfaya Dön
          </a>
        </div>
      </motion.div>
    </div>
  )
} 