import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function MessageActiveIcon({ width = '42', height = '43' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 9609 9609"
    >
      <Path fill="none" d="M0 0h9609v9609H0z" />
      <Path
        fill="#3ABEFE"
        d="M6866 4033c38 59 12-68 30 84l-1 287c0 129 7 262-10 390-66 8-3797 38-4069 10-148-15-37 1-87-30l1-741h4136zM2732 2604h4148l-14 748H2730l2-748zm154 3645-557 2221c263-176 1575-1264 1861-1496l803-651c94-73 27-60 160-74h1713c535 0 1135 88 1377-297 168-265 104-1214 104-1605V2664c0-508 97-1194-299-1410-312-171-1149-101-1581-101H3074c-419 0-1316-83-1568 143-326 292-243 927-243 1454v1711c0 417-81 1255 154 1542 276 337 948 246 1469 246z"
      />
    </Svg>
  )
}
