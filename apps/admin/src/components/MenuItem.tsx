import { cn, Icon } from "@repo/shared/src";
import Link from "next/link";

const MenuItem = ({
  name,
  isSelected,
  href,
}: {
  name: string;
  isSelected: boolean;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full rounded-md px-2 py-1",
        isSelected && "bg-primary-50",
      )}
    >
      <Icon name="Family" />
      <div className={isSelected ? "text-primary" : ""}>{name}</div>
    </Link>
  );
};

export default MenuItem;
