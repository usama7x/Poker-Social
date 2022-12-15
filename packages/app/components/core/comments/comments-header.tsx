import { Box, Row, Text } from 'native-base'
import { useRouter } from 'solito/router'
import IconBackButton from '../buttons/icon-back-button'

export function CommentsHeader() {
  const { back } = useRouter()
  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      p={3}
      backgroundColor="#111623"
      borderBottomColor="black"
      borderBottomWidth="1"
    >
      <IconBackButton onPress={() => back()} />
      <Text fontSize={20} bold color="#3ABEFE">
        Comments
      </Text>

      <Box />
    </Row>
  )
}
