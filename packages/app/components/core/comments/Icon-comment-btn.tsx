import { CommentPostIcon } from 'app/assets/comment-post-icon'
import { SharePostIcon } from 'app/assets/icons/share-post-icon'
import { IconButton } from 'native-base'

type CommentBtnProps = {
  onPress?: () => void
}

function CommentBtn({ onPress }: CommentBtnProps) {
  return (
    <IconButton p={0} size="lg" variant="unstyled" onPress={onPress}>
      <SharePostIcon color="#60a5FA" />
    </IconButton>
  )
}

export default CommentBtn
