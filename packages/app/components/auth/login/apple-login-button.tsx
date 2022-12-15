import { Button, Row, Text } from 'native-base'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

type AppleLoginButtonProps = {
  onPress?: () => void
}

function AppleLoginButton({ onPress }: AppleLoginButtonProps) {
  return (
    <Button
      onPress={onPress}
      bg="white"
      _hover={{ bg: 'white' }}
      _pressed={{ bg: 'white' }}
      borderRadius={8}
    >
      <Row alignItems="center" space={2} p={1} px={2}>
        <FontAwesome5 name="apple" size={26} color="black" />
      </Row>
    </Button>
  )
}

export default AppleLoginButton
