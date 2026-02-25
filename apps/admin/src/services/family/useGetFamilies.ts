import { http } from "@shared";
import { useQuery } from "@tanstack/react-query";

import {
  FamilyResponseSchema,
  FamilySearchRequest,
  FamilySearchRequestSchema,
} from "./schema";

export const getFamilies = async (params: FamilySearchRequest = {}) => {
  const validatedParams = FamilySearchRequestSchema.parse(params);
  const response = await http.post("/families", validatedParams);

  // 🔍 여기 두 로그를 확인해서 네트워크 탭의 실제 값과 비교해보세요!
  console.log("1. 서버 원본 응답:", response);

  try {
    const parsed = FamilyResponseSchema.parse(response);
    console.log("2. 파싱 성공:", parsed);
    return parsed;
  } catch (err) {
    console.error("3. Zod 파싱 실패! 스웨거와 실제 데이터가 다릅니다:", err);
    // 에러가 나면 여기서 멈추기 때문에 undefined가 반환됩니다.
    throw err;
  }
};
export const useGetFamilies = (params?: FamilySearchRequest) => {
  return useQuery({
    queryKey: ["families", params ?? "all"],
    queryFn: () => getFamilies(params),
    placeholderData: (prev) => prev,
  });
};
