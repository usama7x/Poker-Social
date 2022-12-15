import { Box, Row, Text } from 'native-base'
import React from 'react'
import { useRouter } from 'solito/router'
import IconBackButton from '../core/buttons/icon-back-button'

export function NotificationHeader() {
  const { back } = useRouter()
  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      p={3}
      backgroundColor="#111623"
    >
      <IconBackButton onPress={() => back()} />
      <Text fontSize={20} bold color="#3ABEFE">
        Notifications
      </Text>
      <Box />
    </Row>
  )
}
