import React from 'react'
import { Column } from 'native-base'
import { FriendsHeader } from 'app/components/friends/friends/header'
import { FriendsList } from 'app/components/friends/friends/list'
import { createParam } from 'solito'

const { useParam } = createParam<{
  username: string
}>()

export function FriendsScreen() {
  const [username = ''] = useParam('username')
  return (
    <Column w="100%" maxW="800px" bg="#0A0D14" flex={1}>
      <FriendsHeader />
      <FriendsList username={username} />
    </Column>
  )
}
