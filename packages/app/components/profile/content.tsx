import { Column, Text } from 'native-base'
import React from 'react'

type ProfileContentProps = {
  fullName?: string
  username: string
  bio?: string
}

function ProfileContent({ fullName, username, bio }: ProfileContentProps) {
  return (
    <Column alignItems="center" mt={4}>
      <Text color="white" fontSize="lg" fontWeight="medium">
        {fullName}
      </Text>
      <Text color="#3ABEFE" mb="1">
        {username}
      </Text>
      <Text color="white" fontSize="sm">
        {bio}
      </Text>
    </Column>
  )
}

export default ProfileContent
