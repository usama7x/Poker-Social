import {
  FormikPhoneInputField,
  FormikEmailInputField,
} from 'app/components/core/formik'
import { Stack } from 'native-base'
type LoginFormContentProps = {
  isMobile: boolean
}

export function ForgotFormContent({ isMobile }: LoginFormContentProps) {
  return (
    <Stack>
      {!isMobile ? <FormikEmailInputField /> : <FormikPhoneInputField />}
    </Stack>
  )
}
