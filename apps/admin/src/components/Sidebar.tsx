"use client";

import { usePathname } from "next/navigation";

import { Icon } from "@shared";
import { MENU } from "src/constants/MENU";

import MenuItem from "./MenuItem";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-brand-white flex h-screen w-62 flex-col justify-between border-r-[1px] border-gray-100 py-5">
      <div className="flex w-full flex-col items-center gap-7">
        <Icon name="LogoAdmin" />
        <div className="w-38 border-[1px] border-gray-100" />

        <div className="flex w-full flex-col gap-5 px-2">
          {MENU.map((item) => {
            return (
              <MenuItem
                key={item.id}
                isSelected={pathname === item.path}
                name={item.label}
                href={item.path}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="flex px-5 text-gray-400">
        <Icon name="Logout" />
        <span>로그아웃</span>
      </div>
    </div>
  );
};

export default Sidebar;
