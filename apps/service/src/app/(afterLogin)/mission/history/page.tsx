import { CheckOutlinedIcon, DoNotIcon, PendingIcon } from '@icons';
import { MainBox } from '@shared';
import dayjs from 'dayjs';
import { MISSION_HISTORY } from 'src/data/mission';

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'REJECTED') return <DoNotIcon sx={{ width: 16 }} className="text-negative" />;
  if (status === 'APPROVED')
    return <CheckOutlinedIcon sx={{ width: 16 }} className="text-positive" />;
  return <PendingIcon sx={{ width: 16 }} className="text-gray-500" />;
};

const MissionHistoryPage = () => {
  return (
    <div className="m-4 flex flex-col gap-4">
      {MISSION_HISTORY.map((mission, index) => {
        const currentDate = dayjs(mission.completedAt).format('M/D');

        const prevDate =
          index > 0 ? dayjs(MISSION_HISTORY[index - 1].completedAt).format('M/D') : null;

        const showDateLine = currentDate !== prevDate;

        return (
          <div key={mission.id} className="flex flex-col gap-3">
            {showDateLine && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-full border-t border-gray-300"></div>
                <span className="text-body1-m text-gray-800">{currentDate}</span>
                <div className="w-full border-t border-gray-300"></div>
              </div>
            )}

            <MainBox className="gap-1 rounded-2xl p-4">
              <div className="flex gap-2">
                <StatusIcon status={mission.status} />
                <span className="text-body1-m">{mission.title}</span>
              </div>
              <span className="text-body2-m text-gray-700">완료일: {mission.completedAt}</span>
            </MainBox>
          </div>
        );
      })}
    </div>
  );
};

export default MissionHistoryPage;
