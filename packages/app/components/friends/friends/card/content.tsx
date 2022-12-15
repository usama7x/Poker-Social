import { UserAvatar } from 'app/components/core/user-avatar'
import { Column, Text } from 'native-base'
import React from 'react'

type CardContentProps = {
  username: string
  name: string
  profilePicture?: string
}

export function CardContent({
  name,
  username,
  profilePicture,
}: CardContentProps) {
  return (
    <Column
      mt={2}
      alignItems="center"
      borderBottomColor="gray.800"
      borderBottomWidth="1"
      space={1}
    >
      <UserAvatar width={125} height={125} url={profilePicture} />
      <Text bold fontSize="md" color="#3ABEFE">
        {name}
      </Text>
      <Text mb="2" fontSize={14}>
        {username}
      </Text>
    </Column>
  )
}
