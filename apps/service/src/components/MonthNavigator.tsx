"use client";

import React from "react";

import { Icon } from "@repo/shared/src";

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
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="flex select-none items-center justify-center gap-10 py-2">
      <button
        onClick={handlePrev}
        className="flex items-center justify-center transition-opacity hover:opacity-70 active:scale-95"
        aria-label="이전 달로 이동"
      >
        <Icon name="Back" />
      </button>

      <span className="w-28 text-center text-body1-m tabular-nums">
        {currentDateText}
      </span>

      <button
        onClick={handleNext}
        className="flex items-center justify-center transition-opacity hover:opacity-70 active:scale-95"
        aria-label="다음 달로 이동"
      >
        <div className="rotate-180">
          <Icon name="Back" />
        </div>
      </button>
    </div>
  );
};
