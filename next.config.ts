import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? "/rockmary" : ""),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
