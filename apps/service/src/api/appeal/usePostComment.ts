import { http } from '@shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CommentResultSchema, CreateCommentRequest, CreateCommentResponseSchema } from './schema';

export const postComment = async (appealId: number, data: CreateCommentRequest) => {
  console.log(`🌐 댓글 작성 API 호출: /appeals/${appealId}/comments`, data);

  const response = await http.post(`/appeals/${appealId}/comments`, data);

  console.log('✅ 댓글 작성 성공 응답:', response);

  try {
    const fullParsed = CreateCommentResponseSchema.safeParse(response);
    if (fullParsed.success) {
      return fullParsed.data.data;
    }

    return CommentResultSchema.parse(response);
  } catch (error) {
    console.error('❌ 댓글 작성 Zod 파싱 실패:', error);
    throw error;
  }
};

export const usePostComment = (appealId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCommentRequest) => postComment(appealId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appealDetail', appealId] });
    },
  });
};
