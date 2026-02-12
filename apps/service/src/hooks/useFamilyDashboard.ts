import { useMemo } from 'react';
import { ApiFamilyDetail, DashboardViewModel, ViewMember } from '../types/dataUsage';
import { CONFIG } from '../app/home/contants';
import { formatGB } from '../app/home/utils';

export const useFamilyDashboard = (
  rawData: ApiFamilyDetail, 
  currentUserId: number,
  currentDate: Date
): DashboardViewModel => {
  return useMemo(() => {
    const displayDate = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

    const totalUsageGB = formatGB(rawData.usedBytes);
    const totalLimitGB = formatGB(rawData.totalQuotaBytes);

    const members: ViewMember[] = rawData.customers.map((customer, index) => {
      const usageGB = formatGB(customer.monthlyUsedBytes);
      const limitGB = formatGB(customer.monthlyLimitBytes);
      const usageRate = limitGB > 0 ? usageGB / limitGB : 0;
      const isMe = customer.customerId === currentUserId;

      return {
        id: customer.customerId,
        name: customer.name,
        role: customer.role,
        usageGB,
        limitGB,
        isMe,
        alertMessage: usageRate >= CONFIG.WARNING_THRESHOLD ? '데이터 조절이 필요해요!' : null,
        color: isMe ? CONFIG.COLORS.ME : CONFIG.COLORS.OTHERS[index % CONFIG.COLORS.OTHERS.length],
      };
    });

    let chartGradient = '#F3F4F6 0deg 360deg';
    const totalCalculatedUsage = members.reduce((acc, cur) => acc + cur.usageGB, 0);

    if (members.length > 0 && totalCalculatedUsage > 0) {
      let accumulatedDeg = 0;
      chartGradient = members.map((member) => {
          const deg = (member.usageGB / totalCalculatedUsage) * 360;
          const start = accumulatedDeg;
          accumulatedDeg += deg;
          return `${member.color} ${start}deg ${accumulatedDeg}deg`;
        }).join(', ');
    }

    return {
      totalUsageGB,
      totalLimitGB,
      usagePercent: rawData.usedPercent,
      displayDate,
      members,
      chartGradient,
    };
  }, [rawData, currentUserId, currentDate]);
};