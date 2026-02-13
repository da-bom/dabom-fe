import React from "react";

import { Icon } from "@shared";

import { ViewMember } from "../types/dataUsage";

interface MemberItemProps {
  member: ViewMember;
}

const WARNING_THRESHOLD = 0.6;

export const MemberItem = ({ member }: MemberItemProps) => {
  const usageRatio = member.limitGB > 0 ? member.usageGB / member.limitGB : 0;
  const showWarning = usageRatio >= WARNING_THRESHOLD;

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
      <div className="bg-gray-200 h-8 w-8 rounded-full" />

      <div className="flex items-center gap-2 pt-1">
        <span className="text-body2-d">{member.name}</span>
        {member.isMe && (
          <span className="bg-primary text-caption-d rounded-full px-3 py-0.5 text-[13px] text-white">
            나
          </span>
        )}
      </div>

      <div className="flex flex-col items-end gap-1 pt-1">
        <div className="text-body2-d">
          <span>{member.usageGB}GB</span>
          <span>/{member.limitGB}GB</span>
        </div>

        {showWarning && (
          <div className="flex items-center gap-1">
            <Icon
              name="Warning"
              width={12}
              height={12}
              className="bg-negative"
            />
            <span className="text-caption-m text-negative">
              데이터 사용량 조절이 필요해요
            </span>
          </div>
        )}
      </div>
    </li>
  );
};