'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/blog', label: 'Blog' },
  { href: '/hakkimda', label: 'Hakkımda' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-glass backdrop-blur-md border-b border-white/20">
      <nav className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-semibold text-apple-gray-800 hover:text-apple-blue transition-colors">
                Yazılım Dünyası
              </span>
            </Link>
          </div>

          <div className="flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative inline-flex items-center text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-apple-blue'
                    : 'text-apple-gray-600 hover:text-apple-gray-800'
                }`}
              >
                {label}
                {pathname === href && (
                  <div
                    className="absolute left-0 top-full block h-0.5 w-full bg-apple-blue"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
} 