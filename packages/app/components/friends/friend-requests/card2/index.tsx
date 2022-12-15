import { Column } from 'native-base'
import React from 'react'
import { CardActions } from './actions'
import { CardContent } from './content'

type FriendRequestCard2Props = {
  id: string
  username: string
  name: string
  profilePicture?: {
    url: string
    hash: string
  } | null
  createdAt: string
  onAction: (id: string, action: 'accept' | 'reject') => void
}

export function FriendRequestCard2({
  id,
  onAction,
  username,
  name,
  profilePicture,
}: FriendRequestCard2Props) {
  return (
    <Column
      space={8}
      w="40"
      bg="#0E121C"
      h="320"
      borderTopRadius="90"
      borderBottomRadius="20"
    >
      <CardContent
        username={username}
        name={name}
        profilePicture={profilePicture?.url}
      />
      <CardActions onAction={(action) => onAction(id, action)} />
    </Column>
  )
}
