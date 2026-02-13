'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MainBox from '@repo/shared/src/components/MainBox';
import { Header } from '@repo/shared/src';
import { FAMILY_DETAIL } from '../../../../../packages/shared/src/data/familyDetail';
import { Icon } from '@shared';
import { ProgressBar } from '@service/components/ProgressBar';
import { MonthNavigator } from '@service/components/MonthNavigator';
import { MemberListView } from '@service/components/MemberListView';
import { MemberChartView } from '@service/components/MemberChartView';
import { useFamilyDashboard } from '../hook/useFamilyDashboard';
import { CONFIG } from './contents';

interface Props {
  initialYear: number;
  initialMonth: number;
  initialViewMode: 'list' | 'chart';
}

export default function FamilyDashboardClient({
  initialYear,
  initialMonth,
  initialViewMode,
}: Props) {
  const router = useRouter();

  const currentDate = new Date(initialYear, initialMonth - 1, 1);

  const viewModel = useFamilyDashboard(
    FAMILY_DETAIL,
    CONFIG.CURRENT_SESSION_ID,
    currentDate
  );

  const updateUrl = (year: number, month: number, view: string) => {
    const params = new URLSearchParams();
    params.set('year', year.toString());
    params.set('month', month.toString());
    params.set('view', view);
    router.push(`?${params.toString()}`);
  };

  const handlePrevMonth = () => {
    let newYear = initialYear;
    let newMonth = initialMonth - 1;

    if (newMonth < 1) {
      newYear -= 1;
      newMonth = 12;
    }
    updateUrl(newYear, newMonth, initialViewMode);
  };

  const handleNextMonth = () => {
    let newYear = initialYear;
    let newMonth = initialMonth + 1;

    if (newMonth > 12) {
      newYear += 1;
      newMonth = 1;
    }
    updateUrl(newYear, newMonth, initialViewMode);
  };

  const toggleViewMode = () => {
    const newMode = initialViewMode === 'list' ? 'chart' : 'list';
    updateUrl(initialYear, initialMonth, newMode);
  };

  return (
    <main className="min-h-screen bg-background-base">
      <Header />

      <div className="mx-auto grid max-w-2xl gap-6 px-5 pt-15.25">
        <MainBox className="overflow-visible border-none pb-5.75 pl-5.25 pr-5.25 pt-5.25">
          <div className="relative flex justify-between">
            <div className="flex flex-col gap-3.5 pt-2">
              <h2 className="text-sm font-medium text-brand-dark">
                현재 데이터 사용량
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-brand-dark sm:text-5xl">
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
            <ProgressBar value={viewModel.usagePercent} className="h-4" />
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
            aria-pressed={initialViewMode === 'chart'}
          >
            {initialViewMode === 'list' ? '📊 차트 보기' : '📋 리스트 보기'}
          </button>
        </div>

        <MainBox className="flex min-h-[350px] flex-col justify-center border-none px-6.25 shadow-sm">
          {viewModel.members.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400">
              <p>등록된 가족 구성원이 없어요.</p>
            </div>
          ) : (
            <>
              {initialViewMode === 'list' ? (
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