import { Center, Row, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import { useRouter } from 'solito/router'

export function HomeEmpty() {
  const router = useRouter()

  return (
    <Center key="np" mt={40}>
      <Row alignItems="center" space={1}>
        <Text key="np2" fontSize="md">
          There are no posts right now.
        </Text>
        <Pressable key="np4" onPress={() => router.push('/create-post')}>
          <Text key="np3" fontSize="md" bold color="primary.500">
            Create
          </Text>
        </Pressable>
      </Row>
    </Center>
  )
}
