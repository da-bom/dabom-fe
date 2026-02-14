"use client";

import SubBox from "@repo/shared/src/components/SubBox";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CHART_COLOR } from "src/app/(afterLogin)/home/contents";
import { CustomerListType } from "src/types/dataUsage";

interface Props {
  customers: CustomerListType[];
  totalUsageGB: number;
}

const UsageChart = ({ customers, totalUsageGB }: Props) => {
  const isEmpty = totalUsageGB === 0;

  const chartData = customers.map((customer, index) => {
    const isMe = customer.isMe || false;

    const idx = index % CHART_COLOR.COLORS.length;
    const color = CHART_COLOR.COLORS[idx];

    return {
      id: customer.customerId,
      name: customer.name,
      usageGB: customer.monthlyUsedBytes,
      color: color,
      isMe: isMe,
    };
  });

  return (
    <div className="animate-in fade-in zoom-in-95 flex w-full flex-col items-center duration-500">
      <div className="relative h-64 w-full max-w-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={110}
              dataKey="usageGB"
              startAngle={90}
              endAngle={-270}
              stroke="none"
              isAnimationActive={!isEmpty}
            >
              {chartData.map((entry) => (
                <Cell key={`cell-${entry.id}`} fill={entry.color} />
              ))}
            </Pie>

            {!isEmpty && (
              <Tooltip
                formatter={(value: number | undefined) =>
                  value !== undefined ? `${value.toFixed(1)}GB` : "0GB"
                }
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                wrapperStyle={{ zIndex: 100 }}
                cursor={false}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 하단 범례 영역 */}
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
