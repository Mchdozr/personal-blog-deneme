'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto pt-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-color rounded-full shadow-2xl blur-[2px]" style={{ '--gradient-start': '#0066cc', '--gradient-end': '#9d0297' } as any} />
          <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,102,204,0.3)]">
            <Image
              src="/images/profile.avif"
              alt="Profil Fotoğrafı"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-semibold text-apple-gray-800 mb-4 tracking-tight">
          Merhaba, Ben Mucahid
        </h1>
        <p className="text-xl text-apple-gray-500">
          Full Stack Yazılım Geliştirici
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        <motion.section 
          variants={item} 
          className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,102,204,0.4)] hover:-translate-y-1 transition-all duration-300"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <h2 className="text-2xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
            Hakkımda
          </h2>
          <p className="text-lg text-apple-gray-600 leading-relaxed">
            5 yıllık yazılım geliştirme deneyimine sahibim. Modern web teknolojileri üzerinde uzmanlaşmış
            olup, özellikle React, Next.js ve Node.js ekosistemlerinde çalışmaktayım. Kullanıcı deneyimini
            ön planda tutan, performanslı ve ölçeklenebilir uygulamalar geliştirmeyi seviyorum.
          </p>
        </motion.section>

        <motion.section 
          variants={item} 
          className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,102,204,0.4)] hover:-translate-y-1 transition-all duration-300"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <h2 className="text-2xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
            Yetenekler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden bg-gray-900/90 rounded-xl p-4 text-center hover:bg-gray-900 hover:shadow-[0_10px_30px_rgba(0,102,204,0.5)] hover:-translate-y-1 shadow-xl transition-all duration-300 group"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <div className="absolute inset-0 bg-gradient-color opacity-0 group-hover:opacity-10 transition-opacity" 
                  style={{ '--gradient-start': '#0066cc', '--gradient-end': '#9d0297' } as any} 
                />
                <span className="relative text-base text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          variants={item} 
          className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,102,204,0.4)] hover:-translate-y-1 transition-all duration-300"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <h2 className="text-2xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
            İletişim
          </h2>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-apple-blue hover:text-apple-blue-dark hover:shadow-[0_10px_30px_rgba(0,102,204,0.4)] transition-all duration-300 p-4 rounded-xl bg-white/50 hover:bg-white/80"
              >
                <span className="text-lg font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'GraphQL',
  'PostgreSQL',
  'Docker',
  'AWS',
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
] 