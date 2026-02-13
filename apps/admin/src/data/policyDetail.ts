const POLICY_DETAIL = {
  policyId: 10,
  name: "야간 차단 기본",
  description: "정책 상세 정보.....",
  type: "TIME_BLOCK",
  default_rules: {
    start: "22:00",
    end: "07:00",
    timezone: "Asia/Seoul",
  },
  requireRole: "OWNER",
  isActive: true,
  isSystem: false,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
} as const;

export default POLICY_DETAIL;
