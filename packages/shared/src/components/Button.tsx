import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "sm" | "md" | "md-short" | "lg";
  color: "dark" | "light";
}

const SIZE_STYLES = {
  lg: "w-82 h-14 rounded-lg",
  md: "w-55 h-14 rounded-lg",
  "md-short": "w-31 h-14 rounded-lg",
  sm: "w-14 h-8 rounded-md",
};

const COLOR_STYLES = {
  dark: "bg-brand-dark text-brand-white",
  light: "bg-background-sub text-brand-black",
};

const Button = ({ children, size, color, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "border-gray-200 border-[1px]",
        SIZE_STYLES[size],
        COLOR_STYLES[color],
        className, 
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;