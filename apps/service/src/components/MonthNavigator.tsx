'use client';

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
  className = ''
}: MonthNavigatorProps) => {
  return (
    <div className={`flex select-none items-center justify-center gap-8 py-2 ${className}`}>
      <button 
        onClick={onPrev}
        className="p-2 text-gray-400 transition-colors hover:text-black active:scale-95"
        aria-label="이전 달로 이동"
      >
      </button>
      
      <span className="tabular-nums text-lg font-bold text-gray-800">
        {currentDateText}
      </span>
      
      <button 
        onClick={onNext}
        className="p-2 text-gray-400 transition-colors hover:text-black active:scale-95"
        aria-label="다음 달로 이동"
      >
      </button>
    </div>
  );
};