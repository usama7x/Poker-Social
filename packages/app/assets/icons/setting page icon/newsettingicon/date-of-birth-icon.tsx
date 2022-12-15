import React from 'react'
import Svg, { G, Path, Polygon } from 'react-native-svg'
import { IconProps } from '../../icon-props.type'

export function DateOfBirthIcon({ width = '32', height = '26' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 1369 1369"
    >
      <Path fill="none" d="M0 0h1369v1369H0z" />
      <G fill="#3ABEFE">
        <Path d="M989 897h135l-1 135-134-1V897zm-247 135c-2-17-3-124 1-135h133l-1 135H742zM495 897h131c4 11 3 118 1 135l-133-1 1-134zm-249 0 134 1v134H246V897zm744-235c3-3-5-3 6-3l127 1c5 12 2 52 2 68 0 7 3 62-3 67l-133-1 1-132zm-249-2h135v134l-135 1V660zm-247 0h134v135l-134-1V660zm-114 2v132l-133 1c-3-3-2 0-3-7v-10c0-24-3-107 2-119h128c10 0 3 0 6 3zM123 486v-74c0-23-4-47 9-62 22-23 82-8 133-13v-48c-23-3-80-1-106 0-35 1-57 17-70 36-19 27-16 54-16 91v634c0 38-4 64 16 91 36 50 100 37 174 37h846c74 0 138 13 173-40 18-27 14-57 14-92V414c0-39 3-63-16-90-14-18-37-35-72-36-27 0-79-2-103 1v48c51 5 111-10 132 13 14 15 10 41 10 64v72H123z" />
        <Path d="M364 338h642v-49H363zM1047 192c-19 8-17 21-17 45 1 20 1 41 1 62 0 30-12 102 33 87 18-6 16-25 16-46V218c-1-19-14-33-33-26zM289 221v136c0 41 50 43 50 0V221c0-42-50-41-50 0z" />
      </G>
    </Svg>
  )
}
