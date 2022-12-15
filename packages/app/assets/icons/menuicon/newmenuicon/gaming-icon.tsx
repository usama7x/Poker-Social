import React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

export function GamingIcon() {
  return (
    <Svg fillRule="evenodd" clipRule="evenodd" viewBox="0 0 71 71">
      <Defs>
        <LinearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={19.65}
          y1={12.755}
          x2={51.071}
          y2={58.107}
        >
          <Stop offset={0} stopColor="#6F00CF" />
          <Stop offset={1} stopColor="#27004D" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#a)"
        d="M71 32v6c0 1 0 3-1 3 0 5-3 11-6 15 0 1-1 2-2 2 0 1-2 4-3 4 0 0-1 0-1 1-2 2-4 3-7 4-2 1-4 2-7 3-1 0-3 1-5 1h-5l-4-1c-3 0-6-1-10-2-3-2-5-3-7-5 0-1-1-1-1-1-1 0-2-2-3-3-2-2-4-6-6-8-3-8-3-13-3-14v-7c1-6 4-13 9-18v-1c1 0 3-2 4-3 2-2 4-3 7-5l12-3h9c3 1 7 2 10 3 2 2 4 3 6 4l4 4 2 2 1 1c1 2 2 4 4 6 2 6 3 10 3 12z"
      />
      <Path
        fill="#FEFEFE"
        d="M9 37c1 9 11 14 19 9 2-2 1-2 3-3h4c6 0 5 0 8 3 2 1 6 2 9 2 13-2 14-20 2-24-3-1-6-1-9 0s-16 1-19 0-7-1-9 0c-5 2-9 6-8 13zm42-8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm7 7c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2zm-7 3c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm-3-3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2zm-21-2v2c0 1-1 1-1 1h-4v4h-3v-4h-3c-1 0-1 0-1-1v-2h4v-4s0-1 1-1h2v5h5z"
      />
    </Svg>
  )
}
