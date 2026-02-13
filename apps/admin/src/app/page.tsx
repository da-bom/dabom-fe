import { Button, Icon, InputField } from "@shared";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-brand-white shadow-default flex w-fit flex-col items-center gap-20 rounded-3xl px-20 py-14">
        <Icon name="Logo" className="w-34" />
        <div className="flex flex-col gap-7">
          <InputField label="아이디" type="id" />
          <InputField label="비밀번호" type="password" />
        </div>
        <Button size="lg" color="dark">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
