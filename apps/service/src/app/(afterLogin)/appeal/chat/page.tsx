'use client';

import React, { useMemo, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Block as BlockIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { Badge, formatSize } from '@shared';

import { AppealInputBar, ChatBubble, PolicySummaryCard } from '@service/components/appeal';
import { mockNegotiations } from '@service/data/negotiations';
import { getCurrentUserRole } from '@service/utils/auth';
import { formatChatTime } from '@service/utils/formatTime';

export default function AppealChatPage() {
  const searchParams = useSearchParams();
  const negotiationId = Number(searchParams.get('id'));

  // ObjectionPage에서 넘어온 새로운 입력값들
  const selectedPolicy = searchParams.get('policy') || '데이터 한도';
  const inputAmount = searchParams.get('amount');
  const inputReason = searchParams.get('reason');

  const [inputValue, setInputValue] = useState('');

  const initialData = useMemo(() => {
    return mockNegotiations.find((n) => n.negotiationId === negotiationId) || mockNegotiations[0];
  }, [negotiationId]);

  const urlStatus = searchParams.get('status')?.toLowerCase() as
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'cancelled';
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected' | 'cancelled'>(
    urlStatus ||
      (initialData.status.toLowerCase() as 'pending' | 'approved' | 'rejected' | 'cancelled'),
  );

  const displayPolicyText = inputAmount
    ? `정책: ${selectedPolicy}: ${inputAmount}GB`
    : `정책: ${initialData.type === 'EMERGENCY' ? '긴급 요청' : '데이터 한도'}: ${formatSize(initialData.requestedBytes).total}`;

  const displayReason = inputReason || initialData.reason;

  const userRole = getCurrentUserRole();
  const isOwner = userRole === 'OWNER';

  return (
    <div className="flex w-full flex-col">
      <main className="flex w-full flex-col items-center gap-4 px-5 pt-5 pb-24">
        <div className="sticky top-0 z-10 flex w-full flex-col items-center gap-4 pb-2">
          {/* 상태 배지 */}
          {status !== 'pending' && status !== 'cancelled' && (
            <Badge
              color={status === 'rejected' ? 'rejected' : 'approved'}
              size="md_fixed"
              className="gap-1"
            >
              {status === 'rejected' ? (
                <BlockIcon sx={{ fontSize: 16 }} />
              ) : (
                <CheckCircleIcon sx={{ fontSize: 16 }} />
              )}
              {status === 'rejected' ? '거절됨' : '수락됨'}
            </Badge>
          )}

          <PolicySummaryCard
            policyText={displayPolicyText}
            reasonText={
              status === 'rejected' ? (
                <>
                  요청 사유: {displayReason}
                  <br />
                  거절 사유: 이번 달 사용량이 많아서 거절할게.
                </>
              ) : (
                `요청 사유: ${displayReason}`
              )
            }
            isOwner={status === 'pending' && isOwner}
            onApprove={() => setStatus('approved')}
            onReject={() => setStatus('rejected')}
          />
        </div>

        {/* 채팅 메시지 목록 (새로운 요청 시에는 비어있을 수 있음) */}
        <div className="flex w-full flex-col gap-4">
          {!inputReason &&
            initialData.messages.map((msg) => (
              <ChatBubble
                key={msg.messageId}
                senderName={msg.author.name}
                message={msg.message}
                time={formatChatTime(msg.createdAt)}
                isMe={msg.author.name === '김민지'}
              />
            ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full">
        <AppealInputBar
          value={inputValue}
          onChange={setInputValue}
          onSubmit={() => {
            console.log('Submit:', inputValue);
            setInputValue('');
          }}
          disabled={status !== 'pending'}
        />
      </div>
    </div>
  );
}
