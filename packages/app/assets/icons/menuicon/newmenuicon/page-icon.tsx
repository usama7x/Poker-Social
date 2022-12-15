import React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export function PagesIcon() {
  return (
    <Svg fillRule="evenodd" clipRule="evenodd" viewBox="0 0 71 71">
      <Defs>
        <LinearGradient
          id="pageicon"
          gradientUnits="userSpaceOnUse"
          x1={18.442}
          y1={7.084}
          x2={52.279}
          y2={63.778}
        >
          <Stop offset={0} stopColor="#B5D208" />
          <Stop offset={1} stopColor="#074B00" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#pageicon)"
        d="M71 32v6c0 1 0 3-1 3 0 5-3 11-6 15 0 1-1 2-2 2 0 1-2 4-3 4 0 0-1 0-1 1-2 2-4 3-7 4-2 1-4 2-7 3-1 0-3 1-5 1h-5l-4-1c-3 0-6-1-10-2-3-2-5-3-7-5 0-1-1-1-1-1-1 0-2-2-3-3-2-2-4-6-6-8-3-8-3-13-3-14v-7c1-6 4-13 9-18v-1c1 0 3-2 4-3 2-2 4-3 7-5l12-3h9c3 1 7 2 10 3 2 2 4 3 6 4l4 4 2 2 1 1c1 2 2 4 4 6 2 6 3 10 3 12z"
      />
      <Path
        fill="#FEFEFE"
        d="M23 23c3-1 2 15 0 16-2-1-3-16 0-16zm-1 21c1-2 6-2 8-2 3 1 6 2 8 3 6 2 13 1 15-4 1-3 1-20 0-22-3-1-6 6-16 1-6-3-9-3-16 0 0-2 0-5-3-3-1 0-1 4-1 5v25c0 1-1 8 2 8 2 0 2-2 2-4 0-3 0-6 1-7z"
      />
    </Svg>
  )
}
