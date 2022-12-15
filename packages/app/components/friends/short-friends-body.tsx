import React from 'react'
import { Box, Column, Row } from 'native-base'
import { usePlatform } from 'app/hooks/platform'
import { FriendsSection } from './friends/section'
import { FriendsList } from './friends/list'
import { FriendRequestsSection } from './friend-requests/section'
import { FriendRequestsList } from './friend-requests/list'
import { FriendsCount } from './friends/friends-count'
import SearchBar from '../core/searchbar'

type ShortFriendsBodyProps = {
  username: string
}

export function ShortFriendsBody({ username }: ShortFriendsBodyProps) {
  const { isDesktop } = usePlatform()

  return (
    <Column>
      <Row
        justifyContent="space-around"
        bg="#1A2235"
        p={4}
        borderBottomColor="black"
        borderBottomWidth={6}
      >
        <FriendsCount />
        <Box w="64%">
          <SearchBar backgroundColor="#0E121C" />
        </Box>
      </Row>
      {isDesktop ? (
        <FriendsSection username={username} />
      ) : (
        <FriendsList username={username} />
      )}
      {isDesktop ? <FriendRequestsSection /> : <FriendRequestsList />}
    </Column>
  )
}
