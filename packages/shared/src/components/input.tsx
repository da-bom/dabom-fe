"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";

type InputType = "text" | "password" | "tel" | "id";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  type?: InputType;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", className, placeholder, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const getInputType = () => {
      if (type === "password") return isPasswordVisible ? "text" : "password";
      return type === "id" ? "text" : type;
    };

    return (
      <div className="flex w-full flex-col gap-2">
        {label && <label className="ml-1 text-body2-m font-bold text-gray-900">{label}</label>}

        <div className="relative">
          <input
            ref={ref}
            type={getInputType()}
            className={cn(
              "w-full rounded-[14px] border-none bg-white px-5 py-4",
              "text-body1-m text-gray-900 placeholder:text-gray-400",
              "shadow-sm ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-primary-400",
              "outline-none transition-all",
              type === "password" && "pr-12",
              className,
            )}
            placeholder={placeholder}
            {...props}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {isPasswordVisible ?
                <Icon name="EyeOn" width={24} />
              : <Icon name="EyeOff" width={24} />}
            </button>
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";
export default Input;
