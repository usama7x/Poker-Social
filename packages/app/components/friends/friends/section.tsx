import React from 'react'
import { useFriendsByUsernameQuery } from 'app/generates'
import { Box, Column, FlatList, Row, Spinner } from 'native-base'
import { FriendsCard } from './card'

type FriendsSectionProps = {
  username: string
}

export function FriendsSection({ username }: FriendsSectionProps) {
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
    console.log(error)
    return null
  }
  return (
    <Column p={6} bg="#1A2235" flexWrap="wrap" space={4}>
      {/*  <Text color="#3ABEFE" bold fontSize="md">
        Friends
      </Text> */}
      <Row space={4} px={4}>
        <FlatList
          horizontal={true}
          data={data?.friendsByUsername}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Box width={4} />}
          renderItem={({ item }) => (
            <FriendsCard
              key={item.id}
              name={item.friend.name}
              username={item.friend.username}
              profileImage={item.friend.profileImage}
            />
          )}
        />
      </Row>
    </Column>
  )
}
