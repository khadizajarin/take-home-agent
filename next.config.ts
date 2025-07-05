import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://www.allaboutai.com/wp-content/uploads/2024/11/How-AI-Agents-Work-in-Manufacturing.gif')]
  },
}

export default nextConfig;
