'use client';

import React from 'react';

import {
  Block as BlockIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Emergency as E911EmergencyIcon,
} from '@mui/icons-material';
import { Badge, BadgeColor } from '@shared';

export type AppealStatus = 'pending' | 'approved' | 'rejected' | 'emergency';

interface AppealRequestCardProps {
  id: string;
  dataLimit: string;
  reason: string;
  status: AppealStatus;
  onClick?: () => void;
}

export function AppealRequestCard({
  id,
  dataLimit,
  reason,
  status,
  onClick,
}: AppealRequestCardProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'approved':
        return <CheckCircleOutlineIcon sx={{ fontSize: 15 }} className="text-positive" />;
      case 'rejected':
        return <BlockIcon sx={{ fontSize: 15 }} className="text-negative" />;
      case 'emergency':
        return <E911EmergencyIcon sx={{ fontSize: 15 }} className="text-negative" />;
      case 'pending':
      default:
        return null;
    }
  };

  const getBadgeColor = (): BadgeColor => {
    switch (status) {
      case 'pending':
        return 'primary_light';
      case 'emergency':
        return 'emergency';
      case 'approved':
      case 'rejected':
        return 'gray_light';
      default:
        return 'gray_light';
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-brand-white flex h-21.25 w-full cursor-pointer flex-col justify-center gap-2 rounded-2xl border border-gray-200 p-4"
    >
      <div className="flex h-6 w-full items-center gap-2">
        {/* 뱃지 영역 */}
        <Badge color={getBadgeColor()} className="px-4">
          <span className="text-body2-d">{id}</span>
        </Badge>

        {/* 데이터 한도 및 아이콘 영역 */}
        <div className="flex items-center gap-2">
          <span className="text-body1-m">{dataLimit}</span>
          <div className="flex h-4 w-4 items-center justify-center">{getStatusIcon()}</div>
        </div>
      </div>

      {/* 요청 사유 영역 */}
      <p className="text-body2-m line-clamp-1 h-5.25 w-full text-gray-700">{reason}</p>
    </div>
  );
}
