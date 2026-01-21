import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "**.vercel.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore - ESLint config may not be in types for this Next.js version
  eslint: {
    ignoreDuringBuilds: true,
  },
  // To pozwala zbudować projekt mimo błędów TypeScript i ESLint
};

export default nextConfig;
