import { UserAvatar } from 'app/components/core/user-avatar'
import ProfileContent from 'app/components/profile/content'
import { useUserQuery } from 'app/generates'
import { useAuth } from 'app/hooks/auth'
import { Box, Button, Row, Text } from 'native-base'
import { useRouter } from 'solito/router';

export function LeftSideHeader() {
  const { user } = useAuth()
  const { push } = useRouter()

  const [{ data, error }] = useUserQuery({
    variables: {
      username: user?.username || '',
    },
    requestPolicy: 'network-only',
  })

  if (error) {
    return null
  }

  return (
    <Box borderBottomColor="black" borderBottomWidth={1} px={12} py={4}>
      <Row space={4}>
        <Button style={{ margin: 0, padding: 0 }} onPress={() => push('/'+ user?.username ?? '')} background="transparent">
          <UserAvatar width={60} height={60} url={data?.user.profileImage?.url} />
        </Button>
        <ProfileContent
          fullName={data?.user.name || ''}
          username={user?.username || ''}
        />
      </Row>
    </Box>
  )
}
