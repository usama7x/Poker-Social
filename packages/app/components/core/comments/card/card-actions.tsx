import { useState } from 'react'
import { Button, IconButton, Row, Text } from 'native-base'
import { LikeIcon } from 'app/assets/icons/like-icon'
import { useEvent, useEventDispatch } from 'app/hooks/event'
import { format } from 'timeago.js'

type CommentCardActionsProps = {
  commentId: string
  isLiked: boolean
  likesCount: number
  createdAt: string
  onLikePressed: (isLiked: boolean) => void
  onReplyPressed?: () => void
}

export function CommentCardActions({
  commentId,
  createdAt,
  onLikePressed,
  onReplyPressed,
  ...props
}: CommentCardActionsProps) {
  const [isLiked, setIsLiked] = useState(props.isLiked)
  const [likesCount, setLikesCount] = useState(props.likesCount)

  const dispatch = useEventDispatch()

  function setCount(isLiked: boolean) {
    if (isLiked) {
      setLikesCount(likesCount + 1)
    } else {
      setLikesCount(likesCount - 1)
    }
  }

  useEvent('comment-like-' + commentId, onLikeEvent)

  function onLikeEvent(isLiked: boolean) {
    setIsLiked(isLiked)
    setCount(isLiked)
  }

  return (
    <Row justifyContent="space-between">
      <Text color="#A5AFCE">{format(new Date(createdAt), 'en_short')}</Text>
      <Button
        onPress={() => {
          dispatch('comment-like-' + commentId, !isLiked)
          onLikePressed(!isLiked)
        }}
        size="lg"
        py="0"
        bg="#1A2235"
        _hover={{ bg: 'transparent' }}
      >
        <Text px={4} color={isLiked ? '#3ABEFE' : '#A5AFCE'}>
          {isLiked ? 'Unlike' : 'Like'}
        </Text>
      </Button>
      <Button
        size="lg"
        p="0"
        bg="#1A2235"
        _hover={{ bg: 'transparent' }}
        onPress={onReplyPressed}
      >
        <Text px={4} color="#A5AFCE">
          {onReplyPressed ? 'Reply' : ''}
        </Text>
      </Button>
      <Row justifyContent="flex-end" space={1}>
        <Text color="#3ABEFE">{likesCount}</Text>
        <IconButton p={0} size="sm" variant="unstyled">
          <LikeIcon color="#3ABEFE" />
        </IconButton>
      </Row>
    </Row>
  )
}
