import { Column, Text } from 'native-base'
import { FormikRadioButton } from './radio-button-input'

export function FormikGenderInputField() {
  return (
    <Column p={2} mb={4}>
      <Text color="#556080" bold>
        Gender
      </Text>
      <FormikRadioButton
        name="gender"
        items={['Male', 'Female', 'Other']}
        placeholder="Select Gender"
      />
    </Column>
  )
}
