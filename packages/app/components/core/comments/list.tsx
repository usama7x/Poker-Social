import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Spacer, Text, useToast } from 'native-base'
import { CommentCard } from 'app/components/core/comments/card'
import { CreateComment } from 'app/components/core/comments/create-comment'
import {
  useCommentsQuery,
  useCreateCommentMutation,
  useRemoveCommentMutation,
  ParentType,
} from 'app/generates'
import { PageHeader } from '../page-header'
import { useCommentLikeEvent } from 'app/hooks/post'
import { useAuth } from 'app/hooks/auth'
import { useEventDispatch } from 'app/hooks/event'
import { showErrorToast } from 'app/utils/toast'
import { Keyboard } from 'react-native'

type CommentsListProps = {
  postId: string
}

export function CommentsList({ postId }: CommentsListProps) {
  const { user } = useAuth()
  const dispatch = useEventDispatch()
  const inputRef = useRef<any>(null)
  const [selectedComment, setSelectedComment] = useState({
    commentId: '',
    username: '',
  })

  const [{ data, error }, refetchComments] = useCommentsQuery({
    variables: {
      parentId: postId,
    },
    requestPolicy: 'network-only',
  })

  const [, createComment] = useCreateCommentMutation()
  const [, removeComment] = useRemoveCommentMutation()

  const { onLikePressed } = useCommentLikeEvent()

  async function onCreateCommentHandler(content: string) {
    if (!content) {
      return
    }

    Keyboard.dismiss()

    const commentId = selectedComment.commentId

    setSelectedComment({
      commentId: '',
      username: '',
    })

    const { error } = await createComment({
      parentId: commentId || postId,
      content,
      parentType: commentId.length > 0 ? ParentType.Comment : ParentType.Post,
    })

    if (commentId) {
      dispatch('replies-refresh-' + commentId, '')
    }

    if (error) {
      showErrorToast(error.message)
    }

    refetchComments()
  }

  const onRemoveButtonPressed = useCallback(async (commentId: string) => {
    const { error } = await removeComment({ id: commentId })

    if (error) {
      showErrorToast(error.message)
      return
    }
    refetchComments()
  }, [])

  if (error) {
    console.log(error)
    return null
  }

  return (
    <>
      <PageHeader title="Comments" />
      {data?.findAllComments.length === 0 ? (
        <Text textAlign="center" mt={40}>
          There are no comments yet, create one.
        </Text>
      ) : (
        <FlatList
          mt={2}
          data={data?.findAllComments}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Spacer height={2} />}
          renderItem={({ item }: { item: any }) => (
            <CommentCard
              username={user?.username ?? ''}
              comment={item}
              onLikePressed={onLikePressed}
              onReplyPressed={(commentId, username) => {
                setSelectedComment({ commentId, username })
                inputRef?.current?.focus()
              }}
              onRemoveButtonPressed={onRemoveButtonPressed}
            />
          )}
        />
      )}
      <Spacer height={2} />
      <Spacer />
      <CreateComment
        onCreateComment={onCreateCommentHandler}
        innerRef={inputRef}
        selectedComment={selectedComment}
      />
    </>
  )
}
