'use client'

import BlogCard from '@/components/BlogCard'
import { posts } from '@/data/posts'

export default function Home() {
  return (
    <div className="pt-28 space-y-20">
      <section className="text-center mb-16">
        <h1 className="text-6xl font-semibold text-apple-gray-800 mb-8 leading-tight tracking-tight">
          Yazılım Dünyasına
          <br />
          Hoş Geldiniz
        </h1>
        <p className="text-2xl text-apple-gray-600 max-w-3xl mx-auto leading-relaxed">
          Modern web teknolojileri, yazılım geliştirme ve kullanıcı deneyimi üzerine
          düşüncelerimi ve deneyimlerimi paylaşıyorum.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  )
} 