'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { sseClient } from '@shared';
import { useQueryClient } from '@tanstack/react-query';

import { NotificationItemSchema } from './schema';

export const useNotificationSSE = (enabled: boolean = true) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    return sseClient.subscribe((eventName, rawData) => {
      if (eventName !== 'notification' && eventName !== 'message') return;
      if (!rawData || !rawData.startsWith('{')) return;

      try {
        const parsedData = JSON.parse(rawData);
        if (parsedData.type === 'usage-updated' || parsedData.type === 'usage-update-by-member')
          return;

        const validated = NotificationItemSchema.parse(parsedData);
        queryClient.invalidateQueries({ queryKey: ['notifications'] });
        toast.success(validated.message, { icon: '🔔', duration: 4000 });
      } catch {}
    });
  }, [enabled, queryClient]);
};
