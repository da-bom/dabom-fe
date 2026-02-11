"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type InputType = "text" | "password" | "tel" | "id";

interface InputFieldProps {
  label: string;
  type: InputType;
  placeholder?: string;
}

const Input = ({ placeholder, type }: { placeholder: string; type: InputType }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const inputType = type === "password" && isVisible ? "text" : type;
  return (
    <div className="flex items-center rounded-lg px-4 w-82 h-12 bg-brand-white border-[1px] border-gray-200">
      <input type={inputType} className="w-full outline-none" placeholder={placeholder} />
      {type === "password" && (
        <button
          type="button"
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
        >
          <Icon name={isVisible ? "EyeOn" : "EyeOff"} />
        </button>
      )}
    </div>
  );
};

const InputField = ({ label, type, placeholder = "입력하세요" }: InputFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="body1-m text-brand-black">{label}</label>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputField;
