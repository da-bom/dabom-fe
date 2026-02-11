import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  fullWidth = true,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-[14px] px-6 py-4 transition-all active:scale-[0.98]",
        "text-body1-m font-bold",
        "disabled:bg-grayscale-300 disabled:cursor-not-allowed",

        variant === "primary" && "bg-brand-dark text-brand-white hover:bg-black",
        fullWidth ? "w-full" : "w-auto",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;