'use client';

import { Icon } from '@repo/shared/src';
import React from 'react';

interface MonthNavigatorProps {
  currentDateText: string;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export const MonthNavigator = ({
  currentDateText,
  onPrev,
  onNext,
  className = '',
}: MonthNavigatorProps) => {
  return (
    <div
      className={`flex select-none items-center justify-center gap-[47px] py-2 ${className}`}
    >
      <button
        onClick={onPrev}
        className="flex items-center justify-center p-2 text-brand-dark transition-colors hover:opacity-70 active:scale-95"
        aria-label="이전 달로 이동"
      >
        <div className="rotate-180 transform">
          <Icon
            name="Right"
            width={7}
            height={12}
            className="fill-brand-dark"
          />
        </div>
      </button>

      <span className="w-[100px] text-center text-base font-medium leading-[150%] tabular-nums text-brand-dark">
        {currentDateText}
      </span>

      <button
        onClick={onNext}
        className="flex items-center justify-center p-2 text-brand-dark transition-colors hover:opacity-70 active:scale-95"
        aria-label="다음 달로 이동"
      >
        <div>
          <Icon
            name="Right"
            width={7}
            height={12}
            className="fill-brand-dark"
          />
        </div>
      </button>
    </div>
  );
};