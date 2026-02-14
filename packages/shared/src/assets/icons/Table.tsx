import * as React from "react";
import type { SVGProps } from "react";

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FD2E97"
      fillRule="evenodd"
      d="M3.474 22.232h17.052q.939 0 1.607-.668.667-.667.667-1.606V4.042q0-.937-.667-1.606a2.2 2.2 0 0 0-1.607-.667H3.474q-.939 0-1.607.667A2.2 2.2 0 0 0 1.2 4.042v15.916q0 .937.667 1.606.668.668 1.607.668m17.052-14.78H3.474v-3.41h17.052zM3.474 9.727h3.41v10.232h-3.41zm17.052 10.232H9.158V9.726h11.368z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTable;
