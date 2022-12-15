import { useProfileLink } from 'app/hooks/profile-link'
import { Button, Column } from 'native-base'
import React from 'react'
import { useRouter } from 'solito/router'

type CardActionsProps = {
  username: string
}

export function CardActions({ username }: CardActionsProps) {
  const profileLink = useProfileLink(username)

  const { push } = useRouter()
  return (
    <Column px={2} space={4}>
      <Button
        py="2"
        bg="#3ABEFE"
        borderRadius={100}
        _text={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: '14',
        }}
        _hover={{ bg: '#007EBB' }}
        onPress={() => push(profileLink)}
      >
        View
      </Button>
      <Button
        py="2"
        bg="#D83742"
        borderRadius={100}
        _hover={{ bg: '#A51721' }}
        _text={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: '14',
        }}
        onPress={() => push(profileLink)}
      >
        Unfriend
      </Button>
    </Column>
  )
}
