import React, { useContext, useMemo, useState } from 'react'
import { FlatList, Column, Box, Row } from 'native-base'
import { PostCard } from 'app/components/core/post/card'
import { usePostsQuery, useRemovePostMutation } from 'app/generates'
import { useEvent } from 'app/hooks/event'
import { HomeHeader } from 'app/components/home/header'
import { HomeEmpty } from 'app/components/home/empty'
import { usePostLikeEvent } from 'app/hooks/post'
import { useRouter } from 'solito/router'
import { AuthContext } from 'app/contexts/auth'
import { RefreshControl } from 'react-native'
import { HomeLoading } from 'app/components/home/loading'
import { usePlatform } from 'app/hooks/platform'
import { CreatePostCommentDialog } from 'app/components/core/comments/comment-dialog'

export function HomeScreen() {
  const router = useRouter()
  const { user } = useContext(AuthContext)
  const { isDesktop } = usePlatform()

  const [showCommentDialog, setShowCommentsDialog] = useState<{
    id: string | null
    show: boolean
  }>({
    id: null,
    show: false,
  })

  // Fetch posts
  const [{ data, fetching, error }, refetch] = usePostsQuery({
    requestPolicy: 'network-only',
  })

  // Sorting Posts
  const filteredPosts = useMemo(
    () =>
      data?.posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [data]
  )

  // Watching for new posts
  useEvent('home-posts-refresh', () => {
    refetch()
  })

  // Like event
  const { onLikePressed } = usePostLikeEvent()

  const [, removePost] = useRemovePostMutation()

  async function onRemoveButtonPressed(postId: string) {
    const { error } = await removePost({ id: postId })

    if (error) {
      console.log(error)
      return
    }
    refetch()
  }

  // Loading posts
  if (fetching) {
    return <HomeLoading />
  }

  return (
    <Column
      _dark={{ bg: '#0A0D14' }}
      maxW={800}
      _web={{ position: 'fixed' }}
      height="100%"
      width="100%"
    >
      {isDesktop && showCommentDialog.id && (
        <CreatePostCommentDialog
          id={showCommentDialog.id}
          isOpen={showCommentDialog.show}
          setIsOpen={(value) =>
            setShowCommentsDialog({ ...showCommentDialog, show: value })
          }
        />
      )}
      <FlatList
        style={{ marginBottom: 50}}
        showsVerticalScrollIndicator={false}
        data={filteredPosts}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty />}
        ItemSeparatorComponent={() => <Box h={2}></Box>}
        refreshControl={
          <RefreshControl
            progressBackgroundColor="#0A0D14"
            colors={['white']}
            refreshing={fetching}
            onRefresh={refetch}
          />
        }
        renderItem={({ item }: { item: any }) => (
          <PostCard
            key={item.id}
            username={user?.username ?? ''}
            {...item}
            onLikePressed={onLikePressed}
            onCommentPressed={(postId) => {
              if (isDesktop) {
                setShowCommentsDialog({
                  id: item.id,
                  show: true,
                })
              } else router.push('/post/' + postId)
            }}
            onRemoveButtonPressed={onRemoveButtonPressed}
          />
        )}
      />
    </Column>
  )
}
