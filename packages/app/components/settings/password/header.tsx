import { Box, Row, Text } from 'native-base'
import { useRouter } from 'solito/router'
import IconBackButton from 'app/components/core/buttons/icon-back-button'
import { usePlatform } from 'app/hooks/platform'

export function PasswordHeader() {
  const { back } = useRouter()
  const { isDesktop } = usePlatform()
  return (
    <Row
      justifyContent={isDesktop ? 'center' : 'space-between'}
      alignItems="center"
      p={3}
      h={100}
      backgroundColor="#1A2235"
      borderBottomColor="black"
      borderBottomWidth={10}
    >
      {!isDesktop ? <IconBackButton onPress={() => back()} /> : null}
      <Text fontSize={24} bold color="#3ABEFE">
        Password and Security
      </Text>

      <Box />
    </Row>
  )
}
