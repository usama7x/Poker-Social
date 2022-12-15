import { Column, Text } from 'native-base'
import AllInput from '../all-input'

function PasswordAndSecurityContent() {
  return (
    <Column p={4}>
      <Text bold fontSize="lg" color="#3ABEFE" ml={4}>
        Change Password
      </Text>
      <AllInput />
    </Column>
  )
}

export default PasswordAndSecurityContent
