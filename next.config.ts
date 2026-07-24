import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/base",
  assetPrefix: "/base",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
