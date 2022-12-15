import React from 'react'
import { Column } from 'native-base'
import { ShortFriendsHeader } from 'app/components/friends/short-friends-header'
import { ShortFriendsBody } from 'app/components/friends/short-friends-body'
import { useAuth } from 'app/hooks/auth'

export function ShortFriendsScreen() {
  const { user } = useAuth()

  return (
    <Column w="100%" maxW="800px">
      <ShortFriendsHeader />
      <ShortFriendsBody username={user?.username || ''} />
    </Column>
  )
}
