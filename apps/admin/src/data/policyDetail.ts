const POLICY_DETAIL = {
  policyId: 10,
  name: "데이터 소진 시 처리",
  description:
    "주어진 데이터를 모두 사용한 경우 초과된 사용량에 대해 처리한다.",
  type: "MANUAL_BLOCK",
  default_rules: {
    rule: "QOS",
  },
  requireRole: "ADMIN",
  isActive: true,
  isSystem: false,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
} as const;

export default POLICY_DETAIL;
