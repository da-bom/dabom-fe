import React from "react";

import * as Icons from "../assets/icons/index";

export type IconName = keyof typeof Icons;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  width?: number | "auto";
  height?: number | "auto";
  fill?: string;
}

const Icon = ({ name, width, height, fill, style, ...props }: IconProps) => {
  const RawIcon = Icons[name] as any;

  if (!RawIcon) {
    console.error(`Icon "${name}"을(를) 찾을 수 없습니다.`);
    return null;
  }

  const SVGComponent = RawIcon.default || RawIcon;

  return (
    <SVGComponent
      {...(width && width !== "auto" && { width })}
      {...(height && height !== "auto" && { height })}
      {...(fill && { fill })}
      style={{
        ...(fill ? { color: fill } : {}),
        flexShrink: 0,
        ...style,
      }}
      {...props}
    />
  );
};

export default Icon;
