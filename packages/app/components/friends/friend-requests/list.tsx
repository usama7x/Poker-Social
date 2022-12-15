import React, { useCallback, useEffect, useMemo } from 'react'
import {
  useAcceptFriendRequestMutation,
  useFriendRequestsQuery,
  useRejectFriendRequestMutation,
} from 'app/generates'
import { useProfileLink } from 'app/hooks/profile-link'
import { FlatList, Row, Spinner } from 'native-base'
import { useRouter } from 'solito/router'
import { FriendRequestsCount } from './count'
import { FriendRequestCard2 } from './card2'
import { showErrorToast } from 'app/utils/toast'

export function FriendRequestsList() {
  const router = useRouter()

  const [{ data, fetching }, refetch] = useFriendRequestsQuery({
    requestPolicy: 'network-only',
  })
  const [, acceptFriendRequest] = useAcceptFriendRequestMutation()
  const [, rejectFriendRequest] = useRejectFriendRequestMutation()

  const friendRequests = useMemo(() => data?.friendRequests ?? [], [data])

  const onActionHandler = useCallback(
    async (id: string, action: 'accept' | 'reject') => {
      if (action === 'accept') {
        const { data, error } = await acceptFriendRequest({ id })

        if (error) {
          return showErrorToast(error.message)
        }

        const profileLink = useProfileLink(
          data?.acceptFriendRequest.fromUser.username || ''
        )

        router.push(profileLink)
      }

      if (action === 'reject') {
        const { error } = await rejectFriendRequest({ id })

        if (error) {
          showErrorToast(error.message)
          return
        }

        refetch()
      }
    },
    []
  )

  useEffect(() => () => clearInterval(setInterval(refetch, 3000)), [])

  if (fetching) {
    return <Spinner size="lg" />
  }

  return (
    <FlatList
      ListHeaderComponent={
        <Row justifyContent="center" bg="#1A2235">
          <FriendRequestsCount count={friendRequests.length} />
        </Row>
      }
      data={friendRequests}
      renderItem={({ item }) => (
        <FriendRequestCard2
          key={item.id}
          id={item.id}
          name={`${item.fromUser.firstName} ${item.fromUser.lastName}`}
          username={item.fromUser.username}
          profilePicture={item.fromUser.profileImage}
          createdAt={item.createdAt}
          onAction={onActionHandler}
        />
      )}
    />
  )
}
