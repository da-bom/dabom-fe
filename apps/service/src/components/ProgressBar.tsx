'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface ProgressBarProps {
  value: number;
  className?: string;
}

export const ProgressBar = ({ value, className }: ProgressBarProps) => {
  const data = [{ name: 'Progress', current: value }];

  return (
    <div className={`h-3 w-full ${className}`}>
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
            fill="#EC4899"
            radius={[10, 10, 10, 10]}
            barSize={12}
            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-out"
            background={{ fill: '#F3F4F6', radius: 10 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};