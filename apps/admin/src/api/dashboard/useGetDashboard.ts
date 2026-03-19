import { useSuspenseQuery } from '@tanstack/react-query';

import { DashboardData, DashboardDataSchema } from './schema';

// 리턴 타입에 timestamp 추가
const getDashboard = async (): Promise<DashboardData & { timestamp: string }> => {
  try {
    const response = await fetch('/api/admin/dashboard');

    const result = await response.json();
    const { data, timestamp } = result;

    try {
      const parsedData = DashboardDataSchema.parse(data);

      return {
        ...parsedData,
        timestamp,
      };
    } catch (zodError) {
      console.error('❌ [Dashboard API] Zod 파싱 실패:', zodError);
      throw zodError;
    }
  } catch (error) {
    console.error('❌ [Dashboard API] 데이터 페칭 에러:', error);
    throw error;
  }
};

export const useGetDashboard = <T = DashboardData & { timestamp: string }>(
  select?: (data: DashboardData & { timestamp: string }) => T,
) => {
  return useSuspenseQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: getDashboard,
    select,
  });
};
