import React from 'react';
import { ViewMember } from '../types/dataUsage';
import { Icon } from '@repo/shared/src/components/Icon';

interface Props {
  members: ViewMember[];
}

export const MemberListView = ({ members }: Props) => {
  const WARNING_THRESHOLD = 0.6;

  return (
    <ul className="flex flex-col gap-8">
      {members.map((member) => {
        const usageRatio =
          member.limitGB > 0 ? member.usageGB / member.limitGB : 0;
        const showWarning = usageRatio >= WARNING_THRESHOLD;

        return (
          <li
            key={member.id}
            className="grid grid-cols-[auto_1fr_auto] items-start gap-4"
          >
            <div className="h-8 w-8 rounded-full bg-gray-200" />

            <div className="flex items-center gap-2 pt-1">
              <span className="text-base font-medium text-black">
                {member.name}
              </span>
              {member.isMe && (
                <span className="rounded-full bg-primary px-3 py-0.5 text-[13px] font-medium leading-[140%] text-white">
                  나
                </span>
              )}
            </div>

            <div className="flex flex-col items-end gap-1 pt-1">
              <div className="text-right text-base font-medium text-black">
                <span>{member.usageGB}GB</span>
                <span className="text-black">/{member.limitGB}GB</span>
              </div>

              {showWarning && (
                <div className="animate-in fade-in slide-in-from-top-1 flex items-center gap-[5px] duration-300">
                  <Icon
                    name="Warning"
                    width={12}
                    height={12}
                    className="fill-[#FF383C]"
                  />
                  <span className="text-xs font-medium leading-[140%] text-[#FF383C]">
                    데이터 사용량 조절이 필요해요
                  </span>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};