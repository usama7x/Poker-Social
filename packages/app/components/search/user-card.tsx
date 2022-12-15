import React, { useMemo } from 'react'
import { Column, Row, Text } from 'native-base'
import { UserAvatar } from '../core/user-avatar'
import { Link as SolitoLink } from 'solito/link'
import { usePlatform } from 'app/hooks/platform'
import { useProfileLink } from 'app/hooks/profile-link'

type SearchUserCardProps = {
  name?: string | null
  email?: string
  username?: string
  profileImage?: {
    url: string
    hash: string
    mimetype: string
  } | null
}

export function SearchUserCard({
  name,
  username,
  profileImage,
}: SearchUserCardProps) {
  const { isWeb } = usePlatform()

  const profileLink = useProfileLink(username || '')

  return (
    <SolitoLink href={profileLink}>
      <Row space={4} alignItems="center">
        <UserAvatar url={profileImage?.url} height={50} width={50} />
        <Column>
          <Text color="#3ABEFE">{username}</Text>
          <Text bold>{name}</Text>
        </Column>
      </Row>
    </SolitoLink>
  )
}
