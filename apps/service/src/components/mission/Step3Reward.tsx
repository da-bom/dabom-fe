import { useState } from 'react';

import { Button } from '@shared';

import { REWARD_TYPES } from 'src/types/rewardType';

const Step3Reward = ({ prevStep, nextStep }: { prevStep: () => void; nextStep: () => void }) => {
  const [selectedRewardType, setSelectedRewardType] = useState<string | null>(null);

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mt-30 flex flex-col gap-7">
        <p className="flex flex-col gap-2">
          <span className="text-h2-m">누구의 미션을 만들어볼까요?</span>
          <span className="text-body2-m text-gray-700">미션의 대상을 선택해 주세요.</span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          {REWARD_TYPES.map(({ id, label }) => {
            const isSelected = selectedRewardType === id;

            return (
              <button
                key={id}
                onClick={() => setSelectedRewardType(id)}
                className={`h-14 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-primary-100 text-brand-dark border-gray-500'
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <footer className="w-fill flex gap-2">
        <Button size="lg" color="light" isFullWidth onClick={prevStep}>
          이전
        </Button>
        <Button size="lg" color="dark" isFullWidth onClick={nextStep}>
          다음
        </Button>
      </footer>
    </div>
  );
};

export default Step3Reward;
