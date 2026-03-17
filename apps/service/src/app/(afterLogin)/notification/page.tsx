'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { NotificationItem, fetchNotifications } from '@shared/data/notification';

import NotiBox from 'src/components/notification/NotiBox';

const NOTICE_MESSAGE = '30일이 지난 메세지는 자동 삭제됩니다.';

export default function NotificationPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const unreadCount = notifications.filter((n) => !n.isRead).length || 0;

  const observerTarget = useRef<HTMLDivElement>(null);

  const loadData = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const response = await fetchNotifications(page);

      setNotifications((prev) => {
        const existingIds = new Set(prev.map((item) => item.id));
        const newItems = response.data.filter((item) => !existingIds.has(item.id));
        return [...prev, ...newItems];
      });

      setHasMore(response.hasMore);

      if (response.hasMore) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadData();
        }
      },
      { threshold: 1.0 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loadData, hasMore]);

  return (
    <section className="bg-background-base flex min-h-screen w-full flex-col">
      <div className="flex flex-col items-start gap-4 p-5">
        <div className="flex w-full items-center justify-between">
          <span className="text-body2-m text-brand-black">새 알림 ({unreadCount})</span>
          <button
            type="button"
            className="text-body2-m text-primary cursor-pointer border-none bg-transparent p-0"
            onClick={() => {
              /* 모두 읽음 처리 로직 */
            }}
          >
            모두 읽음으로 표시
          </button>
        </div>

        <ul className="flex w-full flex-col gap-4">
          {notifications.map((noti) => (
            <li key={noti.id} className="w-full">
              <NotiBox title={noti.title} description={noti.description} isRead={noti.isRead} />
            </li>
          ))}
        </ul>

        {hasMore && (
          <div ref={observerTarget} className="flex w-full items-center justify-center py-4">
            {isLoading && (
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.3s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.15s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-600" />
              </div>
            )}
          </div>
        )}

        {!hasMore && notifications.length > 0 && (
          <div className="mt-8 mb-12 flex w-full flex-col items-center gap-1">
            <p className="text-body2-m text-gray-600">{NOTICE_MESSAGE}</p>
          </div>
        )}
      </div>
    </section>
  );
}
