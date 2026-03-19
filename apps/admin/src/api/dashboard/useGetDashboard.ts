import { http } from '@shared';
import { useSuspenseQuery } from '@tanstack/react-query';

import { DashboardData, DashboardDataSchema } from './schema';

export type DashboardResponse = DashboardData & { timestamp: string };

const getDashboard = async (): Promise<DashboardResponse> => {
  const response = await http.get<DashboardResponse>('/admin/dashboard', { timeout: 50000 });

  try {
    const parsed = DashboardDataSchema.passthrough().parse(response);

    return parsed as DashboardResponse;
  } catch (error) {
    console.error('❌ [Dashboard API] Zod 파싱 실패:', error);
    throw error;
  }
};

export const useGetDashboard = <T = DashboardResponse>(select?: (data: DashboardResponse) => T) => {
  return useSuspenseQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: getDashboard,
    select,
  });
};
