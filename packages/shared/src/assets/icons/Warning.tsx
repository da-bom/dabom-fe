import * as React from "react";
import type { SVGProps } from "react";

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12.5 17.167h2.333V19.5H12.5zm0-9.334h2.333v7H12.5zM13.655 2C7.215 2 2 7.227 2 13.667s5.215 11.666 11.655 11.666c6.452 0 11.678-5.226 11.678-11.666S20.107 2 13.655 2m.012 21a9.33 9.33 0 0 1-9.334-9.333 9.33 9.33 0 0 1 9.334-9.334A9.33 9.33 0 0 1 23 13.667 9.33 9.33 0 0 1 13.667 23"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarning;
