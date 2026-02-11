import * as React from "react";
import type { SVGProps } from "react";
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M9.43 1.43 8 0 0 8l8 8 1.43-1.43L2.86 8z" />
  </svg>
);
export default SvgBack;
