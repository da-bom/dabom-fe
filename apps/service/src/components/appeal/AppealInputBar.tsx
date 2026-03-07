'use client';

import React from 'react';

import { Button } from '@shared';

interface AppealInputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  buttonText?: string;
}

export function AppealInputBar({ value, onChange, onSubmit }: AppealInputBarProps) {
  return (
    <div className="bg-brand-white flex h-20 w-full items-center border-t border-gray-200 p-2 px-4">
      <div className="flex w-full items-center gap-2">
        <div className="flex h-9 flex-1 items-center rounded-lg border border-gray-100 bg-transparent px-3">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-body2-m w-full bg-transparent outline-none"
          />
        </div>
        <div className="flex h-9 w-16 items-center justify-center">
          <Button size="sm" color="dark" onClick={onSubmit}>
            <span className="text-body2-m">전송</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
