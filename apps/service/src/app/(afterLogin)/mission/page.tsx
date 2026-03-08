import Link from 'next/link';

import { ChevronIcon } from '@icons';
import { Button, Card, MainBox } from '@shared';
import { MISSION_LIST_MEMBER } from 'src/data/mission';

const MissionPage = () => {
  return (
    <div className="m-4 flex flex-col gap-5">
      <p className="flex flex-col">
        <span>현재 진행 중인 미션</span>
        <span>descrption</span>
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {MISSION_LIST_MEMBER.map((mission) => (
          <Card
            className="h-55"
            key={mission.id}
            title={mission.title}
            description={mission.reward}
            // status={mission.status as 'AVAILABLE' | 'PENDING'}
          >
            {mission.status === 'PENDING' ? (
              <div className="boder-gray-700 text-body2-m flex h-9 w-full items-center justify-center rounded-md border text-gray-700">
                응답 대기 중
              </div>
            ) : (
              <Button size="sm" color="dark" isFullWidth>
                보상 요청하기
              </Button>
            )}
          </Card>
        ))}
      </div>
      <Link href="/mission/log">
        <MainBox className="flex cursor-pointer items-center justify-between rounded-2xl p-4">
          <span className="text-body1-m">지난 내역 보기</span>
          <ChevronIcon className="text-gray-800" sx={{ width: 16 }} />
        </MainBox>
      </Link>
    </div>
  );
};

export default MissionPage;
