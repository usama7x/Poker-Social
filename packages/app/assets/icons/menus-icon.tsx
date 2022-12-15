import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
type TopBarMenuIconProps = {
  width?: string
  height?: string
  color?: string
}

export function TopBarMenuIcon({ width, height, color }: TopBarMenuIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 41 42"
    >
      <G id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <Path
          fill={color}
          d="M32 17c0,0 0,-1 0,0l0 2c0,0 0,1 0,2 0,0 -22,0 -23,0 -1,0 0,0 -1,0l0 -4 24 0zm-24 -9l24 0 0 5 -24 0 0 -5zm1 21l-3 13c2,-1 9,-7 11,-9l4 -3c1,-1 1,-1 1,-1l10 0c3,0 7,1 8,-2 1,-1 1,-6 1,-9 0,-3 0,-6 0,-9 0,-3 0,-7 -2,-8 -2,-1 -7,-1 -9,-1l-20 0c-2,0 -7,0 -9,1 -1,2 -1,5 -1,8 0,3 0,7 0,10 0,2 0,7 1,9 2,2 5,1 8,1z"
        />
      </G>
    </Svg>
  )
}
