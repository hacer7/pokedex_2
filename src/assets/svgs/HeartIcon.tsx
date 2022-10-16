import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={31}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 2.365c8.599-8.211 30.098 6.158 0 24.635-30.098-18.475-8.599-32.846 0-24.635Z"
      fill="#fff"
    />
  </svg>
)

const HeartIcon = memo(SvgComponent)
export default HeartIcon
