import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new (require('webpack').DefinePlugin)({
        'process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
      })
    );
    return config;
  },
}

console.log("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in next.config.ts:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

export default nextConfig 