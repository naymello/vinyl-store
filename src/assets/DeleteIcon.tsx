import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const DeleteIcon = (props: SvgProps) => (
  <Svg width={14} height={15} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.293 1.092a1 1 0 1 1 1.414 1.414L8.414 7.8l5.293 5.293a1 1 0 0 1-1.414 1.414L7 9.213l-5.293 5.293a1 1 0 1 1-1.414-1.414l5.293-5.293L.293 2.506a1 1 0 1 1 1.414-1.414L7 6.385l5.293-5.293Z"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.293 1.092a1 1 0 1 1 1.414 1.414L8.414 7.8l5.293 5.293a1 1 0 0 1-1.414 1.414L7 9.213l-5.293 5.293a1 1 0 1 1-1.414-1.414l5.293-5.293L.293 2.506a1 1 0 1 1 1.414-1.414L7 6.385l5.293-5.293Z"
      fill="#001F24"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.293 1.092a1 1 0 1 1 1.414 1.414L8.414 7.8l5.293 5.293a1 1 0 0 1-1.414 1.414L7 9.213l-5.293 5.293a1 1 0 1 1-1.414-1.414l5.293-5.293L.293 2.506a1 1 0 1 1 1.414-1.414L7 6.385l5.293-5.293Z"
      fill="#fff"
      fillOpacity={0.05}
    />
  </Svg>
)

export default DeleteIcon
