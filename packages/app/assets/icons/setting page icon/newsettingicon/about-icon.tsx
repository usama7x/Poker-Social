import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'
import { IconProps } from '../../icon-props.type'

export function AboutIcon({ width = '20', height = '20' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 10386 10386"
    >
      <Path fill="none" d="M0 0h10386v10386H0z" />
      <Circle fill="#3ABEFE" cx={5193} cy={5193} r={4856} />
      <G fill="#0E121C">
        <Path d="M6192 2968c41-714 81-881-677-878-426 1-1203-122-1324 251-72 222 141 2603 170 3029 35 524-83 1092 504 1129 562 37 1043 117 1105-474 103-973 165-2065 222-3057zM4377 7866c76 434 546 470 987 442 551-36 659-208 627-795-30-547-532-423-1031-427-515-4-681 219-583 780z" />
      </G>
    </Svg>
  )
}
