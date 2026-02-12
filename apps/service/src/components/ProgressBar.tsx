'use client';

import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  className?: string;
}

export const ProgressBar = ({ value, className }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setWidth(value);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <div 
      className={`h-3 w-full overflow-hidden rounded-full bg-gray-100 ${className}`} 
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin={0} 
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-pink-500 transition-all duration-1000 ease-out will-change-[width]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};