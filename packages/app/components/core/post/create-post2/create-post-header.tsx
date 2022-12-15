import { Row, Text } from 'native-base'
import React from 'react'

export function CreatePostHeader() {
  return (
    <Row
      justifyContent="center"
      alignItems="center"
      borderBottomWidth={1}
      borderBottomColor="gray.800"
      p={4}
    >
      <Text color="#3ABEFE" bold fontSize="2xl">
        Create Post
      </Text>
    </Row>
  )
}
