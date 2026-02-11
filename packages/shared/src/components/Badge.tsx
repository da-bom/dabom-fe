import { cn } from "../utils/cn";
import { ReactNode } from "react";

type BadgeColor = "primary" | "white" | "gray" | "outline";
type BadgeSize = "sm" | "lg";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  color?: BadgeColor;
  size?: BadgeSize;
}

const Badge = ({
  children,
  className,
  color = "primary",
  size = "sm",
}: BadgeProps) => {
  const colors: Record<BadgeColor, string> = {
    primary: "bg-primary text-brand-white border-transparent",
    white: "bg-brand-white text-primary border-transparent",
    gray: "bg-grayscale-200 text-brand-dark border-transparent",
    outline: "bg-brand-white text-brand-dark border-2 border-primary",
  };

  const sizes: Record<BadgeSize, string> = {
    sm: "px-2.5 py-0.5 text-caption-d rounded-full h-[18px]",
    lg: "px-4 py-1 text-caption-d rounded-full h-[32px]",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center whitespace-nowrap",

        sizes[size],
        colors[color],
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
