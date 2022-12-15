import { Row, Text } from 'native-base'
import React from 'react'

type NotificationCountProps = {
  count: number
}

export function NotificationCount({ count }: NotificationCountProps) {
  return (
    <Row space={2} bg="#1A2235" h={35}>
      <Text fontWeight="bold" color="white" fontSize={18} ml={4} my={1}>
        New
      </Text>
      <Text fontWeight="bold" color="#3ABEFE" fontSize={18} my={1}>
        {count}
      </Text>
    </Row>
  )
}
