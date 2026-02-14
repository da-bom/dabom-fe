export interface PolicyType {
  policyId: number;
  name: string;
  // TODO: 타입 상세 정의 필요
  type: string;
  default_rules: {};
  requiredRole: "ADMIN" | "OWNER" | "MEMBER";
  isActive: boolean;
  isSystem: false;
  createdAt: string;
  updatedAt: string;
}

export interface PolicyResponse {
  policies: PolicyType[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
