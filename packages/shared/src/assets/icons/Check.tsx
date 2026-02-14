import * as React from "react";
import type { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#FD2E97"
      fillRule="evenodd"
      d="M13.825 6.318 8.333 11.81 5.341 8.826l-1.174 1.175 4.166 4.167L15 7.5zM10 1.668A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333s8.333-3.733 8.333-8.333S14.6 1.667 10 1.667m0 15A6.665 6.665 0 0 1 3.333 10 6.665 6.665 0 0 1 10 3.334a6.665 6.665 0 0 1 6.666 6.667A6.665 6.665 0 0 1 10 16.668"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheck;
