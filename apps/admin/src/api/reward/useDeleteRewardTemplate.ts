import { http } from '@shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DeleteRewardTemplateResponseSchema } from './schema';

export const deleteRewardTemplate = async (id: number) => {
  const response = await http.delete(`/admin/rewards/templates/${id}`);

  // 🔍 Zod로 응답 데이터 검증
  return DeleteRewardTemplateResponseSchema.parse(response.data);
};
export const useDeleteReward = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      // 1. axiosInstance가 이미 response.data를 반환함
      const res = await http.delete(`/admin/rewards/templates/${id}`);

      // 2. 반환된 데이터(전체 응답 객체)를 Zod로 검증
      return DeleteRewardTemplateResponseSchema.parse(res);
    },
    onSuccess: (parsedRes) => {
      // 3. 검증된 데이터의 success 여부 확인
      if (parsedRes.success) {
        queryClient.invalidateQueries({ queryKey: ['rewardTemplates'] });
        queryClient.invalidateQueries({ queryKey: ['rewards'] });
      }
    },
  });
};
