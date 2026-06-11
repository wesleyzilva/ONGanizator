/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ONGanizator',
  assetPrefix: '/ONGanizator/',
  images: { unoptimized: true },
  transpilePackages: ['@onganizator/shared'],
};

module.exports = nextConfig;
