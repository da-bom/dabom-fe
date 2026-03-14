'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button, MainBox, bytesToGB } from '@shared';

import { useGetFamilyUsageCurrent } from 'src/api/family/useGetFamilyUsage';
import { useGetFamilyPolicies } from 'src/api/policy/useGetFamilyPolicies';
import Slider from 'src/components/common/Slider';
import LimitInput from 'src/components/policy/LimitInput';
import { APPEAL_TYPE_LABEL, APPEAL_UI_TEXT } from 'src/constants/appeal';
import { getCurrentUserId } from 'src/utils/auth';

const MIN_LIMIT = 1;

export default function DataLimitAppealPage() {
  const { data: familyPolicies, isLoading: isPoliciesLoading } = useGetFamilyPolicies();
  const { data: currentUsage, isLoading: isUsageLoading } = useGetFamilyUsageCurrent();
  const currentUserId = getCurrentUserId();

  if (isPoliciesLoading || isUsageLoading || !familyPolicies || !currentUsage) {
    return (
      <div className="bg-background-base flex h-full min-h-screen items-center justify-center">
        <p className="text-body1-m text-gray-500">정보를 불러오는 중...</p>
      </div>
    );
  }

  const currentUser = familyPolicies.customers.find((c) => c.customerId === currentUserId);
  const currentLimit = currentUser?.monthlyLimitBytes
    ? bytesToGB(currentUser.monthlyLimitBytes)
    : 0;
  const maxLimit = currentUsage?.totalQuotaBytes ? bytesToGB(currentUsage.totalQuotaBytes) : 0;
  const myPolicyId = currentUser?.assignmentIds?.monthlyLimit ?? null;

  return (
    <DataLimitForm
      key={currentLimit}
      currentLimit={currentLimit}
      maxLimit={maxLimit}
      myPolicyId={myPolicyId}
    />
  );
}

function DataLimitForm({
  currentLimit,
  maxLimit,
  myPolicyId,
}: {
  currentLimit: number;
  maxLimit: number;
  myPolicyId: number | null;
}) {
  const router = useRouter();
  const [selectedLimit, setSelectedLimit] = useState(currentLimit);

  const handleInputChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const numValue = numericValue === '' ? MIN_LIMIT : Number(numericValue);
    setSelectedLimit(Math.min(Math.max(numValue, MIN_LIMIT), maxLimit));
  };

  return (
    <div className="bg-background-base flex flex-col">
      <div className="flex flex-col items-center gap-7 px-5 pt-20">
        <div className="flex w-full flex-col items-start gap-2">
          <h1 className="text-h2-m">{APPEAL_UI_TEXT.DATA_LIMIT_TITLE}</h1>
          <p className="text-body2-m text-gray-700">{APPEAL_UI_TEXT.DATA_LIMIT_DESCRIPTION}</p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="bg-background-sub flex h-fit w-full items-center justify-center rounded-2xl border border-gray-200 p-4">
            <span className="text-body1-m">
              {APPEAL_UI_TEXT.CURRENT_LIMIT_LABEL}: {currentLimit}GB
            </span>
          </div>

          <MainBox className="bg-brand-white flex h-fit w-full flex-col items-center gap-4 rounded-2xl border border-gray-200 px-4 py-8">
            <div className="flex h-fit w-full flex-col gap-1">
              <Slider
                key={maxLimit}
                min={MIN_LIMIT}
                max={maxLimit}
                value={selectedLimit}
                onChange={setSelectedLimit}
              />
              <div className="text-caption-m flex w-full justify-between px-1 text-gray-800">
                <span>{MIN_LIMIT}GB</span>
                <span>{maxLimit}GB</span>
              </div>
            </div>

            <div className="flex h-fit w-full items-center justify-center gap-1">
              <LimitInput value={selectedLimit} onChange={handleInputChange} />
              <span className="text-body1-m text-gray-800">GB</span>
            </div>
          </MainBox>
        </div>
      </div>

      <div className="fixed bottom-24 left-0 flex w-full items-center justify-center gap-2 px-5">
        <Button size="md-short" color="white" onClick={() => router.back()}>
          이전
        </Button>
        <Button
          size="lg"
          color="dark"
          onClick={() =>
            router.push(
              `/appeal/create/reason?id=${myPolicyId || ''}&amount=${selectedLimit}&policy=${encodeURIComponent(APPEAL_TYPE_LABEL.NORMAL)}`,
            )
          }
        >
          다음
        </Button>
      </div>
    </div>
  );
}
