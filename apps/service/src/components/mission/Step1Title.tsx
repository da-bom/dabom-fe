import { Button, Input } from '@shared';

const Step1Ttile = ({ prevStep, nextStep }: { prevStep: () => void; nextStep: () => void }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mt-30 flex flex-col gap-7">
        <p className="flex flex-col gap-2">
          <span className="text-h2-m">미션을 입력하세요.</span>
          <span className="text-body2-m text-gray-700">최대 20자까지 입력 가능합니다.</span>
        </p>
        {/* TODO: props 수정 */}
        <Input type="text" value="mission" onChange={() => {}} placeholder="입력하세요." />
      </div>
      <footer className="w-fill flex gap-2">
        <Button size="lg" color="light" onClick={prevStep}>
          이전
        </Button>
        <Button size="lg" color="dark" isFullWidth onClick={nextStep}>
          다음
        </Button>
      </footer>
    </div>
  );
};

export default Step1Ttile;
