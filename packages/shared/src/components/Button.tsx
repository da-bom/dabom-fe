import { cn } from "../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  size: "sm" | "md" | "md-short" | "lg";
  color: "dark" | "light";
}

const Button = ({ children, size, color }: ButtonProps) => {
  return (
    <button
      className={cn(
        color === "dark" && "bg-brand-dark",
        size === "lg" && "w-82 h-14",
        "text-brand-white rounded-2xl border-gray-200 border-[1px]",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
