import React, { useState } from 'react'
import { Badge, Box, Row, StatusBar, VStack } from 'native-base'
import Fontisto from '@expo/vector-icons/Fontisto'
import SiteLogo from './site-logo'
import { Pressable } from 'react-native'
import { useRouter } from 'solito/router'

function AppHeader() {
  const router = useRouter()

  const [count, setCount] = useState(0)

  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['#1A2235', '#000000'],
          start: [0, 1],
          end: [0, 0],
        },
      }}
      rounded="sm"
    >
      <StatusBar backgroundColor="#000000" />
      <Row p={3} justifyContent="space-between">
        <SiteLogo width={166} height={27} />
        <Row space={5} mr={3}>
          <Pressable onPress={() => router.push('/notifications')}>
            <VStack>
              {count > 0 ? (
                <Badge
                  bg="#FF0000"
                  rounded="full"
                  mb={-4}
                  mr={-4}
                  zIndex={1}
                  variant="solid"
                  alignSelf="flex-end"
                  _text={{
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  {count}
                </Badge>
              ) : (
                <Box />
              )}
              <Fontisto
                name="bell"
                size={22}
                color="white"
                style={{ transform: [{ rotate: '-10deg' }] }}
              />
            </VStack>
          </Pressable>

          {/* <MaterialCommunityIcon
          name="message-text-outline"
          size={24}
          color="white"
        /> */}
        </Row>
      </Row>
    </Box>
  )
}

export default AppHeader
