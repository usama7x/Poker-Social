import { Column } from 'native-base';
import {
  FormikConfirmmPassInputField,
  FormikNewPassInputField,
  FormikPasswordInputField,
} from 'app/components/core/formik';

export function PasswordFormContent() {
  return (
    <Column mt={8} ml={8} mr={8}>
      <FormikPasswordInputField />
      <FormikNewPassInputField type="password"/>
      <FormikConfirmmPassInputField type="password"/>
    </Column>
  );
}
