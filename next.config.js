/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
