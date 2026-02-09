import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
  variant?: "default"; 
}

export const Badge = ({ label, className, variant = "default" }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0 whitespace-nowrap",
        "rounded-full px-2.5 py-0.5",
        "text-caption-m", 
        variant === "default" && "bg-primary-400 text-brand-white",
        className
      )}
    >
      {label}
    </span>
  );
};