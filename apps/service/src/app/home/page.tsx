"use client";
import React from "react";

import FamilyDashboardClient from "./familyDashboardClient";

interface PageProps {
  searchParams: Promise<{
    year?: string;
    month?: string;
    view?: string;
  }>;
}

export default async function FamilyDashboardPage({
  searchParams,
}: Readonly<PageProps>) {
  const params = await searchParams;

  const year = Number(params?.year) || 2024;
  const month = Number(params?.month) || 1;
  const viewMode = (params?.view as "list" | "chart") || "list";

  return (
    <FamilyDashboardClient
      initialYear={year}
      initialMonth={month}
      initialViewMode={viewMode}
    />
  );
}
