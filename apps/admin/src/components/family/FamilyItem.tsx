import { Badge, cn } from "@shared";
import { Customer } from "src/types/FamilyType";

const FamilyItem = ({
  id,
  customers,
  isSelected,
  setSelectedFam,
}: {
  id: number;
  customers: Customer[];
  isSelected: boolean;
  setSelectedFam: (familyId: number) => void;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-md border-[1px] p-2",
        isSelected
          ? "bg-primary-50 border-primary-300"
          : "bg-brand-white border-gray-300",
      )}
      onClick={() => {
        setSelectedFam(id);
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Badge color={isSelected ? "white" : "gray"} size="sm">
            FAM-{id}
          </Badge>
          <span className="text-body1-d">{customers[0]?.name}</span>
        </div>
        <span className="text-caption-d text-gray-500">
          {customers.length}명
        </span>
      </div>
      <span className="text-caption-d text-gray-500">
        {customers.map((c) => c.name).join(", ")}
      </span>
    </div>
  );
};

export default FamilyItem;
