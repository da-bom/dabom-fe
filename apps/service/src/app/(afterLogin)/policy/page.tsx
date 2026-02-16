"use client";

import React, { useState } from "react";

import { formatSize } from "@shared";

import { FAMILY_DETAIL } from "@shared/data/familyDetail";

import MemberCard from "@service/components/MemberCard";

interface CustomerState {
  customerId: string;
  limitBytes: number;
  isTimeEnabled: boolean; // API 가족 구성원 정책 수정 (추가 요청할 예정)
  timeStart: string | null; // API 가족 구성원 정책 수정 (추가 요청할 예정)
  timeEnd: string | null; // API 가족 구성원 정책 수정 (추가 요청할 예정)
}

export default function PolicyManagementPage() {
  const { customers } = FAMILY_DETAIL;

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [memberStates, setMemberStates] = useState<
    Record<string, CustomerState>
  >(() => {
    const initial: Record<string, CustomerState> = {};
    customers.forEach((c) => {
      const initialLimitGB = Math.round(
        c.monthlyLimitBytes / (1024 * 1024 * 1024),
      );

      initial[c.customerId.toString()] = {
        customerId: c.customerId.toString(),
        limitBytes: initialLimitGB > 0 ? initialLimitGB : 50,
        isTimeEnabled: true,
        timeStart: "23:00",
        timeEnd: "07:00",
      };
    });
    return initial;
  });

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingTarget, setEditingTarget] = useState<{
    id: string;
    type: "start" | "end";
  } | null>(null);

  const handleSelectCard = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleLimitChange = (id: string, newValue: number) => {
    setMemberStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], limitValue: newValue },
    }));
    // TODO: 추후 여기에 API 호출
  };

  const handleToggleTime = (id: string) => {
    setMemberStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], isTimeEnabled: !prev[id].isTimeEnabled },
    }));
  };

  const handleTimeClick = (id: string, type: "start" | "end") => {
    setEditingTarget({ id, type });
    setIsSheetOpen(true);
  };

  const handleSaveTime = (newTime: string) => {
    if (editingTarget) {
      const { id, type } = editingTarget;
      setMemberStates((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          [type === "start" ? "timeStart" : "timeEnd"]: newTime,
        },
      }));
    }
    setIsSheetOpen(false);
    setEditingTarget(null);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setEditingTarget(null);
  };

  const currentEditingTime = editingTarget
    ? editingTarget.type === "start"
      ? memberStates[editingTarget.id].timeStart
      : memberStates[editingTarget.id].timeEnd
    : "00:00";

  return (
    <section className="flex min-h-screen w-full justify-center">
      <div className="mt-4 w-full px-4 pb-20">
        <div className="text-body1-m mb-4">
          변경을 원하는 구성원을 선택하세요.
        </div>

        <ul className="flex flex-col gap-4">
          {customers.map((customer) => {
            const id = customer.customerId.toString();
            const state = memberStates[id];

            const formattedUsed = formatSize(customer.monthlyUsedBytes);
            const formattedLimit = formatSize(customer.monthlyLimitBytes);
            const percent =
              customer.monthlyLimitBytes === 0
                ? 0
                : Math.min(
                    (customer.monthlyUsedBytes / customer.monthlyLimitBytes) *
                      100,
                    100,
                  );

            return (
              <MemberCard
                key={id}
                id={id}
                name={customer.name}
                phoneNumber="010-****-1234"
                usedAmount={formattedUsed.total}
                totalAmount={formattedLimit.total}
                usagePercent={percent}
                isDanger={percent >= 90}
                isSelected={selectedId === id}
                limitValue={state.limitBytes}
                isTimeEnabled={state.isTimeEnabled}
                timeStart={state.timeStart}
                timeEnd={state.timeEnd}
                onSelect={() => handleSelectCard(id)}
                onLimitChange={(val) => handleLimitChange(id, val)}
                onToggleTime={() => handleToggleTime(id)}
                onTimeClick={(type) => handleTimeClick(id, type)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
