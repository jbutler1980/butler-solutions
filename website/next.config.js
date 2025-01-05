/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/butler-solutions',
  assetPrefix: '/butler-solutions'
}

module.exports = nextConfig