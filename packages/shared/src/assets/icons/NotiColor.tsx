import * as React from "react";
import type { SVGProps } from "react";

const SvgNotiColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FD2E97"
      fillRule="evenodd"
      d="M6.564 16c.903 0 1.641-.739 1.641-1.641H4.923c0 .902.73 1.641 1.641 1.641m4.923-4.923V6.974c0-2.519-1.345-4.627-3.692-5.185V1.23C7.795.55 7.245 0 6.565 0c-.682 0-1.232.55-1.232 1.23v.559c-2.355.558-3.692 2.658-3.692 5.185v4.103L0 12.717v.822h13.128v-.821z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNotiColor;
