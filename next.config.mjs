/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phim.nguonc.com",
        port: "",
        pathname: "/public/images/**",
      },
    ],
  },
};

export default nextConfig;
