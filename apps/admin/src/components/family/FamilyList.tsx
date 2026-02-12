"use client";

import { FAMILY } from "src/data/family";
import FamilyItem from "./FamilyItem";
import { useState } from "react";

const FamilyList = () => {
  const [selectedFam, setSelectedFam] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 py-2">
        <div className="h-6 w-6 bg-gray-500" />
        <span className="text-h2-d">검색된 가족 ({FAMILY.length})</span>
      </div>
      <div className="border-[1px] border-gray-100" />
      <div className="flex flex-col gap-2 py-2">
        {FAMILY.map((fam) => {
          return (
            <FamilyItem
              key={fam.familyId}
              id={fam.familyId}
              customers={fam.customers}
              isSelected={fam.familyId === selectedFam}
              setSelectedFam={setSelectedFam}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FamilyList;
