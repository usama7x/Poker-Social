import {
  useLikeCommentMutation,
  useLikePostMutation,
  useUnLikeCommentMutation,
  useUnLikePostMutation,
} from 'app/generates'
import { useCallback } from 'react'

export function usePostLikeEvent() {
  const [, mutateLike] = useLikePostMutation()
  const [, mutateUnlike] = useUnLikePostMutation()

  const onLikePressed = useCallback((postId: string, isLiked: boolean) => {
    if (isLiked) {
      mutateLike({ postId })
    } else {
      mutateUnlike({ postId })
    }
  }, [])

  return { onLikePressed }
}

export function useCommentLikeEvent() {
  const [{ error }, mutateLike] = useLikeCommentMutation()
  const [, mutateUnlike] = useUnLikeCommentMutation()

  const onLikePressed = useCallback((id: string, isLiked: boolean) => {
    if (isLiked) {
      mutateLike({ id })
    } else {
      mutateUnlike({ id })
    }
  }, [])

  return { onLikePressed }
}
