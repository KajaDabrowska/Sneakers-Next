/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ["assets.adidas.com"],
  },
};

module.exports = nextConfig;
