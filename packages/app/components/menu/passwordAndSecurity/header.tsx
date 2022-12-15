import IconBackButton from 'app/components/core/buttons/icon-back-button'
import { Row, Text } from 'native-base'
import { useRouter } from 'solito/router'

function PasswordAndSecuirtyHeader() {
  const { back } = useRouter()
  return (
    <Row px={6} py={2} space={20} bg="#171E2F">
      <IconBackButton onPress={() => back()} />
      <Text bold color="#3ABEFE" fontSize="2xl">
        Password & Security
      </Text>
    </Row>
  )
}

export default PasswordAndSecuirtyHeader
