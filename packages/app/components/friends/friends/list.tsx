import React from 'react'
import { FlatList, Spinner } from 'native-base'
import { FriendsListItem } from './friends-list-item'
import { useFriendsByUsernameQuery } from 'app/generates'

type FriendsListProps = {
  username: string
}

export function FriendsList({ username }: FriendsListProps) {
  const [{ data, error, fetching }] = useFriendsByUsernameQuery({
    variables: {
      username,
    },
    requestPolicy: 'network-only',
  })

  if (fetching) {
    return <Spinner size="sm" />
  }

  if (error) {
    return null
  }

  return (
    <FlatList
      data={data?.friendsByUsername}
      renderItem={({ item }) => (
        <FriendsListItem
          key={item.id}
          name={item.friend.name}
          username={item.friend.username}
          profileImage={item.friend.profileImage}
        />
      )}
    />
  )
}
