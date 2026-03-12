import { http } from '@shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { RewardTemplateSchema, RewardUpdate } from './schema';

interface UpdateParams {
  id: number;
  payload: RewardUpdate;
}

export const updateRewardTemplate = async ({ id, payload }: UpdateParams) => {
  const finalPayload = {
    ...payload,
    category: 'GIFTICON',
    thumbnailUrl: '', // TODO: 추후 이미지 업로드 기능 구현 시 수정
  };

  const response = await http.put(`/admin/rewards/templates/${id}`, finalPayload);

  try {
    return RewardTemplateSchema.parse(response);
  } catch (error) {
    console.error('❌ 보상 수정 파싱 실패:', error);
    throw error;
  }
};

export const useUpdateReward = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRewardTemplate,
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['rewardTemplates'] });
      queryClient.invalidateQueries({ queryKey: ['rewardTemplate', id] });

      alert('보상이 수정되었습니다.');
    },
    onError: () => {
      alert('보상 수정에 실패했습니다.');
    },
  });
};
