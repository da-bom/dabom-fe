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
    <div className="bg-background-base flex min-h-screen w-full flex-col items-center">
      <main className="flex w-full flex-col items-center">
        <div className="mt-56.25">
          <Bomi className="mx-auto h-[200px] w-[200px] animate-bounce" />
        </div>

        <div className="mt-5.75">
          <Logo className="mx-auto h-7 w-38" />
        </div>

        <form
          onSubmit={handleSignup}
          className="mt-35.5 flex w-82 flex-col gap-2"
        >
          <Button type="submit" size="lg" color="dark">
            회원가입
          </Button>

          <section className="flex h-4.25 w-full items-center justify-center gap-2">
            <span className="text-caption-m">이미 계정이 있다면?</span>
            <Link href="/login" className="underline underline-offset-4">
              로그인
            </Link>
          </section>
        </form>
      </main>
    </div>
  );
}
