import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '../../icon-props.type'

export function ToggleIcon({ width = '21', height = '17', color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 17">
      <Path
        id="Polygon_2"
        data-name="Polygon 2"
        d="M8.8,2.755a2,2,0,0,1,3.4,0l6.914,11.194A2,2,0,0,1,17.414,17H3.586a2,2,0,0,1-1.7-3.051Z"
        transform="translate(21 17) rotate(180)"
        fill={color}
      />
    </Svg>
  )
}
