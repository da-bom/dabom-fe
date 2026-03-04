'use client';

import React, { useState } from 'react';

import { Button, DropDown, MainBox } from '@shared';

const AppealPage = () => {
  const [amount, setAmount] = useState('0');
  const [owner, setOwner] = useState('OWNER');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const quickAmounts = ['+1GB', '+2GB', '+5GB'];
  const owners = ['OWNER', 'MOM', 'DAD'];

  const handleQuickAmount = (val: string) => {
    const numericVal = parseInt(val.replace(/[^0-9]/g, ''), 10);
    const currentAmount = parseInt(amount, 10) || 0;
    setAmount((currentAmount + numericVal).toString());
  };

  return (
    <div className="mx-8 mt-20 flex flex-col items-center">
      <div className="flex w-full flex-col items-center gap-20">
        <div className="flex h-10 w-full flex-row items-center justify-center gap-1">
          <div className="flex flex-row items-center gap-2">
            <MainBox className="flex h-10 w-30 items-center justify-center rounded-2xl border-gray-200">
              <DropDown
                isOpen={isDropDownOpen}
                setIsOpen={setIsDropDownOpen}
                options={owners}
                selectedOption={owner}
                setSelectedOption={setOwner}
              />
            </MainBox>
            <span className="text-body1-m flex items-center justify-center text-center">
              님에게 얼마를 요청할까요?
            </span>
          </div>
        </div>

        <div className="flex h-10.75 w-auto flex-row items-end gap-2.5">
          <div className="flex w-30 flex-col items-start gap-1 pb-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full text-center outline-none"
            />
            <div className="self-stretch border-b" />
          </div>

          <span className="flex items-center justify-center text-center text-[28px] font-medium">
            GB
          </span>
        </div>

        <div className="flex gap-4">
          {quickAmounts.map((val) => (
            <Button key={val} size="sm" color="light" onClick={() => handleQuickAmount(val)}>
              {val}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-18">
        <Button type="submit" size="lg" color="dark">
          요청하기
        </Button>
      </div>
    </div>
  );
};

export default AppealPage;
