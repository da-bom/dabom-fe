import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 모노레포의 패키지들을 Next.js가 트랜스파일(해석)하도록 지정
  transpilePackages: ["@repo/ui", "@repo/hooks", "@repo/utils"],
  
  // 100만 사용자를 위한 standalone 빌드 설정
  output: "standalone", 
};

export default nextConfig;