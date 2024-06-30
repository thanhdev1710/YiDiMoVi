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
  async redirects() {
    return [
      {
        source: "/robots.txt",
        destination: "/public/robots.txt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
