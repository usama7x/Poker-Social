import React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export function PokerCourseIcon() {
  return (
    <Svg fillRule="evenodd" clipRule="evenodd" viewBox="0 0 71 71">
      <Defs>
        <LinearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={17.779}
          y1={14.995}
          x2={52.942}
          y2={55.866}
        >
          <Stop offset={0} stopColor="#C400E7" />
          <Stop offset={1} stopColor="#17005A" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#a)"
        d="M71 32v6c0 1 0 3-1 3 0 5-3 11-6 15 0 1-1 2-2 2 0 1-2 4-3 4 0 0-1 0-1 1-2 2-4 3-7 4-2 1-4 2-7 3-1 0-3 1-5 1h-5l-4-1c-3 0-6-1-10-2-3-2-5-3-7-5 0-1-1-1-1-1-1 0-2-2-3-3-2-2-4-6-6-8-3-8-3-13-3-14v-7c1-6 4-13 9-18v-1c1 0 3-2 4-3 2-2 4-3 7-5l12-3h9c3 1 7 2 10 3 2 2 4 3 6 4l4 4 2 2 1 1c1 2 2 4 4 6 2 6 3 10 3 12z"
      />
      <G fill="#FEFEFE">
        <Path d="M14 49h15c1 0 0 1 1 1 1 1 1 1 2 1h3c2 0 5 0 5-1 1 0 1-1 2-1h14c0 1-1 3-3 3-1 1-3 1-5 1H23c-2 0-4 0-6-1-1 0-1-1-2-2l-1-1zm17 0h9c0 1-1 1-2 1h-5c-2 0-2 0-2-1zm-15-1V28c0-2 0-2 2-2h7c1 1 0 8 0 9 0 11-1 11 4 11h14c2 0 2-1 2-3V26h9v22H16zm11-3c-1-2 0-20 0-24 0-2-1-3 1-3h15c1 0 1 0 1 1v24c0 1 0 2-1 2H27zm-2-20h-8c-1 0-2 1-2 2v21h-2c-1 0 0 1 0 1 0 1 0 1 1 1 0 1 1 2 1 2 2 1 3 2 6 2h29c5 0 6-2 8-5v-1h-2c-1-7 0-14 0-21 0-3-3-2-6-2h-5v-5c0-4 0-3-10-3h-8c-1 0-1 1-2 1v7z" />
        <Path d="m35 26 5 5c0 1 0 2-1 3-2 1-3-1-3 0-1 1 0 2 0 3h-1c0-1 1-4-1-3s-3 0-3-2 1-3 3-4c0-1 1-1 1-2zm-1 9c0 2-2 3 0 3h2c3 0 1-1 1-3 3 1 5-2 4-5l-3-3c-3-3-2-3-5 0l-3 3c-1 3 1 6 4 5z" />
      </G>
    </Svg>
  )
}
