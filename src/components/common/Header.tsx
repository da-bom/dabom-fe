'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import DabomLogo from '@/assets/icons/logo.svg'; 
import BackIcon from '@/assets/icons/back.svg';

interface HeaderProps {

  Back?: boolean;
  className?: string;
  onBackClick?: () => void;
}

const Header = ({
  Back = false,
  className = '',
  onBackClick,
}: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
      return;
    }
    router.back();
  };

  return (
    <header 
      className={`sticky flex top-0 h-[64px] w-full items-center justify-between bg-white shadow-sm transition-all ${className}`}
    >
      <div className="flex w-10 items-center justify-start">
        {Back && (
          <button 
            type="button" 
            onClick={handleBack}
            aria-label="Go back"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200"
          >
            <BackIcon width={9.5} height={16} />
          </button>
        )}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <DabomLogo width={66} height={12} aria-label="DABOM Logo" />
      </div>
      <div className="flex w-10 items-center justify-end">
      </div>
    </header>
  );
};

export default Header;