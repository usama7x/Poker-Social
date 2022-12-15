import React from 'react'
import { Row } from 'native-base'
import { AllFriendsButton } from './all-friends-button'
import { AllFriendRequestsButton } from './all-friend-requests-button'
import { useRouter } from 'solito/router'
import { useAuth } from 'app/hooks/auth'
import { useProfileLink } from 'app/hooks/profile-link'

export function ShortFriendsHeader() {
  const { user } = useAuth()
  const router = useRouter()
  const profileLink = useProfileLink(user?.username || '')

  return (
    <Row
      bg="#1A2235"
      py={4}
      justifyContent="space-around"
      alignItems="center"
      borderBottomColor="black"
      borderBottomWidth={6}
      space={40}
    >
      <AllFriendsButton onPress={() => router.push('/friends')} />
      <AllFriendRequestsButton
        onPress={() => router.push('/friends-requests')}
      />
    </Row>
  )
}
