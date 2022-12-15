import { ArrowBackIcon, Row, Pressable, Text } from 'native-base'
import React from 'react'

type LoginButtonProps = {
  onPress?: () => void
}

function BackButton({ onPress }: LoginButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Row alignItems="center" space={2}>
        <ArrowBackIcon size={4} color="#3ABEFE" />
        <Text color="#3ABEFE" fontSize="16" bold>
          Back
        </Text>
      </Row>
    </Pressable>
  )
}

export default BackButton
