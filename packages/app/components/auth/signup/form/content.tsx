import {
  FormikAgeInputField,
  FormikFullnameInputField,
  FormikUsernameInputField,
  FormikGenderInputField,
  FormikEmailInputField,
  FormikPasswordInputField,
} from 'app/components/core/formik'
import { Column, Text } from 'native-base'

export function SignUpFormContent() {
  return (
    <Column>
      <Column space={4}>
        <FormikFullnameInputField />
        <FormikUsernameInputField />
        <FormikAgeInputField />
        <FormikGenderInputField />
        <FormikEmailInputField />
        <FormikPasswordInputField />
      </Column>
      <Text color="#A5AFCE" fontSize="xs" textAlign="right">
        Password should be minimum eight characters.
      </Text>
    </Column>
  )
}
