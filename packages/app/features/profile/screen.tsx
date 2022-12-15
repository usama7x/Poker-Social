import SearchBar from 'app/components/core/searchbar'
import ProfileFriends from 'app/components/profile/friends-grid'
import ProfileHeader from 'app/components/profile/header'
import { PostCard } from 'app/components/core/post/card'
import { AuthContext } from 'app/contexts/auth'
import { useProfileQuery } from 'app/generates'
import { usePostLikeEvent } from 'app/hooks/post'
import { Box, Column, FlatList, Row, Spinner } from 'native-base'
import { useContext, useEffect, useMemo, useState } from 'react'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { usePlatform } from 'app/hooks/platform'

const { useParam } = createParam<{
  username: string
}>()

export function ProfileScreen({
  usernameParam,
  ...props
}: {
  usernameParam?: string
}) {
  const uid = (props as any)?.route?.params?.username

  const router = useRouter()
  const { isDesktop } = usePlatform()
  const [usernameQuery] = useParam('username')

  const username = useMemo(
    () => uid || usernameParam || usernameQuery,
    [usernameParam, usernameQuery, uid]
  )

  const { user } = useContext(AuthContext)

  const isUser = useMemo(() => user?.username === username, [username])

  const [{ data, fetching, error }] = useProfileQuery({
    variables: {
      username: username!,
    },
    requestPolicy: 'network-only',
  })

  // log all useProfileQuery data
  useEffect(() => {
    console.log('useProfileQuery data', data)
  }, [data])

  const { onLikePressed } = usePostLikeEvent()

  if (fetching) {
    return <Spinner size="lg" />
  }

  if (error) {
    return null
  }

  return (
    <Column flex={1} bg="#0A0D14" maxW="800">
      <FlatList
        ListHeaderComponent={
          <Column
            mb={2}
            key="list-header"
            flex={1}
            space={1}
            w="100%"
            maxW="800px"
            mx="auto"
            bg="#121724"
          >
            {isUser && !isDesktop && (
              <Row
                key="search-row"
                w="75%"
                maxW="400px"
                mx="auto"
                space={5}
                alignSelf="center"
                mt="2"
                mb="1"
              >
                <SearchBar key="search-bar" />
              </Row>
            )}
            <ProfileHeader
              key={`profile-header-${data!.user!.username}-${isUser}`}
              isUser={isUser}
              userId={data?.user?.id ?? ''}
              fullName={`${data?.user.firstName} ${data?.user.lastName}`}
              username={data!.user.username}
              profileImage={data!.user.profileImage}
              coverImage={data!.user.coverImage}
            />
            <ProfileFriends
              username={data?.user?.username || ''}
              friends={data?.friendsByUsername.map((x) => x.friend) ?? []}
              key="profile-friends"
            />
          </Column>
        }
        data={data?.postsByUsername}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box h={2}></Box>}
        renderItem={({ item }: { item: any }) => (
          <PostCard
            key={item.id + item.isLiked}
            {...item}
            onLikePressed={onLikePressed}
            onCommentPressed={(postId) => router.push('/post/' + postId)}
          />
        )}
      />
    </Column>
  )
}
