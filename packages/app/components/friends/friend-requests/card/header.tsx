import { Row, Spacer, Text } from 'native-base'
import { format } from 'timeago.js'
import React from 'react'

type FriendRequestCardHeaderProps = {
  name: string
  username: string
  createdAt: string
}

export default function FriendRequestCardHeader({
  name,
  username,
  createdAt,
}: FriendRequestCardHeaderProps) {
  return (
    <Row width="full" alignItems="center">
      <Row alignItems="center" space={2}>
        <Text bold fontSize={18} color="#3ABEFE">
          {name}
        </Text>
        <Text>({username})</Text>
      </Row>
      <Spacer />
      <Text bold color="#3ABEFE">
        {format(new Date(createdAt), 'en_short')}
      </Text>
    </Row>
  )
}
