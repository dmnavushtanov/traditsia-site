import type { NextConfig } from 'next'

// Base path can be explicitly provided via environment variable. This allows
// hosting the site either at the root of a custom domain or under a repository
// subpath when deploying to GitHub Pages.
const envBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, '')}`
  : null

// Detect GitHub Pages to apply the repository subpath when no override exists.
const isGitHubPages =
  !envBase &&
  !process.env.NEXT_PUBLIC_VERCEL_ENV &&
  process.env.GITHUB_REPOSITORY?.endsWith('traditsia-site')

const basePath = envBase ?? (isGitHubPages ? '/traditsia-site' : '')
const assetPrefix = envBase ? `${envBase}/` : isGitHubPages ? '/traditsia-site/' : '/'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
}

export default nextConfig
