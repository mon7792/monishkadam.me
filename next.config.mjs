/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "docs",
  output: "export",
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/monishkadam.me";
}

export default nextConfig;
