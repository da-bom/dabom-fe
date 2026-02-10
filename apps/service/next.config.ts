import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/shared"],
  experimental: {
    // 1. TS 에러를 피하기 위해 turbo라는 키를 사용하되,
    // 2. 타입을 any로 캐스팅하여 'unknown property' 에러를 강제 해결합니다.
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  } as any, // 👈 experimental 전체를 any로 처리하는 것이 가장 깔끔합니다.

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
