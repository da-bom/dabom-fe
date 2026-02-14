import React from "react";

interface MemberCardProps {
  name: string;
  phoneNumber: string;
  usageText: string;
  usagePercent: number;
  isDanger: boolean;
}

export default function MemberCard({
  name,
  phoneNumber,
  usageText,
  usagePercent,
  isDanger,
}: MemberCardProps) {
  const statusColor = isDanger ? "text-negative" : "text-gray-800";

  return (
    <li className="w-full">
      <div className="flex w-full border-2 rounded-lg border-gray-200 bg-brand-white">
        <div className="mx-auto my-4 flex w-[calc(100%-32px)] items-center justify-between">
          <div className="flex flex-col gap-[3px]">
            <span className="text-body1-m text-brand-black">{name}</span>
            <span className="text-caption-m text-gray-800">{phoneNumber}</span>
          </div>
          
          <div className="flex flex-col items-end gap-1">
            <span className={`text-caption-m ${statusColor}`}>
              {usageText}
            </span>
            
            <div className="h-[3.15px] w-[80px] bg-gray-100">
              <div
                className="h-full bg-primary rounded-full"
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