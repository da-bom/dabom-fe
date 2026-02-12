import { Badge, Button } from "@repo/shared/src";
import SubBox from "@repo/shared/src/components/SubBox";
import { formatFileSize } from "@repo/shared/src/utils/fileSize";
import dayjs from "dayjs";
import { FAMILY_DETAIL } from "src/data/familyDetail";
import Table from "../Table";
import { formatFamily } from "src/utils/formatFamily";

const FamilyDetail = ({
  selectedFam,
  setSelectedFam,
}: {
  selectedFam: number | undefined;
  setSelectedFam: (familyId: number | undefined) => void;
}) => {
  // TODO: selectedFam값으로 API 재요청

  const rate = (FAMILY_DETAIL.usedBytes / FAMILY_DETAIL.totalQuotaBytes) * 100;

  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex items-center gap-2">
        <Badge size="lg" color="outline">
          FAM-{FAMILY_DETAIL.familyId}
        </Badge>
        <span className="text-h2-d">가족 상세 관리</span>
      </div>
      <div className="w-full border-[1px] border-gray-100" />

      <SubBox className="flex flex-col gap-4 p-4">
        <p className="text-body1-d flex justify-between">
          <span>총 사용량: {formatFileSize(FAMILY_DETAIL.usedBytes)}</span>
          <span>한도: {formatFileSize(FAMILY_DETAIL.totalQuotaBytes)}</span>
        </p>
        <div className="h-9 w-full rounded-full bg-gray-200">
          <div
            className="bg-primary h-full rounded-full"
            style={{ width: `${rate}%` }}
          />
        </div>
        <p className="flex justify-between">
          <span className="text-body2-d text-gray-800">
            업데이트 일시:{" "}
            {dayjs(FAMILY_DETAIL.updatedAt).format("YYYY. MM. DD. HH:mm")}
          </span>
          <span className="text-h2-d text-primary">{rate}%</span>
        </p>
      </SubBox>

      <SubBox className="flex flex-col gap-4 p-4">
        <span className="text-body1-d">구성원 권한 및 한도 설정</span>
        <Table
          headers={["권한", "이름", "사용량/한도"]}
          rows={formatFamily({
            customer: FAMILY_DETAIL.customers,
          })}
        />
      </SubBox>

      <div className="flex justify-end">
        <Button color="dark" size="md">
          변경사항 저장
        </Button>
      </div>
    </div>
  );
};

export default FamilyDetail;
