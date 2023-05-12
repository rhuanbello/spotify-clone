/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.scdn.co',
      'mosaic.scdn.co',
      'blend-playlist-covers.spotifycdn.com',
      'seed-mix-image.spotifycdn.com',
      'wrapped-images.spotifycdn.com',
      'spotifycdn'
    ]
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
