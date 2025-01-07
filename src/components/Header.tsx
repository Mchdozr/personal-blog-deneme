'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { memo } from 'react'

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => (
    <div className="w-[104px] h-[40px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
  ),
})

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/blog', label: 'Blog' },
  { href: '/hakkimda', label: 'Hakkımda' },
]

const Header = memo(function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Yazılım Dünyası
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative inline-flex items-center text-sm font-medium transition-colors ${
                    pathname === href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <div
                      className="absolute left-0 top-full block h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                    />
                  )}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
})

export default Header 