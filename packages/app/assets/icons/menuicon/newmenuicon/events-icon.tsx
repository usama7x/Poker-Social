import React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export function EventsIcon() {
  return (
    <Svg fillRule="evenodd" clipRule="evenodd" viewBox="0 0 291 291">
      <Defs>
        <LinearGradient
          id="eventicon"
          gradientUnits="userSpaceOnUse"
          x1={206.479}
          y1={222.004}
          x2={84.15}
          y2={68.735}
        >
          <Stop offset={0} stopColor="red" />
          <Stop offset={1} stopColor="#FE6A00" />
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#eventicon)"
        d="M208 277c-29 14-54 16-85 12-14-2-27-6-39-12-13-5-22-12-32-20l-2-2c-3-2-10-10-13-13-8-7-18-24-23-33C-10 157-3 94 35 50c5-5 11-11 17-16 11-8 16-13 31-20 40-19 85-19 125 0 10 5 19 10 27 17l14 12c3 3 5 6 8 9 1 2 3 3 4 5 6 8 12 17 16 27 33 72 4 158-69 193z"
      />
      <G fill="#FEFEFE">
        <Path d="M113 97v9c0 3 0 6 3 6 4 0 2-8 3-15 9 3 8 19-3 19-12 0-13-17-3-19zm65 0c10 3 8 19-3 19-12 0-13-16-3-19v9c0 3 0 6 3 6 5 0 2-8 3-15zm-65-6c-5 1-30-1-32 1s-1 12-1 15c0 5-1 11 0 16 2 1 101 0 114 0 5 0 12 1 17 0v-16c0-3 1-13-1-15-2-1-27-1-32-1-1-2 0-8 0-11s1-8-3-8c-6 0-2 12-3 19h-53c-2-7 2-19-3-19s-2 10-3 19zM86 134h119v79H86v-79zm-6-6v88c0 4 4 3 7 3h117c4 0 7 0 7-3v-88H80z" />
        <Path
          fillRule="nonzero"
          d="M146 198c-3-4-6-9-10-13-6-6-11-10-12-18-3-11 9-15 18-10 3 2 4 2 8 0 2-2 5-2 8-2 2 0 4 1 6 2 3 2 4 6 3 10-1 6-6 13-10 17s-8 9-11 14z"
        />
      </G>
    </Svg>
  )
}
