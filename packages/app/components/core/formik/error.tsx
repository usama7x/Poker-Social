import { ErrorMessage } from 'formik'
import { Text } from 'native-base'

type FormikErrorProps = {
  name: string
}

export function FormikError({ name }: FormikErrorProps) {
  return (
    <ErrorMessage name={name} component="div">
      {(msg) => <Text color="red.700">{msg}</Text>}
    </ErrorMessage>
  )
}
