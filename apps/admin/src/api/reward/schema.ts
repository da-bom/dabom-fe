import { z } from 'zod';

export const RewardTemplateSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.enum(['DATA', 'GIFTICON']),
  thumbnailUrl: z.string().nullable(),
  price: z.number(),
  isSystem: z.boolean(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type RewardTemplate = z.infer<typeof RewardTemplateSchema>;

export const RewardTemplatesResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(RewardTemplateSchema),
});

export const RewardCreateSchema = z.object({
  name: z.string().min(1, '보상 이름을 입력해주세요.'),
  category: z.enum(['DATA', 'GIFTICON'], {
    required_error: '카테고리를 선택해주세요.',
  }),
  thumbnailUrl: z.string().url('유효한 URL을 입력해주세요.').nullable(),
  price: z.number().min(0, '가격은 0원 이상이어야 합니다.'),
});

export type RewardCreate = z.infer<typeof RewardCreateSchema>;

export const RewardCreateResponseSchema = z.object({
  success: z.boolean(),
  data: RewardTemplateSchema,
});
