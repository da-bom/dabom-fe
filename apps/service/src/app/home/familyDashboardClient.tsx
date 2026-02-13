"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { Icon, MainBox } from "@shared";

import { MemberChartView } from "@service/components/MemberChartView";
import { MemberListView } from "@service/components/MemberListView";
import { MonthNavigator } from "@service/components/MonthNavigator";
import { ProgressBar } from "@service/components/ProgressBar";

import { FAMILY_DETAIL } from "../../../../../packages/shared/src/data/familyDetail";
import { CONFIG } from "./contents";

interface Props {
  initialYear: number;
  initialMonth: number;
  initialViewMode: "list" | "chart";
}

export default function FamilyDashboardClient({
  initialYear,
  initialMonth,
  initialViewMode,
}: Props) {
  const router = useRouter();
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [viewMode, setViewMode] = useState<"list" | "chart">(initialViewMode);

  const bytesToGB = (bytes: number) =>
    Number((bytes / (1024 * 1024 * 1024)).toFixed(1));

  const totalUsageGB = bytesToGB(FAMILY_DETAIL.usedBytes);
  const totalLimitGB = bytesToGB(FAMILY_DETAIL.totalQuotaBytes);
  const usagePercent = FAMILY_DETAIL.usedPercent;

  const members = FAMILY_DETAIL.customers.map((customer, index) => {
    const isMe = index === 0;
    const usageRatio = customer.monthlyUsedBytes / customer.monthlyLimitBytes;
    const isWarning = usageRatio >= CONFIG.WARNING_THRESHOLD;
    const otherColorIndex = (index - 1) % CONFIG.COLORS.OTHERS.length;

    return {
      id: customer.customerId,
      name: customer.name,
      role: customer.role,
      usageGB: bytesToGB(customer.monthlyUsedBytes),
      limitGB: bytesToGB(customer.monthlyLimitBytes),
      isMe,
      alertMessage: isWarning ? "데이터를 많이 사용했어요" : null,
      color: isMe ? CONFIG.COLORS.ME : CONFIG.COLORS.OTHERS[otherColorIndex],
    };
  });

  const displayDate = `${year}년 ${month}월`;

  const updateUrl = (
    nextYear: number,
    nextMonth: number,
    nextView: "list" | "chart",
  ) => {
    const params = new URLSearchParams();
    params.set("year", nextYear.toString());
    params.set("month", nextMonth.toString());
    params.set("view", nextView);
    router.push(`?${params.toString()}`);
  };

  const handlePrevMonth = () => {
    let newYear = year;
    let newMonth = month - 1;

    if (newMonth < 1) {
      newYear -= 1;
      newMonth = 12;
    }

    setYear(newYear);
    setMonth(newMonth);
    updateUrl(newYear, newMonth, viewMode);
  };

  const handleNextMonth = () => {
    let newYear = year;
    let newMonth = month + 1;

    if (newMonth > 12) {
      newYear += 1;
      newMonth = 1;
    }

    setYear(newYear);
    setMonth(newMonth);
    updateUrl(newYear, newMonth, viewMode);
  };

  const toggleViewMode = () => {
    const newMode = viewMode === "list" ? "chart" : "list";
    setViewMode(newMode);
    updateUrl(year, month, newMode);
  };

  return (
    <div className="mt-15.25 flex w-full flex-col gap-6 px-5 pb-20">
      <MainBox className="w-full overflow-visible border-none pb-5.75 pl-5.25 pr-5.25 pt-5.25">
        <div className="relative flex justify-between">
          <div className="flex flex-col gap-3.5 pt-2">
            <h2 className="text-body1-m text-brand-dark">현재 데이터 사용량</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-main-m text-4xl text-brand-dark sm:text-5xl">
                {totalUsageGB}GB
              </span>
              <span className="text-body2-m text-gray-400">
                / {totalLimitGB}GB
              </span>
            </div>
          </div>

          <div className="z-10 -mr-2 -mt-16 flex-shrink-0">
            <Icon name="Bomi" width={140} height={140} />
          </div>
        </div>

        <div className="mt-4">
          <ProgressBar value={usagePercent} className="h-4" />
        </div>
      </MainBox>

      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <MonthNavigator
          currentDateText={displayDate}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />

        <button
          onClick={toggleViewMode}
          aria-pressed={viewMode === "chart"}
          className="text-caption-m text-gray-500 underline underline-offset-4"
        >
          {viewMode === "list" ? "📊 차트 보기" : "📋 리스트 보기"}
        </button>
      </div>

      <MainBox className="flex min-h-[300px] w-full flex-col justify-center border-none px-6.25 shadow-sm">
        {members.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-gray-400">
            <p>등록된 가족 구성원이 없어요.</p>
          </div>
        ) : (
          <>
            {viewMode === "list" ? (
              <MemberListView members={members} />
            ) : (
              <MemberChartView members={members} totalUsageGB={totalUsageGB} />
            )}
          </>
        )}
      </MainBox>
    </div>
  );
}
