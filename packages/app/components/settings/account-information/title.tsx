import { Row, Text } from 'native-base'
import React from 'react'

function Title() {
  return (
    <Row ml={4} mt={3} bg="#1A2235">
      <Text bold color="#3ABEFE" fontSize="23">
        Account information
      </Text>
    </Row>
  )
}

export default Title
