import { Column, Text, Row } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import SiteLogo from '../../../core/site-logo'
import { useRouter } from 'solito/router'
import BackButton from 'app/components/core/buttons/back-button'

export function ResetFormHeader() {
  const { back } = useRouter()
  return (
    <Column mt={8} safeAreaTop alignItems="center">
      <SolitoLink href="/login">
        <SiteLogo />
      </SolitoLink>
      <Row width="100%" py={8} pl={5}>
        <BackButton onPress={() => back()} />
      </Row>
      <Text color="white" fontSize="24">
        RESET PASSWORD
      </Text>
    </Column>
  )
}
