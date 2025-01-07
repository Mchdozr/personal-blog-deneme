import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'

const Header = dynamic(() => import('@/components/Header'), {
  ssr: true,
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kişisel Blog',
  description: 'Modern web teknolojileri ve yazılım geliştirme üzerine blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
} 