import Entypo from '@expo/vector-icons/Entypo'
import { Pressable, Row, Spacer, Text } from 'native-base'
import { useRouter } from 'solito/router'

function PasswordSecurityBtn() {
  const { push } = useRouter()
  return (
    <Row
      borderLeftRadius={50}
      borderRightRadius={50}
      borderWidth={10}
      bg="black"
      px={2}
      mr={8}
    >
      <Pressable width="full" onPress={() => push('/settings/password')}>
        <Row>
          <Text bold color="#34A8E1" fontSize="23">
            Password & Security
          </Text>
          <Spacer />
          <Entypo name="chevron-small-right" size={30} color="#34A8E1" />
        </Row>
      </Pressable>
    </Row>
  )
}

export default PasswordSecurityBtn
