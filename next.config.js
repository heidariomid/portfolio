/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const withVideos = require("next-videos");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true
});

// Home is https://heidariomid.ir at the domain root. No /portfolio prefix.
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // GitHub Pages serves static files only and Next 12.2 has no images.unoptimized
  // flag — the akamai loader passes the path straight through, which makes
  // next/image compatible with `next export`. (The resulting //_next double
  // slash is collapsed to / by the server and is harmless.)
  images: {
    loader: "akamai",
    path: "/"
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    });
    return config;
  }
};

// Compose the plugins so none of the config above is lost (previously each
// module.exports reassignment clobbered the last — only the final one applied).
module.exports = withPWA(withVideos(nextConfig));
