'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Home from '@/assets/icons/home.svg';
import HomeColor from '@/assets/icons/homeColor.svg';
import My from '@/assets/icons/my.svg';
import MyColor from '@/assets/icons/myColor.svg';
import Policy from '@/assets/icons/policy.svg';
import PolicyColor from '@/assets/icons/policyColor.svg';
import Noti from '@/assets/icons/noti.svg';
import NotiColor from '@/assets/icons/notiColor.svg';

interface NavItem {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavBar = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = useMemo(() => [
    { label: '홈', href: '/', icon: Home, activeIcon: HomeColor },
    { label: '정책', href: '/policy', icon: Policy, activeIcon: PolicyColor },
    { label: '알림', href: '/notification', icon: Noti, activeIcon: NotiColor },
    { label: 'MY', href: '/mypage', icon: My, activeIcon: MyColor },
  ], []);

  return (
    <nav className="fixed bottom-0 z-50 w-full bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] transition-all">
      <ul className="flex h-[60px] w-full items-center justify-around pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const isActive = item.href === '/' 
            ? pathname === '/' 
            : pathname.startsWith(item.href);

          const IconComponent = isActive ? item.activeIcon : item.icon;

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={`flex h-full flex-col items-center justify-center space-y-[4px] transition-colors duration-200 ${
                  isActive ? 'text-pink-500' : 'text-gray-400'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <IconComponent 
                  width={14} 
                  height={16} 
                  fill="currentColor" 
                />
                <span className="text-[11px, 17px] font-medium">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;