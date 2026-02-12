import React from 'react';
import SubBox from '@repo/shared/src/components/SubBox'; // 경로 확인 필요
import { ViewMember } from '../types/dataUsage';

interface Props {
  members: ViewMember[];
  totalUsageGB: number;
  chartGradient: string;
}

export const MemberChartView = ({ members, totalUsageGB, chartGradient }: Props) => {
  return (
    <div className="animate-in fade-in zoom-in-95 flex w-full flex-col items-center duration-500">
      <div
        className="relative mb-10 h-56 w-56 rounded-full shadow-inner transition-all"
        style={{ background: `conic-gradient(${chartGradient})` }}
      >
        <div className="absolute inset-0 m-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm">
          <div className="text-center">
            <span className="block text-xs font-medium text-gray-400">Total</span>
            <span className="tabular-nums block text-xl font-bold text-gray-800">{totalUsageGB}</span>
          </div>
        </div>
      </div>

      <SubBox className="w-full border-dashed bg-gray-50/50 p-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full shadow-sm ring-1 ring-white"
                style={{ backgroundColor: member.color }}
              />
              <span className="text-sm font-medium text-gray-600">{member.name}</span>
            </div>
          ))}
        </div>
      </SubBox>
    </div>
  );
};