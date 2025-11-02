/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  fetchCache: {
    default: {
      revalidate: 300,
    },
  },
}

module.exports = nextConfig
