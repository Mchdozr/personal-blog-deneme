import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Yazılım Dünyası - Kişisel Blog',
  description: 'Yazılım dünyasından en güncel bilgiler ve kişisel deneyimler.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-gradient-to-br from-apple-gray-50 via-white to-apple-gray-100 min-h-screen font-sans antialiased">
        <div className="fixed inset-0 bg-gradient-color opacity-5" style={{ '--gradient-start': '#0066cc', '--gradient-end': '#9d0297' } as any} />
        <Header />
        <main className="relative max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
} 