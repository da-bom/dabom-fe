"use client";

import { useState } from "react";

import { MainBox } from "@shared";
import { POLICY } from "src/data/policy";
import { FilterType } from "src/types/FilterType";
import { formatPolicy } from "src/utils/formatPolicy";

import Table from "@admin/components/Table";
import FilterBar from "@admin/components/policy/FilterBar";

const PolicyPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("ALL");
  return (
    <div className="flex h-screen flex-col gap-4">
      <FilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <MainBox className="h-full p-4">
        <Table
          headers={["정책", "권한", "기본값", "상태", "관리"]}
          rows={formatPolicy({ policies: POLICY.policies })}
        />
      </MainBox>
    </div>
  );
};

export default PolicyPage;
