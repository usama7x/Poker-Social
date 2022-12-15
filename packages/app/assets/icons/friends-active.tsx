import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function FriendsActiveIcon({ width = '49', height = '49' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 1232 1232"
    >
      <Path fill="none" d="M0 0h1232v1232H0z" />
      <G fill="#3ABEFE">
        <Path d="M908 1155c8-617-870-726-870 1l870-1z" />
        <Path d="M475 617c137 0 247-121 247-270 0-150-110-271-247-271-136 0-247 121-247 271 0 149 111 270 247 270z" />
        <Path d="M835 563c118-5 209-113 204-241-6-129-105-229-223-224-50 2-96 23-131 57 43 43 67 107 70 178 3 72-16 137-56 184 38 31 86 48 136 46zM1193 1079c28-385-334-536-591-454 189 42 367 225 354 455l237-1z" />
      </G>
    </Svg>
  )
}
