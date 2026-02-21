"use client";

import { useQuery } from "@tanstack/react-query";
import { ApiResponse, FamilyUsageData } from "src/types/usageType";

const AUTH_TOKEN_KEY = "access_token";

async function fetchFamilyUsage(
  year: number,
  month: number,
): Promise<FamilyUsageData> {
  const isClient = typeof window !== "undefined";
  const token = isClient ? localStorage.getItem(AUTH_TOKEN_KEY) : null;

  const res = await fetch(
    `/families/reports/usage?year=${year}&month=${month}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      credentials: "include",
    },
  );

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  const rawData: ApiResponse<FamilyUsageData> = await res.json();

  console.log("🕵️‍♂️ [API 응답 확인]:", rawData);

  return rawData.data;
}

export function useGetFamilyUsage(year: number, month: number) {
  return useQuery({
    queryKey: ["familyUsage", year, month],
    queryFn: () => fetchFamilyUsage(year, month),
    staleTime: 1000 * 60 * 5,
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem(AUTH_TOKEN_KEY),
  });
}
