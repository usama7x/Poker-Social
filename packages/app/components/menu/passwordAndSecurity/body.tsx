import { Column, Row, Text } from 'native-base'
import KeyIcons from './icons'
import InputField from './input-field'
type InputProps = {
  name?: string
  placeholder?: string
}

function PasswordInputField({ name, placeholder }: InputProps) {
  return (
    <Column w="85%" p={2} mt={5}>
      <Text bold ml={10} pl={4} color="#2E92C4" mb={1}>
        {name}
      </Text>
      <Row space={2}>
        <KeyIcons />
        <InputField placeholder={placeholder} />
      </Row>
    </Column>
  )
}

export default PasswordInputField
