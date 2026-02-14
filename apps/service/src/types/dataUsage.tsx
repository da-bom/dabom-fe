import { CustomerDetail } from "@shared/type/familyType";

export interface ApiFamilyDetail {
  familyId: number;
  familyName: string;
  customers: CustomerDetail[];
  totalQuotaBytes: number;
  usedBytes: number;
  usedPercent: number;
  currentMonth: string;
}

export interface CustomorDetail {
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
  members: CustomorDetail[];
  chartGradient: string;
}
