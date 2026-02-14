import * as React from "react";
import type { SVGProps } from "react";

const SvgDeactive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#949494"
      strokeDasharray="1.8 1.8"
      strokeWidth={3.598}
      d="M17.498 10a7.498 7.498 0 1 1-14.996 0 7.498 7.498 0 0 1 14.996 0Z"
    />
  </svg>
);
export default SvgDeactive;
