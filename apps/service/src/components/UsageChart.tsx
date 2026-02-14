"use client";

import { Pie } from "react-chartjs-2";

import SubBox from "@repo/shared/src/components/SubBox";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { CHART_COLOR } from "src/app/(afterLogin)/home/contents";
import { CustomerListType } from "src/types/dataUsage";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  customers: CustomerListType[];
  totalUsageGB: number;
}

const UsageChart = ({ customers, totalUsageGB }: Props) => {
  if (!customers || customers.length === 0) {
    return (
      <div className="flex w-full items-center justify-center p-8 text-gray-400">
        <p>데이터가 없습니다.</p>
      </div>
    );
  }

  const isEmpty = totalUsageGB === 0;

  const chartData = customers.map((customer, index) => {
    const idx = index % CHART_COLOR.COLORS.length;
    return {
      id: customer.customerId,
      name: customer.name,
      usageGB: customer.monthlyUsedBytes,
      color: CHART_COLOR.COLORS[idx],
      isMe: customer.isMe || false,
    };
  });

  const data = {
    labels: chartData.map((c) => c.name),
    datasets: [
      {
        data: chartData.map((c) => c.usageGB),
        backgroundColor: chartData.map((c) => c.color),
        borderWidth: 0,
        hoverOffset: 4,
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
          label: function (context: any) {
            return `${context.parsed.toFixed(1)}GB`;
          },
        },
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        bodyFont: {
          size: 12,
          weight: "bold" as const,
        },
      },
    },
    cutout: "35%",
  };

  return (
    <div className="animate-in fade-in zoom-in-95 flex w-full flex-col items-center duration-500">
      <div className="w-full">
        <Pie data={data} options={options} />
      </div>

      <SubBox className="mt-2 w-full border-none bg-white p-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {chartData.map((c) => (
            <div key={c.id} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full shadow-sm ring-1 ring-white"
                style={{ backgroundColor: c.color }}
              />
              <span className="text-sm font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </SubBox>
    </div>
  );
};

export default UsageChart;
