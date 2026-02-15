'use client';

import React, { useState } from 'react';
import { formatSize } from '@shared';
import { FAMILY_DETAIL } from '@shared/data/familyDetail';
import MemberCard from '@service/components/MemberCard';

interface CustomerState {
  id: string;
  limitValue: number;
  isTimeEnabled: boolean;
  timeStart: string | null;
  timeEnd: string | null;
}

export default function PolicyManagementPage() {
  const { customers } = FAMILY_DETAIL;
  
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const [memberStates, setMemberStates] = useState<Record<string, CustomerState>>(() => {
    const initial: Record<string, CustomerState> = {};
    customers.forEach(c => {
      const initialLimitGB = Math.round(c.monthlyLimitBytes / (1024 * 1024 * 1024));
      
      initial[c.customerId.toString()] = {
        id: c.customerId.toString(),
        limitValue: initialLimitGB > 0 ? initialLimitGB : 50,
        isTimeEnabled: true,
        timeStart: '23:00', 
        timeEnd: '07:00',
      };
    });
    return initial;
  });

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingTarget, setEditingTarget] = useState<{ id: string, type: 'start' | 'end' } | null>(null);

  const handleSelectCard = (id: string) => {
    setSelectedId(prev => prev === id ? null : id);
  };

  const handleLimitChange = (id: string, newValue: number) => {
    setMemberStates(prev => ({
      ...prev,
      [id]: { ...prev[id], limitValue: newValue }
    }));
    // TODO: 추후 여기에 API 호출 
  };

  const handleToggleTime = (id: string) => {
    setMemberStates(prev => ({
      ...prev,
      [id]: { ...prev[id], isTimeEnabled: !prev[id].isTimeEnabled }
    }));
  };

  const handleTimeClick = (id: string, type: 'start' | 'end') => {
    setEditingTarget({ id, type });
    setIsSheetOpen(true);
  };

  const handleSaveTime = (newTime: string) => {
    if (editingTarget) {
      const { id, type } = editingTarget;
      setMemberStates(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          [type === 'start' ? 'timeStart' : 'timeEnd']: newTime
        }
      }));
    }
    setIsSheetOpen(false);
    setEditingTarget(null);
  };

  const handleCloseSheet = () => {
    if (editingTarget) {
        const { id } = editingTarget;
        setMemberStates(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                timeStart: null,
                timeEnd: null
            }
        }));
    }
    setIsSheetOpen(false);
    setEditingTarget(null);
  };

  const currentEditingTime = editingTarget 
    ? (editingTarget.type === 'start' 
        ? memberStates[editingTarget.id].timeStart 
        : memberStates[editingTarget.id].timeEnd) 
    : '00:00';

  return (
    <section className="flex min-h-screen w-full justify-center bg-background-base">
      <div className="mt-4 w-full px-4 pb-20">
        <h2 className="mb-4 text-body1-m text-brand-black">
          변경을 원하는 구성원을 선택하세요.
        </h2>

        <ul className="flex flex-col gap-4">
          {customers.map((customer) => {
            const id = customer.customerId.toString();
            const state = memberStates[id];
            
            const formattedUsed = formatSize(customer.monthlyUsedBytes);
            const formattedLimit = formatSize(customer.monthlyLimitBytes);
            const percent = customer.monthlyLimitBytes === 0 ? 0 : Math.min((customer.monthlyUsedBytes / customer.monthlyLimitBytes) * 100, 100);
            
            return (
              <MemberCard
                key={id}
                id={id}
                name={customer.name}
                phoneNumber="010-****-1234"
                usedAmount={formattedUsed.total}
                totalAmount={formattedLimit.total}
                usagePercent={percent}
                isDanger={percent >= 90}
                
                isSelected={selectedId === id}
                limitValue={state.limitValue}
                isTimeEnabled={state.isTimeEnabled}
                timeStart={state.timeStart}
                timeEnd={state.timeEnd}
                
                onSelect={() => handleSelectCard(id)}
                onLimitChange={(val) => handleLimitChange(id, val)}
                onToggleTime={() => handleToggleTime(id)}
                onTimeClick={(type) => handleTimeClick(id, type)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}