import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phim.nguonc.com",
        port: "",
        pathname: "/public/images/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
