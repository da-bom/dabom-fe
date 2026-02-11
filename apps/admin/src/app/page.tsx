import { Button, Icon } from "@repo/shared/src";
import InputField from "@repo/shared/src/components/InputField";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-20 px-20 py-14 bg-brand-white w-fit rounded-3xl shadow-default">
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
