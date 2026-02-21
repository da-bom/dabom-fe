export interface UsageCustomer {
  customerId: number;
  name: string;
  monthlyUsedBytes: number;
  monthlyLimitBytes: number;
  isBlocked: boolean;
  blockReason: string;
  isMe: boolean;
}

export interface FamilyUsageData {
  familyId: number;
  familyName: string;
  year: number;
  month: number;
  totalQuotaBytes: number;
  remainingBytes: number;
  customers: UsageCustomer[];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}
