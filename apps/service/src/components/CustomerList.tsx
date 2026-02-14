import { CustomerListType } from "src/types/dataUsage";

import CustomorItem from "./CustomorItem";

const CustomorList = ({ customers }: { customers: CustomerListType[] }) => {
  return (
    <ul className="flex flex-col gap-8">
      {customers.map((customer) => (
        <CustomorItem key={customer.customerId} customor={customer} />
      ))}
    </ul>
  );
};

export default CustomorList;
