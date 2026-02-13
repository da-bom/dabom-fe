'use client';

import { cn } from '@shared';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ProgressBarProps {
  value: number;
  className?: string;
}

export const ProgressBar = ({ value, className }: ProgressBarProps) => {
  const data = [{ name: 'Progress', current: value }];

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" dataKey="name" hide />
          
          <Bar
            dataKey="current"
            fill="var(--color-primary)"
            radius={[10, 10, 10, 10]}
            barSize={12}
            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-out"
            background={{ fill: 'var(--color-gray-100)', radius: 10 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div> 
  );
};