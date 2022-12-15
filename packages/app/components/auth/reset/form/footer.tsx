import { Center, Row, Text } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

export function ResetFormFooter() {
  return (
    <Center>
      <Row>
        <Text fontSize={12}>By creating an acount you accept our </Text>

        <SolitoLink href="/terms">
          <Text color="#3ABEFE" fontSize={12}>
            Terms & Conditions
          </Text>
        </SolitoLink>
      </Row>
    </Center>
  )
}
