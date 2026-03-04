'use client';

import React from 'react';

import { Button, DaboIcon } from '@shared';

const AppealResponsePage = () => {
  const handleReject = () => {
    console.log('거절 로직 실행');
  };

  const handleAccept = () => {
    console.log('수락 로직 실행');
  };

  return (
    <div className="fixed inset-0 z-0 flex flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center">
        <section className="flex flex-col items-center gap-20">
          <div className="flex w-full flex-col items-center gap-5">
            <DaboIcon usage={0} />

            <h2 className="text-h2-m text-center">
              김민지님이
              <br />
              10GB를 요청했어요.
            </h2>
          </div>

          <div className="flex w-full flex-row items-center justify-center gap-5">
            <Button size="md-short" color="light" onClick={handleReject}>
              거절하기
            </Button>
            <Button size="md-short" color="dark" onClick={handleAccept}>
              수락하기
            </Button>
          </div>
        </section>
        <p className="text-caption-m mt-2 w-full text-center">
          데이터 조르기 거절 시 사유가 필요해요.
        </p>
      </div>
    </div>
  );
};

export default AppealResponsePage;
