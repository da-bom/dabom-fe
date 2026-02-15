'use client';

import React from 'react';

interface MemberCardProps {
  id: string;
  name: string;
  phoneNumber: string;
  usedAmount: string;
  totalAmount: string;
  usagePercent: number;
  isDanger: boolean;
  limitValue: number;
  onLimitChange: (value: number) => void;
  timeStart: string | null;
  timeEnd: string | null;
  isTimeEnabled: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onToggleTime: () => void;
  onTimeClick: (type: 'start' | 'end') => void;
}

export default function MemberCard({
  id,
  name,
  phoneNumber,
  usedAmount,
  totalAmount,
  usagePercent,
  isDanger,
  limitValue,
  onLimitChange,
  timeStart,
  timeEnd,
  isTimeEnabled,
  isSelected,
  onSelect,
  onToggleTime,
  onTimeClick,
}: MemberCardProps) {
  
  const percentage = (limitValue / 70) * 100;

  return (
    <li className="w-full list-none">
      <div
        className={`flex w-full flex-col overflow-hidden rounded-2xl border-2 bg-brand-white transition-all duration-300 ease-in-out ${
          isSelected ? 'border-primary shadow-default' : 'border-gray-200'
        }`}
      >
        <button
          type="button"
          onClick={onSelect}
          className="flex w-full flex-col gap-4 p-4 text-left"
          aria-expanded={isSelected}
          aria-controls={`detail-${id}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <span className="text-body1-m text-brand-black">{name}</span>
              <span className="text-caption-m text-gray-800">{phoneNumber}</span>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="text-caption-m leading-[140%]">
                <span className={isDanger ? 'text-negative' : 'text-brand-black'}>
                  {usedAmount}{' '}
                </span>
                <span className="text-gray-800">/ {totalAmount}</span>
              </div>
              
              <div className="h-1 w-20 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
            </div>
          </div>
        </button>

        <div
          id={`detail-${id}`}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isSelected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-4 h-px bg-gray-100" />

            <div className="flex flex-col gap-6 p-4 pt-6">
              <div className="flex w-full flex-col gap-2">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-primary" />
                    <span className="text-body1-m">데이터 사용 한도</span>
                  </div>
                  <span className="text-body1-m font-bold text-primary-500">{limitValue}GB</span>
                </div>

                <div className="grid h-8 w-full items-center">
                  <div className="col-start-1 row-start-1 h-2 w-full rounded-full bg-gray-100" />
                  <div 
                    className="col-start-1 row-start-1 h-2 justify-self-start rounded-full bg-primary-500"
                    style={{ width: `${percentage}%` }}
                  />
                  <div 
                    className="pointer-events-none col-start-1 row-start-1 flex w-full items-center"
                    style={{ marginLeft: `${percentage}%` }}
                  >
                    <div className="h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-brand-white shadow-sm" />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="70"
                    step="1"
                    value={limitValue}
                    onChange={(e) => onLimitChange(Number(e.target.value))}
                    className="col-start-1 row-start-1 h-full w-full cursor-pointer opacity-0 touch-none"
                    aria-label="데이터 한도 설정"
                  />
                </div>

                <div className="flex w-full justify-between text-caption-m text-gray-800">
                  <span>0GB</span>
                  <span>70GB</span>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-primary" />
                    <span className="text-body1-m text-brand-black">시간 제한</span>
                  </div>
                  
                  <button
                    type="button"
                    onClick={onToggleTime}
                    role="switch"
                    aria-checked={isTimeEnabled}
                    className={`flex h-4 w-7 items-center rounded-full p-[1px] transition-colors duration-200 ease-in-out ${
                      isTimeEnabled ? 'bg-primary-500' : 'bg-gray-500'
                    }`}
                  >
                    <div
                      className={`h-3.5 w-3.5 rounded-full bg-brand-white shadow-default transition-transform duration-200 ease-in-out ${
                        isTimeEnabled ? 'translate-x-3' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {isTimeEnabled && timeStart && timeEnd ? (
                  <div className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-lg bg-background-sub">
                    <div className="flex items-center justify-center">
                      <button 
                        type="button"
                        onClick={() => onTimeClick('start')}
                        className="flex h-6 w-15 items-center justify-center rounded border border-primary-200 bg-primary-50"
                      >
                        <span className="text-body1-m">{timeStart}</span>
                      </button>
                      <span className="mx-2 text-body1-m">부터</span>
                      
                      <button 
                        type="button"
                        onClick={() => onTimeClick('end')}
                        className="flex h-6 w-15 items-center justify-center rounded border border-primary-200 bg-primary-50"
                      >
                        <span className="text-body1-m">{timeEnd}</span>
                      </button>
                      <span className="ml-2 text-body1-m">까지</span>
                    </div>
                    <span className="text-caption-m text-gray-800">
                      터치하여 시간을 설정하세요.
                    </span>
                  </div>
                ) : (
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-background-sub">
                    <span className="text-caption-m text-gray-800">
                      시간 제한이 설정되지 않았습니다.
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </li>
  );
}