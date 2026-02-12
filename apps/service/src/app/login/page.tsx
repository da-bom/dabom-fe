"use client";

import { InputField, Button } from "@shared/src";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="bg-background-base min-h-screen">
      <main className="px-5 pt-53.25">
        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="flex flex-col gap-10">
            <InputField
              label="전화번호"
              type="tel"
              placeholder="전화번호를 입력해주세요"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <InputField
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-53.25 flex justify-center">
              <Button type="submit" size="lg" color="dark">
                로그인
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
