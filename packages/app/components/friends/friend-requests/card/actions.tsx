import { Button } from 'native-base'
import React from 'react'

type FriendRequestCardActionsProps = {
  onAction: (action: 'accept' | 'reject') => void
}

export default function FriendRequestCardActions({
  onAction,
}: FriendRequestCardActionsProps) {
  return (
    <Button.Group>
      <Button
        px={10}
        py={2}
        color="#058B24"
        borderRadius={100}
        _hover={{ bg: '#0D6321' }}
        _text={{
          fontWeight: 'bold',
        }}
        onPress={() => onAction('accept')}
      >
        Accept
      </Button>
      <Button
        px={10}
        py={2}
        bg="#1A2235"
        borderRadius={100}
        _text={{
          fontWeight: 'bold',
          color: '#3ABEFE',
        }}
        onPress={() => onAction('reject')}
      >
        Delete
      </Button>
    </Button.Group>
  )
}
