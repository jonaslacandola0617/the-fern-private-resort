import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // The site only uses committed local photos. Serving them directly avoids
    // optimizer-specific failures while keeping the original assets cacheable.
    unoptimized: true,
  },
};

export default nextConfig;
