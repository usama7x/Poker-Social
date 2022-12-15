import { Button, Row, Text } from 'native-base'
import AntDesign from '@expo/vector-icons/AntDesign'

type GoogleLoginButtonProps = {
  onPress?: () => void
}

function GoogleLoginButton({ onPress }: GoogleLoginButtonProps) {
  return (
    <Button
      onPress={onPress}
      bg="brand.googleBtn"
      _hover={{ bg: 'brand.googleBtn' }}
      _pressed={{ bg: 'brand.googleBtn' }}
      borderRadius={8}
    >
      <Row alignItems="center" space={2} py={1} px={2}>
        <AntDesign name="google" size={24} color="white" />
      </Row>
    </Button>
  )
}

export default GoogleLoginButton
