import { useMemo } from 'react';
import {
  ApiFamilyDetail,
  DashboardViewModel,
  ViewMember,
} from '../../types/dataUsage';
import { CONFIG } from '../home/contents';
import { formatSize } from '@shared';

export const useFamilyDashboard = (
  rawData: ApiFamilyDetail,
  currentUserId: number,
  currentDate: Date
): DashboardViewModel => {
  return useMemo(() => {
    const displayDate = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
    }).format(currentDate);

    const totalUsage = formatSize(rawData.usedBytes);
    const totalLimit = formatSize(rawData.totalQuotaBytes);

    const members: ViewMember[] = rawData.customers.map((customer, index) => {
      const usage = formatSize(customer.monthlyUsedBytes);
      const limit = formatSize(customer.monthlyLimitBytes);

      const usageRate = limit.value > 0 ? usage.value / limit.value : 0;
      const isMe = customer.customerId === currentUserId;

      return {
        id: customer.customerId,
        name: customer.name,
        role: customer.role,
        usageGB: usage.value,
        limitGB: limit.value,
        isMe,
        alertMessage:
          usageRate >= CONFIG.WARNING_THRESHOLD
            ? '데이터 조절이 필요해요!'
            : null,
        color: isMe
          ? CONFIG.COLORS.ME
          : CONFIG.COLORS.OTHERS[index % CONFIG.COLORS.OTHERS.length],
      };
    });

    let chartGradient = '#F3F4F6 0deg 360deg';

    const totalCalculatedUsage = members.reduce(
      (acc, cur) => acc + cur.usageGB,
      0
    );

    if (members.length > 0 && totalCalculatedUsage > 0) {
      let accumulatedDeg = 0;
      chartGradient = members
        .map((member) => {
          const deg = (member.usageGB / totalCalculatedUsage) * 360;
          const start = accumulatedDeg;
          accumulatedDeg += deg;
          return `${member.color} ${start}deg ${accumulatedDeg}deg`;
        })
        .join(', ');
    }

    return {
      totalUsageGB: totalUsage.value,
      totalLimitGB: totalLimit.value,
      usagePercent: rawData.usedPercent,
      displayDate,
      members,
      chartGradient,
    };
  }, [rawData, currentUserId, currentDate]);
};