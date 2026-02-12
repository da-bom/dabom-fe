import { CustomerDetail } from "src/types/FamilyType";
import { Switch } from "@repo/shared/src";
import { ReactNode } from "react";
import { formatFileSize } from "@repo/shared/src/utils/fileSize";

export const formatFamily = ({
  customer,
}: {
  customer: CustomerDetail[];
}): ReactNode[][] => {
  return customer.map((i) => [
    <Switch key={i.customerId}>{i.role}</Switch>,
    <span>{i.name}</span>,
    <div className="flex justify-center gap-1">
      <span className="text-gray-700">
        {formatFileSize(i.monthlyUsedBytes)}
        {" / "}
      </span>
      <input
        type="number"
        className="w-13 rounded border-[1px] border-gray-600 px-4 text-center outline-none"
        value={formatFileSize(i.monthlyLimitBytes).split(" ")[0]}
      />
      <span>GB</span>
    </div>,
  ]);
};
