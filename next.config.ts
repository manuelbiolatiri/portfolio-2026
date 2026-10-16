import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          // Serve the Labs landing page at its own hostname without moving the portfolio.
          source: "/",
          has: [{ type: "host", value: "labs.manuelbiolatiri.me" }],
          destination: "/labs",
        },
      ],
    };
  },
};

export default nextConfig;
