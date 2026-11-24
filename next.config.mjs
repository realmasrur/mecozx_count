/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site -> `out/` folder, served by Cloudflare Pages.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
