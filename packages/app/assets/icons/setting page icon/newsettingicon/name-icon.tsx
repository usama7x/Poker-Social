import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'
import { IconProps } from '../../icon-props.type'

export function NameIcon({ width = '26', height = '31' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 1369 1369"
    >
      <Path fill="none" d="M0 0h1369v1369H0z" />
      <Path
        fill="#3ABEFE"
        d="M685 53c164 0 298 137 298 307 0 138-88 254-208 294-28 10-59 15-90 15-32 0-63-5-91-16-121-40-207-156-207-293 0-170 133-307 298-307zm143 514c227-201 244-215 0 0zM490 758c337-135 744 118 714 506l-4 50-1036 3v-54c0-183 43-313 194-433 39-31 84-55 132-72zm464 454c-877 2-877 2 0 0z"
      />
    </Svg>
  )
}
