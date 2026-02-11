"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header, Button } from "@repo/shared/src";
import Input from "@repo/shared/src/components/InputField";

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
    <div className="min-h-screen bg-base">

      <main className="px-5 pt-53.25">
        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="flex flex-col gap-10">
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
          <div className="flex justify-center mt-53.25">
            <Button size="lg" color="dark">
              로그인
            </Button>
          </div>
          </div>
        </form>
      </main>
    </div>
  );
}
