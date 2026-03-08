'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { Button, formatSize } from '@shared';

import { AppealRequestCard, AppealStatus, FilterSegment } from '@service/components/appeal';
import { mockNegotiations } from '@service/data/negotiations';
import { getCurrentUserRole } from '@service/utils/auth';

const AppealPageContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'progress' | 'completed'>('progress');

  const userRole = getCurrentUserRole();
  const isOwner = userRole === 'OWNER';

  const filteredItems = mockNegotiations.filter((item) => {
    if (activeTab === 'progress') return item.status === 'PENDING';
    if (activeTab === 'completed') return item.status !== 'PENDING';
    return true;
  });

  return (
    <div className="flex h-full min-h-[calc(100vh-140px)] flex-col px-5 py-5">
      <div className="flex flex-col gap-5">
        <FilterSegment activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex flex-col gap-2 pb-24">
          {filteredItems.map((item) => {
            const { total: formattedSize } = formatSize(item.requestedBytes);
            const policyType = item.type === 'EMERGENCY' ? '긴급 요청' : '데이터 한도';
            let uiStatus: AppealStatus = item.status.toLowerCase() as AppealStatus;
            if (item.type === 'EMERGENCY') uiStatus = 'emergency';

            return (
              <AppealRequestCard
                key={item.negotiationId}
                policyType={policyType}
                dataLimit={formattedSize}
                reason={item.reason}
                status={uiStatus}
                onClick={() => {
                  router.push(
                    `/appeal/chat?policy=${encodeURIComponent(policyType)}&id=${item.negotiationId}&status=${item.status}`,
                  );
                }}
              />
            );
          })}
        </div>
      </div>

      {!isOwner && (
        <div className="fixed bottom-24 left-0 flex w-full justify-center px-5">
          <Button size="lg" color="dark" onClick={() => router.push('/appeal/objection')}>
            이의 제기하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(AppealPageContent), {
  ssr: false,
  loading: () => <div className="h-full min-h-screen" />,
});
