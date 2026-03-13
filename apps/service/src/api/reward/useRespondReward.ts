import { http } from '@shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { RespondRewardDataSchema } from './schema';

interface RespondPayload {
  status: 'APPROVED' | 'REJECTED';
  rejectReason?: string;
}

export const respondRewardRequest = async ({
  requestId,
  payload,
}: {
  requestId: number;
  payload: RespondPayload;
}) => {
  const response = await http.put(`/rewards/requests/${requestId}/respond`, payload);

  try {
    // 인터셉터가 data 알맹이만 반환한다고 가정
    return RespondRewardDataSchema.parse(response);
  } catch (error) {
    console.error('❌ 보상 응답 처리 파싱 실패:', error);
    throw error;
  }
};

export const useRespondReward = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: respondRewardRequest,
    onSuccess: () => {
      // 보상 요청 목록이나 내역 갱신
      queryClient.invalidateQueries({ queryKey: ['rewardRequests'] });
      queryClient.invalidateQueries({ queryKey: ['receivedRewards'] });
    },
    onError: (error) => {
      console.error('보상 처리 실패:', error);
      alert('보상 처리에 실패했습니다.');
    },
  });
};
