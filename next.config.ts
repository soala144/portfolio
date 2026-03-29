import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net", // for the tech icons
      },
      {
        protocol: "https",
        hostname: "next-auth.js.org", // for NextAuth logo
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // for Cloudinary images
      },
    ],
  },
};

export default nextConfig;
