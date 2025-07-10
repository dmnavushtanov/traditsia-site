import type { NextConfig } from 'next'

// Base path can be explicitly provided via environment variable. This allows
// hosting the site either at the root of a custom domain or under a repository
// subpath when deploying to GitHub Pages.
// NOTE: interpret an empty NEXT_PUBLIC_BASE_PATH as explicitly requesting
// the root path. The variable may be set to an empty string in `.env` to
// override the GitHub Pages detection logic when deploying elsewhere.
const envBase =
  process.env.NEXT_PUBLIC_BASE_PATH === undefined
    ? null
    : process.env.NEXT_PUBLIC_BASE_PATH
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, '')}`
    : ''

// Detect GitHub Pages to apply the repository subpath when no override exists.
const isGitHubPages =
  envBase === null &&
  !process.env.NEXT_PUBLIC_VERCEL_ENV &&
  process.env.GITHUB_REPOSITORY?.endsWith('traditsia-site')

const basePath = envBase ?? (isGitHubPages ? '/traditsia-site' : '')
const assetPrefix = envBase !== null
  ? envBase
    ? `${envBase}/`
    : '/'
  : isGitHubPages
  ? '/traditsia-site/'
  : '/'

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
