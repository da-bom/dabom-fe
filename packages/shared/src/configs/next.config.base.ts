import { NextConfig } from 'next';

const nextConfigBase: NextConfig = {
  transpilePackages: ['@shared'],
  turbopack: {},

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
      transpilePackages: ['@tanstack/react-query', '@tanstack/react-query-devtools'],
    });

    return config;
  },
};

export default nextConfigBase;
