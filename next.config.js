/** @type {import('next').NextConfig} */

const nextConfig = {
  // and the following to enable top-level await support for Webpack
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },

  experimental: {
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
};
