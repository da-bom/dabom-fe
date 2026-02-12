import React from 'react';
import { ViewMember } from '../types/dataUsage';

interface Props {
  members: ViewMember[];
}

export const MemberListView = ({ members }: Props) => {
  return (
    <ul className="space-y-6">
      {members.map((member) => (
        <li key={member.id} className="animate-in slide-in-from-bottom-2 fade-in flex items-center gap-4 duration-500">
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold transition-colors ${
              member.isMe ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-400'
            }`}
          >
            {member.name[0]}
          </div>

          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-800">{member.name}</span>
                {member.isMe && (
                  <span className="rounded-full bg-pink-500 px-2 py-0.5 text-[10px] font-bold text-white">나</span>
                )}
              </div>
              <div className="text-sm">
                <span className="tabular-nums text-lg font-bold text-gray-900">{member.usageGB}GB</span>
                <span className="text-gray-400">/{member.limitGB}GB</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};