import React from 'react'
import { Text } from 'native-base'

export function PostCardContent({ content }: { content?: string }) {
  return (
    <Text px={6} fontSize="sm">
      {content}
    </Text>
  )
}
