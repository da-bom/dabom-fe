"use client";

import { useState } from "react";
import { EyeOff, EyeOn } from "../assets/icons";

type InputType = "text" | "password" | "tel" | "id";

interface InputFieldProps {
  label: string;
  type: InputType;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
}

const Input = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type: InputType;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const inputType = type === "password" && isVisible ? "text" : type;
  return (
    <div className="bg-brand-white flex h-12 w-82 items-center rounded-lg border-[3px] border-gray-200 px-4">
      <input
        type={inputType}
        className="w-full outline-none"
        placeholder={placeholder}
      />
      {type === "password" && (
        <button
    type="button"
    onClick={() => setIsVisible((prev) => !prev)}
    className="flex items-center justify-center"
  >
    {isVisible ? (
      <EyeOn width={24} height={24} className="text-gray-500" />
    ) : (
      <EyeOff width={24} height={24} className="text-gray-500" />
    )}
  </button>
      )}
    </div>
  );
};

const InputField = ({
  label,
  type,
  placeholder = "입력하세요",
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="body1-m">{label}</label>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputField;
