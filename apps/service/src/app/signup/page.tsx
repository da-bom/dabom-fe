"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Icon } from "@repo/shared/src";
import { Bomi, Logo } from "@repo/shared/src/assets/icons";

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
        <Icon name="Bomi" width={200} height={200} className="mx-auto animate-bounce" />
        <Icon name="Logo" width={152} height={40} className="mx-auto" />

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