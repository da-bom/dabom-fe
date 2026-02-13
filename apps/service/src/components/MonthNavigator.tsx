'use client';

import { Icon } from '@repo/shared/src';
import React from 'react';

interface MonthNavigatorProps {
  currentDateText: string;
  onPrev: () => void;
  onNext: () => void;
}

export const MonthNavigator = ({
  currentDateText,
  onPrev,
  onNext,
}: MonthNavigatorProps) => {
  return (
    <div className="flex select-none items-center justify-center gap-10 py-2">
      <button
        onClick={onPrev}
        className="flex items-center justify-center text-black transition-colors hover:opacity-70 active:scale-95"
        aria-label="이전 달로 이동"
      >
        <div>
          <Icon name="Back" />
        </div>
      </button>

      <span className="w-[100px] text-center text-base font-medium leading-[150%] tabular-nums text-black">
        {currentDateText}
      </span>

      <button
        onClick={onNext}
        className="flex items-center justify-center text-black transition-colors hover:opacity-70 active:scale-95"
        aria-label="다음 달로 이동"
      >
        <div className="rotate-180 transform">
          <Icon name="Back" />
        </div>
      </button>
    </div>
  );
};