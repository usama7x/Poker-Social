import { Column, Row, Text } from 'native-base'
import React from 'react'

type FriendRequestsCountProps = {
  count?: number
  color?: string
}

export function FriendRequestsCount({
  color,
  count = 0,
}: FriendRequestsCountProps) {
  return (
    <Column bg={color} p={3} textAlign="center">
      <Row justifyContent="space-between" alignItems="center">
        <Row space={2}>
          <Text bold fontSize={16} color="#3ABEFE">
            Friend Requests
          </Text>
          <Text color="white" bold fontSize="16">
            {count}
          </Text>
        </Row>
      </Row>
    </Column>
  )
}
