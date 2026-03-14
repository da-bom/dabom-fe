import { http } from '@shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { EmergencyAppealResponseSchema } from './schema';

export const EMERGENCY_ADDITIONAL_BYTES = 314572800;

export const postEmergencyAppeal = async (requestReason: string) => {
  const response = await http.post('/appeals/emergency', {
    requestReason,
    additionalBytes: EMERGENCY_ADDITIONAL_BYTES,
  });

  try {
    const parsed = EmergencyAppealResponseSchema.parse(response);
    return parsed;
  } catch (error) {
    console.error('❌ 긴급 쿼터 요청 Zod 파싱 실패:', error);
    throw error;
  }
};

export const usePostEmergencyAppeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestReason: string) => postEmergencyAppeal(requestReason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appeals'] });
      queryClient.invalidateQueries({ queryKey: ['familyPolicies'] });
    },
  });
};
