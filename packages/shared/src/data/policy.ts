import { PolicyType } from "../types/policyType";

export const POLICY = {
  policies: [
    {
      policyId: 10,
      name: "야간 차단 기본",
      type: "TIME_BLOCK",
      default_rules: {
        start: "22:00",
        end: "07:00",
        timezone: "Asia/Seoul",
      },
      requiredRole: "OWNER",
      isActive: true,
      isSystem: false,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      policyId: 11,
      name: "데이터 사용 차단",
      type: "MANUAL_BLOCK",
      default_rules: {
        reason: "MANUAL",
      },
      requiredRole: "OWNER",
      isActive: false,
      isSystem: false,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
  ] as PolicyType[],
  page: 0,
  size: 20,
  totalElements: 15,
  totalPages: 1,
} as const;
