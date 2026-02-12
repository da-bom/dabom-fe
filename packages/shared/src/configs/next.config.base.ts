import { NextConfig } from "next";

interface NextConfigWithTurbopack extends NextConfig {
  experimental?: NextConfig["experimental"] & {
    turbopack?: {
      rules: Record<
        string,
        {
          loaders: string[];
          as: string;
        }
      >;
    };
  };
}

const nextConfigBase: NextConfigWithTurbopack = {
  transpilePackages: ["@shared"],
  experimental: {
    turbopack: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfigBase;
