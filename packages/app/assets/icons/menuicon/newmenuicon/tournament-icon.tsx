import React from 'react'
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Polygon,
  Stop,
} from 'react-native-svg'

export function TournamentIcon() {
  return (
    <Svg fillRule="evenodd" clipRule="evenodd" viewBox="0 0 71 71">
      <Defs>
        <LinearGradient
          id="tournament"
          gradientUnits="userSpaceOnUse"
          x1={11.677}
          y1={10.987}
          x2={59.043}
          y2={59.874}
        >
          <Stop offset={0} stopColor="#FFC629" />
          <Stop offset={1} stopColor="#584501" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#tournament)"
        d="M71 32v6c0 1 0 3-1 3 0 5-3 11-6 15 0 1-1 2-2 2 0 1-2 4-3 4 0 0-1 0-1 1-2 2-4 3-7 4-2 1-4 2-7 3-1 0-3 1-5 1h-5l-4-1c-3 0-6-1-10-2-3-2-5-3-7-5 0-1-1-1-1-1-1 0-2-2-3-3-2-2-4-6-6-8-3-8-3-13-3-14v-7c1-6 4-13 9-18v-1c1 0 3-2 4-3 2-2 4-3 7-5l12-3h9c3 1 7 2 10 3 2 2 4 3 6 4l4 4 2 2 1 1c1 2 2 4 4 6 2 6 3 10 3 12z"
      />
      <G fill="#FEFEFE">
        <Path d="M34 24s0-2 1-2v-1c1-1 1 0 1 1l1 2h3l-2 2c0 2 1 4 0 4 0 0-2-2-3-2l-1 1c-1 0-1 1-2 1 0 0 0-1 1-2v-2l-2-1c-1-1-1-1 0-1h3zm-11-8c0 6 3 17 7 21 1 1 3 4 5 4 8 0 13-18 13-25H23zM22 56c4 2 8 3 13 3 3 0 6 0 8-1 2 0 4-1 6-2v-6H22v6z" />
        <Path d="M27 33c-1 0-1-1-1-1l-1-2v-1c-1-1-3-2-5-3 0-1-2-3-2-4 0-2 3-3 5-3l-1-1c-2 0-4 0-4 2-2 1-1 4 0 6 1 1 2 1 3 2s2 2 3 2v1c0 1 0 2 1 2 0 1 1 0 2 0zM47 29c-2 1-1 1-2 2l-1 2c1 0 1 1 2 0 1 0 1-1 0-2 1-1 3-2 4-3l3-3c1-2 1-4 0-5-1-2-3-2-5-2v1c2 0 5 1 4 3 0 2-1 3-2 4 0 1 0 1-1 1 0 0-2 1-2 2zM34 41v4c-1 2-2 2-2 3h7v-1c-2-1-2-3-3-6h-2zM29 50h13v-1H29z" />
      </G>
    </Svg>
  )
}
