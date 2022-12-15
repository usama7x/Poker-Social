import { Avatar } from 'native-base'
import React from 'react'

type UserImageProps = {
  url?: string
}

function UserImage({ url }: UserImageProps) {
  return (
    <Avatar
      source={{
        uri:
          url ||
          'https://pokersocial-public.s3.ap-south-1.amazonaws.com/blank-avatar.png',
      }}
      size={220}
      maxW="220px"
      borderWidth={4}
      borderRadius={220 / 2}
    />
  )
}

export default UserImage
