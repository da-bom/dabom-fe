import * as React from "react";
import type { SVGProps } from "react";
const SvgPolicyColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FD2E97"
      d="M1.6 0C.725 0 0 .725 0 1.6v12.8c0 .875.725 1.6 1.6 1.6h9.6c.875 0 1.6-.725 1.6-1.6V4.8L8 0zm0 1.6h5.6v4h4v8.8H1.6zM3.2 8v1.6h6.4V8zm0 3.2v1.6h6.4v-1.6z"
    />
  </svg>
);
export default SvgPolicyColor;
