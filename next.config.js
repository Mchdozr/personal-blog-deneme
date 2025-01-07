/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable SWC minifier for better performance
  swcMinify: true,
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Reduce bundle size
  poweredByHeader: false,
}

module.exports = nextConfig 