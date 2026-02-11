import React from "react";
import * as Icons from "../assets/icons";

export type IconName = keyof typeof Icons;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 24, fill, ...props }: IconProps) => {
  const RawIcon = Icons[name];

  if (!RawIcon) {
    console.error(`Icon "${name}"을 찾을 수 없습니다.`);
    return null;
  }

  const SVGComponent = (
    typeof RawIcon === "function" ? RawIcon : (RawIcon as any).default) as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  if (!SVGComponent || typeof SVGComponent !== "function") {
    return null;
  }

  return <SVGComponent width={size} height={size} fill={fill} {...props} />;
};
