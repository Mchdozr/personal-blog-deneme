'use client'

import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto pt-28">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-300">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime} dk okuma</span>
        </div>
      </header>

      <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
} 