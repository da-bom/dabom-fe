"use client";

import { Icon } from "@repo/shared/src";
import { MENU } from "src/constants/MENU";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="flex flex-col bg-brand-white w-55 h-screen justify-between py-5 border-r-[1px] border-gray-100">
      <div className="flex flex-col items-center gap-7 w-full">
        <Icon name="LogoAdmin" />
        <div className="border-[1px] w-38 border-gray-100" />

        <div className="flex flex-col w-full gap-5 px-2">
          {MENU.map((item, index) => {
            return <MenuItem key={index} isSelected={pathname === item.path} name={item.label} />;
          })}
        </div>
      </div>
      <div className="flex text-gray-400 px-5">
        <div className="w-5 h-5 bg-gray-400" />
        <span>로그아웃</span>
      </div>
    </div>
  );
};

export default Sidebar;
