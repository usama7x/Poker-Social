import React from 'react'
import { Column } from 'native-base'
import { FriendRequestsHeader } from 'app/components/friends/friend-requests/header'
import { FriendRequestsList } from 'app/components/friends/friend-requests/list'

export function FriendRequestsScreen() {
  return (
    <Column w="100%" maxW="800px" bg="#0A0D14" flex={1}>
      <FriendRequestsHeader />
      <FriendRequestsList />
    </Column>
  )
}
