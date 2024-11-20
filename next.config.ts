import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Add support for importing SVGs as React components
    });
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"], // Add the hostname of your external image
  },
  // Other config options can go here
};

export default nextConfig;
