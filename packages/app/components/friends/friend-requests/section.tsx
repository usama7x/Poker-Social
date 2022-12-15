import React, { useCallback, useEffect, useMemo } from 'react'
import { Box, Column, FlatList, Row, Spinner } from 'native-base'
import { FriendRequestCard2 } from './card2'
import {
  useFriendRequestsQuery,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation,
} from 'app/generates'
import { useProfileLink } from 'app/hooks/profile-link'
import { useRouter } from 'solito/router'
import { FriendsCount } from '../friends/friends-count'
import { showErrorToast } from 'app/utils/toast'

export function FriendRequestsSection() {
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
          return showErrorToast(error.message)
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
    <Column
      bg="#1A2235"
      flexWrap="wrap"
      space={4}
      borderTopColor="black"
      borderTopWidth={6}
      /*     borderBottomColor="black"
      borderBottomWidth={6} */
    >
      <Row
        borderBottomColor="black"
        borderBottomWidth="2"
        justifyContent="center"
        p={4}
      >
        {/* <FriendRequestsCount color="#1A2235" count={friendRequests.length} /> */}
        <FriendsCount />
      </Row>
      <Row space={4} px={4}>
        <FlatList
          data={friendRequests}
          keyExtractor={(item) => item.id}
          horizontal={true}
          ItemSeparatorComponent={() => <Box width={4} />}
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
      </Row>
      {/*  <Row justifyContent="center">
        <Button
          px={2}
          bg="#1A2235"
          borderRadius={100}
          _text={{
            fontWeight: 'bold',
            color: '#06AAF9',
          }}
          // onPress={() => onAction('reject')}
        >
          View All
        </Button>
      </Row> */}
    </Column>
  )
}
