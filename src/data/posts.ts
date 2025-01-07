import { BlogPost } from '@/types/blog'

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js ile Modern Web Uygulamaları',
    description: 'Next.js kullanarak nasıl modern ve performanslı web uygulamaları geliştirebileceğinizi öğrenin.',
    content: `Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework'tür. 
    Server-side rendering, static site generation, API routes gibi özellikleriyle modern web uygulamaları 
    geliştirmeyi kolaylaştırır.`,
    date: '2023-12-25',
    author: 'Yazılım Dünyası',
    image: '/images/nextjs.avif',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    title: 'TypeScript ile Güvenli Kod Yazımı',
    description: 'TypeScript kullanarak nasıl daha güvenli ve sürdürülebilir kod yazabileceğinizi keşfedin.',
    content: `TypeScript, JavaScript'e tip güvenliği ekleyerek daha güvenli ve sürdürülebilir kod yazmamızı sağlar. 
    Interface'ler, generic tipler ve union types gibi özellikleriyle kod kalitesini artırır.`,
    date: '2023-12-24',
    author: 'Yazılım Dünyası',
    image: '/images/typescript.avif',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: '3',
    title: 'Tailwind CSS ile Modern UI Tasarımı',
    description: 'Tailwind CSS kullanarak modern ve responsive kullanıcı arayüzleri nasıl tasarlanır?',
    content: `Tailwind CSS, utility-first yaklaşımıyla CSS yazımını kolaylaştıran modern bir framework'tür. 
    Hazır class'ları kullanarak hızlı ve tutarlı UI tasarımları yapabilirsiniz.`,
    date: '2023-12-23',
    author: 'Yazılım Dünyası',
    image: '/images/tailwind.avif',
    tags: ['CSS', 'Tailwind', 'UI Design']
  }
] 