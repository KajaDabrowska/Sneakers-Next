/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //TODO adidas
  images: {
    domains: ["assets.adidas.com"],
  },
};

module.exports = nextConfig;
