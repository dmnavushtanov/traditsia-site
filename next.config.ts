import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\//, '')}`
  : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  webpack: (config) => {
    config.plugins.push(
      new (require('webpack').DefinePlugin)({
        'process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY': JSON.stringify(
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        ),
      })
    )
    return config
  },
}

export default nextConfig
