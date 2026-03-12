import { CheckOutlinedIcon, HeartIcon } from '@icons';
import { MainBox } from '@shared';

import { DASHBOARD } from 'src/data/dashboard';

const DashboardPage = () => {
  return (
    <div className="flex h-screen flex-col gap-4">
      <div className="flex w-full gap-4">
        <MainBox className="flex w-full flex-col gap-7 p-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <CheckOutlinedIcon className="text-primary-600" sx={{ width: 20 }} />
              <span className="text-body2-d font-bold">실시간 처리량</span>
            </div>
            <span className="text-body3-d text-gray-700">최근 업데이트: 2026-03-10 11:18:32</span>
          </div>
          <span className="text-h1-d">{DASHBOARD.currentTps.toLocaleString()} TPS</span>
        </MainBox>
        <MainBox className="flex w-full flex-col gap-7 p-5">
          <div className="flex gap-1">
            <HeartIcon className="text-primary-600" sx={{ width: 20 }} />
            <span className="text-body2-d font-bold">Sytem Health</span>
          </div>
          <div className="bg-background-base w-full rounded px-10 py-2">
            <div className="flex w-full justify-between">
              <span className="text-body2-d text-gray-700">Kafka</span>
              <span className="text-body2-d text-gray-700">Redis</span>
              <span className="text-body2-d text-gray-700">MySQL</span>
            </div>
          </div>
        </MainBox>
      </div>
      <div className="flex w-full gap-4">
        <MainBox className="flex w-full flex-col items-center gap-4 p-5">
          <span className="text-body2-d text-primary-600 font-bold">가족</span>
          <span className="text-h1-d">{DASHBOARD.totalFamilies.toLocaleString()}</span>
          <span className="text-body2-d text-gray-700">
            활성: {DASHBOARD.activeFamilies.toLocaleString()}
          </span>
        </MainBox>
        <MainBox className="flex w-full flex-col items-center gap-4 p-5">
          <span className="text-body2-d text-primary-600 font-bold">유저</span>
          <span className="text-h1-d">{DASHBOARD.totalUsers.toLocaleString()}</span>
          <span className="text-body2-d text-gray-700">
            차단: {DASHBOARD.blockedUsers.toLocaleString()}
          </span>
        </MainBox>
        <MainBox className="flex w-full flex-col items-center gap-4 p-5">
          <span className="text-body2-d text-primary-600 font-bold">오늘의 이벤트</span>
          <span className="text-h1-d">{DASHBOARD.todayEvents.toLocaleString()}</span>
          <span className="text-body2-d text-gray-700"></span>
        </MainBox>
      </div>
      <div className="flex h-full w-full gap-4">
        <MainBox className="flex w-full flex-col items-center gap-4 p-5">
          <span className="text-body1-d">실시간 처리량(TPS)</span>
          <div className="h-full"></div>
        </MainBox>
        <MainBox className="flex w-full flex-col items-center gap-4 px-10 py-5">
          <span className="text-body1-d">최근 차단 내역</span>

          {DASHBOARD.recentBlocks.map((item) => {
            return (
              <MainBox
                key={`${item.familyId}-${item.customerId}`}
                className="flex w-full flex-col gap-1 border-gray-500 p-4"
              >
                <span className="text-body2-d">
                  {item.customerId}님 ({item.familyId})의 데이터가 차단되었습니다.
                </span>
                <div className="text-body3-d flex justify-between">
                  <span className="text-gray-800">사유: {item.reason}</span>
                  <span className="text-gray-500">{item.blockedAt}</span>
                </div>
              </MainBox>
            );
          })}
        </MainBox>
      </div>
    </div>
  );
};

export default DashboardPage;
