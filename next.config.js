/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [],
    qualities: [75, 82, 88],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
