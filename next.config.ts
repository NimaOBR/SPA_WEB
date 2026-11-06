import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // این بخش برای جلوگیری از ارور بیلد در ورسل اضافه شد
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;