import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={13} height={22} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m3.768 11.01 9.116 9.116-1.768 1.768L.232 11.01 11.116.126l1.768 1.768-9.116 9.116Z"
      fill="#001F24"
    />
  </Svg>
)

export default SvgComponent
