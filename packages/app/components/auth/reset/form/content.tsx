import {
  FormikConfirmmPassInputField,
  FormikNewPassInputField,
  FormikOtpInputField,
} from 'app/components/core/formik'
import { Column } from 'native-base'

export function ResetFormContent() {
  return (
    <Column>
      <FormikOtpInputField />
      <FormikNewPassInputField />
      <FormikConfirmmPassInputField />
    </Column>
  )
}
