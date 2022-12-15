import { CloseIcon, Row, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'native-base'
type params = {
  msg?: string
  setError: (error: string) => void
}
export function FormError({ msg, setError }: params) {
  return (
    <Row
      bg="#D83742"
      borderRadius={10}
      space={8}
      alignItems="center"
      p={2}
      pl={4}
      mb={4}
    >
      <Pressable onPress={() => setError('')}>
        <CloseIcon color="white" />
      </Pressable>

      <Text fontSize="md" bold>
        {msg}
      </Text>
    </Row>
  )
}
