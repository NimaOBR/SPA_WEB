import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. مجوز دادن به دامنه‌های عکس‌های خارجی (Unsplash)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // 2. نادیده گرفتن ارورهای تایپ‌اسکریپت موقع بیلد در ورسل
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;