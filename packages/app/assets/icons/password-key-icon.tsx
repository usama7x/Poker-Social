import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './icon-props.type'

export function PasswordKeyIcon({ width = '24', height = '24' }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 2879 2879"
    >
      <Path fill="none" d="M0 0h2879v2879H0z" />
      <Path
        fill="#3ABEFE"
        d="M1464 1420c-10-3-72-40-80-47 24-40 59-83 88-122l528-718c37-51 66-112 113-80 55 36-18 109-35 133l-438 597c-26 35-158 221-176 237zm-772 900c-30-113 42-221 142-246 114-30 219 41 246 142 30 113-43 219-142 245-114 29-218-41-246-141zm983-685 175-239c125-172 98-93 60-320 262-33 236 0 190-259 258-33 236-1 189-258 269-35 248 10 159-325-18-66-45-79-114-61-361 93-258 22-468 308l-463 630c-51 71-106 140-155 212-32-1-77-15-117-18-137-9-279 20-396 86-471 262-474 909-73 1186 133 92 260 140 437 136 189-5 353-89 461-191 207-197 278-497 169-775-17-43-39-76-54-112z"
      />
    </Svg>
  )
}
