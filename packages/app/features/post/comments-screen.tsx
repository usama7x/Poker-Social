import { CommentsList } from 'app/components/core/comments/list'
import { Column } from 'native-base'
import { createParam } from 'solito'

const { useParam } = createParam<{ id: string }>()

export function PostCommentsScreen() {
  const [id] = useParam('id')

  if (!id) {
    return null
  }

  return (
    <Column flex={1} w="full" maxW="800px" backgroundColor="#090D14">
      <CommentsList postId={id} />
    </Column>
  )
}
