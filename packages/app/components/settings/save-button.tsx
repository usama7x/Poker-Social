import { Button, Link, Row, Text } from 'native-base'
import React from 'react'

type SaveButtonProps = {
  onPress: () => void
  title?: string
  isLoading?: boolean
}

function SaveButton({ onPress, title = 'Save Changes', isLoading }: SaveButtonProps) {
  return (
    <Row justifyContent="center" my={4} h={50}>
      <Button
        width="250"
        isLoading={isLoading}
        onPress={onPress}
        size="lg"
        py="1"
        rounded="3xl"
        bg="#3ABEFE"
        _hover={{ bg: '#007EBB' }}
      >
        <Text px={20} py={2} bold fontSize={21}>
          {title}
        </Text>
      </Button>
    </Row>
  )
}

export default SaveButton
