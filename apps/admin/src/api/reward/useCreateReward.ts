import { useRouter } from 'next/navigation';

import { http } from '@shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { RewardCreate, RewardTemplateSchema } from './schema';

export const createRewardTemplate = async (payload: RewardCreate) => {
  const response = await http.post('/admin/rewards/templates', payload);

  try {
    return RewardTemplateSchema.parse(response);
  } catch (error) {
    console.error('❌ 보상 생성 파싱 실패:', error);
    throw error;
  }
};

export const useCreateReward = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createRewardTemplate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rewardTemplates'] });
      alert('보상이 성공적으로 등록되었습니다.');
      router.push('/reward/products');
    },
    onError: (error) => {
      console.error('생성 실패:', error);
      alert('보상 등록에 실패했습니다.');
    },
  });
};
