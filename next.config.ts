import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during production build
  },
  typescript: {
    ignoreBuildErrors: true, // ignore TypeScript errors during build
  },
};

export default nextConfig;
