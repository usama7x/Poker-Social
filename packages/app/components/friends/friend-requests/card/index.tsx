import { Column, Row } from 'native-base'
import { UserAvatar } from 'app/components/core/user-avatar'
import FriendRequestCardActions from './actions'
import FriendRequestCardHeader from './header'
import React from 'react'

type FriendRequestCardProps = {
  id: string
  username: string
  name: string
  profilePicture?: {
    url: string
    hash: string
  } | null
  createdAt: string
  onAction: (id: string, action: 'accept' | 'reject') => void
}

export function FriendRequestCard(props: FriendRequestCardProps) {
  const { id, onAction, profilePicture } = props
  return (
    <Row py={3} px={4} space={3} alignItems="center">
      <UserAvatar height={90} width={90} url={profilePicture?.url} />
      <Column flexGrow={1} space={4}>
        <FriendRequestCardHeader {...props} />
        <FriendRequestCardActions onAction={(action) => onAction(id, action)} />
      </Column>
    </Row>
  )
}
