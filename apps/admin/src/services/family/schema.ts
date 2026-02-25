import { z } from "zod";

export const FamilySearchRequestSchema = z.object({
  page: z.number().optional().default(0),
  size: z.number().optional().default(20),
  filters: z
    .object({
      name: z.object({ operator: z.string(), value: z.string() }).optional(),
      phone: z.object({ operator: z.string(), value: z.string() }).optional(),
      usageRate: z
        .object({ operator: z.string(), min: z.number(), max: z.number() })
        .optional(),
    })
    .optional(),
  sort: z
    .array(
      z.object({
        field: z.string(),
        direction: z.enum(["asc", "desc"]),
      }),
    )
    .optional(),
});

export type FamilySearchRequest = z.input<typeof FamilySearchRequestSchema>;

const Customer = z.object({
  customerId: z.number(),
  name: z.string(),
});

export const FamilySchema = z.object({
  familyId: z.number(),
  familyName: z.string(),
  customers: z.array(Customer),
  createdAt: z.string(),
});

export const FamilyResponseSchema = z.object({
  content: z.array(FamilySchema),
  totalElements: z.number(),
  totalPages: z.number(),
  size: z.number(),
  number: z.number(),
  numberOfElements: z.number(),
  first: z.boolean(),
  last: z.boolean(),
  empty: z.boolean(),
  pageable: z.any(),
  sort: z.any(),
});

export type Family = z.infer<typeof FamilySchema>;
export type FamilyResponse = z.infer<typeof FamilyResponseSchema>;
