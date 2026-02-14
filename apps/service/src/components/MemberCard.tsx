import React from "react";

// 퍼블리싱 단계의 UI 컴포넌트
interface MemberCardProps {
  name: string;
  phoneNumber: string;
  usedAmount: string;
  totalAmount: string;
  usagePercent: number;
  isDanger: boolean;
}

export default function MemberCard({
  name,
  phoneNumber,
  usedAmount,
  totalAmount,
  usagePercent,
  isDanger,
}: MemberCardProps) {
  const usedColor = isDanger ? "text-negative" : "text-gray-800";
  const totalColor = "text-gray-800";

  return (
    <li className="w-full">
      <div className="flex w-full border-2 rounded-lg border-gray-200 bg-brand-white">
        <div className="mx-auto my-4 flex w-[calc(100%-32px)] items-center justify-between">
          <div className="flex flex-col gap-[3px]">
            <span className="text-body1-m text-brand-black">{name}</span>
            <span className="text-caption-m text-gray-800">{phoneNumber}</span>
          </div>

          <div className="flex flex-col items-end gap-1 w-[80px]">
            <div className="text-caption-m text-right w-full truncate">
              <span className={usedColor}>{usedAmount} </span>
              <span className={totalColor}>/ {totalAmount}</span>
            </div>

            <div className="h-[3.15px] w-full bg-gray-100 rounded-sm overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 rounded-sm"
                style={{ width: `${usagePercent}%` }}
                role="progressbar"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
