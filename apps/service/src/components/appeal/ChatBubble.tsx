'use client';

import React from 'react';

import { cn } from '@shared';

interface ChatBubbleProps {
  senderName?: string;
  message: string;
  time: string;
  isMe: boolean;
}

export function ChatBubble({ senderName, message, time, isMe }: ChatBubbleProps) {
  return (
    <div className={cn('flex w-full flex-col gap-1', isMe ? 'items-end' : 'items-start')}>
      {!isMe && senderName && <span className="text-caption-m">{senderName}</span>}
      <div
        className={cn(
          'flex max-w-[70vw] flex-col justify-center gap-1 rounded-2xl px-4 py-3',
          isMe
            ? 'bg-primary-50 items-end rounded-br-none border border-gray-200'
            : 'bg-brand-white items-start rounded-bl-none border border-gray-200',
        )}
      >
        <span className={cn('text-body1-m', isMe ? 'text-right' : 'text-left')}>{message}</span>
        <span
          className={cn('text-caption-m mt-1 text-gray-500', isMe ? 'text-right' : 'text-left')}
        >
          {time}
        </span>
      </div>
    </div>
  );
}
