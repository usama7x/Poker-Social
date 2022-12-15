import { Button, Column, Row, Spacer, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import AppleLoginButton from '../apple-login-button'
import FacebookLoginButton from '../facebook-login-button'
import GoogleLoginButton from '../google-login-button'
import LoginButton from '../login-button'

type LoginFormActionsProps = {
  isLoading?: boolean
  onPress?: () => void
  onGooglePress?: () => void
  onFacebookPress?: () => void
}

export function LoginFormActions(props: LoginFormActionsProps) {
  const { onGooglePress, onFacebookPress } = props
  return (
    <Column space={12}>
      <LoginButton {...props} />

      <Row justifyContent="center" space={2}>
        <Text fontWeight="semibold" fontSize="lg">
          Don't have an account?
        </Text>
        <SolitoLink href="/signup">
          <Text color="#3ABEFE" fontWeight="semibold" fontSize="lg">
            Sign Up
          </Text>
        </SolitoLink>
      </Row>

      <Spacer h={8} />

      <Button.Group justifyContent="center" space={12}>
        <AppleLoginButton onPress={onFacebookPress} />
        <FacebookLoginButton onPress={onFacebookPress} />
        <GoogleLoginButton onPress={onGooglePress} />
      </Button.Group>
    </Column>
  )
}
