'use client';

import { ChevronIcon, DocumentIcon, E911EmergencyIcon } from '@icons';

const UsageActionCards = () => {
  return (
    <div className="flex w-full flex-row items-start gap-4">
      <div className="bg-brand-white flex h-30 flex-1 flex-col justify-between rounded-2xl border border-gray-200 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <DocumentIcon sx={{ width: 18, height: 18 }} />
            <span className="text-body1-m font-bold">리캡</span>
          </div>
          <p className="text-caption-m">지난달 사용 통계를 확인해 보세요.</p>
        </div>
        <div className="flex flex-row items-center justify-end gap-1">
          <span className="text-caption-m">자세히 보기</span>
          <ChevronIcon sx={{ width: 10, height: 10 }} />
        </div>
      </div>

      <div className="border-negative bg-emergency-gradient flex h-30 w-32 flex-col justify-between rounded-2xl border p-4">
        <div className="flex flex-col items-start">
          <E911EmergencyIcon className="text-negative" />
          <span className="text-body1-m font-bold">
            긴급 데이터
            <br />
            요청
          </span>
        </div>
        <div className="flex flex-row items-center justify-end">
          <ChevronIcon sx={{ width: 10, height: 10 }} />
        </div>
      </div>
    </div>
  );
};

export default UsageActionCards;
