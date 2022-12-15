import { Button, Text } from 'native-base'
import React from 'react'
import { useRouter } from 'next/router'
type AllFriendsButtonProps = {
  onPress: () => void
}

export function AllFriendsButton(props: AllFriendsButtonProps) {
  const router = useRouter()
  return (
    <Button
      bg="#0E121C"
      borderRadius={20}
      px={12}
      _text={{
        fontWeight: 'bold',
        color: 'white',
      }}
      {...props}
      _hover={{ bg: '#0E121C' }}
    >
      <Text fontSize={14} bold>
        All Friends (({props.count}))
      </Text>
    </Button>
  )
}
