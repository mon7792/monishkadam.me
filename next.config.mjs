/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/monishkadam.me",
  reactStrictMode: true,
  distDir: "docs",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
