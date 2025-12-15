import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚡ Tối ưu xử lý hình ảnh (không dùng unoptimized)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phim.nguonc.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    unoptimized: true,
  },

  // ⚡ Kết nối HTTP tối ưu → giảm độ trễ API
  httpAgentOptions: {
    keepAlive: true,
  },

  // 🧪 Tính năng thử nghiệm — chỉ bật cái an toàn
  experimental: {
    serverSourceMaps: false, // giảm log noise
    serverActions: {
      allowedOrigins: ["localhost:3000", "movie.flame.id.vn"],
    },
    optimizeCss: true, // ✔ đã stable
    // ❌ KHÔNG bật optimizePackageImports → gây lỗi import nhiều package
    // ❌ KHÔNG bật optimizeServerReact → gây lỗi hydration
  },

  // ⚡ Boost hiệu năng khi build + cache
  cacheComponents: true,

  // ⚡ Giảm size bundle 20–30%
  productionBrowserSourceMaps: false,
};

export default nextConfig;
