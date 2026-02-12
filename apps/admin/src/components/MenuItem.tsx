import Link from "next/link";

import { Icon, cn } from "@shared";

import { IconName } from "@shared/components/Icon";

const MenuItem = ({
  name,
  isSelected,
  href,
  icon,
}: {
  name: string;
  isSelected: boolean;
  href: string;
  icon: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1",
        isSelected && "bg-primary-50",
      )}
    >
      <Icon name={`${icon}${isSelected ? "Color" : ""}` as IconName} />
      <div className={isSelected ? "text-primary" : "text-gray-700"}>
        {name}
      </div>
    </Link>
  );
};

export default MenuItem;
