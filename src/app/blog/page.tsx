'use client'

import { posts } from '@/data/posts'
import BlogCard from '@/components/BlogCard'
import AnimatedLayout from '@/components/AnimatedLayout'
import { motion } from 'framer-motion'

export const dynamic = 'force-dynamic'

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

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto pt-28">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-50 mb-6 tracking-tight">
          Blog Yazıları
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Yazılım dünyasından en güncel bilgiler, teknik makaleler ve kişisel deneyimlerimi paylaştığım blog yazılarım.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
} 