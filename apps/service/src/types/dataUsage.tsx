import { CustomerDetail } from "../../../../packages/shared/src/types/familyType";

export interface ApiFamilyDetail {
  familyId: number;
  familyName: string;
  customers: CustomerDetail[];
  totalQuotaBytes: number;
  usedBytes: number;
  usedPercent: number;
  currentMonth: string;
}

export interface ViewMember {
  id: number;
  name: string;
  role: string;
  usageGB: number;
  limitGB: number;
  isMe: boolean;
  alertMessage: string | null;
  color: string;
}

export interface DashboardViewModel {
  totalUsageGB: number;
  totalLimitGB: number;
  usagePercent: number;
  displayDate: string;
  members: ViewMember[];
  chartGradient: string;
}
