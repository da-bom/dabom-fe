"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header, Button } from "@repo/shared/src";
import Input from "../../components/input";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ phone, password });
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background-base">
      <Header isBackVisible={true} className="bg-background-base" />

      <main className="px-5 pt-10">
        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Input
              label="전화번호"
              type="tel"
              placeholder="전화번호를 입력해주세요"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-10">
            <Button type="submit">로그인</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
