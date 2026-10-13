import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Shared hosting resolves clean URLs through directory index files.
  // This keeps routes such as /checkout/ and /politica-de-privacidade/
  // working without server-side rewrite rules.
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
