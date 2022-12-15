import { Column, Row, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

import SignUpButton from '../signup-button'

type SignUpFormActionsProps = {
  isLoading?: boolean
  onPress?: () => void
}

export function SignUpFormActions(props: SignUpFormActionsProps) {
  return (
    <Column space={6}>
      <SignUpButton {...props} />
      <Row justifyContent="center" space={2}>
        <Text fontSize="lg" fontWeight="semibold">
          Already have an account ?
        </Text>
        <SolitoLink href="/login">
          <Text color="#3ABEFE" fontSize="lg" fontWeight="semibold">
            Sign in
          </Text>
        </SolitoLink>
      </Row>
    </Column>
  )
}
