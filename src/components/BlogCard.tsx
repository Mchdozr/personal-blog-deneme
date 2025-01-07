'use client'

import { BlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {post.image && (
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <time className="text-base text-apple-gray-500">
            {new Date(post.date).toLocaleDateString('tr-TR')}
          </time>
          <span className="text-apple-gray-400">•</span>
          <span className="text-base text-apple-gray-500">{post.author}</span>
        </div>
        <Link href={`/blog/${post.id}`} className="block group-hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-apple-gray-800 mb-4 leading-tight tracking-tight group-hover:text-apple-blue transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-lg text-apple-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
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
      </div>
    </motion.div>
  )
} 