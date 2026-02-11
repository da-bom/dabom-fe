import { Button, Icon } from "@repo/shared/src";
import InputField from "@repo/shared/src/components/InputField";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Icon name="Logo" width={500} height="auto" />
      <InputField label="아이디" type="id" />
      <InputField label="비밀번호" type="password" />
    </div>
  );
};

export default Home;
