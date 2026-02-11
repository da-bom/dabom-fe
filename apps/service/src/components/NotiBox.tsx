import { cn, Badge } from "@repo/shared/src";

interface NotiBoxProps {
  title: string;
  description: string;
  isRead?: boolean;
  className?: string;
}

export const NotiBox = ({ title, description, isRead = true, className }: NotiBoxProps) => {
  return (
    <div
      className={cn(
        "w-full h-[80px] ",
        "flex flex-col justify-center px-5",
        "bg-brand-white rounded-lg shadow-sm border transition-all",

        !isRead ? "border-primary-400" : "border-grayscale-200",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {!isRead && <Badge variant="primary">NEW</Badge>}
        <h3 className="text-body1-m text-brand-black truncate">{title}</h3>
      </div>
      <p className="text-body2-m text-grayscale-600 line-clamp-1">{description}</p>
    </div>
  );
};
