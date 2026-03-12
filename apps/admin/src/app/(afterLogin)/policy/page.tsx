'use client';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Table } from '@shared';

import { useGetPolicy } from 'src/api/policy/useGetPolicy';
import Pagination from 'src/components/common/Pagination';
import { formatPolicy } from 'src/utils/formatPolicy';

const PolicyPage = () => {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(() => {
    return Number(searchParams.get('page')) || 0;
  });
  const { data, isPending } = useGetPolicy(page);

  if (isPending) {
    return <div>로딩</div>;
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    window.history.pushState({}, '', `?${params}`);
  };

  if (!data || !data.policies || data.policies.length === 0) {
    return <div>표시할 정책이 없습니다.</div>;
  }

  const policyRows = formatPolicy({ policies: data.policies });

  return (
    <div className="mt-6 flex h-screen flex-col">
      <div className="flex-1 overflow-hidden">
        <Table
          headers={['정책', '권한', '기본값', '상태', '관리']}
          rows={policyRows}
          className="rounded-md"
        />
      </div>

      <Pagination
        currentPage={page}
        totalPages={data.totalPages || 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PolicyPage;
