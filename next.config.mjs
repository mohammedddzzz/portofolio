import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Optionally, add any other Next.js config below
  

  // Enable the Rust-based MDX compiler and register MDX handling for Turbopack
  experimental: {
    mdxRs: true,
  },
  turbo: {
    rules: {
      '*.mdx': {
        loaders: ['@mdx-js/loader'],
      },
    },
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)