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
      d="m10 3.435-.896-.921C7 .35 3.142 1.098 1.75 3.816c-.654 1.279-.801 3.125.392 5.481 1.15 2.27 3.543 4.987 7.858 7.947 4.315-2.96 6.706-5.678 7.857-7.947 1.194-2.357 1.048-4.202.393-5.48C16.857 1.096 13 .35 10.896 2.512L10 3.435Zm0 15.315C-9.166 6.085 4.099-3.8 9.78 1.429c.075.069.149.14.22.214.07-.074.144-.145.22-.213C15.9-3.802 29.166 6.084 10 18.75Z"
      fill="#fff"
    />
  </svg>
)

const EmptyHeartIcon = memo(SvgComponent)
export default EmptyHeartIcon
