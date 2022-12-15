import React, { useMemo } from 'react'
import { Row, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import { UserAvatar } from '../../user-avatar'
import { useProfileLink } from 'app/hooks/profile-link'
import { useRouter } from 'solito/router'

type PostCardFooterProps = {
  comments: {
    user: {
      username: string
      profileImage?: {
        hash: string
        url: string
        mimetype: string
      } | null
    }
    content: string
  }[]
}

export function PostCardFooter({ comments }: PostCardFooterProps) {
  const { user, content } = useMemo(() => comments[0]!, [comments.length])
  const profileLink = useProfileLink(user.username)
  const router = useRouter()

  return (
    <Row px={5} mt={5} mb={2} alignItems="center" space={1}>
      <SolitoLink href={profileLink}>
        <UserAvatar url={user.profileImage?.url} />
      </SolitoLink>

      <Text fontSize="sm">
        <Text bold color="#3ABEFE" onPress={() => router.push(profileLink)}>
          {user.username}&nbsp;
        </Text>
        {content}
      </Text>
    </Row>
  )
}
