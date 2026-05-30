import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // local assets served from /public need no remotePatterns
    unoptimized: false,
  },
}

export default nextConfig
