"use client";

import { useState } from "react";

import { FilterType } from "src/types/FilterType";

import FilterBar from "@admin/components/policy/FilterBar";

const PolicyPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("ALL");
  return (
    <div>
      <FilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
};

export default PolicyPage;
