import React from 'react'
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Polygon,
  Rect,
  Stop,
} from 'react-native-svg'

export function LiveIcon() {
  return (
    <Svg fillRule="evenodd" clipRule="evenodd" viewBox="0 0 291 291">
      <Defs>
        <LinearGradient
          id="liveicon"
          gradientUnits="userSpaceOnUse"
          x1={73.539}
          y1={33.94}
          x2={217.198}
          y2={257.051}
        >
          <Stop offset={0} stopColor="red" />
          <Stop offset={1} stopColor="#670001" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#liveicon)"
        d="M208 277c-8 4-17 7-26 9-7 2-14 4-22 4-2 1-6 1-8 1h-13l-16-2c-14-2-26-6-39-12-12-5-22-12-32-20l-2-2c-3-2-10-9-13-13-8-7-18-24-23-33-14-31-13-52-14-55v-15c0-2 1-13 2-16 4-26 16-53 33-73l3-3c2-2 11-11 14-13 11-8 16-13 31-20 40-19 86-19 125 0 10 5 19 10 27 17l14 12c3 3 5 6 8 9 1 2 3 3 4 5 6 8 12 17 16 27 33 72 4 158-69 193z"
      />
      <G fill="#FEFEFE">
        <Rect x={49} y={99} width={162.408} height={92.789} rx={12} ry={12} />
        <Path d="m241 110-31 13v45l31 13z" />
      </G>
      <Circle fill="#FEFEFE" cx={188} cy={122} r={15} />
      <Circle fill="red" cx={188} cy={122} r={12} />
    </Svg>
  )
}
