import React from "react";

import { cn } from "@shared";

interface NotiBoxProps {
  title: string;
  description: string;
  isRead?: boolean;
  className?: string;
}

export const NotiBox = ({
  title,
  description,
  isRead = true,
  className,
}: NotiBoxProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-center px-4 h-[80px]",
        "bg-brand-white rounded-[14px] border-2 transition-all",

        !isRead ? "border-primary" : "border-gray-200",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {!isRead && (
          <span className="flex h-[18px] w-[54px] items-center justify-center rounded-full bg-primary text-[13px] font-medium text-brand-white leading-[140%]">
            NEW
          </span>
        )}
        <h3 className="text-body1-m font-medium text-brand-black truncate">
          {title}
        </h3>
      </div>
      <p className="text-body2-m text-gray-700 mt-1 line-clamp-1">
        {description}
      </p>
    </div>
  );
};
