"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header, Button } from "@repo/shared/src";
// import { Logo } from "@repo/shared/src/assets/icons/logo.svg";
// import { Bomi } from "@repo/shared/src/assets/icons/bomi.svg";


import Input from "@repo/shared/src/components/InputField";
import Link from "next/link";

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
        {/* <Bomi /> */}

        {/* <Logo /> */}
      <main className="px-5 pt-53">
        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            
          <div className="flex justify-center mt-53">
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
