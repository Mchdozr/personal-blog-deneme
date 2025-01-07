'use client'

import { motion } from 'framer-motion'

interface AnimatedLayoutProps {
  children: React.ReactNode
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  )
} 