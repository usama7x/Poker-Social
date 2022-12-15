import { Button, IconButton, Row, Text } from 'native-base'
import React from 'react'
import { useRouter } from 'solito/router'
type nameProps = {
  name?: string
  icon?: any
  path?: string
  onPressed?: () => void
}

function LinkComponent({ name, icon, path, onPressed }: nameProps) {
  const { push } = useRouter()
  return (
    <Button
      p={0}
      width="full"
      bg="#1A2235"
      onPress={() => (onPressed ? onPressed() : push(path ?? '/'))}
      _text={{
        fontWeight: 'bold',
      }}
      _hover={{ bg: 'transparent' }}
      _focus={{ bg: 'transparent' }}
      _pressed={{ bg: 'transparent' }}
      justifyContent="flex-start"
    >
      <Row alignItems="center">
        <IconButton
          mt={2}
          _icon={{
            size: 'md',
          }}
          _hover={{
            bg: 'transparent',
          }}
          _pressed={{
            bg: 'transparent',
          }}
        >
          {icon}
        </IconButton>
        <Text fontSize={18}>{name}</Text>
      </Row>
    </Button>
  )
}

export default LinkComponent
