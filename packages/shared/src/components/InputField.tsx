"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";

type InputType = "text" | "password" | "tel" | "id";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
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
        {label && (
          <label className="ml-1 text-body2-m font-bold text-gray-900">
            {label}
          </label>
        )}

        <div className="flex items-center w-full h-[45px] px-5 rounded-[14px] bg-white shadow-sm ring-1 ring-inset ring-gray-100 focus-within:ring-2 focus-within:ring-primary transition-all">
          <input
            ref={ref}
            type={getInputType()}
            className={cn(
              "flex-1 bg-transparent outline-none text-body1-m text-gray-900 placeholder:text-gray-400",
              className,
            )}
            placeholder={placeholder}
            {...props}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="ml-2 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Icon
                name={isPasswordVisible ? "EyeOn" : "EyeOff"}
                width={24}
              />
            </button>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
