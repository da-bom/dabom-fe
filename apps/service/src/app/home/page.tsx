'use client';

import React, { useState } from 'react';

import MainBox from '@repo/shared/src/components/MainBox';
import { Header } from '@repo/shared/src';

import { FAMILY_DETAIL } from '../../../../admin/src/data/familyDetail';
import { useFamilyDashboard } from '../../hooks/useFamilyDashboard';
import { CONFIG } from './contants';

import { MonthNavigator } from '../../components/MonthNavigator';
import { ProgressBar } from '../../components/ProgressBar';
import { MemberListView } from '../../components/MemberListView';
import { MemberChartView } from '../../components/MemberCharView';

export default function FamilyDashboardPage() {
  const [viewMode, setViewMode] = useState<'list' | 'chart'>('list');
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));

  const viewModel = useFamilyDashboard(
    FAMILY_DETAIL, 
    CONFIG.CURRENT_SESSION_ID,
    currentDate 
  );

  const handlePrevMonth = () => setCurrentDate(p => new Date(p.getFullYear(), p.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(p => new Date(p.getFullYear(), p.getMonth() + 1, 1));
  const toggleViewMode = () => setViewMode(prev => prev === 'list' ? 'chart' : 'list');

  return (
    <main className="min-h-screen space-y-6 bg-background-base">
      <Header />
      <div className="px-5">
        <MainBox className="flex pl-5.25 pb-3.5 pt-5.25 rounded-lg">
            <h2 className="mb-2 text-sm font-medium text-brand-dark">
                현재 데이터 사용량
            </h2>
            <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gray-900">{viewModel.totalUsageGB}GB</span>
                <span className="font-medium text-gray-400">/ {viewModel.totalLimitGB}GB</span>

            <ProgressBar value={viewModel.usagePercent} />
            </div>
            
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-primary-100 opacity-50 blur-xl" aria-hidden="true" />
            <div className="absolute right-6 top-6 text-4xl" aria-hidden="true">🍑</div>
        </MainBox>
      </div>

      <MonthNavigator 
        currentDateText={viewModel.displayDate}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />

      <div className="flex justify-end">
        <button
          onClick={toggleViewMode}
          className="text-xs font-semibold text-gray-500 underline decoration-pink-500 underline-offset-4 transition-colors hover:text-pink-500"
          aria-pressed={viewMode === 'chart'}
        >
        </button>
      </div>

      <MainBox className="flex min-h-[400px] flex-col justify-center border-none p-6 shadow-sm">
        {viewModel.members.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-gray-400">
            <p>등록된 가족 구성원이 없어요.</p>
          </div>
        ) : (
          <>
            {viewMode === 'list' ? (
              <MemberListView members={viewModel.members} />
            ) : (
              <MemberChartView 
                members={viewModel.members} 
                totalUsageGB={viewModel.totalUsageGB}
                chartGradient={viewModel.chartGradient}
              />
            )}
          </>
        )}
      </MainBox>
    </main>
  );
}