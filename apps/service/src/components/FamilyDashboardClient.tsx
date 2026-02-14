"use client";

import { useEffect, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Icon, MainBox } from "@shared";

import { FAMILY_DETAIL } from "@shared/data/familyDetail";

import MemberChartView from "@service/components/MemberChartView";
import MemberListView from "@service/components/MemberListView";
import MonthNavigator from "@service/components/MonthNavigator";
import ProgressBar from "@service/components/ProgressBar";

import { CONFIG } from "../app/(afterLogin)/home/contents";

const FamilyDashboardClient = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryYear = Number(searchParams.get("year")) || 2026;
  const queryMonth = Number(searchParams.get("month")) || 1;
  const queryView = (searchParams.get("view") as "list" | "chart") || "list";

  const [year, setYear] = useState(queryYear);
  const [month, setMonth] = useState(queryMonth);
  const [viewMode, setViewMode] = useState<"list" | "chart">(queryView);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setYear(queryYear);
    setMonth(queryMonth);
    setViewMode(queryView);
  }, [queryYear, queryMonth, queryView]);

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
    const params = new URLSearchParams(searchParams.toString());
    params.set("year", nextYear.toString());
    params.set("month", nextMonth.toString());
    params.set("view", nextView);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePrevMonth = () => {
    let newYear = year;
    let newMonth = month - 1;
    if (newMonth < 1) {
      newYear -= 1;
      newMonth = 12;
    }
    updateUrl(newYear, newMonth, viewMode);
  };

  const handleNextMonth = () => {
    let newYear = year;
    let newMonth = month + 1;
    if (newMonth > 12) {
      newYear += 1;
      newMonth = 1;
    }
    updateUrl(newYear, newMonth, viewMode);
  };

  const toggleViewMode = () => {
    const newMode = viewMode === "list" ? "chart" : "list";
    updateUrl(year, month, newMode);
  };

  if (!isMounted) return null;

  return (
    <div className="flex w-full flex-col gap-6 px-5 pb-24">
      <MainBox className="relative w-full overflow-visible border-none p-5 shadow-sm">
        <div className="flex flex-col gap-2">
          <span className="text-body1-m text-gray-600">현재 데이터 사용량</span>
          <div className="flex items-baseline gap-2">
            <span className="text-main-m text-4xl font-bold">
              {totalUsageGB}GB
            </span>
            <span className="text-body2-m text-gray-400">
              / {totalLimitGB}GB
            </span>
          </div>
        </div>

        <Icon
          className="absolute top-0 right-0 z-10 -mt-12 -mr-2"
          name="Bomi"
        />

        <div className="mt-6">
          <ProgressBar value={usagePercent} className="h-4" />
        </div>
      </MainBox>

      <div className="flex w-full items-center justify-between">
        <MonthNavigator
          currentDateText={displayDate}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />
        <button
          onClick={toggleViewMode}
          className="text-caption-m text-gray-500 underline underline-offset-4"
        >
          {viewMode === "list" ? "📊 차트 보기" : "📋 리스트 보기"}
        </button>
      </div>

      <MainBox className="flex min-h-[400px] w-full flex-col border-none bg-white p-4 shadow-sm">
        <div className="h-full w-full">
          {members.length === 0 ? (
            <div className="flex flex-1 items-center justify-center text-gray-400">
              <p>등록된 가족 구성원이 없어요.</p>
            </div>
          ) : (
            <>
              {viewMode === "list" ? (
                <MemberListView members={members} />
              ) : (
                <MemberChartView
                  members={members}
                  totalUsageGB={totalUsageGB}
                />
              )}
            </>
          )}
        </div>
      </MainBox>
    </div>
  );
};

export default FamilyDashboardClient;
