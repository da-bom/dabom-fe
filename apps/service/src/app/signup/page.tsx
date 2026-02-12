"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Bomi, Button, Logo } from "@shared";

export default function SignupPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="bg-background-base min-h-screen">
      <main className="px-5 pt-44.5">
        <Bomi className="mx-auto animate-bounce" />
        <Logo className="mx-auto h-7 w-38" />

        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="mt-35 flex justify-center">
              <Button type="submit" size="lg" color="dark">
                회원가입
              </Button>
            </div>

            <section className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span>이미 계정이 있다면?</span>
              <Link
                href="/login"
                className="font-medium text-black underline underline-offset-4 transition-colors hover:text-gray-800"
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
