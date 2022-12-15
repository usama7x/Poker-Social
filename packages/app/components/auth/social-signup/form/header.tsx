import { Column, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

import SiteLogo from '../../../core/site-logo'

export function SocialSignUpFormHeader() {
  return (
    <Column my={8} safeAreaTop alignItems="center" space={8}>
      <SolitoLink href="/login">
        <SiteLogo />
      </SolitoLink>
      <Text  color="white" fontSize="xl" bold>
        Sign Up
      </Text>
    </Column>
  )
}
