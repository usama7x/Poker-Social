import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'
import { IconProps } from '../../icon-props.type'

export function UserNameIcon({ width = '28', height = '28' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 11044 11044"
    >
      <Path fill="none" d="M0 0h11044v11044H0z" />
      <Circle fill="#3ABEFE" cx={5522} cy={5522} r={5085} />
      <G fill="#0E121C">
        <Path d="M5522 2428c806 0 1459 674 1459 1506 0 831-653 1505-1459 1505s-1460-674-1460-1505c0-832 654-1506 1460-1506zm0 255c659 0 1193 560 1193 1251 0 690-534 1250-1193 1250s-1193-560-1193-1250c0-691 534-1251 1193-1251zM2972 8351c0-892 213-1531 950-2118 722-575 1807-637 2653-298 1052 422 1571 1350 1488 2422l-19 244-5072 15v-265zm276 0 4540-13c173-2245-2462-2879-3689-1902-686 546-851 1124-851 1915z" />
        <Path d="M8045 8465c193-2490-2741-3193-4108-2109-763 605-947 1246-947 2123l5055-14zM6819 3934c0-762-581-1379-1297-1379-717 0-1297 617-1297 1379 0 761 580 1378 1297 1378 716 0 1297-617 1297-1378z" />
      </G>
    </Svg>
  )
}
