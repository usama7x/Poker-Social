import { EditIcon } from 'app/assets/icons/edit-icon'
import { Box, Button, IconButton, Row, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'solito/router'
import React from 'react'
import { usePlatform } from 'app/hooks/platform'

type ActionsProps = {
  isUser: boolean
  isFriend: boolean
  hasRequestSent: boolean
  hasRequestReceived: boolean
  onPress: (type: string) => void
}

function Actions({
  isUser,
  isFriend,
  hasRequestSent,
  hasRequestReceived,
  onPress,
}: ActionsProps) {
  const { push } = useRouter()
  const { isDesktop } = usePlatform()

  return (
    <Row justifyContent="center" space={40} mb="5">
      {isUser ? (
        <Button
          py="1"
          mt="4"
          size="lg"
          rounded="2xl"
          bg="#3ABEFE"
          _hover={{ bg: '#007EBB' }}
        >
          <SolitoLink href="/settings">
            <Row alignItems="center">
              <IconButton
                p="0"
                borderRadius="full"
                _pressed={{
                  bg: 'blue.600',
                }}
              >
                <EditIcon />
              </IconButton>
              <Text ml="2" fontSize={14} bold>
                Edit Profile
              </Text>
            </Row>
          </SolitoLink>
        </Button>
      ) : !isFriend ? (
        hasRequestReceived ? (
          <Button
            colorScheme="amber"
            size="xs"
            py={1}
            px={4}
            rounded="2xl"
            onPress={() => push('/friends')}
          >
            <Text>Respond</Text>
          </Button>
        ) : !hasRequestSent ? (
          <Button
            onPress={() => onPress('send')}
            py="1"
            mt="4"
            size="lg"
            rounded="2xl"
            bg="brand.btn"
            _hover={{ bg: 'brand.btn' }}
          >
            <Row alignItems="center">
              <Ionicons name="ios-add" size={20} p={0} m={0} color="white" />
              <Text ml="2">Add friend</Text>
            </Row>
          </Button>
        ) : (
          <Button
            py="1"
            size="lg"
            variant="ghost"
            colorScheme="error"
            onPress={() => onPress('cancel')}
          >
            Cancel Request
          </Button>
        )
      ) : (
        <Box />
      )}
    </Row>
  )
}

export default Actions
