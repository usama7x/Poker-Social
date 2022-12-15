import { Avatar } from 'native-base'
import React from 'react'

type UserAvatarProps = {
  url?: string
  width?: number
  height?: number
}

export function UserAvatar({ url, width = 35, height = 35 }: UserAvatarProps) {
  return (
    <Avatar
      width={width}
      height={height}
      borderRadius={100}
      source={{
        uri:
          url ||
          'https://pokersocial-public.s3.ap-south-1.amazonaws.com/blank-avatar.png',
      }}
    />
  )
}
