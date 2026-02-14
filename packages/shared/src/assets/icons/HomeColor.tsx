import * as React from "react";
import type { SVGProps } from "react";

const SvgHomeColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FD2E97"
      d="M.889 15.778a.89.89 0 0 1-.889-.89V5.557c0-.28.132-.544.356-.712L6.578.178a.89.89 0 0 1 1.066 0l6.223 4.666a.89.89 0 0 1 .355.712v9.333c0 .49-.398.889-.889.889H9.778a.89.89 0 0 1-.89-.89v-4.444A.89.89 0 0 0 8 9.556H6.222a.89.89 0 0 0-.889.888v4.445c0 .49-.398.889-.889.889z"
    />
  </svg>
);
export default SvgHomeColor;
