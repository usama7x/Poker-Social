import { Button, Text } from 'native-base'
import React from 'react'

type AllFriendRequestsButtonProps = {
  onPress: () => void
}

export function AllFriendRequestsButton(props: AllFriendRequestsButtonProps) {
  return (
    <Button
      bg="#0E121C"
      borderRadius={20}
      px={10}
      _text={{
        fontWeight: 'bold',
        color: '#3ABEFE',
      }}
      {...props}
    >
      <Text bold fontSize={14}>
        Friend Requests (({props.count}))
      </Text>
    </Button>
  )
}
