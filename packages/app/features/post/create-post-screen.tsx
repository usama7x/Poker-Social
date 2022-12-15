import { Column } from 'native-base'
import { CreatePost } from 'app/components/core/post/create-post'
import { usePlatform } from 'app/hooks/platform'
import { CreatePost2 } from 'app/components/core/post/create-post2'

export function CreatePostscreen() {
  const { isDesktop } = usePlatform()
  return (
    <Column flex={1} space={10} w="100%" maxW="800px">
      {isDesktop ? <CreatePost2 /> : <CreatePost />}
    </Column>
  )
}
