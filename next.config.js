/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }, {
        protocol: 'https',
        hostname: 'assets.myntassets.com'
      }, {
        protocol: 'https',
        hostname: 'rukminim1.flixcart.com'
      }, {
        protocol: 'https',
        hostname: 'assets.ajio.com'
      }
    ]
  }
}