"use client";

import SubBox from "@repo/shared/src/components/SubBox";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { ViewMember } from "../types/dataUsage";

interface Props {
  members: ViewMember[];
  totalUsageGB: number;
}

const MemberChartView = ({ members, totalUsageGB }: Props) => {
  const isEmpty = totalUsageGB === 0;

  const chartData = isEmpty
    ? // TODO: 임시로 지정 API 연동할때 바꿀 에쩡
      [{ id: "empty", name: "Empty", usageGB: 1, color: "#F3F4F6" }]
    : members;

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
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${(entry as ViewMember).id || index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>

            {!isEmpty && (
              <Tooltip
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

      <SubBox className="mt-2 w-full border-none bg-white p-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full shadow-sm ring-1 ring-white"
                style={{ backgroundColor: member.color }}
              />
              <span className="caption-m text-sm">{member.name}</span>
            </div>
          ))}
        </div>
      </SubBox>
    </div>
  );
};

export default MemberChartView;
