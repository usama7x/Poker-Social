import { Field, FieldProps } from 'formik'
import { Radio, Row } from 'native-base'
type FormikRadioButtonProps = {
  name: string
  placeholder?: string
  items: string[]
}

export function FormikRadioButton({
  name,
  items,
  placeholder = '',
}: FormikRadioButtonProps) {
  return (
    <Field>
      {({ form: { handleChange } }: FieldProps) => (
        <Radio.Group
          name="RadioButton"
          defaultValue={items[0]}
          accessibilityLabel={placeholder}
          onChange={handleChange(name)}
        >
          <Row width="100%" mt={4} space={8} justifyContent="space-between">
            {items.map((item) => (
              <Radio key={item} value={item} my={1} size="sm">
                {item}
              </Radio>
            ))}
          </Row>
        </Radio.Group>
      )}
    </Field>
  )
}
