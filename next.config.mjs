/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/nevada-nexus',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
