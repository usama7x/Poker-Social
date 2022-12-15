import React, { useEffect, useMemo } from 'react'
import { Box, Column, Row, Divider, Text, FlatList, Spacer } from 'native-base'
import { UserAvatar } from '../../user-avatar'
import { CommentCardActions } from './card-actions'
import { CommentCardContent } from './card-content'
import { MaxWProps } from './maxw-props-types'
import { Comment, useCommentsQuery } from 'app/generates'
import { Link as SolitoLink } from 'solito/link'
import { useProfileLink } from 'app/hooks/profile-link'
import { CommentCardHeader } from './card-header'
import { useEvent } from 'app/hooks/event'

type CommentCardProps = MaxWProps & {
  username: string
  comment: Comment
  onLikePressed: (commentId: string, isLiked: boolean) => void
  onReplyPressed?: (commentId: string, username: string) => void
  onRemoveButtonPressed: (commentId: string) => void
}

export function CommentCard({
  username,
  comment,
  onLikePressed,
  onReplyPressed,
  onRemoveButtonPressed,
}: CommentCardProps) {
  const authorUsername = comment.user.username.includes('DISABLED')
    ? ''
    : comment.user.username

  const profileLink = useProfileLink(authorUsername)

  const showOptions = useMemo(
    () => authorUsername == username,
    [authorUsername]
  )

  const [{ data }, refetchComments] = useCommentsQuery({
    variables: {
      parentId: comment.id,
    },
    requestPolicy: 'network-only',
  })

  useEvent('replies-refresh-' + comment.id, () => {
    refetchComments()
  })

  const replies = useMemo(() => data?.findAllComments ?? [], [data])

  return (
    <Row space={2} px={4}>
      <SolitoLink href={profileLink}>
        <UserAvatar url={comment.user.profileImage?.url} />
      </SolitoLink>

      <Column flexGrow={1}>
        <Column backgroundColor="#1A2235" rounded={7}>
          <Column px={3} py={1}>
            <CommentCardHeader
              username={comment.user.username}
              onRemoveButtonPressed={() => onRemoveButtonPressed(comment.id)}
              showOptions={showOptions}
            />
            <CommentCardContent text={comment.content ?? ''} />
          </Column>
          <Box borderBottomWidth={1} />
          <Column px={3} py={1}>
            <CommentCardActions
              onLikePressed={(isLiked) => onLikePressed(comment.id, isLiked)}
              onReplyPressed={
                onReplyPressed
                  ? () => onReplyPressed(comment.id, authorUsername)
                  : undefined
              }
              isLiked={comment.isLiked}
              commentId={comment.id}
              likesCount={comment.activity.likesCount}
              createdAt={comment.createdAt}
            />
          </Column>
        </Column>
        {replies.length > 0 && (
          <Column mt={2}>
            <FlatList
              mt={2}
              data={replies}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Spacer height={2} />}
              renderItem={({ item }: { item: any }) => (
                <CommentCard
                  username={username}
                  comment={item}
                  onLikePressed={onLikePressed}
                  onRemoveButtonPressed={onRemoveButtonPressed}
                />
              )}
            />
          </Column>
        )}
      </Column>
    </Row>
  )
}
