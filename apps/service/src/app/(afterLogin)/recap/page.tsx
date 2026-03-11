'use client';

import React, { Suspense, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@shared';
import { RECAP_CONFIG, RECAP_UI_TEXT } from 'src/constants/recap';
import { MOCK_RECAP_DATA } from 'src/data/recap';

import BalancedOpalescentBackground from './BalancedOpalescentBackground';
import { RecapStep1Usage } from './RecapStep1Usage';

function RecapContent() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [data] = useState(MOCK_RECAP_DATA.data);

  const totalSteps = RECAP_CONFIG.TOTAL_STEPS;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push('/home');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      router.back();
    }
  };

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-transparent">
      <BalancedOpalescentBackground />
      <div className="flex flex-1 flex-col">
        {currentStep === 0 && (
          <RecapStep1Usage
            usageByWeekday={data.usageByWeekday}
            mostUsedWeekday={data.peakUsage.mostUsedWeekday}
          />
        )}
      </div>

      {currentStep === totalSteps - 1 && (
        <div className="pointer-events-none fixed bottom-24 left-0 flex w-full justify-center px-5">
          <Button size="lg" color="dark" className="pointer-events-auto" onClick={() => {}}>
            {RECAP_UI_TEXT.SHARE}
          </Button>
        </div>
      )}
    </div>
  );
}

export default function RecapPage() {
  return (
    <Suspense fallback={<div className="bg-background-base h-full min-h-screen" />}>
      <RecapContent />
    </Suspense>
  );
}
