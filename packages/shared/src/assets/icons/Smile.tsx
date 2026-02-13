import * as React from "react";
import type { SVGProps } from "react";
const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#FD2E97" />
    <circle
      cx={7.171}
      cy={7.493}
      r={0.691}
      fill="#FEFEFE"
      stroke="#FEFEFE"
      strokeWidth={0.225}
    />
    <circle
      cx={12.83}
      cy={7.493}
      r={0.691}
      fill="#FEFEFE"
      stroke="#FEFEFE"
      strokeWidth={0.225}
    />
    <path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeWidth={1.125}
      d="M6.533 10.878c.776 1.265 2.04 2.088 3.468 2.088 1.429 0 2.694-.825 3.47-2.092"
    />
  </svg>
);
export default SvgSmile;
