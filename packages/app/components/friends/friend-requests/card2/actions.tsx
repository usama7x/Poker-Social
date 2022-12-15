import { Button, Column } from 'native-base'
import React from 'react'
type CardActionsProps = {
  onAction: (action: 'accept' | 'reject') => void
}

export function CardActions({ onAction }: CardActionsProps) {
  return (
    <Button.Group px={2} direction="column">
      <Button
        p={0}
        py="2"
        bg="#3ABEFE"
        borderRadius={100}
        _text={{
          fontWeight: 'bold',
          color:"white"
        }}
        onPress={() => onAction('accept')}
      >
        Accept
      </Button>
      <Button
        p={0}
        py="2"
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
