import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 /* config options here */
 reactCompiler: true,
 cacheComponents: true,
 images: {
  qualities: [75, 85, 95, 100],
  formats: ["image/avif", "image/webp"],
 },
};

export default nextConfig;
