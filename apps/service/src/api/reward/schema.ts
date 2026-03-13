import { z } from 'zod';

export const ReceivedRewardSchema = z.object({
  requestId: z.number(),
  missionItem: z.object({
    missionItemId: z.number(),
    missionText: z.string(),
    reward: z.object({
      rewardId: z.number(),
      name: z.string(),
      category: z.string(),
      thumbnailUrl: z.string(),
      templateId: z.number(),
    }),
  }),
  approvedBy: z.object({
    customerId: z.number(),
    name: z.string(),
  }),
  approvedAt: z.string(),
});

export const ReceivedRewardListSchema = z.object({
  rewards: z.array(ReceivedRewardSchema),
  nextCursor: z.string().nullable(),
  hasNext: z.boolean(),
});

export type ReceivedReward = z.infer<typeof ReceivedRewardSchema>;
export type ReceivedRewardList = z.infer<typeof ReceivedRewardListSchema>;
