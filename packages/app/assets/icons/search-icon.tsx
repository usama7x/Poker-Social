import React from 'react'
import Svg from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function SearchIcon({ color = 'white' }: IconProps) {
  return (
    <Svg id="Capa_1" x="0px" y="0px" viewBox="0 0 207.948 207.948">
      <path
      fill={color}
        d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
	c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
	S2,31.477,2,21z"
      />
    </Svg>
  )
}
