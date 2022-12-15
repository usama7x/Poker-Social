import BackButton from 'app/components/core/buttons/back-button'
import { Column, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import { useRouter } from 'solito/router'

import SiteLogo from '../../../core/site-logo'

export function ForgotFormHeader() {
  const { back } = useRouter()
  return (
    <Column>
      <Column my={8} mb={16} safeAreaTop alignItems="center" space={8}>
        <SolitoLink href="/login">
          <SiteLogo />
        </SolitoLink>
      </Column>
      <BackButton onPress={() => back()} />
      <Column my={16} safeAreaTop alignItems="center" space={8}>
        <Text fontFamily="heading" fontSize="2xl">
          FORGOT PASSWORD
        </Text>
      </Column>
    </Column>
  )
}
