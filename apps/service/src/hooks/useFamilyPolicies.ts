import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CustomerDetail, FamilyDetail } from "src/types/policiesType";
import { ApiResponse } from "src/types/policiesType";

const AUTH_TOKEN_KEY = "access_token";

async function fetchFamilyPolicies(): Promise<FamilyDetail> {
  const isClient = typeof window !== "undefined";
  const token = isClient ? localStorage.getItem(AUTH_TOKEN_KEY) : null;

  const res = await fetch("/families/policies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  const rawData: ApiResponse = await res.json();

  console.log("🕵️‍♂️ [API 응답 확인] 백엔드가 준 데이터:", rawData);

  if (!rawData.success || !rawData.data) {
    throw new Error("서버 응답 형식이 올바르지 않습니다.");
  }

  const familyData = rawData.data;

  const mappedCustomers: CustomerDetail[] = familyData.customers.map((c) => {
    const monthlyPolicy = c.policies?.find((p) => p.type === "MONTHLY_LIMIT");

    return {
      customerId: c.customerId,
      name: c.name,
      phoneNumber: c.phoneNumber,
      role: c.role,
      monthlyUsedBytes: c.monthlyUsedBytes ?? 0,
      monthlyLimitBytes:
        c.monthlyLimitBytes ?? monthlyPolicy?.rules?.limitBytes ?? 0,
    };
  });

  return {
    familyId: familyData.familyId || 0,
    familyName: "우리 가족",
    createdById: 0,
    customers: mappedCustomers,
    totalQuotaBytes: familyData.totalQuotaBytes ?? 0,
    currentMonth: "",
    createdAt: "",
    updatedAt: "",
  };
}

export function useGetFamilyPolicies() {
  return useQuery({
    queryKey: ["familyPolicies"],
    queryFn: fetchFamilyPolicies,
    staleTime: 1000 * 60 * 5,
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem(AUTH_TOKEN_KEY),
  });
}

export function useUpdateLimit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, bytes }: { id: number; bytes: number }) => {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem(AUTH_TOKEN_KEY)
          : null;
      const res = await fetch(`/families/policies/limit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({ customerId: id, limitBytes: bytes }),
      });
      if (!res.ok) throw new Error("업데이트 실패");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["familyPolicies"] });
    },
  });
}
