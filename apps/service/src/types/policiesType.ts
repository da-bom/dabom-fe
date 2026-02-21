export interface CustomerDetail {
  customerId: number;
  name: string;
  phoneNumber: string;
  role: "OWNER" | "MEMBER";
  monthlyLimitBytes: number;
  monthlyUsedBytes: number;
}

export interface FamilyDetail {
  familyId: number;
  familyName: string;
  createdById: number;
  customers: CustomerDetail[];
  totalQuotaBytes: number;
  currentMonth: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiPolicy {
  assignmentId: number;
  policyId: number;
  policyName: string;
  type: string;
  isActive: boolean;
  rules: { limitBytes: number };
}

export interface ApiCustomer {
  customerId: number;
  name: string;
  phoneNumber: string;
  role: "OWNER" | "MEMBER";
  monthlyUsedBytes: number;
  monthlyLimitBytes?: number;
  policies?: ApiPolicy[];
}

export interface ApiResponse {
  success: boolean;
  data: {
    familyId: number;
    totalQuotaBytes: number;
    customers: ApiCustomer[];
  };
  timestamp: string;
}
