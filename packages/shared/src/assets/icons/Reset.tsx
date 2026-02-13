import * as React from "react";
import type { SVGProps } from "react";
const SvgReset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#reset_svg__a)">
      <mask
        id="reset_svg__b"
        width={18}
        height={18}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M18 0H0v18h18z" />
      </mask>
      <g mask="url(#reset_svg__b)">
        <path
          fill="#101010"
          d="M9 3.75v-3L5.25 4.5 9 8.25v-3c2.483 0 4.5 2.018 4.5 4.5s-2.017 4.5-4.5 4.5a4.504 4.504 0 0 1-4.5-4.5H3c0 3.315 2.685 6 6 6s6-2.685 6-6-2.685-6-6-6"
        />
      </g>
    </g>
    <defs>
      <clipPath id="reset_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReset;
