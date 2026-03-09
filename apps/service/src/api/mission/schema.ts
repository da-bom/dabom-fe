import z from 'zod';

export const missionSchema = z.object({
  content: z.string().max(20, '최대 20자까지 입력 가능합니다.'),
  targetId: z.string(),
  reward: z.discriminatedUnion('type', [
    z.object({
      type: z.literal('DATA_COUPON'),
      value: z.number(),
    }),
    z.object({
      type: z.literal('GIFTICON'),
      value: z.string(),
    }),
  ]),
});

export type MissionForm = z.infer<typeof missionSchema>;
