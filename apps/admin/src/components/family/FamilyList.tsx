"use client";

import { FAMILY } from "src/data/family";
import FamilyItem from "./FamilyItem";
import { useState } from "react";

const FamilyList = () => {
  const [selectdFam, setSelectedFam] = useState<number | undefined>(undefined);
  return (
    <>
      {FAMILY.map((fam) => {
        return (
          <FamilyItem
            key={fam.familyId}
            id={fam.familyId}
            customers={fam.customers}
            isSelected={fam.familyId === selectdFam}
            setSelectedFam={setSelectedFam}
          />
        );
      })}
    </>
  );
};

export default FamilyList;
