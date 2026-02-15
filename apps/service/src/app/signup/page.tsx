"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bomi, Button, Logo } from "@shared";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="bg-background-base min-h-screen w-full flex flex-col items-center">
      <main className="w-full flex flex-col items-center">
        
        <div className="mt-56.25">
          <Bomi className="w-[200px] h-[200px] mx-auto animate-bounce" />
        </div>

        <div className="mt-5.75">
          <Logo className="mx-auto h-7 w-38" />
        </div>

        <form onSubmit={handleSignup} className="mt-35.5 w-82 flex flex-col gap-2">
            <Button type="submit" size="lg" color="dark">
              회원가입
            </Button>

          <section className="flex items-center justify-center gap-2 w-full h-4.25">
            <span className="text-caption-m">
              이미 계정이 있다면?
            </span>
              <Link
                href="/login"
                className="underline underline-offset-4"
              >
                로그인
              </Link>
          </section>
        </form>
      </main>
    </div>
  );
}