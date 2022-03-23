import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const BagIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.792 5.245c.367-2.73 3.097-5 6.208-5s5.84 2.27 6.208 5h3.6A2.5 2.5 0 0 1 25.285 8.1l-2.143 15a2.5 2.5 0 0 1-2.475 2.146H5.334A2.5 2.5 0 0 1 2.86 23.1l-2.143-15a2.5 2.5 0 0 1 2.475-2.854h3.601Zm9.868 0c-.38-1.327-1.912-2.5-3.66-2.5-1.748 0-3.28 1.173-3.66 2.5h7.32ZM3.19 7.745H6.75v2.5h2.5v-2.5h7.5v2.5h2.5v-2.5h3.559l-2.143 15H5.334l-2.143-15Z"
      fill="#001F24"
    />
  </Svg>
)

export default BagIcon
