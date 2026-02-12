import React from 'react';
import { ViewMember } from '../types/dataUsage';

interface Props {
  members: ViewMember[];
}

export const MemberListView = ({ members }: Props) => {
  return (
    <ul className="space-y-8.5">
      {members.map((member) => (
        <li
          key={member.id}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-7.5 w-7.5 rounded-full bg-gray-200"
            >
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-gray-800">{member.name}</span>
              {member.isMe && (
                <span className="rounded-full bg-pink-500 px-3 py-0.25 text-xs text-white">
                  나
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <span className="text-lg text-gray-900">
              {member.usageGB}GB
            </span>
            <span className="text-lg font-medium text-gray-900">
              /{member.limitGB}GB
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};