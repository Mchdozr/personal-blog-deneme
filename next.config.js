/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: 'loose',
  },
  // Disable SWC minifier
  swcMinify: false,
}

module.exports = nextConfig 