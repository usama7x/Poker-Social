import {
  FormikEmailInputField,
  FormikPasswordInputField,
} from 'app/components/core/formik'
import { Text, Column, Spacer } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

export function LoginFormContent() {
  return (
    <Column>
      <FormikEmailInputField />
      <Spacer h={6} />
      <FormikPasswordInputField />
      <SolitoLink href="/forgot">
        <Text fontWeight="semibold">Forgot Password?</Text>
      </SolitoLink>
    </Column>
  )
}
