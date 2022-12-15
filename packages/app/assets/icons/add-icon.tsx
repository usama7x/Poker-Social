import React from 'react'
import Svg, { G, Path, Polygon } from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function AddIcon({ color = 'white' }: IconProps) {
  return (
    <Svg x="0px" y="0px" viewBox="0 0 512 512">
      <G>
        <G>
          <Path
            fill={color}
            d="M256,0C114.844,0,0,114.844,0,256c0,141.156,114.844,256,256,256s256-114.844,256-256C512,114.844,397.156,0,256,0z
        M256,490.667C126.604,490.667,21.333,385.397,21.333,256C21.333,126.606,126.604,21.333,256,21.333
       c129.396,0,234.667,105.272,234.667,234.667C490.667,385.397,385.396,490.667,256,490.667z"
          />
        </G>
      </G>
      <G>
        <G>
          <Polygon
            fill={color}
            points="265.562,246.05 265.562,96.716 244.229,96.716 244.229,246.05 105.562,246.05 105.562,267.383 244.229,267.383 
       244.229,416.716 265.562,416.716 265.562,267.383 414.896,267.383 414.896,246.05 		"
          />
        </G>
      </G>
    </Svg>
  )
}