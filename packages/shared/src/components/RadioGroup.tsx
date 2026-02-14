"use client";

import Icon from "./Icon";

interface RadioOption {
  label: string;
  value: string;
  subLabel?: string;
  isWarning?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string; // 라디오 그룹을 식별하는 고유 이름
}

const RadioGroup = ({
  options,
  selectedValue,
  onChange,
  name,
}: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-start gap-2"
        >
          {/* 실제 라디오 인풋 (숨기거나 스타일링) */}
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="mt-1 h-4 w-4 accent-primary cursor-pointer"
          />

          <div className="flex flex-col gap-0.5">
            <span className="text-body2-d">{option.label}</span>
            {option.subLabel && (
              <div className="flex gap-1 items-center">
                {option.isWarning && (
                  <Icon name="Warning" className="text-primary-700 w-3 h-3" />
                )}
                <span
                  className={`text-caption-d ${option.isWarning ? "text-primary-700 font-medium" : "text-gray-500"}`}
                >
                  {option.subLabel}
                </span>
              </div>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
