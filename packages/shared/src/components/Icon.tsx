import React from "react";
import * as Icons from "../assets";

export type IconName = keyof typeof Icons;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
  fill?: string;
}

export const Icon = ({ name, size = 24, fill, style, ...props }: IconProps) => {
  const RawIcon = Icons[name] as any;

  const SVGComponent = RawIcon.default || RawIcon;

  return (
    <SVGComponent
      width={size}
      height={size}
      fill={fill || "currentColor"}
      style={{
        color: fill,
        flexShrink: 0,
        ...style,
      }}
      {...props}
    />
  );
};
