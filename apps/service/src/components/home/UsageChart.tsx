'use client';

import { Pie } from 'react-chartjs-2';

import { bytesToGB } from '@shared';
import { ArcElement, Chart as ChartJS, Legend, Tooltip, TooltipItem } from 'chart.js';

import { CHART_COLOR } from 'src/app/(afterLogin)/home/contents';
import { CustomerListType } from 'src/types/DataUsage';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  customers: CustomerListType[];
  totalUsageGB: number;
  totalQuotaBytes: number;
}

const UsageChart = ({ customers, totalUsageGB, totalQuotaBytes }: Props) => {
  if (!customers || customers.length === 0) {
    return (
      <div className="flex h-75 w-full items-center justify-center rounded-2xl border text-gray-400">
        <p>데이터가 없습니다.</p>
      </div>
    );
  }

  const isEmpty = totalUsageGB === 0;
  const totalQuotaGB = bytesToGB(totalQuotaBytes);
  const remainingTotalGB = Math.max(0, totalQuotaGB - totalUsageGB);

  const memberSlices = customers.map((customer, index) => {
    const color = CHART_COLOR.COLORS[index % CHART_COLOR.COLORS.length];
    const usedGB = bytesToGB(customer.monthlyUsedBytes);

    return {
      id: customer.customerId,
      name: customer.name,
      value: usedGB,
      color,
      isRemaining: false,
    };
  });

  const chartData = [
    ...memberSlices,
    {
      id: 'total-remaining',
      name: '전체 잔여 용량',
      value: remainingTotalGB,
      color: '#ffffff',
      isRemaining: true,
    },
  ];

  const data = {
    labels: chartData.map((c) => c.name),
    datasets: [
      {
        data: chartData.map((c) => c.value),
        backgroundColor: chartData.map((c) => c.color),
        borderWidth: 0,
        hoverOffset: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: !isEmpty,
        callbacks: {
          label: (context: TooltipItem<'pie'>) => {
            const val = context.parsed;
            return ` ${context.label}: ${val.toFixed(1)}GB`;
          },
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ffffff',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        bodyFont: {
          size: 12,
          weight: 'bold' as const,
        },
      },
    },
    cutout: '35%',
  };

  const legendData = customers.map((customer, index) => ({
    id: customer.customerId,
    name: customer.name,
    color: CHART_COLOR.COLORS[index % CHART_COLOR.COLORS.length],
  }));

  return (
    <div className="bg-brand-white animate-in fade-in zoom-in-95 flex h-75 w-full flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 duration-500">
      <div className="relative h-[215px] w-[215px]">
        <Pie data={data} options={options} />
      </div>

      <div className="flex w-full flex-wrap justify-center gap-x-4 gap-y-1 px-2">
        {legendData.map((c) => (
          <div key={c.id} className="flex items-center gap-1">
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: c.color }} />
            <span className="text-caption-m">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsageChart;
