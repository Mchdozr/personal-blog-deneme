import { BlogPost } from '@/types/blog'

export const posts: BlogPost[] = [
  {
    id: 'nextjs-ve-tailwind',
    title: 'Next.js ve Tailwind CSS ile Modern Web Geliştirme',
    date: '2024-01-07',
    readTime: 5,
    excerpt: 'Modern web geliştirme dünyasında Next.js ve Tailwind CSS kullanarak nasıl hızlı ve etkili web uygulamaları geliştirebileceğinizi öğrenin.',
    content: `
      Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework'tür. 
      Tailwind CSS ile birleştiğinde, geliştirme süreciniz inanılmaz derecede hızlanır ve 
      ortaya çıkan sonuç hem performanslı hem de görsel açıdan etkileyici olur.
    `,
    image: '/images/nextjs.avif',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Web Development']
  },
  {
    id: 'typescript-ile-guvenli-kod',
    title: 'TypeScript ile Daha Güvenli Kod Yazımı',
    date: '2024-01-06',
    readTime: 7,
    excerpt: 'TypeScript kullanarak nasıl daha güvenli ve sürdürülebilir JavaScript kodu yazabileceğinizi keşfedin.',
    content: `
      TypeScript, JavaScript'e statik tip desteği ekleyerek kodunuzu daha güvenli ve 
      yönetilebilir hale getirir. Bu yazıda TypeScript'in temel özelliklerini ve 
      avantajlarını inceleyeceğiz.
    `,
    image: '/images/typescript.avif',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development']
  },
  {
    id: 'tailwind-css-ipuclari',
    title: 'Tailwind CSS ile Verimli UI Geliştirme',
    date: '2024-01-05',
    readTime: 6,
    excerpt: 'Tailwind CSS kullanarak nasıl hızlı ve etkili bir şekilde modern kullanıcı arayüzleri geliştirebileceğinizi öğrenin.',
    content: `
      Tailwind CSS, utility-first yaklaşımıyla UI geliştirme sürecini baştan aşağı değiştiriyor. 
      Bu yazıda Tailwind CSS'in en iyi pratiklerini ve ipuçlarını paylaşacağız.
    `,
    image: '/images/tailwind.avif',
    tags: ['Tailwind CSS', 'CSS', 'UI Design', 'Web Development']
  }
] 