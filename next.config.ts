import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  async redirects() {
    return [
      {
        source: "/faq",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "rakshitjain.in" }],
        destination: "https://www.rakshitjain.in/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "rakshitjain-portfolio-v2.vercel.app" }],
        destination: "https://www.rakshitjain.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
