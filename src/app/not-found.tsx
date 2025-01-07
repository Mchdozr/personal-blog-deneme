import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Aradığınız sayfa bulunamadı.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
} 