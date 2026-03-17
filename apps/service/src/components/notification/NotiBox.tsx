import React, { useState } from 'react';

import { Badge, cn } from '@shared';

interface NotiBoxProps {
  title: string;
  description: string;
  isRead?: boolean;
  className?: string;
}

const NotiBox = ({ title, description, isRead = true, className }: NotiBoxProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={cn('relative w-full', className)}>
      <div className="absolute top-0 right-0 flex h-full w-16 items-center justify-center">
        <button className="bg-negative text-body2-m h-full w-full rounded-2xl text-white">
          삭제
        </button>
      </div>

      <div
        onClick={() => setIsRevealed(!isRevealed)}
        className={cn(
          'bg-brand-white relative z-10 flex w-full cursor-pointer flex-col justify-center rounded-2xl border-2 p-4 transition-transform duration-300 ease-in-out',
          isRead ? 'border-gray-200' : 'border-primary',
          isRevealed ? '-translate-x-[71px]' : 'translate-x-0',
        )}
      >
        <div className="flex items-center gap-2">
          {!isRead && (
            <Badge color="primary" size="sm">
              NEW
            </Badge>
          )}
          <h3 className="text-body1-m truncate">{title}</h3>
        </div>
        <p className="text-body2-m line-clamp-1 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default NotiBox;
