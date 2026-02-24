"use client";

import { useState } from "react";

import { Button, InputField } from "@shared";

import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: login, isPending: isLoading } = useLogin();

  const handleLogin = () => {
    if (!email || !password) {
      // TODO: 디자인 추가 후 수정 예정
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    login({ email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-brand-white shadow-default flex w-fit flex-col items-center gap-20 rounded-3xl px-20 py-14">
        {/* <Icon name="Logo" className="w-34" /> */}
        <div className="flex flex-col gap-7">
          <InputField
            label="이메일"
            type="email"
            value={email}
            placeholder="admin@dabom.com"
            onChange={(value) => setEmail(value)}
          />
          <InputField
            label="비밀번호"
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={(value) => setPassword(value)}
          />
        </div>
        <Button
          size="lg"
          color="dark"
          onClick={handleLogin}
          disabled={isLoading}
        >
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
