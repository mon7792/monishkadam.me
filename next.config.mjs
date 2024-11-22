/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/monishkadam.me",
  assetPrefix: "/monishkadam.me/",
  reactStrictMode: true,
  distDir: "dist",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
