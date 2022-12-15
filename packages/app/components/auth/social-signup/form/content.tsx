import { FormikUsernameInputField } from 'app/components/core/formik'
import { Column } from 'native-base'
import { FormikAgeInputField } from './../../../core/formik/age-input-field'
import { FormikGenderInputField } from './../../../core/formik/gender-input-field'

export function SocialSignUpFormContent() {
  return (
    <Column space={47}>
      <FormikUsernameInputField />
      <FormikAgeInputField />
      <FormikGenderInputField />
    </Column>
  )
}
