import { cn } from "../utils/cn";
import { ReactNode } from "react";

type BadgeVariant = "primary" | "white" | "gray" | "outline";
type BadgeSize = "sm" | "lg";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const Badge = ({ children, className, variant = "primary", size = "sm" }: BadgeProps) => {
  const variants: Record<BadgeVariant, string> = {
    primary: "bg-primary-400 text-brand-white border-transparent",
    white: "bg-brand-white text-primary-400 border-transparent",
    gray: "bg-grayscale-200 text-brand-dark border-transparent",
    outline: "bg-brand-white text-brand-dark border-2 border-primary-400",
  };

  const sizes: Record<BadgeSize, string> = {
    sm: "px-2.5 py-0.5 text-caption-d rounded-full h-[18px]",
    lg: "px-4 py-1 text-caption-d rounded-full h-[32px]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0 whitespace-nowrap",

        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
