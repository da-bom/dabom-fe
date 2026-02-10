import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/shared"],
  experimental: {
    // Next.js 16 런타임이 요구하는 정확한 키 이름은 'turbopack'입니다.
    turbopack: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  } as any, // 👈 'turbopack' 키가 타입에 없을 수 있으므로 any로 우회합니다.

  // Turbopack이 실패할 경우를 대비한 Webpack 하위 호환성
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
