import { Column } from 'native-base'
import React from 'react'
import { CardActions } from './actions'
import { CardContent } from './content'

type FriendsCardProps = {
  username: string
  name: string
  profileImage?: {
    url: string
    hash: string
  } | null
}

export function FriendsCard({
  username,
  name,
  profileImage,
}: FriendsCardProps) {
  return (
    <Column
      space={6}
      w="40"
      bg="#0E121C"
      h="320"
      borderTopRadius="90"
      borderBottomRadius="20"
    >
      <CardContent
        username={username}
        name={name}
        profilePicture={profileImage?.url}
      />
      <CardActions username={username} />
    </Column>
  )
}
