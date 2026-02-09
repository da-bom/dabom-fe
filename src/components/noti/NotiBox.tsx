import { Badge } from "../common/Badge";
import { cn } from "@/lib/utils";

interface NotiBoxProps {
  title: string;
  description: string;
  isNew?: boolean;
  className?: string;
}

export const NotiBox = ({ title, description, isNew = false, className }: NotiBoxProps) => {
  return (
    <div
      className={cn(
        "w-[calc(100%-46px)] max-w-[344px] h-[80px] mx-auto", 
        
        "flex flex-col justify-center px-5", 
        "bg-brand-white rounded-lg shadow-sm border transition-all",
        
        isNew 
          ? "border-primary-400 ring-1 ring-primary-400" 
          : "border-grayscale-200",
        
        className
      )}
    >
      <div className="flex items-center gap-2 mb-0.5">
        {isNew && <Badge label="NEW" variant="default" />}
        <h3 className="text-body1-m text-brand-black truncate">{title}</h3>
      </div>
      <p className="text-body2-m text-grayscale-600 line-clamp-1">{description}</p>
    </div>
  );
};