import { Box, Button, Row, Text } from 'native-base'
import React from 'react'
import { useRouter } from 'solito/router'
type MediacardProps = {
  icon?: any
}

export default function MediaCard({ icon }: MediacardProps) {
  const { push } = useRouter()
  return (
    <Row alignItems="center">
      <Button onPress={() => push('/')} background="transparent">
        <Row alignItems="center" space={8}>
          <Box size={16}>{icon}</Box>
          <Text color="#777777" fontSize="16" bold>
            Coming soon
          </Text>
        </Row>
      </Button>
    </Row>
  )
}
