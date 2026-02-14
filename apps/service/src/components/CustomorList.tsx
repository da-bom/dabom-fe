import { CustomorDetail } from "src/types/dataUsage";

import CustomorItem from "./CustomorItem";

interface CustomorListProps {
  customors: CustomorDetail[];
}

const CustomorList = ({ customors }: CustomorListProps) => {
  return (
    <ul className="flex flex-col gap-8">
      {customors.map((customor) => (
        <CustomorItem key={customor.id} customor={customor} />
      ))}
    </ul>
  );
};

export default CustomorList;
