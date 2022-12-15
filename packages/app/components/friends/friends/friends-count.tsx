import React from 'react'
import { Row, Text } from 'native-base'

type FriendsCountProps = {
  count?: number
}

export function FriendsCount({ count = 0 }: FriendsCountProps) {
  return (
    <Row space={2} bg="inherit" h={35}>
      <Text
        fontWeight="semibold"
        color="#3ABEFE"
        fontSize={18}
        ml={4}
        my={2}
        bold
      >
        Friends
      </Text>
      <Text fontWeight="semibold" color="white" fontSize={18} my={2} bold>
        {count}
      </Text>
    </Row>
  )
}
