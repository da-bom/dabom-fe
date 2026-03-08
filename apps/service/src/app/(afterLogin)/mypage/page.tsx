'use client';

import { ChevronIcon } from '@icons';
import { MainBox } from '@shared';

import MyInfo from '@service/components/mypage/MyInfo';

const data = {
  name: '김철수',
  familyName: '김씨네 가족',
  usedGB: 30,
  limitGB: 100,
};

const MyPage = () => {
  return (
    <div className="m-5 flex flex-col gap-4">
      <MainBox className="flex w-full flex-col gap-7 rounded-2xl px-5 py-4">
        <MyInfo data={data} />
      </MainBox>

      <MainBox className="flex h-14 cursor-pointer items-center justify-between rounded-2xl px-4">
        <span>내가 받은 보상 보기</span>
        <ChevronIcon className="text-gray-800" sx={{ width: 16 }} />
      </MainBox>
      <MainBox className="flex h-14 cursor-pointer items-center justify-between rounded-2xl px-4">
        <span>이용 약관</span>
        <ChevronIcon className="text-gray-800" sx={{ width: 16 }} />
      </MainBox>
      <footer className="text-body2-m ml-2 flex flex-col items-start gap-1 text-gray-800 underline">
        <button>로그아웃</button>
      </footer>
    </div>
  );
};

export default MyPage;
