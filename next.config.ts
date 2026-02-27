import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep dev cache separate from production builds to avoid manifest collisions.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  // Force tracing root to this repository and silence multi-lockfile ambiguity.
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: false,
  env: {
    googleAnalyticsId: process.env.NODE_ENV === "production" ? process.env.GA_MEASUREMENT_ID : "",
  },
};

export default nextConfig;
