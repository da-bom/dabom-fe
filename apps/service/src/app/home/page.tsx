'use client';

import React, { useState } from 'react';
import MainBox from '@repo/shared/src/components/MainBox';
import { Header } from '@repo/shared/src';
import { FAMILY_DETAIL } from '../data/familyDetail';
import { useFamilyDashboard } from '../../hooks/useFamilyDashboard';
import { CONFIG } from './contents';
import { MonthNavigator } from '../../components/MonthNavigator';
import { ProgressBar } from '../../components/ProgressBar';
import { MemberListView } from '../../components/MemberListView';
import { MemberChartView } from '../../components/MemberChartView';
import { Icon } from '@repo/shared/src/components/Icon';

export default function FamilyDashboardPage() {
  const [viewMode, setViewMode] = useState<'list' | 'chart'>('list');
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));

  const viewModel = useFamilyDashboard(
    FAMILY_DETAIL,
    CONFIG.CURRENT_SESSION_ID,
    currentDate
  );

  const handlePrevMonth = () =>
    setCurrentDate((p) => new Date(p.getFullYear(), p.getMonth() - 1, 1));
  const handleNextMonth = () =>
    setCurrentDate((p) => new Date(p.getFullYear(), p.getMonth() + 1, 1));
  const toggleViewMode = () =>
    setViewMode((prev) => (prev === 'list' ? 'chart' : 'list'));

  return (
    <main className="min-h-screen bg-background-base">
      <Header />

      <div className="mx-auto grid max-w-2xl gap-6 px-5 pt-15.25">
        <MainBox className="overflow-visible border-none pb-5.75 pl-5.25 pr-5.25 pt-5.25">
          <div className="relative flex justify-between">
            <div className="flex flex-col gap-3.5 pt-2">
              <h2 className="text-sm font-medium text-gray-500">
                현재 데이터 사용량
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  {viewModel.totalUsageGB}GB
                </span>
                <span className="font-medium text-gray-400">
                  / {viewModel.totalLimitGB}GB
                </span>
              </div>
            </div>

            <div className="-mr-2 -mt-16 z-10 flex-shrink-0">
              <Icon name="Bomi" width={140} height={140} />
            </div>
          </div>

          <div className="mt-4">
            <ProgressBar value={viewModel.usagePercent} />
          </div>
        </MainBox>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <MonthNavigator
            currentDateText={viewModel.displayDate}
            onPrev={handlePrevMonth}
            onNext={handleNextMonth}
          />

          <button
            onClick={toggleViewMode}
            className="text-xs font-semibold text-gray-500 underline decoration-pink-500 underline-offset-4 transition-colors hover:text-pink-500"
            aria-pressed={viewMode === 'chart'}
          >
            {viewMode === 'list' ? '📊 차트 보기' : '📋 리스트 보기'}
          </button>
        </div>

        <MainBox className="flex min-h-[350px] flex-col justify-center border-none px-6.25 shadow-sm">
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
                />
              )}
            </>
          )}
        </MainBox>
      </div>
    </main>
  );
}