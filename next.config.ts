import type { NextConfig } from 'next'

// Detect if we are building the GitHub Pages version. When running in a GitHub
// workflow (GITHUB_REPOSITORY is defined) and not on a platform like Vercel
// (NEXT_PUBLIC_VERCEL_ENV is undefined), we assume assets should be served from
// the repository subpath.
const isGitHubPages =
  !process.env.NEXT_PUBLIC_VERCEL_ENV &&
  process.env.GITHUB_REPOSITORY?.endsWith('traditsia-site')

const basePath = isGitHubPages ? '/traditsia-site' : ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: isGitHubPages ? '/traditsia-site/' : '/',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
}

export default nextConfig
