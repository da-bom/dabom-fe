import { useEffect } from "react";

import { http } from "@shared";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { FamilyDetailDataSchema } from "./schema";

export const getFamilyDetail = async (familyId: number) => {
  if (!familyId) return null;
  const response = await http.get(`/families/${familyId}`);
  console.log("response", response);
  return FamilyDetailDataSchema.parse(response);
};

export const useGetFamilyDetail = (familyId: number | undefined) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (familyId) {
      queryClient.invalidateQueries({ queryKey: ["familyDetail", familyId] });
    }
  }, [familyId, queryClient]);

  return useQuery({
    queryKey: ["familyDetail", familyId],
    queryFn: () => getFamilyDetail(familyId as number),
    enabled: !!familyId,
  });
};
