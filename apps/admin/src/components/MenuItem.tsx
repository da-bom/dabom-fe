import { cn } from "@repo/shared/src";

const MenuItem = ({ name, isSelected }: { name: string; isSelected: boolean }) => {
  return (
    <div className={cn("flex w-full px-2 py-1 rounded-md", isSelected && "bg-primary-50")}>
      {/* TODO: 아이콘으로 변경 예정 */}
      <div className="w-5 h-5" />
      <div className={isSelected ? "text-primary" : ""}>{name}</div>
    </div>
  );
};

export default MenuItem;
