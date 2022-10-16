import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.643c5.548-5.703 19.418 4.276 0 17.107C-9.417 5.92 4.453-4.06 10 1.642Z"
      fill="#fff"
    />
  </svg>
)

const FillHeartIcon = memo(SvgComponent)
export default FillHeartIcon
