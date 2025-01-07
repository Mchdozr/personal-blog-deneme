'use client'

import { posts } from '@/data/posts'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto pt-24"
    >
      {post.image && (
        <div className="relative h-[400px] mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-semibold text-apple-gray-800 mb-6 leading-tight tracking-tight"
        >
          {post.title}
        </motion.h1>
        
        <div className="flex items-center gap-3 text-apple-gray-500 mb-6">
          <time className="text-lg">{new Date(post.date).toLocaleDateString('tr-TR')}</time>
          <span>•</span>
          <span className="text-lg">{post.author}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm rounded-full bg-apple-gray-100 text-apple-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <motion.p 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="mb-6 text-xl leading-relaxed text-apple-gray-600"
          >
            {paragraph.trim()}
          </motion.p>
        ))}
      </div>
    </motion.article>
  )
} 