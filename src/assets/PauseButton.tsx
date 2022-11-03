import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const PauseButton = (props: SvgProps) => {
  return (
    <Svg width={13} height={20} fill="none" {...props}>
      <Path fill="#001F24" d="M0 0H5V20H0z"></Path>
      <Path fill="#001F24" d="M8 0H13V20H8z"></Path>
    </Svg>
  )
}

export default PauseButton
