import { Button, Row, Text } from 'native-base'
import { useRouter } from 'solito/router'
import IconBackButton from '../../buttons/icon-back-button'

type CreatePostHeaderProps = {
  onPostCreate?: () => void
  isLoading?: boolean
}

export function CreatePostHeader({
  onPostCreate,
  isLoading,
}: CreatePostHeaderProps) {
  const { back } = useRouter()
  return (
    <Row justifyContent="space-between" alignItems="center" p={4}>
      <IconBackButton onPress={() => back()} />
      <Text pl={10} fontSize={20} bold color="#3ABEFE">
        Create Post
      </Text>
      <Button
        isLoading={isLoading}
        onPress={onPostCreate}
        size="lg"
        py="1"
        rounded="3xl"
        bg="brand.btn"
        _hover={{ bg: 'blue.500' }}
      >
        <Text px={4} bold>
          Post
        </Text>
      </Button>
    </Row>
  )
}
