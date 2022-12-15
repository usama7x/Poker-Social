import React from 'react'
import { Box, Column, Row } from 'native-base'
import { AllFriendsButton } from '../all-friends-button'
import { AllFriendRequestsButton } from '../all-friend-requests-button'
import { useRouter } from 'solito/router'
import { FriendsCount } from '../friends/friends-count'
import SearchBar from 'app/components/core/searchbar'
import { FriendsSection } from '../friends/section'

export function FriendRequestsHeader() {
  const router = useRouter()
  return (
    <Column py={3} bg="#1A2235">
      <Row
        bg="#1A2235"
        py={4}
        px={8}
        justifyContent="space-between"
        alignItems="center"
        borderBottomColor="black"
        borderBottomWidth={6}
      >
        <AllFriendsButton onPress={() => router.push('/friends')} />
        <AllFriendRequestsButton
          onPress={() => router.push('/friends-requests')}
        />
      </Row>
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
    </Column>
  )
}
