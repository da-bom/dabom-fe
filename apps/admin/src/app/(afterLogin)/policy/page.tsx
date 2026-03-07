'use client';

import { useState } from 'react';

import { Table } from '@shared';
import { useGetPolicy } from 'src/api/policy/useGetPolicy';
import { formatPolicy } from 'src/utils/formatPolicy';

const PolicyPage = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading } = useGetPolicy(page);

  if (isLoading) {
    return <div className="p-10 text-center">데이터 로드 중...</div>;
  }

  if (!data) {
    return <div className="p-10 text-center">표시할 정책 데이터가 없습니다.</div>;
  }

  const policyRows = formatPolicy({ policies: data });

  return (
    <div className="mt-6 flex h-screen flex-col">
      <Table
        headers={['정책', '권한', '기본값', '상태', '관리']}
        rows={policyRows}
        className="rounded-md"
      />
    </div>
  );
};

export default PolicyPage;
