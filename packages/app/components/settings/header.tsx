import { Box, Row, Spacer, Text } from 'native-base'
import React from 'react'
import { useRouter } from 'solito/router'
import IconBackButton from '../core/buttons/icon-back-button'

function SettingHeader() {
  const { back } = useRouter()
  return (
    <Row justifyContent="space-between" bg="#101520" p={3} pl={8}>
      <IconBackButton onPress={() => back()} />
      <Text bold color="#3ABEFE" fontSize={20}>
        Settings
      </Text>
      <Box />
    </Row>
  )
}

export default SettingHeader
