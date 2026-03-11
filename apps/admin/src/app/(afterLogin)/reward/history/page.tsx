'use client';

import { Table } from '@shared';

import { REWARD_HISTORY } from 'src/data/reward';
import { formatRewardHistory } from 'src/utils/formatRewardHistory';

const RewardHistoryPage = () => {
  return (
    <Table
      className="rounded-md"
      headers={['전화번호', '사용 여부', '상품', '지급 미션', '쿠폰 번호', '발급일', '만료일']}
      rows={formatRewardHistory({ history: REWARD_HISTORY })}
    />
  );
};

export default RewardHistoryPage;
