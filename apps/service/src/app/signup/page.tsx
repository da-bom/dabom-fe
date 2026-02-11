"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@repo/shared/src";
import { Bomi, Logo } from "@repo/shared/src/assets";

export default function SignupPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background-base">
      <main className="pt-44.5 px-5">
        <Bomi className="mx-auto animate-bounce" />
        <Logo className="w-38 h-7 mx-auto" />

        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-center mt-35">
              <div className="flex justify-center">
                <Button size="lg" color="dark">
                  회원가입
                </Button>
              </div>
            </div>
            
            <section className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span>이미 계정이 있다면?</span>
              <Link
                href="/login"
                className="font-medium text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
              >
                로그인
              </Link>
            </section>
          </div>
        </form>
      </main>
    </div>
  );
}