import { http } from '@shared';
import { useSuspenseQuery } from '@tanstack/react-query';
import z from 'zod';

import { DashboardData, DashboardDataSchema } from './schema';

export type DashboardResponse = DashboardData & { timestamp: string };

const getDashboard = async (): Promise<DashboardResponse> => {
  const response = await http.get<DashboardResponse>('/admin/dashboard', { timeout: 50000 });

  try {
    const parsed = DashboardDataSchema.extend({ timestamp: z.string() }).parse(response);

    return parsed;
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
